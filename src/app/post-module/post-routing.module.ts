import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PostsComponent} from './components/posts/posts.component';
import {PostResolveService} from './services/post-resolve.service';
import {FullPostComponent} from './components/full-post/full-post.component';


const routes: Routes = [
  {
    // /posts
    path: '', resolve: {postsData: PostResolveService}, component: PostsComponent,
    children: [
      // /posts/:id
      {path: ':id', component: FullPostComponent}
    ]
  }
];

@NgModule({

  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule {
}
