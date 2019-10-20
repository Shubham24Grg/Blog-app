import { Component, OnInit } from '@angular/core';
import{BlogService} from '../blog.service';
import {ActivatedRoute,Router} from "@angular/router"
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css']
})
export class BlogCreateComponent implements OnInit {

  constructor(private blogHttpService:BlogService ,private _route:ActivatedRoute,private router:Router,private toastr: ToastrService) { 
    
  }
  public blogTitle:string;
  public blogDescription:string;
  public blogBodyHtml:string;
  public blogCategory:string;
  public possibleCategories = ["comedy","drama","action","technical"]

  ngOnInit() {
  }
  public createBlog(){
    let blogData={
      title:this.blogTitle,
      description:this.blogDescription,
      blogBody:this.blogBodyHtml,
      category:this.blogCategory
    }

    console.log(blogData)
    this.blogHttpService.createBlog(blogData).subscribe(

      data=>{
        console.log("blogCreated")
        console.log(data)
        this.toastr.success('Blog posted successfully', 'Success!');
      setTimeout(()=>{
        this.router.navigate(['/blog',data.data.blogId]);
      },2000)
      },
      error=>{
        console.log("error messsage")
        console.log(error.errorMessage);
        this.toastr.error('Some error occured', 'Oops!');
        
      }
      
    )
  }

}
