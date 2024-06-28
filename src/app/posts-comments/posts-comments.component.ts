import { Component, Input, OnInit } from '@angular/core';
import { IPosts } from '../Models Angular/Post';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostsService } from '../Services/Post/posts.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-posts-comments',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './posts-comments.component.html',
  styleUrl: './posts-comments.component.css'
})
export class PostsCommentsComponent implements OnInit {

   allPosts: IPosts[] = []

  @Input() user_id!: number;

  //filteredPosts:IPosts[]=[]

  constructor(private postsService: PostsService, private appComponent: AppComponent) {
   
  }


  ngOnInit() {
    this.postsService.getAllPosts().subscribe(posts => {
       this.allPosts = posts  ;
      //  console.log(this.allPosts)
     //this.filteredPosts = posts.filter(post =>post.userId ===this.user_id)
    })


    // if(this.user_id){
    //   this.postsService.getPostsForUser(this.user_id).subscribe(posts =>{
    //     this.allPosts = posts;
     
    //   })
    // }else{
    //   console.log("No posts found")
    // }


    //  console.log("hello from the other side",this.user_id)
  }


}
