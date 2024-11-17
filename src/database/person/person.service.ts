import { Injectable } from "@nestjs/common";
import { CreatePersonDto } from "./dto/create-person.dto";
import { Person } from "./entities/person.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm/repository/Repository";

@Injectable()
export class PersonService {

    constructor(
        @InjectRepository(Person) private readonly personRepository: Repository<Person>,
    ) {}

    createPerson(createPersonDto: CreatePersonDto) {
        const person: Person = new Person()
        person.name = createPersonDto.name
        person.surname = createPersonDto.surname
        person.email = createPersonDto.email
        person.description = createPersonDto.description
        person.gender = createPersonDto.gender

        return this.personRepository.save(person);
    }
}