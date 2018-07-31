import { Register } from '../../types/register.model';
import { Sorter } from './sorter';
import { Injectable } from '@angular/core';

@Injectable()
export class SorterBubble extends Sorter {
    private index = 0;
    private swapped = false;

    constructor() {
        super();
    }

    sort(register: Register): Register {
        if (this.index === register.state.length) {
            this.index = 1;
        }
        if (register.state[this.index - 1] > register.state[this.index]) {
            register.swap(this.index, this.index - 1);
        }
        this.index++;
        return register;
    }

    resetState(): void {
        this.index = 0;
        this.swapped = false;
    }
}
