import { Injectable } from '@angular/core';
import { StateModule } from '../modules/stateModule';
import { Subscription, BehaviorSubject } from 'rxjs';
import { Constants } from '../data/constants';

@Injectable()
export class Clock {
    public clockStream: BehaviorSubject<void> = new BehaviorSubject(null);
    private state = 'stopped';

    constructor(private stateModule: StateModule) {}

    private wait() {
        setTimeout(() => {
            this.nextTick();
        }, Constants.defaults.stepTime);
    }

    private nextTick(): void {
        console.log(this.stateModule.getStatus());
        if (this.stateModule.getStatus() === 'running') {
            this.clockStream.next(null);
            this.wait();
        }
    }

    startClockStream() {
        this.stateModule.setStatus('running');
        if (this.stateModule.getStatus() !== 'exitProgram') {
            this.wait();
        }
    }

    stop() {
        this.stateModule.setStatus('stopped');
    }

    resume() {
        this.stateModule.setStatus('running');
    }
}
