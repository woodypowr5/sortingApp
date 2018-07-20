import { SubstepRenderer } from './substepRenderer';
import { Sorter } from './sorter';

export interface SortingAlgorithm {
    name: string;
    sorter: Sorter;
    substepSorter: any;
    substepRenderer: SubstepRenderer;
    index: number;
}
