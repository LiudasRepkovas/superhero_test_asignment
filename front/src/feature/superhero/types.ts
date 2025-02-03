export interface SuperheroDto {
    id: string;
    name: string;
    superpower: string;
    humility: number;
    createdAt: string;
}

export interface CreateSuperheroDto {
    name: string;
    superpower: string;
    humility: number;
}

export interface ApiError {
    message: string[];
}

export const SUPERHERO_TAG = 'Superhero';