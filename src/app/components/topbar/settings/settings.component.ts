import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AnimeApiService } from 'src/app/utils/services/anime-api.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  public ipForm = this.formBuilder.group({
    ipAddress: null,
  });

  constructor(private formBuilder: FormBuilder, private animeApi: AnimeApiService) { }

  ngOnInit(): void {
  }

  writeIP(): void {
    this.animeApi.writeUrl(this.ipForm.controls['ipAddress'].value);
  }
}
