import { NgModule } from '@angular/core';
import { SHARED_MODULES, COMPONENT_DECLARATIONS } from './infinite.common';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  imports: [
    ...SHARED_MODULES,
    InfiniteScrollModule
  ],
  declarations: [
    ...COMPONENT_DECLARATIONS
  ],
})
export class InfiniteModule { }
