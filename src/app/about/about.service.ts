import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AboutService {
  page: number = 1;

  next() {
    this.page = Math.min(this.page + 1, 5);
  }

  prev() {
    this.page = Math.max(this.page - 1, 1);
  }

  isTurned(num: number) {
    return num < this.page;
  }
}
