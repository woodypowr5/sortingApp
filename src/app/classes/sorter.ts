import { Register } from './register.model';

export abstract class Sorter {
    public abstract sort(register: Register): Register;
}
