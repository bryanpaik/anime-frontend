import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


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
}
