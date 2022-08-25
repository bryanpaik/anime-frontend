import { Injectable } from '@angular/core';
import { IpcRenderer } from 'electron';
import { IAnimeListing } from '../interfaces/animeListing';

@Injectable({
  providedIn: 'root',
})
export class FileStorageService {
  private _ipc: IpcRenderer | undefined;
  constructor() {
    if (window.require) {
      try {
        this._ipc = window.require('electron').ipcRenderer;
      } catch (e) {
        throw e;
      }
    } else {
      console.warn("Electron's IPC was not loaded");
    }
  }

  public async writeToQueue(listing: IAnimeListing) {
    if (this._ipc) {
      return this._ipc.invoke('loadData', 'queue').then((data) => {
        const queue: IAnimeListing[] = data || [];
        queue.push(listing);

        if (this._ipc) {
          return this._ipc.invoke('saveData', 'queue', queue);
        }
        return null;
      });
    }
    return null;
  }

  public async readQueue(): Promise<IAnimeListing[]> {
    if (this._ipc) {
      return this._ipc.invoke('loadData', 'queue').then((data) => {
        const queue: IAnimeListing[] = data || [];
        return queue;
      });
    }
    return Promise.resolve([]);
  }
}
