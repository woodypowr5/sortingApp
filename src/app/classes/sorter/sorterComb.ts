import { Constants } from '../../data/constants';
import { Register } from '../../types/register.model';
import { Sorter } from './sorter';
import { Injectable } from '@angular/core';

@Injectable()
export class SorterComb extends Sorter {
    private index = Constants.defaults.numCells - 2;
    private gap = Constants.defaults.numCells - 2;

    constructor() {
        super();
    }

    sort(register: Register): Register {
        if (this.index === register.state.length) {
            this.gap--;
            this.index = this.gap;
        }
        if (register.state[this.index - this.gap] > register.state[this.index]) {
            register.swap(this.index, this.index - this.gap);
        }
        this.index++;
        return register;
    }

    resetState(): void {
        this.index = Constants.defaults.numCells - 2;
        this.gap = Constants.defaults.numCells - 2;
    }
}
