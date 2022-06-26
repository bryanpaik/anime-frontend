import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AnimeApiService } from 'src/app/anime-api.service';
import { IAnimeListing } from 'src/app/utils/interfaces/animeListing';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public searchResult: IAnimeListing[];
  public displayedColumns: string[] = ['name'];
  public searchForm = this.formBuilder.group({
    search: null,
  });

  constructor(private animeApi: AnimeApiService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  findShow() {
    this.animeApi.getAnime(this.searchForm.controls['search'].value)
      .subscribe(data => {
        this.searchResult = data;
      });
  }

}
