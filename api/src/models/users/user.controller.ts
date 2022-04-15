import { Body, Controller, Post } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
    constructor(
        private userService: UserService
    ) {}

    @Post()
    create(@Body() createUserDto: CreateUserDto): Observable<boolean> {
        return of(true);
    }
}
