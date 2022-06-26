import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IAnimeListing } from '../interfaces/animeListing';


@Injectable({
  providedIn: 'root'
})
export class AnimeApiService {
  baseUrl = "http://localhost:5000";

  constructor(private http: HttpClient) { }

  getStatus() {
    return this.http.get(`${this.baseUrl}/api/status`).subscribe((response) => {
      console.log(JSON.stringify(response));
    });
  }

  getAnime(name: string): Observable<IAnimeListing[]> {
    return this.http.get<IAnimeListing[]>(`${this.baseUrl}/api/animix/search?animeName=${name}`);
  }

  getEpisodes(link: string): Observable<IAnimeListing[]> {
    return this.http.get<IAnimeListing[]>(`${this.baseUrl}/api/animix/getEpisodes?link=${link}`);
  }

}
