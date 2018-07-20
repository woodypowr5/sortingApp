import { SubstepRenderer } from './substepRenderer';

export interface SortingAlgorithm {
    name: string;
    substepSorter: any;
    substepRenderer: SubstepRenderer;
}
