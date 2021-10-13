import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { WatchComponent } from './watch.component';
import { ShadowsComponent } from './shadows/shadows.component';
import { RecordingComponent } from './recording/recording.component';
import { OffcutsComponent } from './offcuts/offcuts.component';

@NgModule({
  declarations: [],
  imports: [BrowserModule, RouterModule.forChild(routes)],
  providers: [],
})
export class WatchModule {}
