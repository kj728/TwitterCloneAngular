import { Component, OnInit } from '@angular/core';
import { IPosts } from '../Models Angular/Post';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostsService } from '../Services/Post/posts.service';

@Component({
  selector: 'app-posts-comments',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './posts-comments.component.html',
  styleUrl: './posts-comments.component.css'
})
export class PostsCommentsComponent implements OnInit {

  allPosts: IPosts[] = []
  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.postsService.getAllPosts().subscribe(posts => {
      // console.log(posts)

    })
  }



}
