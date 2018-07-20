import { Register } from './register.model';
import { Sorter } from './sorter';
import { Injectable } from '../../../node_modules/@angular/core';

@Injectable()
export class SorterInsertion extends Sorter {
    constructor() {
        super();
    }

    sort(register: Register): Register {
        if (this.index < register.state.length) {
            let j = this.index;
            while (j > 0 && register.state[j - 1] > register.state[j]) {
                register.swap(j, j - 1);
                j--;
            }
            this.index++;
           return register;
        }
        return register;
    }
}
