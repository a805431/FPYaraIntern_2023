import {
    CanActivate,
    ExecutionContext
} from '@nestjs/common';
import { Observable } from 'rxjs';

export class AuthGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const request = context.switchToHttp().getRequest();

        return request.session.userId;
        //if the id exists, a truthy value will be returned and the user can access whatever route the guard is applied to
        // if the returned value is falsy, access to a given handler or controller will be prevented
    }
}