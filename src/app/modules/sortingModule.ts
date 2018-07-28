import { StateModule } from './stateModule';
import { Injectable } from '@angular/core';

@Injectable()
export class SortingModule {

    constructor(private stateModule: StateModule) {}

    doSort() {
        const sortingAlgorithm = this.stateModule.sortingAlgorithms.filter(
            algorithm => algorithm.name === this.stateModule.getSortingAlgorithm()
        );
        const registers = this.stateModule.getRegisters();
        const currentRegister = registers[registers.length - 1];
        sortingAlgorithm[0].substepSorter.sort(currentRegister);
        
        const nextRegister = sortingAlgorithm[0].sorter.sort(currentRegister);

        registers.push(nextRegister);
        this.stateModule.setRegisters(registers);
    }

    doSubstep(): boolean {
        return false;
    }
}

