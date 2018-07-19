import { StateModule } from './stateModule';
import { Injectable } from '../../../node_modules/@angular/core';

@Injectable()
export class ControlModule {

    constructor(private stateModule: StateModule) {}

    init(): void {
        console.log('init control module');
        this.stateModule.init();
    }

    run(): void {
        console.log('run control module');
    }

    pause(): void {
        console.log('paused');
    }

    stop(): void {
        console.log('stopped');
    }
}
