import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { PodcastComponent } from './listen/podcast/podcast.component';
import { BorderComponent } from './border/border.component';
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
import { WatchPickerComponent } from './watch/watch-picker/watch-picker.component';
import { AlbumComponent } from './listen/album/album.component';
import { ListenComponent } from './listen/listen.component';
import { ListenPickerComponent } from './listen/listen-picker/listen-picker.component';
import { FestivalComponent } from './festival/festival.component';
import { SoonComponent } from './soon/soon.component';
import { CreditsComponent } from './credits/credits.component';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeroComponent,
    AboutComponent,
    PodcastComponent,
    BorderComponent,
    CardComponent,
    LabelComponent,
    ShowComponent,
    MainComponent,
    WatchComponent,
    ShadowsComponent,
    RecordingComponent,
    OffcutsComponent,
    WatchPickerComponent,
    AlbumComponent,
    ListenComponent,
    ListenPickerComponent,
    FestivalComponent,
    SoonComponent,
    CreditsComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
