import { RenderModule } from './modules/renderModule';
import { SortingModule } from './modules/sortingModule';
import { Clock } from './classes/clock';
import { MainModule } from './modules/mainModule';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StateModule } from './modules/stateModule';
import { ControlModule } from './modules/controlModule';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    MainModule,
    StateModule,
    ControlModule,
    SortingModule,
    RenderModule,
    Clock
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
