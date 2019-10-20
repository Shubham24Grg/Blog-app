import { Component, OnInit,  } from '@angular/core';
import {ActivatedRoute,Router} from "@angular/router";
import{BlogService} from '../blog.service';
import{Location} from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css']
})
export class BlogEditComponent implements OnInit {
  public currentBlog:any;
  public possibleCategories = ["comedy","drama","action","technical"]

  constructor(private blogService:BlogService ,private _route:ActivatedRoute,private router:Router,private toastr: ToastrService) { 
    
  }

  ngOnInit() {
    let myBlogId=this._route.snapshot.paramMap.get('blogId') ;
    this.blogService.getSingleBlogInformation(myBlogId).subscribe(
      data=>{
        console.log(data)
        this.currentBlog=data["data"];
        console.log('current blogId')
        console.log(this.currentBlog)
        
      },
      error=>{
        console.log('error occured')
        console.log(error.errorMessage)
      }
    )
   console.log(this.currentBlog);
  }


  public editThisBlog(){
    this.blogService.editBlog(this.currentBlog.blogId,this.currentBlog).subscribe(
      data=>{
        console.log(data)
        this.toastr.success('Blog edited successfully', 'Success!');
        setTimeout(()=>{
          this.router.navigate(['/blog',this.currentBlog.blogId]);
        },2000)
        
      },
      error=>{
        console.log('error occured')
        console.log(error.errorMessage)
        this.toastr.error('Some error occured', 'Oops!');
      }
    )
  
    }}
