import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { IAnimeListing } from 'src/app/utils/interfaces/animeListing';
import { MalApiService } from 'src/app/utils/services/mal-api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  public searchResult: IAnimeListing[] = [];
  public displayedColumns: string[] = ['name'];
  public searchForm = this.formBuilder.group({
    search: null,
  });

  constructor(
    private malApi: MalApiService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {}

  findShow() {
    this.malApi
      .searchAnime(this.searchForm.controls['search'].value)
      .subscribe((result) => {
        console.log(result);
        this.searchResult = this.malApi.convertListing(result);
      });
  }
}
