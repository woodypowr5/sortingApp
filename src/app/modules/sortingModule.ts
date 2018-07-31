import { StateModule } from './stateModule';
import { Injectable } from '@angular/core';

@Injectable()
export class SortingModule {

    constructor(private stateModule: StateModule) {}

    doSort(): boolean {
        const sortingAlgorithm = this.stateModule.sortingAlgorithms.filter(
            algorithm => algorithm.name === this.stateModule.getSortingAlgorithm()
        );
        const registers = this.stateModule.getRegisters();
<<<<<<< HEAD
        const currentRegister = registers[registers.length - 1];
        sortingAlgorithm[0].substepSorter.sort(currentRegister);
        
        const nextRegister = sortingAlgorithm[0].sorter.sort(currentRegister);
=======
        const newRegister = sortingAlgorithm[0].sorter.sort(registers[registers.length - 1]);
>>>>>>> parent of 3a7a465... Added substepSorterSelction into algorithms

        registers.push(newRegister);
        this.stateModule.setRegisters(registers);
        return true;
    }

    doSubstep(): boolean {
        console.log("substep");
        return false;
    }
}

