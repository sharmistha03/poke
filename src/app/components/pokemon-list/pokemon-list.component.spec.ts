import { PokemonComponent } from './../pokemon/pokemon.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonListComponent } from './pokemon-list.component';
import { SpinnerComponent } from '../../shared/components/spinner/spinner.component';

describe('PokemonListComponent', () => {
    let component: PokemonListComponent;
    let fixture: ComponentFixture<PokemonListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                PokemonListComponent,
                SpinnerComponent,
                PokemonComponent
            ],
            imports: [
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PokemonListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
