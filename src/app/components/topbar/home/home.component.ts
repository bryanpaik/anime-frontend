import { Component, OnInit } from '@angular/core';
import { IAnimeListing } from 'src/app/utils/interfaces/animeListing';
import { FileStorageService } from 'src/app/utils/services/file-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  queue: IAnimeListing[] = [];
  constructor(private fileStore: FileStorageService) {}

  ngOnInit(): void {
    this.getQueue().then((data) => {
      this.queue = data;
    });
  }

  private async getQueue() {
    return this.fileStore.readQueue();
  }
}
