import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IAnimeListing } from 'src/app/utils/interfaces/animeListing';

@Component({
  selector: 'anime-card-list',
  templateUrl: './anime-card-list.component.html',
  styleUrls: ['./anime-card-list.component.scss']
})
export class AnimeCardListComponent implements OnInit {
  @Input() results: IAnimeListing[];
  centered = false;
  disabled = false;
  unbounded = false;

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  redirectToAnime(results: IAnimeListing) {
    this.router.navigateByUrl('/videoplayer', { state: { results } });
  }

}