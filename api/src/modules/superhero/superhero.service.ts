import {Inject, Injectable} from "@nestjs/common";
import {SuperheroRepository} from "./superhero.repository";
import {Superhero, SuperheroCreateParams} from "./superhero";

@Injectable()
export class SuperheroService {
    constructor(
        @Inject(SuperheroRepository) private readonly superheroRepository: SuperheroRepository
    ) {}

    findAll() {
        return this.superheroRepository.findAll();
    }

    create(params: SuperheroCreateParams): Superhero {
        return this.superheroRepository.create(params);
    }
}