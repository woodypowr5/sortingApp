import { MainModule } from './modules/mainModule';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private display: any;

  constructor(private mainModule: MainModule) {}
}
