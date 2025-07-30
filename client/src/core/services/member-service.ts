import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '../../environments/environment';
import { IEditableMember, IMember, IPhoto } from '../../types/member';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MemberService {
  private http = inject(HttpClient);
  private baseUrl = environment.apiUrl;
  editMode = signal(false);
  member = signal<IMember | null>(null);

  getMembers() {
    return this.http.get<IMember[]>(`${this.baseUrl}members`);
  }

  getMember(id: string) {
    return this.http.get<IMember>(`${this.baseUrl}members/${id}`).pipe(
      tap(member => {
        this.member.set(member)
      })
    );
  }

  getMemberPhotos(id: string) {
    return this.http.get<IPhoto[]>(`${this.baseUrl}members/${id}/photos`);
  }

  updateMember(member: IEditableMember) {
    return this.http.put(`${this.baseUrl}members`, member);
  }

  uploadPhoto(file: File) {
    const formData = new FormData();
    formData.append('file', file);

    return this.http.post<IPhoto>(`${this.baseUrl}members/add-photo`, formData);
  }
}
