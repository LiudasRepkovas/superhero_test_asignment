import { Module } from '@nestjs/common';
import {SuperheroRepository} from "./superhero.repository";
import {SuperheroService} from "./superhero.service";
import {SuperheroController} from "./superhero.controller";

@Module({
    imports: [],
    controllers: [SuperheroController],
    providers: [SuperheroRepository, SuperheroService],
})
export class SuperheroModule {}
