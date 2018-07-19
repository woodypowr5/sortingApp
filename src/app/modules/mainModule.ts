import { ControlModule } from './controlModule';
import { Constants } from '../data/constants';
import { Injectable } from '@angular/core';

@Injectable()
export class MainModule {
    private Constants = Constants;

    constructor(
        private controlModule: ControlModule
    ) {
        controlModule.init();
        controlModule.run();
    }
}
