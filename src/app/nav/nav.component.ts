import { Component, OnInit } from '@angular/core';
import { CreditsService } from '../credits/credits.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  constructor(private cs: CreditsService) {}

  ngOnInit(): void {}

  credits() {
    this.cs.show();
  }
}
