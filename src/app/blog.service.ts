import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { observable } from 'rxjs';
import {catchError,tap} from "rxjs/operators";




@Injectable({
  providedIn: 'root'
})
export class BlogService {
  public allBlogs:any = [];
  public currentBlog: any;
  public baseUrl: any = 'http://localhost:3000/api/v1/blogs';
  public authtoken:any ='Admin';
  
  constructor(private _http:HttpClient) {

    console.log('public service was called');
  }
  public getAllblogs(): any {
  let myResponse=this._http.get(this.baseUrl+'/all?authToken='+this.authtoken )
  console.log(myResponse)
  return myResponse;


  }


  public getSingleBlogInformation(currentBlogId: string): any {
    let myResponse=this._http.get(this.baseUrl + '/view' + '/' + currentBlogId + '?authToken=' + this.authtoken)
    return myResponse;



  }
public createBlog(blogData):any{

  let myResponse=this._http.post(this.baseUrl + '/create' + '?authToken=' + this.authtoken,blogData);
  return myResponse;
}
public deleteBlog(blogId):any{
  let data={}
  let myResponse=this._http.post(this.baseUrl + '/' + blogId + '/delete' + '?authToken=' + this.authtoken,data );
  return myResponse; 



}
public editBlog(blogId,blogData):any{
  
  let myResponse=this._http.put(this.baseUrl + '/' + blogId + '/edit' + '?authToken=' + this.authtoken,blogData);

  return myResponse;
}
}
