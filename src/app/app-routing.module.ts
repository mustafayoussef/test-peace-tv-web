import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ChineseComponent } from './pages/home/chinese/chinese.component';
import { BanglaComponent } from './pages/home/bangla/bangla.component';
import { UrduComponent } from './pages/home/urdu/urdu.component';
import { EnglishComponent } from './pages/home/english/english.component';
import { LandingComponent } from './pages/landing/landing.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
  { path: 'landing', component: LandingComponent },
  { path: 'english', component: EnglishComponent },
  { path: 'urdu', component: UrduComponent },
  { path: 'bangla', component: BanglaComponent },
  { path: 'chinese', component: ChineseComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: "enabled", useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
