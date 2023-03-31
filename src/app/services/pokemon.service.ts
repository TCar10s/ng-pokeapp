import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { map, mergeMap } from 'rxjs/operators';
import { environment } from 'src/envinronments/envinronment';
import {
  BasePokemon,
  BaseStat,
  Pokemon,
  Sprites,
  Stat,
} from './interfaces/pokemon';

@Injectable({ providedIn: 'root' })
export class PokeApiService {
  private http = inject(HttpClient);

  getPokemon(id: number) {
    return this.http
      .get<BasePokemon>(`${environment.API_URL}/pokemon/${id}`)
      .pipe(
        map((response) => {
          const pokemon: Pokemon = {
            id: response.id,
            name: response.name,
            picture: this.getImage(response.sprites),
            height: `${response.height} m`,
            weight: `${response.weight} kg`,
            moves: response.moves
              .slice(0, 1)
              .map(({ move }) => move.name)
              .join(', '),
            stats: this.adaptStats(response.stats),
            description: '',
            abilities: response.abilities.map(({ ability }) => ability.name),
          };

          return pokemon;
        }),
        mergeMap((pokemon) => {
          return this.getPokemonDescription(id).pipe(
            map((description) => {
              pokemon.description = description;
              return pokemon;
            })
          );
        })
      );
  }

  adaptStats(stats: BaseStat[]) {
    const adaptedStats: Stat = {
      hp: this.findStatByName('hp', stats),
      attack: this.findStatByName('attack', stats),
      defense: this.findStatByName('defense', stats),
      speed: this.findStatByName('speed', stats),
    };

    return adaptedStats;
  }

  findStatByName(name: string, stats: BaseStat[]) {
    const stat = stats.find((stat) => stat.stat.name === name)?.base_stat ?? 0;
    return Math.round((stat / 255) * 100);
  }

  getPokemonDescription(id: number) {
    return this.http.get(`${environment.API_URL}/pokemon-species/${id}`).pipe(
      map((response: any) => {
        return response.flavor_text_entries.find(
          (entry: any) => entry.language.name === 'es'
        ).flavor_text;
      })
    );
  }

  getImage(sprites: Sprites) {
    const { other } = sprites;
    return other?.dream_world.front_default ?? other?.home.front_default ?? '';
  }
}
