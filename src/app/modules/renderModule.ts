import { Register } from '../interfaces/register.model';
import { ColorModule } from './colorModule';
import { StateModule } from './stateModule';
import { Constants } from '../data/constants';
import { Injectable } from '@angular/core';
import * as  createjs from 'createjs-module';

@Injectable()
export class RenderModule {

    constructor(private stateModule: StateModule, private colorModule: ColorModule) {}

    renderStep() {
        const stage: createjs.Stage = this.stateModule.getStage();
        const registers = this.stateModule.getRegisters();
        const newRow: createjs.Container = this.createRow(registers[registers.length - 1]);
        stage.addChild(newRow);
        this.setRowYPositions(stage);
        stage.update();
        this.stateModule.setStage(stage);
    }

    private createRow(register: Register): createjs.Container {
        let cellWidth, cellHeight;
        const container = new createjs.Container();
        const row = [];

        container.y = 0;
        for (let i = 0; i < register.state.length; i++) {
            cellWidth = this.getCellWidth();
            cellHeight = cellWidth;
            container.addChild(this.createCell(register.state[i], cellWidth, cellHeight, i));
        }
        return container;
    }

    private setRowYPositions(stage: createjs.Stage): createjs.Stage {
        const newStage = this.pruneRows(stage);
        const rowHeight = this.getCellWidth();

        for (let i = 0; i < newStage.children.length; i++) {
            newStage.children[i].y = i * rowHeight;
        }
        return newStage;
    }

    private pruneRows(stage: createjs.Stage): createjs.Stage {
        const rows = stage.children;
        const numRows = stage.children.length;
        const maxRows = Math.floor(Constants.defaults.canvasHeight / this.getCellWidth());

        if (numRows > maxRows) {
            stage.children.shift();
        }
        return stage;
    }

    private createCell(cellValue, cellWidth, cellHeight, index) {
        const square = new createjs.Shape();
        const color = this.colorModule.getCellColor(cellValue);

        square.graphics.beginFill(color).drawRect(index * cellWidth, 0, cellWidth, cellHeight);
        return square;
    }

    private getCellWidth() {
        return Math.floor(Constants.defaults.canvasWidth / this.stateModule.getRegisterLength());
    }
}

