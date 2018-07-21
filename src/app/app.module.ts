import { SortingModule } from './modules/sortingModule';
import { ColorModule } from './modules/colorModule';
import { RenderModule } from './modules/renderModule';
import { Clock } from './classes/clock';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StateModule } from './modules/stateModule';
import { ControlModule } from './modules/controlModule';
import { SorterInsertion } from './classes/sorterInsertion';
import { SorterBubble } from './classes/sorterBubble';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    StateModule,
    ControlModule,
    SortingModule,
    RenderModule,
    ColorModule,
    SorterInsertion,
    SorterBubble,
    Clock
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
