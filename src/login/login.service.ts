import { Injectable } from '@nestjs/common';
import { LoginDto } from './dto/login. dto';

@Injectable()
export class LoginService {
  login(loginDto: LoginDto): boolean {
    if (loginDto.username === 'admin' && loginDto.password === '888888') {
      return true;
    }
    return false;
  }
}
