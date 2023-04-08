import { NestInterceptor, ExecutionContext, CallHandler, Injectable } from "@nestjs/common";
import { UsersService } from "../users.service";

@Injectable()
export class CurrentUserInterceptor implements NestInterceptor {
    constructor(private usersService: UsersService) {

    }

    async intercept(context: ExecutionContext, handler: CallHandler) {
        const request = context.switchToHttp().getRequest();
        const { userId } = request.session || {};

        //we don't need to make a query if the user is not signed in, so that needs to be checked
        if (userId) {
            const user = await this.usersService.findOneBy(userId);
            request.CurrentUser = user;
        }

        return handler.handle(); //goes ahead and runs the actual route handler
    }
}