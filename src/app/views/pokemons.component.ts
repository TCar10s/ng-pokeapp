import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/services/interfaces/pokemon';
import { PokeApiService } from 'src/app/services/pokemon.service';

@Component({
  template: `
    <div class="card-pokemon">
      <app-pokemon [pokemon]="pokemon"/>

      <p-button
        icon="pi pi-refresh"
        styleClass="p-button-rounded p-button-outlined"
        class="fixed top-0 right-0 p-3"
        (click)="getRadomPokemon()"
       ></p-button>
    </div>
  `,
  styles: [
    `
      .card-pokemon {
        display: grid;
        height: 100vh;
        place-content: center;
        padding: 1rem;
      }
    `,
  ],
})
export class PokemonsComponent implements OnInit {
  pokemon: Pokemon = {
    name: '',
    id: 0,
    abilities: [],
    weight: '',
    height: '',
    picture: '	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/564.svg',
    moves: '',
    description: '',
    stats: {
      hp: 0,
      attack: 0,
      defense: 0,
      speed: 0,
    },
  };

  constructor(private pokeApiService: PokeApiService) {}

  ngOnInit(): void {
    this.getRadomPokemon();
  }

  getRadomPokemon() {
    const id = Math.floor(Math.random() * 1009) + 1;
    this.pokeApiService.getPokemon(id).subscribe((pokemon) => {
      this.pokemon = pokemon;
    });
  }
}
