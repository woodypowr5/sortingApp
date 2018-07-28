import { SortingAlgorithm } from './../interfaces/sortingAlgorithm.model';
import { SortingModule } from './sortingModule';
import { RenderModule } from './renderModule';
import { Clock } from '../classes/clock';
import { StateModule } from './stateModule';
import { Injectable, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Injectable()
export class ControlModule implements OnDestroy {
    private clockSubscription: Subscription;

    constructor(
        private stateModule: StateModule,
        private renderModule: RenderModule,
        private sortingModule: SortingModule,
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

    reset(): void {
        this.stateModule.resetRegisters();
    }

    setStepTime(stepTime: number): void {
        this.stateModule.setStepTime(stepTime);
    }

    setSortingAlgorithm(sortingAlgorithm: SortingAlgorithm): void {
        this.stateModule.setSortingAlgorithm(sortingAlgorithm.name);
    }

    private handleNextTick(): void {
        this.nextStep();
    }

    private nextStep(): void {
        const registers = this.stateModule.getRegisters();
        if (registers[registers.length - 1].isSorted() === false) {
            this.sortingModule.doSort();
            this.renderModule.renderStep();
        } else {
            this.stop();
        }
    }

    private nextSubstep(): void {
        console.log('next substep');
    }

    ngOnDestroy() {
        this.clockSubscription.unsubscribe();
    }
}
