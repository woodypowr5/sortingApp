import { Constants } from '../data/constants';
import { Injectable } from '@angular/core';

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
        } else if (Constants.defaults.colors === 'color') {
            let r, g, b;
            if (cellValue >= 0 && cellValue < 0.333 ) {
                r = 0;
                g = (Math.floor((cellValue * 3)  * 255)).toString(16);
                b = 255;
                if (g.toString().length === 1) {
                    g = '0' + g;
                }
                return '#00' + g + 'FF';
            } else if (cellValue >= 0.334 && cellValue < 0.667 ) {
                r = 0;
                g = 255;
                b = (255 - (Math.floor(((cellValue - 0.333) * 3) * 255))).toString(16);
                if (b.toString().length === 1) {
                    b = '0' + b;
                }
                return '#00FF' + b;
            } else {
                b = 0;
                g = 255;
                r = (Math.floor(((cellValue - 0.666) * 3) * 255)).toString(16);
                if (r.toString().length === 1) {
                    r = '0' + r;
                }
                return '#' + r + 'FF00';
            }
        }
    }
}
