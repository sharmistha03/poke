import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from '../../model/pokemon';

@Component({
    selector: 'app-pokemon',
    templateUrl: './pokemon.component.html',
    styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

    @Input() pokemon: Pokemon;

    constructor() { }

    ngOnInit() {
        if (null == this.pokemon) {
            throw new Error('Attribute pokemon is required');
        }
    }

}
