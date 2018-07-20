import { Clock } from '../types/clock';
import { StateModule } from './stateModule';
import { Injectable, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Injectable()
export class ControlModule implements OnDestroy {
    private clockSubscriptions: Subscription;

    constructor(private stateModule: StateModule, private clock: Clock) { }

    init(): void {
        this.stateModule.init();
        this.clockSubscriptions = this.clock.clockStream.subscribe(stream => {
            this.handleNextTick();
        });
    }

    stop(): void {
        this.clock.stop();
        console.log('stopped');
    }

    run(): void {
        this.clock.startClockStream();
    }

    private handleNextTick(): void {
        this.nextStep();
    }

    private nextStep(): void {
        console.log('next step');
    }

    ngOnDestroy() {
        this.clockSubscriptions.unsubscribe();
    }
}
