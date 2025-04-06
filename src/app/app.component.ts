import { httpResource } from '@angular/common/http';
import {
  ChangeDetectionStrategy,
  Component,
  effect,
  signal,
} from '@angular/core';
import { ProfileComponent } from './profile/profile.component';
import { SearchComponent } from './search/search.component';
import { ThemeSwitchComponent } from './theme-switch/theme-switch.component';

export interface GitHubUser {
  avatar_url: string;
  login: string;
  name?: string;
  created_at: string;
  bio?: string;
  followers: number;
  following: number;
  public_repos: number;
  location?: string;
  blog?: string;
  twitter_username?: string;
  company?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
  imports: [ThemeSwitchComponent, SearchComponent, ProfileComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  public title = 'devfinder';
  public search = signal('');

  public user = httpResource<GitHubUser>(
    () => `https://api.github.com/users/${this.search().trim() || 'octocat'}`
  );
  public lastSuccessfulSearch = signal<GitHubUser | undefined>(undefined);

  constructor() {
    effect(() => {
      if (this.user.value()) {
        this.lastSuccessfulSearch.set(this.user.value());
      }
    });
  }

  public onSearchEvent(search: string) {
    if (!search.trim()) {
      return;
    }

    this.search.set(search);
  }
}
