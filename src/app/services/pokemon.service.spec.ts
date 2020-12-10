import { environment } from './../../environments/environment';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule, HttpClient, HttpRequest, HttpParams } from '@angular/common/http';
import { TestBed, inject, async } from '@angular/core/testing';

import { PokemonService } from './pokemon.service';

describe('PokemonService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [PokemonService],
            imports: [
                HttpClientModule,
                HttpClientTestingModule
            ]
        });
    });

    afterEach(inject([HttpTestingController], (backend: HttpTestingController) => {
        backend.verify();
    }));

    it('should be created', inject([PokemonService], (service: PokemonService) => {
        expect(service).toBeTruthy();
    }));

    it(`should send an expected login request`, async(inject([PokemonService, HttpTestingController],
        (service: PokemonService, backend: HttpTestingController) => {
            service.listPokemons(10).subscribe();

            const urlPoke = environment.pokemonServiceBaseUrl + '?limit=10';

            backend.expectOne((req: HttpRequest<any>) => {
                const body = new HttpParams({ fromString: req.body });
                return req.url === urlPoke
                    && req.method === 'GET'
;
            }, `GET to Pokemon with limit`);
        })));

});

