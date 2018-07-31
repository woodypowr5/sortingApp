import { SubstepSorter } from './susbtepSorter';
import { Register } from '../../types/register.model';

export class SubstepSorterSelection extends SubstepSorter {

    constructor() {
        super();
    }

    public sort(register: Register) {
        console.log(register)
    }
}
