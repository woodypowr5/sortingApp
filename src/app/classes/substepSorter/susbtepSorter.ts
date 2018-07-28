import { SubstepMetadata } from '../substepMetadata';
export abstract class SubstepSorter {

    constructor() {}

    public abstract sortSubstep(metadata: SubstepMetadata);
}
