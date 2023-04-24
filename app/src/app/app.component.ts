import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Post } from './post.model';
import { PostsService } from './posts.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy {
  title = 'app';
  @ViewChild('postForm', { static: false }) signupForm!: NgForm;
  loadedPosts:Post[] = [];
  isFetching=false;
  error=null;
  private errorSub: Subscription = new Subscription;


  ngOnInit() {
    this.errorSub=this.postService.error.subscribe(errorMessage=>{
      this.error!=errorMessage;
    })
    this.isFetching=true;
    this.postService.fetchPosts().subscribe(posts=>{
      this.isFetching=false;
      this.loadedPosts=posts;
    },
    error=>{
      this.isFetching=false;
      this.error=error.message;
    });
  }
  constructor(private http: HttpClient,private postService:PostsService) { }
  onCreatePost(postData: Post) {
    this.postService.createAndStorePost(postData.title,postData.content)
    // console.log(postData);
    // this.http.post<{name:string}>("https://ng-complete-guide-4db6b-default-rtdb.firebaseio.com/posts.json", postData).subscribe(responseData => {
    //   console.log(responseData);
  

    // })  
    this.signupForm.reset();  

  }
  handleErrors(){
    this.error=null;

  }
  onFetchPosts() {
this.isFetching=true;
     this.postService.fetchPosts().subscribe(posts=>{
      this.isFetching=false;
      this.loadedPosts=posts;
    },error=>{
      this.isFetching=false;
      this.error=error.message;
      console.log(error)
    });
 
  }
  onClearPosts(){
    this.postService.deletePosts().subscribe(()=>{
     this.loadedPosts=[]});
   
    
  }
  // private fetchPosts() {
  //   this.isFetching=true;
  //   //RESPONSE WILL return as a body
  //   this.http.get<{[key:string]:Post}>("https://ng-complete-guide-4db6b-default-rtdb.firebaseio.com/posts.json").pipe(map((responseData:{[key:string]:Post}) => {
  //     const postsArray:Post[] = [];
  //     for (const key in responseData) {
  //       if (responseData.hasOwnProperty(key)) {
  //         postsArray.push({...responseData[key], id: key });
  //       }
  //     }
  //     return postsArray;

  //   })).subscribe(posts => {
  //     this.isFetching=false;
  //     this.loadedPosts=posts;
  //   })
  // }
  ngOnDestroy(){
    this.errorSub.unsubscribe();
  }
}
