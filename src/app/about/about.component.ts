import { Component, OnInit } from '@angular/core';
import { AboutService } from './about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  constructor(private aboutService: AboutService) {}

  ngOnInit(): void {}

  page: number = 0;

  onClick(pageNum: number) {
    if (this.isTurned(pageNum)) {
      this.page = this.page - 1;
      return;
    }
    this.page = pageNum + 1;
  }

  isTurned(num: number) {
    return this.aboutService.isTurned(num);
  }
}
