import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { GitHubUser } from '../app.component';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-profile',
  imports: [DatePipe, IconComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileComponent {
  public user = input.required<GitHubUser>();
}
