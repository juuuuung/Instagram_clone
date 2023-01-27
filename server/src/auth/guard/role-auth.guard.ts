import {
  CanActivate,
  ExecutionContext,
  Injectable,
  mixin,
  Type,
} from '@nestjs/common';
import { Observable } from 'rxjs';

export const RolesGuard = (globalRoleList): Type<CanActivate> => {
  @Injectable()
  class RoleGuardMixin implements CanActivate {
    canActivate(
      context: ExecutionContext,
    ): boolean | Promise<boolean> | Observable<boolean> {
      const request = context.switchToHttp().getRequest();
      let result = true;

      if (!globalRoleList.includes(request.user.role)) result = false;

      return result;
    }
  }

  const guard = mixin(RoleGuardMixin);
  return guard;
};
