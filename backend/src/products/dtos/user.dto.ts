import { Expose } from 'class-transformer';

//description of the way the user is shown to the outside world
//here are the properties we want to be sent out in the responses
export class UserDto {
    @Expose()
    id: number;

    @Expose()
    email: string;

}