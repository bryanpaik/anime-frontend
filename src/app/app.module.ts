import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VideoPlayerComponent } from './video-player/video-player.component';

import { HomeComponent } from './topbar/home/home.component';
import { FriendsComponent } from './topbar/friends/friends.component';
import { CategoriesComponent } from './topbar/categories/categories.component';
import { SearchComponent } from './topbar/search/search.component';
import { SettingsComponent } from './topbar/settings/settings.component';
import { HttpClientModule } from '@angular/common/http';
import { WatchlistComponent } from './topbar/watchlist/watchlist.component';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    VideoPlayerComponent,
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
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
