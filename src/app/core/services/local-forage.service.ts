import localforage from 'localforage';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalForageService {
  constructor() {
    localforage.config({ name: 'Bootstrap Todo List App' });
  }

  setItem(key: string, value: string) {
    return localforage.setItem(key, value);
  }

  getItem(key: string) {
    return localforage.getItem(key);
  }
}
