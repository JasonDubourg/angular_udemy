import { POKEMONS } from './mock-pokemons';
import { Pokemon } from './pokemon';

import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'pokemon-app',
  templateUrl: `./app/app.component.html`
})
export class AppComponent implements OnInit { 
  
  private pokemons: Pokemon[];
  private title: String = "Liste des pokémons";
  private value: String = "";
  
  ngOnInit(){
    this.pokemons = POKEMONS;
  }

  onClick(){
    console.log("Clic...!");
  }

  onKey(value: String){
    this.value = 'Bonjour ' + value;
  }

  selectPokemon(pokemon: Pokemon){
    alert("Vous avez cliqué sur " + pokemon.name);
  }
}