import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-watch',
  templateUrl: './listen.component.html',
  styleUrls: ['./listen.component.scss'],
})
export class ListenComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {}

  hasChild(): boolean {
    return this.activatedRoute.children.some(
      (child) =>
        child.snapshot.routeConfig?.path?.length &&
        child.snapshot.routeConfig?.path?.length >= 1
    );
  }
}
