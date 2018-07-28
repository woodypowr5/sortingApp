import { SubstepMetadata } from '../substepMetadata';
export abstract class SubstepRenderer {

    constructor() {}

    public abstract renderSubstep(metadata: SubstepMetadata);
}
