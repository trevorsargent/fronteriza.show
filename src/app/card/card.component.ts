import { Component, Input, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  constructor() {}

  @Input()
  title: string = '';

  @Input()
  color: string = 'green';

  ngOnInit(): void {
    this.flip = Math.random() > 0.5;

    this.paper2 = Math.random() > 0.5 && this.randomPaper;
  }

  flip: boolean = false;
  paper2 = false;

  @Input()
  randomPaper = true;
}
