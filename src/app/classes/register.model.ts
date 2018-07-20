export class Register {
    state: number[];

    constructor() {
        this.state = [];
    }

    init(size: number) {
        for (let i = 0; i < size; i++) {
            if (this.state) {
                this.state.push(Math.random());
            }
        }
    }

    isSorted(index: number, registerState: number[]): boolean {
        if (!registerState) {
            registerState = this.state;
        }
        if (index === undefined) {
            index = 0;
        }
        if (index === registerState.length - 1) {
            return true;
        }
        if (registerState[index + 1] > registerState[index]) {
            return this.isSorted(index + 1, registerState);
        }
        return false;
    }

    swap(index1: number, index2: number): void {
        const item1 = this.state[index1];
        const item2 = this.state[index2];
        this.state[index1] = item2;
        this.state[index2] = item1;
    }

    getState(): number[] {
        return this.state;
    }

    setState(newState: number[]) {
        this.state = newState;
    }
}
