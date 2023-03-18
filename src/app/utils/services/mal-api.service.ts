import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MALConstants } from '../constants/malConstants';
import { IAnimeListing } from '../interfaces/animeListing';
import { IMALListing } from '../interfaces/malListing';
import { IMALResult } from '../interfaces/malResult';

@Injectable({
  providedIn: 'root'
})
export class MalApiService {
  constructor(private http: HttpClient) {}

  searchAnime(name: string): Observable<IMALResult> {
    return this.http.get<IMALResult>(
      `${MALConstants.baseUrl}anime?q=${name}&limit=${MALConstants.limit}&sfw=${MALConstants.sfw}`
    );
  }

  convertListing(malRes: IMALResult): IAnimeListing[] {
    const animeList: IAnimeListing[] = []
    malRes.data.forEach((item: IMALListing) => {
      animeList.push({
        name: item.title,
        image: item.images.jpg.large_image_url,
        link: null
      })
    })
    return animeList;
  }
}
