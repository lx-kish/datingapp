import { ResolveFn, Router } from '@angular/router';
import { IMember } from '../../types/member';
import { inject } from '@angular/core';
import { MemberService } from '../../core/services/member-service';
import { EMPTY } from 'rxjs';

export const memberResolver: ResolveFn<IMember> = (route, state) => {
  const memberService = inject(MemberService);
  const router = inject(Router);
  const memberId = route.paramMap.get('id');

  if (!memberId) {
    router.navigateByUrl('/not-found');
    return EMPTY;
  }

  return memberService.getMember(memberId);
};
