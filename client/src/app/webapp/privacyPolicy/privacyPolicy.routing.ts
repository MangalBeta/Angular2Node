/**
 * Created by avinash on 3/12/16.
 */
import { Routes, RouterModule }  from '@angular/router';

import { PrivacyPolicy } from './privacyPolicy.component';

const routes: Routes = [
  {
    path: '',
    component: PrivacyPolicy,
    children: [
      //{ path: 'treeview', component: TreeViewComponent }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
