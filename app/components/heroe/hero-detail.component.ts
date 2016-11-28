import { Component, Input } from '@angular/core';
import { Hero } from '../model/IHeroe';

@Component({
    selector: 'my-hero-detail'
})
export class HeroDetailComponent {
    @Input()
    hero: Hero;
}
