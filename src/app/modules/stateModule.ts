import { Register } from '../classes/register.model';
import { SortingAlgorithm } from './../classes/sortingAlgorithm.model';
import { SubstepMetadata } from '../classes/substepMetadata';
import { Constants } from '../data/constants';
import { Injectable } from '@angular/core';
import * as  createjs from 'createjs-module';
import { SorterInsertion } from '../classes/sorterInsertion';

@Injectable()
export class StateModule {
    private registers: Register[] = [];
    private substepMetadata: SubstepMetadata;
    private stepTime = Constants.defaults.stepTime;
    private sortingAlgorithm: string = Constants.defaults.sortingAlgorithm;
    private status = 'stopped';
    private registerLength = Constants.defaults.numCells;
    private stage: createjs.Stage;
    public sortingAlgorithms: {
        insertion: SortingAlgorithm,
        selection: SortingAlgorithm
    } = {
        insertion: null,
        selection: null
    };

    constructor(
        private sorterInsertion: SorterInsertion
    ) {}

    init() {
        const canvas = document.getElementById(Constants.defaults.canvasId);
        this.stage = new createjs.Stage(canvas);
        this.registers.push(new Register());
        this.registers[0].init(Constants.defaults.numCells);
        this.sortingAlgorithms.insertion = {
            name: 'insertionSort',
            sorter: this.sorterInsertion,
            substepSorter: null,
            substepRenderer: null,
            index: 0
        };
    }

    public getRegisters(): any {
        return this.registers;
    }
    public setRegisters(registers: any): void {
        this.registers = registers;
    }
    public getSubstep(): any {
        return this.substepMetadata;
    }
    public setSubstep(substepMetadata: SubstepMetadata): void {
        this.substepMetadata = substepMetadata;
    }
    public getStepTime(): number {
        return this.stepTime;
    }
    public setStepTime(stepTime: any): void {
        this.stepTime = stepTime;
    }
    public getSortingAlgorithm(): any {
        return this.sortingAlgorithm;
    }
    public setSortingAlgorithm(sortingAlgorithm: any): void {
        this.sortingAlgorithm = sortingAlgorithm;
    }
    public getStatus(): any {
        return this.status;
    }
    public setStatus(status: any): void {
        this.status = status;
    }
    public getRegisterLength(): number {
        return this.registerLength;
    }
    public setRegisterLenght(newLength: number): void {
        this.registerLength = newLength;
    }
    public getStage(): createjs.Stage {
        return this.stage;
    }
    public setStage(newStage: createjs.Stage): void {
        this.stage = newStage;
    }
}
