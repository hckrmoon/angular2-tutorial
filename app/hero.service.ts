/**
 * Created by hckrmoon on 2016. 10. 6..
 */

import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {
	getHeroes(): Promise<Hero[]> {
		return Promise.resolve(HEROES);
	}
}
