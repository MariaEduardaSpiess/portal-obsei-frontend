import { NgModule } from '@angular/core';
import { NZ_ICONS } from 'ng-zorro-antd';

import {
  MenuFoldOutline,
  MenuUnfoldOutline,
  FormOutline,
  DashboardOutline,
  PlusCircleOutline,
  UserOutline,
  LockOutline
} from '@ant-design/icons-angular/icons';

const icons = [MenuFoldOutline, MenuUnfoldOutline, DashboardOutline, FormOutline, PlusCircleOutline, UserOutline, LockOutline];

@NgModule({
  providers: [
    { provide: NZ_ICONS, useValue: icons }
  ]
})
export class IconsProviderModule {
}
