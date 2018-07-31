import { Register } from '../../types/register.model';
export abstract class SubstepSorter {

    constructor() {}

<<<<<<< HEAD
    public abstract sort(register: Register);
=======
    public abstract sortSubstep(metadata: SubstepMetadata);
>>>>>>> parent of 3a7a465... Added substepSorterSelction into algorithms
}
