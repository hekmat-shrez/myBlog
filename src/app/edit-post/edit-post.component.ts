import { Component, OnInit } from '@angular/core';
import { PostService } from '../post-service';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogPost } from '../BlogPost';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  constructor(private data: PostService, private route: ActivatedRoute, private router: Router) { }

  blogPost: BlogPost;
  tags: string;

  private post;
  
  ngOnInit(): void {
    this.post = this.data.getPostbyId(this.route.snapshot.params['id']).subscribe(data => {
      this.blogPost = data; 
      this.tags = data.tags.toString();
    })
  }

  ngOnDestroy() {
    if (this.post) this.post.unsubscribe();
  }

  formSubmit(): void {
    this.blogPost.tags = this.tags.split(',').map(tag => tag.trim());
    this.data.updatePostById(this.blogPost._id, this.blogPost).subscribe( () => this.router.navigate(['/admin']));
  }

  deltePost(id) {
    this.data.deletePostById(id).subscribe( () => this.router.navigate(['/admin']));
  }

}
