import { createParamDecorator, ExecutionContext } from "@nestjs/common";

export const CurrentUser = createParamDecorator(
    (data: never, context: ExecutionContext) => {
        //logic to inspect the incoming request
        const request = context.switchToHttp().getRequest();
        console.log(request.session.userId);
        return request.CurrentUser;
    }
);