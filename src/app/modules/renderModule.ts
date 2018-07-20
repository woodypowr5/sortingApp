import { Register } from './../classes/register.model';
import { ColorModule } from './colorModule';
import { StateModule } from './stateModule';
import { Constants } from './../data/constants';
import { Injectable } from '@angular/core';
import * as  createjs from 'createjs-module';

@Injectable()
export class RenderModule {

    constructor(private stateModule: StateModule, private colorModule: ColorModule) {}

    public renderStep() {
        const stage = this.stateModule.getStage();
        const registers = this.stateModule.getRegisters();
        const newRow: createjs.Container = this.createRow(registers[registers.length - 1]);
        stage.addChild(newRow);
        stage.update();
        this.stateModule.setStage(stage);
    }

    private createRow(register: Register): createjs.Container {
        const container = new createjs.Container();
        container.y = 0;
        let cellWidth, cellHeight;
        const row = [];
        for (let i = 0; i < register.state.length; i++) {
            cellWidth = this.getCellWidth();
            cellHeight = cellWidth;
            container.addChild(this.createCell(register.state[i], cellWidth, cellHeight, i));
        }
        return container;
    }

    private createCell(cellValue, cellWidth, cellHeight, index) {
        const square = new createjs.Shape();
        const color = this.colorModule.getCellColor(cellValue);
        square.graphics.beginFill(color).drawRect(index * cellWidth, 0, cellWidth, cellHeight);
        console.log(square);
        return square;
    }

    private getCellWidth() {
        return Math.floor(Constants.defaults.canvasWidth / this.stateModule.getRegisterLength());
    }
}

