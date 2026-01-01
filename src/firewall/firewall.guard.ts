import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class FirewallGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    // const req = context.switchToHttp().getRequest();
    // // validated token form cookie or any other your custom guard
    // return req.body.name === 'Ronaldo';
    return true;
  }
}
// Guard -> Pipes->Controller->Service
