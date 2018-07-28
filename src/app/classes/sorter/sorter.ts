import { Register } from '../../interfaces/register.model';

export abstract class Sorter {
    public abstract sort(register: Register): Register;
    public abstract resetState(): void;
}