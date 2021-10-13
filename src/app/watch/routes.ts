import { Routes } from '@angular/router';
import { OffcutsComponent } from './offcuts/offcuts.component';
import { RecordingComponent } from './recording/recording.component';
import { ShadowsComponent } from './shadows/shadows.component';

export const routes: Routes = [
  { path: 'show', component: RecordingComponent },
  { path: 'offcuts', component: OffcutsComponent },
  { path: 'shadows', component: ShadowsComponent },
];
