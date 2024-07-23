import { IsOptionalString } from 'src/utils/CommonDecors';

export class UpdateUserDto {
    @IsOptionalString()
    name?: string;

    @IsOptionalString()
    surname?: string;

    @IsOptionalString()
    description?: string;

    @IsOptionalString()
    proffession?: string;

    @IsOptionalString()
    phone?: string;

    @IsOptionalString()
    email?: string;

    @IsOptionalString()
    photo?: string;
}