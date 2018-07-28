import { Register } from '../../interfaces/register.model';
import { Sorter } from './sorter';
import { Injectable } from '@angular/core';

@Injectable()
export class SorterSelection extends Sorter {
    sortedElements = 0;

    constructor() {
        super();
    }

    sort(register: Register): Register {
        const sortedArray = register.state.slice(0, this.sortedElements);
        let unsortedArray = register.state;
        if (this.sortedElements > 0) {
            unsortedArray = register.state.slice(this.sortedElements, register.state.length);
        }
        let smallestIndex = 0;
        let smallest = 1;
        unsortedArray.map((element, index) => {
            if (element < smallest) {
                smallestIndex = index;
                smallest = element;
            }
        });
        unsortedArray.splice(smallestIndex, 1);
        sortedArray.push(smallest);
        this.sortedElements++;

        register.state = sortedArray.concat(unsortedArray);
        return register;
    }

    resetState(): void {
        this.sortedElements = 0;
    }
}
