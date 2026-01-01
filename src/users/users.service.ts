import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDTO } from './CreateUserDTO/create-user-dto';
import { SignupRes } from './user';
import * as bcrypt from 'bcryptjs';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {} // for prisma client
  async signup(payload: CreateUserDTO): Promise<SignupRes> {
    const existentUser = await this.prisma.user.findFirst({
      where: {
        email: payload.email,
      },
    });
    if (existentUser) {
      throw new BadRequestException('user already exist with this email', {
        cause: new Error(),
        description: 'user already exist',
      });
    }
    const hash = await this.encryptPassword(payload.password, 10);
    payload.password = hash;

    const newUser = await this.prisma.user.create({
      data: {
        firstname: payload.firstname,
        lastname: payload.lastname,
        email: payload.email,
        password: payload.password,
      },
    });

    return {
      id: newUser.id,
      email: newUser.email,
    };
  }

  async encryptPassword(plainText: string, saltRound: number) {
    return bcrypt.hash(plainText, saltRound);
  }
}
