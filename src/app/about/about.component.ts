import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  page: number = 0;

  onClick(pageNum: number) {
    if (this.isTurned(pageNum)) {
      this.page = this.page - 1;
      return;
    }
    this.page = pageNum + 1;
    console.log(this.page);
  }

  isTurned(num: number) {
    return num < this.page;
  }
}
