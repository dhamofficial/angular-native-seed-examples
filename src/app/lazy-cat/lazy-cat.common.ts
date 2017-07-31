// vendor dependencies
import { TranslateModule } from '@ngx-translate/core';
// app
import { SharedModule } from '../shared';
import { RouterModule } from '../common';
import { LazyCatRoutes } from './lazy-cat.routes';
import { LazyCatComponent } from './components/lazy-cat/lazy-cat.component';

export const SHARED_MODULES: any[] = [
  SharedModule,
  RouterModule.forChild(<any>LazyCatRoutes),
  TranslateModule.forChild(),
];

export const COMPONENT_DECLARATIONS: any[] = [
  LazyCatComponent
];
