import { Register } from './register.model';
import { Sorter } from './sorter';
import { Injectable } from '@angular/core';

@Injectable()
export class SorterComb extends Sorter {
    private index = 10;
    private swapped = false;
    private gap = 10;

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
        this.index = 10;
        this.gap = 10;
        this.swapped = false;
    }
}
