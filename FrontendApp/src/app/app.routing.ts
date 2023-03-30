import { Routes } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
import { AddTextileTechnologyComponent } from "./textileTechnology/add-textileTechnology/add-textileTechnology.component";
import { EditTextileTechnologyComponent } from "./textileTechnology/edit-textileTechnology/edit-textileTechnology.component";
import { ListTextileTechnologyComponent } from "./textileTechnology/list-textileTechnology/list-textileTechnology.component";
import { AddNanoScienceAndTechnologyComponent } from "./nanoScienceAndTechnology/add-nanoScienceAndTechnology/add-nanoScienceAndTechnology.component";
import { EditNanoScienceAndTechnologyComponent } from "./nanoScienceAndTechnology/edit-nanoScienceAndTechnology/edit-nanoScienceAndTechnology.component";
import { ListNanoScienceAndTechnologyComponent } from "./nanoScienceAndTechnology/list-nanoScienceAndTechnology/list-nanoScienceAndTechnology.component";

export const AppRoutes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: '',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
        { path: 'add-textileTechnology', component: AddTextileTechnologyComponent },
        { path: 'edit-textileTechnology/:id', component: EditTextileTechnologyComponent },
        { path: 'list-textileTechnology', component: ListTextileTechnologyComponent },
        { path: 'add-nanoScienceAndTechnology', component: AddNanoScienceAndTechnologyComponent },
        { path: 'edit-nanoScienceAndTechnology/:id', component: EditNanoScienceAndTechnologyComponent },
        { path: 'list-nanoScienceAndTechnology', component: ListNanoScienceAndTechnologyComponent },
    ]
  }
];
