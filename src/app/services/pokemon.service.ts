import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokemons } from '../model/pokemons';
import { Pokemon } from '../model/pokemon';

@Injectable({
    providedIn: 'root'
})
export class PokemonService {

    urlPokemonBase: string = environment.pokemonServiceBaseUrl;

    constructor(private http: HttpClient) { }

    /**
     * Find all pokemons, specify a limit fetch the records from the API
     * @param recordLimit Record Limit
     */
    listPokemons(recordLimit: number): Observable<Pokemons> {
        const urlPokemons: string = this.urlPokemonBase + '?limit=' + recordLimit;

        return this.http
            .get<Pokemons>(urlPokemons);
    }

    /**
     * Find one pokemon with its number
     * @param pokeNumber Pokemon Number
     */
    findOnePokemon(pokeNumber: number): Observable<Pokemon> {
        const urlPokemons: string = this.urlPokemonBase + '/' + pokeNumber;

        return this.http
            .get<Pokemon>(urlPokemons);
    }
}
