import { Component, inject } from '@angular/core';
import { MemberService } from '../../../core/services/member-service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { IPhoto } from '../../../types/member';
import { AsyncPipe } from '@angular/common';
import { ImageUpload } from "../../../shared/image-upload/image-upload";

@Component({
  selector: 'app-member-photos',
  imports: [AsyncPipe, ImageUpload],
  templateUrl: './member-photos.html',
  styleUrl: './member-photos.css'
})
export class MemberPhotos {
  protected memberService = inject(MemberService);
  private route = inject(ActivatedRoute);
  protected photos$?: Observable<IPhoto[]>;

  constructor() {
    const memberId = this.route.parent?.snapshot.paramMap.get('id');
    if (memberId) {
      this.photos$ = this.memberService.getMemberPhotos(memberId);
    }
  }

  mockPhotos() {
    return Array.from({length: 20}, (_, i) => ({
      url: '/user.png'
    }))
  }
}
