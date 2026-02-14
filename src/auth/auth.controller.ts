import { AuthService } from './auth.service';
import { Body, Controller, Post } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
    constructor(private authservice: AuthService) {}

    @Post('register')
    register(@Body() registerDto: RegisterDto){
        return this.authservice.register(
            registerDto.email,
            registerDto.password
        );    
    }

    @Post('login')
    login(@Body() loginDto: LoginDto){
        return this.authservice.login(
            loginDto.email,
            loginDto.password
        );
    }

}
