import {
    Controller,
    Get,
    Post,
    Body,
  } from '@nestjs/common';
import { PersonService } from "./person.service";
import { CreatePersonDto } from './dto/create-person.dto';

@Controller('person')
export class PersonController {
    constructor(private readonly personService: PersonService) {}

    @Post()
    createPerson(@Body() createPersonDto: CreatePersonDto) {
        return this.personService.createPerson(createPersonDto)
    }
}