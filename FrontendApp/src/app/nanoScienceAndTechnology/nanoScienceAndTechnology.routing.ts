import { Routes } from "@angular/router";

import { AddNanoScienceAndTechnologyComponent } from "./add-nanoScienceAndTechnology/add-nanoScienceAndTechnology.component";
import { EditNanoScienceAndTechnologyComponent } from "./edit-nanoScienceAndTechnology/edit-nanoScienceAndTechnology.component";
import { ListNanoScienceAndTechnologyComponent } from "./list-nanoScienceAndTechnology/list-nanoScienceAndTechnology.component";

export const NanoScienceAndTechnologyRoutes: Routes = [
  {
    path: "add-nanoScienceAndTechnology",
    component: AddNanoScienceAndTechnologyComponent,
  },
  {
    path: "edit-nanoScienceAndTechnology/:id",
    component: EditNanoScienceAndTechnologyComponent,
  },
  {
    path: "list-nanoScienceAndTechnology",
    component: ListNanoScienceAndTechnologyComponent,
  },
];
