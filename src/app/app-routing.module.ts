import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './topbar/categories/categories.component';
import { FriendsComponent } from './topbar/friends/friends.component';
import { HomeComponent } from './topbar/home/home.component';
import { SearchComponent } from './topbar/search/search.component';
import { SettingsComponent } from './topbar/settings/settings.component';
import { TopbarComponent } from './topbar/topbar.component';
import { WatchlistComponent } from './topbar/watchlist/watchlist.component';

const routes: Routes = [
  { path: 'watchlist', component: WatchlistComponent},
  { path: 'home', component: HomeComponent},
  { path: 'categories', component: CategoriesComponent},
  { path: 'friends', component: FriendsComponent},
  { path: 'settings', component: SettingsComponent},
  { path: 'search', component: SearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [WatchlistComponent, TopbarComponent, HomeComponent, CategoriesComponent, FriendsComponent,
SettingsComponent, SearchComponent]
