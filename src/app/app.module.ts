import { SorterComb } from './classes/sorter/sorterComb';
import { SorterShell } from './classes/sorter/sorterShell';
import { SorterSelection } from './classes/sorter/sorterSelection';
import { SortingModule } from './modules/sortingModule';
import { ColorModule } from './modules/colorModule';
import { RenderModule } from './modules/renderModule';
import { Clock } from './classes/clock';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { StateModule } from './modules/stateModule';
import { ControlModule } from './modules/controlModule';
import { SorterInsertion } from './classes/sorter/sorterInsertion';
import { SorterBubble } from './classes/sorter/sorterBubble';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatButtonToggleModule } from '@angular/material';
import { SubstepSorterSelection } from './classes/substepSorter/substepSorterSelection';


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
    SubstepSorterSelection,
    Clock
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
