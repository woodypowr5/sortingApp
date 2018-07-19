import { Register } from '../types/register.model';
import { Constants } from '../data/constants';
import { Injectable } from '@angular/core';

@Injectable()
export class StateModule {
    private register: Register;
    private stepNumber: number;
    private substep;
    private stepTime;
    private sortingAlgorithm;
    private Constants = Constants;
    private status = status;

    constructor() {
    }

    init() {
        this.register = new Register();
        this.register.init(this.Constants.defaults.numCells);
        console.log(this.register);
    }

    public getRegister(): any {
        return this.register;
    }
    public setRegister(register: any): void {
        this.register = register;
    }

    public getStepNumber(): number {
        return this.stepNumber;
    }
    public setStepNumber(stepNumber: number): void {
        this.stepNumber = stepNumber;
    }

    public getSubstep(): any {
        return this.substep;
    }
    public setSubstep(substep: any): void {
        this.substep = substep;
    }

    public getStepTime(): any {
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
}
