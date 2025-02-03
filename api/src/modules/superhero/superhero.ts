import {IsInt, IsNotEmpty, IsString, Max, Min} from "class-validator";
import {HUMILITY_VALIDATION_ERROR, NAME_VALIDATION_ERROR, SUPERPOWER_VALIDATION_ERROR} from "./superhero.constants";

// TODO: create a leaner SuperheroListItemDto to reduce data sent to client
export interface Superhero {
    id: string;
    name: string;
    superpower: string;
    humility: number;
    createdAt: Date;
}

// TODO: add separate validation messages for each rule
// TODO: add openapi decorators (ApiProperty)
export class SuperheroCreateDto {
    @IsString({message: NAME_VALIDATION_ERROR,})
    @IsNotEmpty({message: NAME_VALIDATION_ERROR,})
    name: string;

    @IsString({message: SUPERPOWER_VALIDATION_ERROR})
    @IsNotEmpty({message: SUPERPOWER_VALIDATION_ERROR})
    superpower: string;

    @IsInt({message: HUMILITY_VALIDATION_ERROR})
    @Min(1, {message: HUMILITY_VALIDATION_ERROR})
    @Max(10, {message: HUMILITY_VALIDATION_ERROR})
    humility: number;
}

export interface SuperheroCreateParams {
    name: string;
    superpower: string;
    humility: number;
}

