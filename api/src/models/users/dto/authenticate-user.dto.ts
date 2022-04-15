import { IsEmail, IsNotEmpty } from "class-validator";

export class AuthenticateUserDto {
    @IsEmail()
    email: string;
    @IsNotEmpty()
    password: string;
}