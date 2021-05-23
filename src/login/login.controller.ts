import { Controller, Post, Body, Res, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { LoginService } from './login.service';
import { LoginDto } from './dto/login. dto';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post()
  login(@Body() loginDto: LoginDto, @Res() res: Response): void {
    if (this.loginService.login(loginDto)) {
      res.status(HttpStatus.OK).json({});
    } else {
      res.status(HttpStatus.OK).json({
        error: 'LOGIN.000001',
        message: 'Login failed',
      });
    }
  }
}
