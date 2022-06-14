import { Component, OnInit } from '@angular/core';
import { AnimeApiService } from './anime-api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private animeApi: AnimeApiService) {}

  title = 'anime-frontend';

  ngOnInit(){
    this.animeApi.getStatus();
  }
}
