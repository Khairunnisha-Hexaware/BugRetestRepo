import { Routes } from "@angular/router";

import { AddTextileTechnologyComponent } from "./add-textileTechnology/add-textileTechnology.component";
import { EditTextileTechnologyComponent } from "./edit-textileTechnology/edit-textileTechnology.component";
import { ListTextileTechnologyComponent } from "./list-textileTechnology/list-textileTechnology.component";

export const TextileTechnologyRoutes: Routes = [
  { path: "add-textileTechnology", component: AddTextileTechnologyComponent },
  {
    path: "edit-textileTechnology/:id",
    component: EditTextileTechnologyComponent,
  },
  { path: "list-textileTechnology", component: ListTextileTechnologyComponent },
];
