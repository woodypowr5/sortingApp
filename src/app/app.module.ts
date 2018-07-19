import { MainModule } from './modules/mainModule';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StateModule } from './modules/stateModule';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    MainModule,
    StateModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
