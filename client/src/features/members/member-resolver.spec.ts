import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { memberResolver } from './member-resolver';
import { IMember } from '../../types/member';

describe('memberResolver', () => {
  const executeResolver: ResolveFn<IMember> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => memberResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
