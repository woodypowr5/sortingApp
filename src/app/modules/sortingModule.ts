import { StateModule } from './stateModule';
import { Injectable } from '../../../node_modules/@angular/core';

@Injectable()
export class SortingModule {

    constructor(private stateModule: StateModule) {}

    doSort() {
        const sortingAlgorithm = this.stateModule.sortingAlgorithms.filter(
            algorithm => algorithm.name === this.stateModule.getSortingAlgorithm()
        );
        const registers = this.stateModule.getRegisters();
        const newRegister = sortingAlgorithm[0].sorter.sort(registers[registers.length - 1]);
        registers.push(newRegister);
        this.stateModule.setRegisters(registers);
    }
}

