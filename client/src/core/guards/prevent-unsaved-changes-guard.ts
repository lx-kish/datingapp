import { CanDeactivateFn } from '@angular/router';
import { MemberProfile } from '../../features/members/member-profile/member-profile';

export const preventUnsavedChangesGuard: CanDeactivateFn<MemberProfile> = (component) => {
  if (component.editForm?.dirty) {
    return confirm('You are leaving edit form. All unsaved data will be lost. Continue?');
  }

  return true;
};
