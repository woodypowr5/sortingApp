import { SorterComb } from './../classes/sorter/sorterComb';
import { SorterShell } from './../classes/sorter/sorterShell';
import { SorterSelection } from './../classes/sorter/sorterSelection';
import { SorterBubble } from '../classes/sorter/sorterBubble';
import { Register } from '../interfaces/register.model';
import { SortingAlgorithm } from '../interfaces/sortingAlgorithm.model';
import { SubstepMetadata } from '../classes/substepMetadata';
import { Constants } from '../data/constants';
import { Injectable } from '@angular/core';
import * as  createjs from 'createjs-module';
import { SorterInsertion } from '../classes/sorter/sorterInsertion';

@Injectable()
export class StateModule {
    private registers: Register[] = [];
    private substepMetadata: SubstepMetadata;
    private stepTime = Constants.defaults.stepTime;
    private sortingAlgorithm: string = Constants.defaults.sortingAlgorithm;
    private status = 'stopped';
    private registerLength = Constants.defaults.numCells;
    private stage: createjs.Stage;
    sortingAlgorithms: SortingAlgorithm[] = [];

    constructor(
        private sorterInsertion: SorterInsertion,
        private sorterBubble: SorterBubble,
        private sorterSelection: SorterSelection,
        private sorterShell: SorterShell,
        private sorterComb: SorterComb
    ) {}

    init() {
        const canvas = document.getElementById(Constants.defaults.canvasId);
        this.stage = new createjs.Stage(canvas);
        this.registers.push(new Register());
        this.registers[0].init(this.registerLength);
        this.sortingAlgorithms.push({
            name: 'insertion',
            sorter: this.sorterInsertion,
            substepSorter: null,
            substepRenderer: null
        });
        this.sortingAlgorithms.push({
            name: 'bubble',
            sorter: this.sorterBubble,
            substepSorter: null,
            substepRenderer: null
        });
        this.sortingAlgorithms.push({
            name: 'selection',
            sorter: this.sorterSelection,
            substepSorter: null,
            substepRenderer: null
        });
        this.sortingAlgorithms.push({
            name: 'comb',
            sorter: this.sorterComb,
            substepSorter: null,
            substepRenderer: null
        });
        // this.sortingAlgorithms.push({
        //     name: 'shell',
        //     sorter: this.sorterShell,
        //     substepSorter: null,
        //     substepRenderer: null
        // });
    }

    resetRegisters(): void {
        const canvas = document.getElementById(Constants.defaults.canvasId);
        this.stage = new createjs.Stage(canvas);
        this.stage.update();
        this.registers = [];
        this.registers.push(new Register());
        this.registers[0].init(this.registerLength);
        this.sortingAlgorithms.map(algorithm => {
            algorithm.sorter.resetState();
        });
    }

    getRegisters(): any {
        return this.registers;
    }
    setRegisters(registers: any): void {
        this.registers = registers;
    }
    getSubstep(): any {
        return this.substepMetadata;
    }
    setSubstep(substepMetadata: SubstepMetadata): void {
        this.substepMetadata = substepMetadata;
    }
    getStepTime(): number {
        return this.stepTime;
    }
    setStepTime(stepTime: any): void {
        this.stepTime = stepTime;
    }
    getSortingAlgorithm(): any {
        return this.sortingAlgorithm;
    }
    setSortingAlgorithm(sortingAlgorithm: string): void {
        this.sortingAlgorithm = sortingAlgorithm;
        this.sortingAlgorithms.map(algorithm => {
            algorithm.sorter.resetState();
        });
    }
    getStatus(): any {
        return this.status;
    }
    setStatus(status: any): void {
        this.status = status;
    }
    getRegisterLength(): number {
        return this.registerLength;
    }
    setRegisterLenght(newLength: number): void {
        this.registerLength = newLength;
    }
    getStage(): createjs.Stage {
        return this.stage;
    }
    setStage(newStage: createjs.Stage): void {
        this.stage = newStage;
    }
}
