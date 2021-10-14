import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { OffcutsComponent } from './watch/offcuts/offcuts.component';
import { RecordingComponent } from './watch/recording/recording.component';
import { ShadowsComponent } from './watch/shadows/shadows.component';
import { WatchComponent } from './watch/watch.component';

export const routes: Routes = [
  { path: '', component: MainComponent },
  {
    path: 'watch',
    component: WatchComponent,
    children: [
      { path: 'show', component: RecordingComponent },
      { path: 'shadows', component: ShadowsComponent },
      { path: 'offcuts', component: OffcutsComponent },
      { path: '', redirectTo: 'show', pathMatch: 'full', },
    ],
  },
  {path: '**', redirectTo: ''}
];
