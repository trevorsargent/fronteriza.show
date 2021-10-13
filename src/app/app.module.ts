import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { PodcastComponent } from './podcast/podcast.component';
import { BorderComponent } from './border/border.component';
import { EventComponent } from './event/event.component';
import { CardComponent } from './card/card.component';
import { LabelComponent } from './label/label.component';
import { ShowComponent } from './show/show.component';
import { MainComponent } from './main/main.component';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { OffcutsComponent } from './watch/offcuts/offcuts.component';
import { RecordingComponent } from './watch/recording/recording.component';
import { ShadowsComponent } from './watch/shadows/shadows.component';
import { WatchComponent } from './watch/watch.component';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeroComponent,
    AboutComponent,
    PodcastComponent,
    BorderComponent,
    EventComponent,
    CardComponent,
    LabelComponent,
    ShowComponent,
    MainComponent,
    WatchComponent,
    ShadowsComponent,
    RecordingComponent,
    OffcutsComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
