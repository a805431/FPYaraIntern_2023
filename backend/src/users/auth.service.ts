import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { UsersService } from './users.service';
import { randomBytes, scrypt as _scrypt } from 'crypto';
import { promisify } from 'util';

//makes scrypt use promises instead of callbacks
const scrypt = promisify(_scrypt);

@Injectable()
export class AuthService {
    constructor(private usersService: UsersService) {

    }

    async signup(email: string, password: string) {
        //validate email as in see if it already is in use/exist in the Db
        const users = await this.usersService.find(email);
        if (users.length) {
            throw new BadRequestException("Email already in use.");
        }
        //Hash user's password
        //Generate a salt
        const salt = randomBytes(8).toString('hex');

        //Hash the salt and the password together
        const hash = (await scrypt(password, salt, 32)) as Buffer;

        //Join the hashed result and the salt together
        const resultPassword = salt + '.' + hash.toString('hex');

        //Create a new user and save it
        const user = await this.usersService.create(email, resultPassword);

        //return said user
        return user;
    }

    async signin(email: string, password: string) {
        const [user] = await this.usersService.find(email);
        if (!user) {
            throw new NotFoundException('User Not Found.');
        }
        const [salt, storedHash] = user.password.split('.');

        //this hash is the result of the password the user is trying to sign in with + the stored salt
        const hash = (await scrypt(password, salt, 32)) as Buffer;

        if (storedHash !== hash.toString('hex')) {
            throw new BadRequestException("Bad password.");
        }
        return user;
    }
}