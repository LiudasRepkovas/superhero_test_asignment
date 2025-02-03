import {Body, Controller, Get, Inject, Post} from '@nestjs/common';
import {Superhero, SuperheroCreateDto} from "./superhero";
import {SuperheroService} from "./superhero.service";
import {SUPERHERO_ROUTE} from "./superhero.constants";


// TODO: add openapi decorators to document routes of the controller. (Response, Request, Body, etc)
@Controller(SUPERHERO_ROUTE)
export class SuperheroController {
    constructor(
        @Inject(SuperheroService) private service: SuperheroService
    ) {}

    // TODO: map return type to SuperheroListDto to prevent leaking internal data and reduce data sent to client
    // TODO: add support for pagination sorting and filtering
    @Get()
    findAll(): Superhero[] {
        return this.service.findAll();
    }

    // TODO: map return type to SuperheroListDto to prevent leaking internal data and reduce data sent to client
    @Post()
    create(@Body() body: SuperheroCreateDto ): Superhero {
        return this.service.create(body);
    }
}
