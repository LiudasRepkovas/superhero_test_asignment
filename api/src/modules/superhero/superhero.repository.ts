import {Superhero, SuperheroCreateParams} from "./superhero";
import { v4 as uuidv4 } from 'uuid';


export class SuperheroRepository {

    // TODO: use a real database
    private superheroes: Superhero[] = [];

    constructor() {
        this.superheroes = [];
    }

    // TODO: add support for sorting by fields
    // TODO: add support for filtering by fields
    findAll(): Superhero[] {
        return this.superheroes
    }

    create(params: SuperheroCreateParams): Superhero {
        const newHero = {
            id: uuidv4(),
            ...params,
            createdAt: new Date()
        }

        // TODO: remove this sort when proper database or sorting by more than one field on find is implemented and it no longer makes sense to pre sort whole list
        this.superheroes = [...this.superheroes, newHero].sort((a, b) => a.humility > b.humility ? 1 : -1);
        return newHero;
    }
}