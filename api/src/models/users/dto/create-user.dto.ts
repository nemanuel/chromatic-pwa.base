import { IsNotEmpty, IsString } from "class-validator";
import { AuthenticateUserDto } from "./authenticate-user.dto";

export class CreateUserDto extends AuthenticateUserDto {
    @IsString()
    @IsNotEmpty()
    username: string;

}