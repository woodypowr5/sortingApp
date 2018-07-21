import { SorterComb } from './classes/sorterComb';
import { SorterShell } from './classes/sorterShell';
import { SorterSelection } from './classes/sorterSelection';
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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatButtonToggleModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MatButtonModule,
    MatCardModule,
    MatButtonToggleModule
  ],
  providers: [
    StateModule,
    ControlModule,
    SortingModule,
    RenderModule,
    ColorModule,
    SorterInsertion,
    SorterBubble,
    SorterSelection,
    SorterShell,
    SorterComb,
    Clock
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
