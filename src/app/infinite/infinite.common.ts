// vendor dependencies
import { TranslateModule } from '@ngx-translate/core';
// app
import { SharedModule } from '../shared';
import { RouterModule } from '../common';
import { InfiniteRoutes } from './infinite.routes';

import { InfiniteComponent } from './components/infinite/infinite.component';
import { ItemTemplateComponent } from './components/item-template/item-template.component';

export const SHARED_MODULES: any[] = [
  SharedModule,
  RouterModule.forChild(<any>InfiniteRoutes),
  TranslateModule.forChild(),
];

export const COMPONENT_DECLARATIONS: any[] = [
  InfiniteComponent, ItemTemplateComponent
];
