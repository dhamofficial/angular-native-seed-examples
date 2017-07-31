import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { AssetsPipe } from '../assets.pipe';

@NgModule({
    imports: [ CommonModule ],
    declarations: [ AssetsPipe ],
    exports: [
        CommonModule,
        FormsModule,
        AssetsPipe
    ]
})
export class SharedModule { };
