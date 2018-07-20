import { Injectable } from '@angular/core';
import { Register } from '../classes/register.model';

@Injectable()
export class RenderModule {
    public renderStep() {
        console.log('step rendered');
    }
}
