// untuk menyimpan data dari request  (body)

import { IsEmail, IsNotEmpty } from 'class-validator'
export class CreateUserDto {
    @IsNotEmpty()
    firstName: string;
    
    @IsNotEmpty()
    lastName: string;

    @IsEmail()
    email: string;

    isActive: boolean;
}