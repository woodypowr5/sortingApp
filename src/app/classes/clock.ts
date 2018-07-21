import { Injectable } from '@angular/core';
import { StateModule } from '../modules/stateModule';
import { Subscription, BehaviorSubject } from 'rxjs';
import { Constants } from '../data/constants';

@Injectable()
export class Clock {
    public clockStream: BehaviorSubject<void> = new BehaviorSubject(null);
    private state = 'stopped';

    constructor(private stateModule: StateModule) {}

    private wait(): void {
        setTimeout(() => {
            this.nextTick();
        }, this.stateModule.getStepTime());
    }

    private nextTick(): void {
        if (this.stateModule.getStatus() === 'running') {
            this.clockStream.next(null);
            this.wait();
        }
    }

    startClockStream(): void {
        this.stateModule.setStatus('running');
        if (this.stateModule.getStatus() !== 'exitProgram') {
            this.wait();
        }
    }

    stop(): void {
        this.stateModule.setStatus('stopped');
    }

    resume(): void {
        this.stateModule.setStatus('running');
    }
}
