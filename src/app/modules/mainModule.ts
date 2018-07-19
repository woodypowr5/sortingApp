import { Constants } from './../data/constants';
import { StateModule } from './stateModule';
import { Injectable } from '../../../node_modules/@angular/core';

@Injectable()
export class MainModule {
    private Constants = Constants;
    constructor(
        private stateModule: StateModule
    ) {
        stateModule.init();
    }
}
