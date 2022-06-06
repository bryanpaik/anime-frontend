import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'anime-frontend';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getStatus().subscribe((response) => {
      console.log("Connected to backend!");
    });
  }

  getStatus() {
    return this.http.get("/api/anime/status");
  }
}
