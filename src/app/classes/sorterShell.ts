import { Register } from './register.model';
import { Sorter } from './sorter';
import { Injectable } from '@angular/core';

@Injectable()
export class SorterShell extends Sorter {
    index = 0;
    gapIndex = 0;
    gaps: number[] = [132, 57, 23, 10, 4, 1];

    constructor() {
        super();
    }

    sort(register: Register): Register {
        if (this.index < register.state.length) {
            const temp = register.state[this.index];
            if (register.state[this.index - this.gaps[this.gapIndex]] > temp) {
                register.state[this.index] = register.state[this.index - this.gaps[this.gapIndex]];
            }
            this.index++;
        } else {
            this.gapIndex++;
            this.index = this.gaps[this.gapIndex];
        }

        return register;
    }

    resetState(): void {
        this.gapIndex = 0;
        this.index = 0;
    }
}
