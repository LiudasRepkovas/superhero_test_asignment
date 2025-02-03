import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import {SPECIAL_OK_STRING} from "./app.constants";

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it(`should return ${SPECIAL_OK_STRING}`, () => {
      expect(appController.healthCheck()).toBe(SPECIAL_OK_STRING);
    });
  });
});
