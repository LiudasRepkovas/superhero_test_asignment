import { Controller, Get } from '@nestjs/common';
import { SPECIAL_OK_STRING } from "./app.constants";

@Controller()
export class AppController {
  constructor() {}

  @Get()
  healthCheck(): string {
    return SPECIAL_OK_STRING;
  }
}
