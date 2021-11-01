import { Component } from '@angular/core';
import { CreditsService } from './credits.service';

@Component({
  selector: 'app-credits',
  templateUrl: './credits.component.html',
  styleUrls: ['./credits.component.scss'],
})
export class CreditsComponent {
  title = 'fronteriza';

  constructor(private credits: CreditsService) {}

  isShowing() {
    return this.credits.isShowing;
  }

  close() {
    this.credits.hide();
  }
}
