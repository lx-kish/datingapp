import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { IMember, IPhoto } from '../../types/member';

@Injectable({
  providedIn: 'root',
})
export class MemberService {
  private http = inject(HttpClient);
  private baseUrl = environment.apiUrl;

  getMembers() {
    return this.http.get<IMember[]>(`${this.baseUrl}members`);
  }

  getMember(id: string) {
    return this.http.get<IMember>(`${this.baseUrl}members/${id}`);
  }

  getMemberPhotos(id: string) {
    return this.http.get<IPhoto[]>(`${this.baseUrl}members/${id}/photos`);
  }
}
