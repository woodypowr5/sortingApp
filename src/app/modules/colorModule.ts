import { Constants } from './../data/constants';
import { Injectable } from '../../../node_modules/@angular/core';

 @Injectable()
 export class ColorModule {

    constructor() {}

    getCellColor(cellValue) {
        if (Constants.defaults.colors === 'grayscale') {
            return 'rgb('
                + Math.floor(255 * cellValue)
                + ', '
                + Math.floor(255 * cellValue)
                + ', '
                + Math.floor(255 * cellValue)
                + ')';
        }
    }
 }
