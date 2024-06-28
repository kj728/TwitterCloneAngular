import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { PostsCommentsComponent } from './posts-comments/posts-comments.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ProfileComponent,PostsCommentsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';

  USER_ID!:number;

}
