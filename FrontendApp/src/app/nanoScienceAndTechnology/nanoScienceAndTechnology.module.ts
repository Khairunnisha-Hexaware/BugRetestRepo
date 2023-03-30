import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

import { AddNanoScienceAndTechnologyComponent } from "./add-nanoScienceAndTechnology/add-nanoScienceAndTechnology.component";
import { EditNanoScienceAndTechnologyComponent } from "./edit-nanoScienceAndTechnology/edit-nanoScienceAndTechnology.component";
import { ListNanoScienceAndTechnologyComponent } from "./list-nanoScienceAndTechnology/list-nanoScienceAndTechnology.component";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NanoScienceAndTechnologyRoutes } from "./nanoScienceAndTechnology.routing";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(NanoScienceAndTechnologyRoutes),
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    AddNanoScienceAndTechnologyComponent,
    EditNanoScienceAndTechnologyComponent,
    ListNanoScienceAndTechnologyComponent,
  ],
})
export class NanoScienceAndTechnologyModule {}
