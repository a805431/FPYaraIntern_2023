import {
    UseInterceptors,
    NestInterceptor,
    ExecutionContext,
    CallHandler
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { classToPlain } from 'class-transformer';
import { UserDto } from 'src/products/dtos/user.dto';

export class SerializeInterceptor implements NestInterceptor{
    intercept(context: ExecutionContext, handler: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
        //Runs before the request is handled
        console.log("I'm running before the handler", context);
        
        return handler.handle().pipe(
            map((data: any) => {
                //Runs before the response is sent out
                console.log("I'm running before the response is sent out", data);
            })
        )

    }

}

