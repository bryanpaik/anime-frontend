import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { FriendsComponent } from './friends/friends.component';
import { HomeComponent } from './home/home.component';
import { MostPopularComponent } from './most-popular/most-popular.component';
import { SearchComponent } from './search/search.component';
import { SettingsComponent } from './settings/settings.component';
import { TopbarComponent } from './topbar/topbar.component';
import { WatchlistComponent } from './watchlist/watchlist.component';

const routes: Routes = [
  { path: 'watchlist', component: WatchlistComponent},
  { path: 'home', component: HomeComponent},
  { path: 'most-popular', component: MostPopularComponent},
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
export const routingComponents = [WatchlistComponent, TopbarComponent, HomeComponent, CategoriesComponent, FriendsComponent, MostPopularComponent,
SettingsComponent, SearchComponent]
