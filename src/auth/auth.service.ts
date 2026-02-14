import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
        private jwtService: JwtService,
    ) {}

    async register(email: string, password: string) {
        const hashedPassword = await bcrypt.hash(password, 10)
        
        const user = this.userRepository.create({
            email, 
            password: hashedPassword,
        })
    
        return this.userRepository.save(user);
    }

    async login(email: string, password: string) {
        const user = await this.userRepository.findOneBy({ email });

        if (!user){
            throw new UnauthorizedException('Usuáirio não cadastrado.');
        } else if (!(await bcrypt.compare(password, user.password))){
            throw new UnauthorizedException('Senha incorreta!')
        }

        const payload = { sub: user.id, eamil: user.email };

        return{
            access_token: this.jwtService.sign(payload)
        };
    }

}
