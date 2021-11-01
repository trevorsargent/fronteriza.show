import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-podcast',
  templateUrl: './podcast.component.html',
  styleUrls: ['./podcast.component.scss'],
})
export class PodcastComponent implements OnInit {
  episodes: Episode[] = [
    {
      link: 'https://www.spreaker.com/user/15488677/episode-1-immigration_1',
      transcript:
        'https://docs.google.com/document/d/1hZpT0BWOiGE3kJtPVpks8PGVrHvCSLiC0Y7Zvf8t-34',
      title: 'Episode 1',
      isReleased: true,
    },
    {
      link: 'https://www.spreaker.com/user/15488677/episode-2-race-and-identity',
      transcript:
        'https://docs.google.com/document/d/1Awz-DfIh5VLR-XGVsWYk9f0Ygokl1XApHblZxLQE_4Q',
      title: 'Episode 2',
      isReleased: true,
    },
    { link: '', transcript: '', title: 'Episode 3', isReleased: false },
    { link: '', transcript: '', title: 'Episode 4', isReleased: false },
  ];

  constructor() {}

  ngOnInit(): void {}
}

interface Episode {
  title: string;
  link: string;
  transcript: string;
  isReleased: boolean;
}
