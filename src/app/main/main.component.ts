import { Component, OnInit } from '@angular/core';
import { AboutService } from '../about/about.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  constructor(private as: AboutService) {}

  next() {
    this.as.next();
  }

  prev() {
    this.as.prev();
  }

  ngOnInit(): void {}
}
