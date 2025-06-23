import { Component, input } from '@angular/core';
import { IMember } from '../../../types/member';

@Component({
  selector: 'app-member-card',
  imports: [],
  templateUrl: './member-card.html',
  styleUrl: './member-card.css'
})
export class MemberCard {
  member = input.required<IMember>();
}
