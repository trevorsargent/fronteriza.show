import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CreditsService {
  isShowing = false;

  show() {
    this.isShowing = true;
  }

  hide() {
    this.isShowing = false;
  }
}
