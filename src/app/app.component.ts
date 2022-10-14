import { Component, OnInit } from '@angular/core';
import { FileConstants } from './utils/constants/filesConstants';
import { AnimeApiService } from './utils/services/anime-api.service';
import { FileStorageService } from './utils/services/file-storage.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(public fileService: FileStorageService, public animeApi: AnimeApiService) {}

  title = 'anime-frontend';

  ngOnInit(){
    this.fileService.readFile(FileConstants.SETTINGS).then((data) => {
      if (data) {
        this.animeApi.setUrl(`http://${data.ipAddress}:5000`)
      }
    });
  }
}
