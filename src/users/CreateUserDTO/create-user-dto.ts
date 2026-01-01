import { IsEmail, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateUserDTO {
  @IsOptional()
  firstname?: string;
  @IsOptional()
  lastname?: string;
  @IsEmail()
  @IsNotEmpty()
  email: string;
  @IsNotEmpty()
  password: string;
}
