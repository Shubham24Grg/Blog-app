import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';

import { RouterModule,Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BlogViewComponent } from './blog-view/blog-view.component';
import { BlogEditComponent } from './blog-edit/blog-edit.component';
import { BlogCreateComponent } from './blog-create/blog-create.component';
import{LocationStrategy, HashLocationStrategy} from '@angular/common'

import { HttpClientModule } from '@angular/common/http';
import { BlogService } from './blog.service';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    BlogViewComponent,
    BlogEditComponent,
    BlogCreateComponent,
    NotFoundComponent

  ],
  imports: [
    BrowserModule,
    
   HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot([
     {path:'home',component:HomeComponent},
     {path:'about',component:AboutComponent},
     {path:'',redirectTo:'home',pathMatch:'full'},
     {path:'blog/:blogId',component:BlogViewComponent},
     {path:'create',component:BlogCreateComponent},
     {path:'edit/:blogId',component:BlogEditComponent}

    ])
  ],
  providers: [BlogService,{
    provide:LocationStrategy,
    useClass:HashLocationStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
