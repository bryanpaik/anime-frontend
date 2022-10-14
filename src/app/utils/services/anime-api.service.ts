import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IAnimeListing } from '../interfaces/animeListing';
import { FileStorageService } from './file-storage.service';
import { FileConstants } from '../constants/filesConstants';

@Injectable({
  providedIn: 'root',
})
export class AnimeApiService {
  private baseUrl = '';

  constructor(private http: HttpClient, private fileService: FileStorageService) {}

  getStatus() {
    return this.http.get(`${this.baseUrl}/api/status`).subscribe((response) => {
      console.log(JSON.stringify(response));
    });
  }

  getAnime(name: string): Observable<IAnimeListing[]> {
    return this.http.get<IAnimeListing[]>(
      `${this.baseUrl}/api/animix/search?animeName=${name}`
    );
  }

  getEpisodes(link: string): Observable<IAnimeListing[]> {
    return this.http.get<IAnimeListing[]>(
      `${this.baseUrl}/api/animix/getEpisodes?link=${link}`
    );
  }

  getApiLink(link: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/api/animix/apiLink?link=${link}`);
  }

  writeUrl(ipAddress: string) {
    this.fileService.writeToFile(FileConstants.SETTINGS, {ipAddress});
    this.setUrl(`http://${ipAddress}:5000`) 
  }
  
  setUrl(url: string) {
    this.baseUrl = url;
  }
}
