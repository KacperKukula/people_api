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

    async findMany() {
        const count = await this.personRepository.count()

        return this.personRepository
            .createQueryBuilder('entity')
            .orderBy('RANDOM()')
            .limit(Math.min(count, 1000))
            .getMany();
    }

    getById(id: number) {
        return this.personRepository.findOneBy({ id })
    }

    patchById(id: number, dataToPatch) {
        return this.personRepository.update(id, dataToPatch)
    }
}