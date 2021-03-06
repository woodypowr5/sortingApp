import { StateModule } from './modules/stateModule';
import { SortingAlgorithm } from './types/sortingAlgorithm.model';
import { Constants } from './data/constants';
import { ControlModule } from './modules/controlModule';
import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  private display: any;
  private speeds: any[] = [];
  private canvasWidth = Constants.defaults.canvasWidth;
  private canvasId = Constants.defaults.canvasId;
  private sortingAlgorithms: SortingAlgorithm[] = [];

  constructor(private controlModule: ControlModule, private stateModule: StateModule) {
    this.sortingAlgorithms = this.stateModule.sortingAlgorithms;
    this.speeds = Constants.speeds;
  }

  public get status(): string {
    return this.stateModule.getStatus();
  }

  public get activeSortingAlgorithm(): string {
    return this.stateModule.getSortingAlgorithm();
  }

  ngAfterViewInit() {
    this.controlModule.init();
    this.controlModule.run();
  }

  run(): void {
    this.controlModule.run();
  }

  stop(): void {
    this.controlModule.stop();
  }

  reset(): void {
    this.controlModule.reset();
  }

  setSpeed(speed: {name: string, stepTime: number}): void {
    this.controlModule.setStepTime(speed.stepTime);
  }

  setSortingAlgorithm(sortingAlgorithm: SortingAlgorithm): void {
    this.controlModule.setSortingAlgorithm(sortingAlgorithm);
  }
}
