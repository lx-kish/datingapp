import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { ILoginCreds, IRegisterCreds, IUser } from '../../types/user';
import { tap } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private http = inject(HttpClient);
  currentUser = signal<IUser | null>(null);

  private baseUrl = environment.apiUrl;

  setCurrentUser(user: IUser) {
    localStorage.setItem('user', JSON.stringify(user));
    this.currentUser.set(user);
  }

  register(creds: IRegisterCreds) {
    return this.http.post<IUser>(this.baseUrl + 'account/register', creds).pipe(
      tap((user) => {
        if (user) {
          this.setCurrentUser(user);
        }
      })
    );
  }

  login(creds: ILoginCreds) {
    return this.http.post<IUser>(this.baseUrl + 'account/login', creds).pipe(
      tap((user) => {
        if (user) {
          this.setCurrentUser(user);
        }
      })
    );
  }

  logout() {
    localStorage.removeItem('user');
    this.currentUser.set(null);
  }
}
