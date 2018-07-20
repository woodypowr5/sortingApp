import { SortingAlgorithm } from '../classes/sortingAlgorithm.model';
import { Injectable } from '@angular/core';

@Injectable()
export class SortingModule {
    SortingAlgorithms: {
        insertion: SortingAlgorithm,
        selection: SortingAlgorithm
    };

    constructor() { }

    doSort() {
        console.log('do sort');
    }
}
