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
    ShowComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
