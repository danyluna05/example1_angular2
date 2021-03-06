import { Component } from '@angular/core';
import { Hero } from '../model/IHeroe';


@Component({
    selector: 'main-app',
    templateUrl: 'app/components/heroe/heroeTemplate.html',
    styleUrls  : ['app/components/heroe/heroe.css']
})
export class AppComponent {
  heroes: Hero[] = [
            { id: 11, name: 'Mr. Nice' },
            { id: 12, name: 'Narco' },
            { id: 13, name: 'Bombasto' },
            { id: 14, name: 'Celeritas' },
            { id: 15, name: 'Magneta' },
            { id: 16, name: 'RubberMan' },
            { id: 17, name: 'Dynama' },
            { id: 18, name: 'Dr IQ' },
            { id: 19, name: 'Magma' },
            { id: 20, name: 'Tornado' }
        ];

    selectedHero: Hero;    
    title = 'Tour of Heroes';
    hero: Hero = {id:1, name:'Windstorm'};


    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }    
}