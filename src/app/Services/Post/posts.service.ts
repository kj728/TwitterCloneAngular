import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPosts } from '../../Models Angular/Post';
import { map } from 'rxjs/operators'; // Import map function

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private readonly posts_URL = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http:HttpClient) { }

  getAllPosts():Observable<IPosts[]>{
    return this.http.get<IPosts[]>(this.posts_URL)
  }

  getPostsForUser(userId: number): Observable<IPosts[]> {
    return this.http.get<IPosts[]>(this.posts_URL)
    .pipe(
      map(posts => posts.filter(post => post.userId === userId))
    );
  }



}
