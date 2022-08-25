import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { AnimeApiService } from 'src/app/utils/services/anime-api.service';
import { FileStorageService } from 'src/app/utils/services/file-storage.service';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss'],
})
export class VideoPlayerComponent implements OnInit {
  state$: Observable<object>;
  state: any;
  episodes: any;
  title: any;
  image: any;
  link: SafeResourceUrl;

  constructor(
    public sanitizer: DomSanitizer,
    public activatedRoute: ActivatedRoute,
    private animeApi: AnimeApiService,
    private fileStore: FileStorageService
  ) {}

  ngOnInit(): void {
    this.state$ = this.activatedRoute.paramMap.pipe(
      map(() => window.history.state)
    );

    this.state$.subscribe((state) => {
      this.state = state;
    });

    this.animeApi.getApiLink(this.state.results.link).subscribe((val) => {
      this.link = this.sanitizer.bypassSecurityTrustResourceUrl(val);
    });

    this.animeApi.getEpisodes(this.state.results.link).subscribe((res) => {
      this.episodes = res;
    });

    this.title = this.state.results.name;
    this.image = this.state.results.image;
  }

  onSelect(option: any) {
    this.animeApi.getApiLink(option.value.link).subscribe((val) => {
      this.link = this.sanitizer.bypassSecurityTrustResourceUrl(val);
    });
  }

  addToQueue() {
    this.fileStore.writeToQueue({
      name: this.title,
      image: this.image,
      link: this.state.results.link,
    });
  }
}
