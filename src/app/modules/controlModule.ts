import { RenderModule } from './renderModule';
import { SortingModule } from './sortingModule';
import { Clock } from '../classes/clock';
import { StateModule } from './stateModule';
import { Injectable, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Injectable()
export class ControlModule implements OnDestroy {
    private clockSubscription: Subscription;

    constructor(
        private stateModule: StateModule,
        private sortingModule: SortingModule,
        private renderModule: RenderModule,
        private clock: Clock
    ) { }

    init(): void {
        this.stateModule.init();
        this.clockSubscription = this.clock.clockStream.subscribe(stream => {
            this.handleNextTick();
        });
    }

    stop(): void {
        this.clock.stop();
    }

    run(): void {
        this.clock.startClockStream();
    }

    private handleNextTick(): void {
        this.nextStep();
    }

    private nextStep(): void {
        this.sortingModule.doSort();
        this.renderModule.renderStep();
    }

    private nextSubstep(): void {
        console.log('next substep');
    }

    ngOnDestroy() {
        this.clockSubscription.unsubscribe();
    }
}
