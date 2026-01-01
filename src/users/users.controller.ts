import { Body, Controller, Get, Post, ValidationPipe } from '@nestjs/common';
import { CreateUserDTO } from './CreateUserDTO/create-user-dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly UsersService: UsersService) {}
  @Post('/signup')
  create(@Body() createUserDTO: CreateUserDTO) {
    return this.UsersService.signup(createUserDTO);
  }
}
