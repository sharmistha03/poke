import { Pokemon } from './pokemon';

export interface Pokemons {
    count: number;
    previous: string;
    results: Pokemon[];
    next: string;
}
