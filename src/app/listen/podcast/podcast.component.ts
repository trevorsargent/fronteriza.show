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
      title: '1: Immigration',
      isReleased: true,
    },
    {
      link: 'https://www.spreaker.com/user/15488677/episode-2-race-and-identity',
      transcript:
        'https://docs.google.com/document/d/1Awz-DfIh5VLR-XGVsWYk9f0Ygokl1XApHblZxLQE_4Q',
      title: '2: Race and Identity',
      isReleased: true,
    },
    {
      link: 'https://www.spreaker.com/user/15488677/episode-3-23-and-me',
      transcript:
        'https://docs.google.com/document/d/1Y1Aufe9Ji5SGxtY7DwwCGRRDr0FO6PymOOgxUmPDu_8',
      title: '3: 23 and Me',
      isReleased: true,
    },
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
