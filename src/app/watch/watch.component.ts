import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.scss'],
})
export class WatchComponent implements OnInit {
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
