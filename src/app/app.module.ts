import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { HomeComponent } from './topbar/home/home.component';
import { FriendsComponent } from './topbar/friends/friends.component';
import { CategoriesComponent } from './topbar/categories/categories.component';
import { SearchComponent } from './topbar/search/search.component';
import { SettingsComponent } from './topbar/settings/settings.component';
import { HttpClientModule } from '@angular/common/http';
import { WatchlistComponent } from './topbar/watchlist/watchlist.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    HomeComponent,
    FriendsComponent,
    CategoriesComponent,
    SearchComponent,
    SettingsComponent,
    WatchlistComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    HttpClientModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
