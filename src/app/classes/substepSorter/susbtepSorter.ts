import { Register } from '../../types/register.model';
export abstract class SubstepSorter {

    constructor() {}

    public abstract sort(register: Register);
}
