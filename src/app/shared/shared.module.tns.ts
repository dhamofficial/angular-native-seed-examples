import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';

import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';

import { AssetsPipe } from '../assets.pipe';

@NgModule({
    declarations: [ AssetsPipe ],
    exports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        AssetsPipe
    ],
    schemas: [ NO_ERRORS_SCHEMA ]
})
export class SharedModule { }
