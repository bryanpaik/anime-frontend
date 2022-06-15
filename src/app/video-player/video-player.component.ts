import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent implements OnInit {

  constructor(public sanitizer: DomSanitizer) { }

  link: SafeResourceUrl;

  ngOnInit(): void {
    this.link= this.sanitizer.bypassSecurityTrustResourceUrl('https://animixplay.to/api/liveTVRnME1UUXhMVFhzM0dyVTh3ZTlPVFZSbk1FMVVVWGc9');
  }

}
