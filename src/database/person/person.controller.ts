import {
    Controller,
    Get,
    Put,
    Body,
    Param,
    ParseIntPipe,
    Patch,
  } from '@nestjs/common';
import { PersonService } from "./person.service";
import { CreatePersonDto } from './dto/create-person.dto';

@Controller('person')
export class PersonController {
    constructor(private readonly personService: PersonService) {}

    @Put()
    createPerson(@Body() createPersonDto: CreatePersonDto) {
        return this.personService.createPerson(createPersonDto)
    }

    @Get()
    findMany() {
        return this.personService.findMany()
    }

    @Get('/:id') 
    findById(@Param('id', ParseIntPipe) id: number) {
        return this.personService.getById(id)
    }

    @Patch('/:id')
    patchById(@Param('id', ParseIntPipe) id: number, @Body() dataToPatch) {
        return this.personService.patchById(id, dataToPatch)
    }
}