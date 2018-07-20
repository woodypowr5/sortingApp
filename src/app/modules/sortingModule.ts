import { StateModule } from './stateModule';
import { SortingAlgorithm } from './../classes/sortingAlgorithm.model';
import { Injectable } from '../../../node_modules/@angular/core';

@Injectable()
export class SortingModule {

    constructor(private stateModule: StateModule) {}

    doSort() {
        const sortingAlgorithm = this.stateModule.sortingAlgorithms[this.stateModule.getSortingAlgorithm()];
        const registers = this.stateModule.getRegisters();
        const newRegister = sortingAlgorithm.sorter.sort(registers[registers.length - 1]);
        registers.push(newRegister);
        this.stateModule.setRegisters(registers);
    }
}

