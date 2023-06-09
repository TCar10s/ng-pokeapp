import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from 'src/app/services/interfaces/pokemon';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss'],
})
export class PokemonComponent implements OnInit {
  @Input() pokemon!: Pokemon;

  constructor() {}

  ngOnInit(): void {}
}
