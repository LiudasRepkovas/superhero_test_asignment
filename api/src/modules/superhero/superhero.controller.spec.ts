import {Test, TestingModule} from '@nestjs/testing';
import {SuperheroController} from "./superhero.controller";
import {SuperheroModule} from "./superhero.module";
import {SuperheroCreateDto} from "./superhero";
import {ArgumentMetadata, BadRequestException, ValidationPipe} from "@nestjs/common";
import {HUMILITY_VALIDATION_ERROR, NAME_VALIDATION_ERROR} from "./superhero.constants";

const SUPERMAN: SuperheroCreateDto = {
    name: 'Superman',
    superpower: 'hes like really strong',
    humility: 10
}
const BATMAN: SuperheroCreateDto = {
    name: 'Batman',
    superpower: 'hes like really dark',
    humility: 1
}

describe('SuperheroController', () => {
    let controller: SuperheroController;

    beforeEach(async () => {
        const app: TestingModule = await Test.createTestingModule({
            imports: [SuperheroModule],
        }).compile();

        controller = app.get<SuperheroController>(SuperheroController);
    });

    describe('create', () => {
        it('should create and return a superhero', () => {
            const created = controller.create(SUPERMAN);
            expect(created.name).toEqual(SUPERMAN.name);
            expect(created.superpower).toEqual(SUPERMAN.superpower);
            expect(created.humility).toEqual(SUPERMAN.humility);
            expect(created.id).toBeDefined();
            expect(new Date(created.createdAt)).toBeInstanceOf(Date);
        });
    })

    describe('get', () => {
        it('should return empty list when empty', () => {
            expect(controller.findAll()).toEqual([]);
        });
        it('should return a list of superheroes', () => {
            controller.create(SUPERMAN);
            const heroes = controller.findAll();
            expect(heroes.length).toEqual(1);
            expect(heroes[0].name).toEqual(SUPERMAN.name);
        });
        it('should sort superheroes by humility', () => {
            controller.create(SUPERMAN);
            controller.create(BATMAN);
            const heroes = controller.findAll();
            expect(heroes).toHaveLength(2);
            expect(heroes[0].name).toEqual(BATMAN.name);
            expect(heroes[1].name).toEqual(SUPERMAN.name);
        })
    })

    describe('DTO', () => {
        let target: ValidationPipe = new ValidationPipe({ transform: true, whitelist: true });
        const metadata: ArgumentMetadata = {
            type: 'body',
            metatype: SuperheroCreateDto,
            data: ''
        };
        it('should throw an error when creating a superhero with humility above 10', async () => {
            const body = {name: 'humblman', superpower: 'too huble', humility: 11};
            await expect(target.transform(body, metadata)).rejects.toThrow(BadRequestException).catch(
                e => expect(e.message).toContain(HUMILITY_VALIDATION_ERROR)
            );
        })
        it('should throw an error when creating a superhero with humility below 10', async () => {
            const body = {name: 'humblman', superpower: 'too huble', humility: -1};
            await expect(target.transform(body, metadata)).rejects.toThrow(BadRequestException).catch(
                e => expect(e.message).toContain(HUMILITY_VALIDATION_ERROR)
            );
        })
        it('should throw an error when creating a superhero with non integer humility', async () => {
            const body = {name: 'humblman', superpower: 'too huble', humility: 1.5};
            await expect(target.transform(body, metadata)).rejects.toThrow(BadRequestException).catch(
                e => expect(e.message).toContain(HUMILITY_VALIDATION_ERROR)
            );
        })
        it('should throw an error when creating a superhero with no name', async () => {
            const body = {superpower: 'cant be named', humility: 8};
            await expect(target.transform(body, metadata)).rejects.toThrow(BadRequestException).catch(
                e => expect(e.message).toContain(NAME_VALIDATION_ERROR)
            );
        })
        it('should throw an error when creating a superhero with empty name', async () => {
            const body = {name: '', superpower: 'invisible name', humility: 8};
            await expect(target.transform(body, metadata)).rejects.toThrow(BadRequestException).catch(
                e => expect(e.message).toContain(NAME_VALIDATION_ERROR)
            );
        })

        it('should throw an error when creating a superhero with no superpower', async () => {
            const body = {name: 'superman', humility: 10};
            await expect(target.transform(body, metadata)).rejects.toThrow(BadRequestException).catch(
                e => expect(e.message).toContain('superpower')
            );
        });

        it('should throw an error when creating a superhero with empty superpower', async () => {
            const body = {name: 'superman', superpower: '', humility: 10};
            await expect(target.transform(body, metadata)).rejects.toThrow(BadRequestException).catch(
                e => expect(e.message).toContain('superpower')
            );
        });
    })

});

