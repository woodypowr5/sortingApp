import { Register } from './register.model';

export abstract class Sorter {
    index = 0;

    public abstract sort(register: Register): Register;

    setIndex(newIndex: number): void  {
        this.index = newIndex;
    }
}
