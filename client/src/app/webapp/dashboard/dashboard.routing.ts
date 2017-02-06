import { Routes, RouterModule }  from '@angular/router';

import { DashboardComponent } from './dashboard.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      //{ path: 'treeview', component: TreeViewComponent }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
