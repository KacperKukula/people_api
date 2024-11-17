import {
    IsEmail,
    IsEnum,
    IsNotEmpty,
    IsOptional,
    IsString,
    MinLength,
  } from 'class-validator';
  
  export class CreatePersonDto {
    @IsNotEmpty()
    @IsString()
    @MinLength(3, { message: 'Name must have atleast 2 characters.' })
    name: string;
  
    @IsNotEmpty()
    @MinLength(3, { message: 'Surname must have atleast 3 characters.' })
    surname: string;

    @IsOptional()
    @IsEmail(null, { message: 'Please provide valid Email.' })
    email: string;

    @IsNotEmpty()
    @IsString()
    description: string
  
    @IsNotEmpty()
    @IsString()
    @IsEnum(['f', 'm', 'u'])
    gender: string;
}