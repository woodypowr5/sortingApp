export class Register {
    private state: number[];

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
}

