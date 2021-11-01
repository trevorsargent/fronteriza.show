import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { PodcastComponent } from './listen/podcast/podcast.component';
import { OffcutsComponent } from './watch/offcuts/offcuts.component';
import { WatchPickerComponent } from './watch/watch-picker/watch-picker.component';
import { RecordingComponent } from './watch/recording/recording.component';
import { ShadowsComponent } from './watch/shadows/shadows.component';
import { WatchComponent } from './watch/watch.component';
import { ListenComponent } from './listen/listen.component';
import { AlbumComponent } from './listen/album/album.component';
import { FestivalComponent } from './festival/festival.component';
import { MythComponent } from './watch/myth/myth.component';

export const routes: Routes = [
  { path: '', component: MainComponent },
  {
    path: 'watch',
    component: WatchComponent,
    children: [
      { path: 'show', component: RecordingComponent },
      { path: 'shadows', component: ShadowsComponent },
      { path: 'myth', component: MythComponent },
      { path: 'offcuts', component: OffcutsComponent },
      { path: '', component: WatchPickerComponent },
    ],
  },

  {
    path: 'listen',
    component: ListenComponent,
    children: [
      { path: 'podcast', component: PodcastComponent },
      { path: 'album', component: AlbumComponent },
    ],
  },
  { path: 'festival', component: FestivalComponent },

  { path: '**', redirectTo: '' },
];
