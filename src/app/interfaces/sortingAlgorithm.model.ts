import { SubstepRenderer } from '../classes/substepRenderer/substepRenderer';
import { Sorter } from '../classes/sorter/sorter';

export interface SortingAlgorithm {
    name: string;
    sorter: Sorter;
    substepSorter: any;
    substepRenderer: SubstepRenderer;
}
