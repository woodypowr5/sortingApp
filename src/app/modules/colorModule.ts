import { Constants } from '../data/constants';
import { Injectable } from '@angular/core';

 @Injectable()
 export class ColorModule {

    constructor() {}

    getCellColor(cellValue) {
        let r, g, b;
        if (Constants.defaults.colors === 'grayscale') {
            return 'rgb('
                + Math.floor(255 * cellValue)
                + ', '
                + Math.floor(255 * cellValue)
                + ', '
                + Math.floor(255 * cellValue)
                + ')';
        } else if (Constants.defaults.colors === 'color') {
            if (cellValue >= 0 && cellValue < 0.33334 ) {
                r = 0;
                g = (Math.floor((cellValue * 3)  * 255)).toString(16);
                b = 255;
                if (g.toString().length === 1) {
                    g = '0' + g;
                }
                return '#00' + g + 'FF';
            } else if (cellValue >= 0.33334 && cellValue < 0.66667 ) {
                r = 0;
                g = 255;
                b = (255 - (Math.floor(((cellValue - 0.33334) * 3) * 255))).toString(16);
                if (b.toString().length === 1) {
                    b = '0' + b;
                }
                return '#00FF' + b;
            } else {
                r = (Math.floor(((cellValue - 0.66667) * 3) * 255)).toString(16);
                b = 0;
                g = 255;
                if (r.toString().length === 1) {
                    r = '0' + r;
                }
                return '#' + r + 'FF00';
            }
        }
    }
}
