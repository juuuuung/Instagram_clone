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
      const canRoleList = globalRoleList;

      if (!canRoleList.includes(request.user.role)) return false;

      return true;
    }
  }

  const guard = mixin(RoleGuardMixin);
  return guard;
};
