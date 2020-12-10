import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { SpinnerComponent } from './shared/components/spinner/spinner.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';

@NgModule({
    declarations: [
        AppComponent,
        PokemonListComponent,
        PokemonComponent,
        SpinnerComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        PaginationModule.forRoot()
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
