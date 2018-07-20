import { Register } from './register.model';
import { Sorter } from './sorter';

export class SorterSelection extends Sorter {
    constructor() {
        super();
    }

    public sort(register: Register): Register {
        // if(state.i < register.length){
        //     var j = state.i;
        //     while(j > 0 && register[j-1] > register[j]){
        //         register = sortApp.RegisterLogic.swap(register, j, j-1);
        //         j--;
        //     }
        //     state.i++;
        //     return register;
        // }
        // return register;
        return register;
    }
}
