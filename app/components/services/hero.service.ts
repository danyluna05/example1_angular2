import { Injectable } from '@angular/core';
import { Hero } from '../model/IHeroe';
import { HEROES } from '../mocks/mock-heroes';

@Injectable()
export class HeroService {
    getHeroes(): Promise<Hero[]> {
        return Promise.resolve(HEROES);
    }
}