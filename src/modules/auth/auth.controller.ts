import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly usersService: AuthService) {}

  @Post()
  register(@Body() createUserDto) {
    return 'Hello world';
  }
}
