import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './components/topbar/categories/categories.component';
import { FriendsComponent } from './components/topbar/friends/friends.component';
import { HomeComponent } from './components/topbar/home/home.component';
import { SearchComponent } from './components/topbar/search/search.component';
import { SettingsComponent } from './components/topbar/settings/settings.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { VideoPlayerComponent } from './components/video-player/video-player.component';
import { WatchlistComponent } from './components/topbar/watchlist/watchlist.component';

const routes: Routes = [
  { path: '', redirectTo: "/home", pathMatch: 'full'},
  { path: 'watchlist', component: WatchlistComponent},
  { path: 'home', component: HomeComponent},
  { path: 'categories', component: CategoriesComponent},
  { path: 'friends', component: FriendsComponent},
  { path: 'settings', component: SettingsComponent},
  { path: 'search', component: SearchComponent},
  { path: 'videoplayer', component: VideoPlayerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [WatchlistComponent, TopbarComponent, HomeComponent, CategoriesComponent, FriendsComponent,
SettingsComponent, SearchComponent, VideoPlayerComponent]
