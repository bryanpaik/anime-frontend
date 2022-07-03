import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { IAnimeListing } from 'src/app/utils/interfaces/animeListing';
import { AnimeApiService } from 'src/app/utils/services/anime-api.service';
@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent implements OnInit {
  state$: Observable<object>;
  state: any;
  episodes: any;
  title: any;
  link: SafeResourceUrl;

  constructor(public sanitizer: DomSanitizer, public activatedRoute: ActivatedRoute, private animeApi: AnimeApiService) { }

  ngOnInit(): void {
    this.state$ = this.activatedRoute.paramMap
      .pipe(map(() => window.history.state));

    this.state$.subscribe(state => {
      this.state = state;
    });

    this.animeApi.getApiLink(this.state.results.link).subscribe(val => {
      this.link = this.sanitizer.bypassSecurityTrustResourceUrl(val);
    });

    this.animeApi.getEpisodes(this.state.results.link).subscribe(res => {
      this.episodes = res;
    });

    this.title = this.state.results.name;

  }

  onSelect(option: any){
    this.animeApi.getApiLink(option.value.link).subscribe(val => {
      this.link = this.sanitizer.bypassSecurityTrustResourceUrl(val);
    });
  }
}
