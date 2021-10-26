import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-podcast',
  templateUrl: './podcast.component.html',
  styleUrls: ['./podcast.component.scss'],
})
export class PodcastComponent implements OnInit {
  episodes: Episode[] = [
    {
      link: 'https://soundcloud.com/ultragonic/fronteriza-podcast-episode-1',
      transcript:
        'https://docs.google.com/document/d/1hZpT0BWOiGE3kJtPVpks8PGVrHvCSLiC0Y7Zvf8t-34',
      title: 'Episode 1',
      isReleased: true,
    },
    {
      link: 'https://soundcloud.com/ultragonic/fronteriza-podcast-episode-2',
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
