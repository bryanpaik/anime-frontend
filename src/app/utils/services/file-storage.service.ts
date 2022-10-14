import { Injectable } from '@angular/core';
import { IpcRenderer } from 'electron';
import { FileConstants } from '../constants/filesConstants';
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

  public async writeToFile(fileName: string, newData: any) {
    if (this._ipc) {
      return this._ipc.invoke('saveData', fileName, newData);
    }
    return null;
  }

  public async readFile(fileName: string): Promise<any> {
    if (this._ipc) {
      return this._ipc.invoke('loadData', fileName).then((data) => {
        const queue: any = data || [];
        return queue;
      });
    }
    return Promise.resolve([]);
  }
  
  public async writeToQueue(listing: IAnimeListing) {
    if (this._ipc) {
      return this._ipc.invoke('loadData', FileConstants.QUEUE).then((data) => {
        const queue: IAnimeListing[] = data || [];
        queue.push(listing);

        if (this._ipc) {
          return this._ipc.invoke('saveData', FileConstants.QUEUE, queue, 'a');
        }
        return null;
      });
    }
    return null;
  }

  public async readQueue(): Promise<IAnimeListing[]> {
    if (this._ipc) {
      return this._ipc.invoke('loadData', FileConstants.QUEUE).then((data) => {
        const queue: IAnimeListing[] = data || [];
        return queue;
      });
    }
    return Promise.resolve([]);
  }
}
