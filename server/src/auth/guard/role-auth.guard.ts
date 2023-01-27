import {
  CanActivate,
  ExecutionContext,
  Injectable,
  mixin,
  Type,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';

export const RolesGuard = (globalRoleList): Type<CanActivate> => {
  @Injectable()
  class RoleGuardMixin implements CanActivate {
    constructor(private reflector: Reflector) {}

    canActivate(
      context: ExecutionContext,
    ): boolean | Promise<boolean> | Observable<boolean> {
      const request = context.switchToHttp().getRequest();
      const localRoleList = this.reflector.get<string[]>(
        'roles',
        context.getHandler(),
      );
      const canRoleList = Array.isArray(localRoleList)
        ? localRoleList
        : globalRoleList;

      if (!canRoleList?.length) return true;

      if (!canRoleList.includes(request.user.role)) return false;
      return true;
    }
  }

  const guard = mixin(RoleGuardMixin);
  return guard;
};
