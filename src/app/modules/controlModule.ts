import { Clock } from './../types/clock';
import { StateModule } from './stateModule';
import { Injectable } from '@angular/core';
import { Subscription } from '../../../node_modules/rxjs';

@Injectable()
export class ControlModule {
    private clockSubscriptions: Subscription;

    constructor(private stateModule: StateModule, private clock: Clock) {
        
    }

    init(): void {
        console.log('init control module');
        this.stateModule.init();
        console.log(this.clock);
        const clockStream = this.clock.getClockStream();
        clockStream.subscribe(stream => {
            this.handleNextTick();
        });
    }

    handleNextTick(): void {
        this.nextStep();
    }

    nextStep(): void {
        console.log('next step');
    }

    run(): void {
        this.clock.startClockStream();
        console.log('run control module');
    }

    pause(): void {
        this.clock.stop();
        console.log('paused');
    }

    stop(): void {
        this.clock.stop();
        console.log('stopped');
    }
}
