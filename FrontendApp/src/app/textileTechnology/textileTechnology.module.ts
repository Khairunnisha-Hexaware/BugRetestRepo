import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

import { AddTextileTechnologyComponent } from "./add-textileTechnology/add-textileTechnology.component";
import { EditTextileTechnologyComponent } from "./edit-textileTechnology/edit-textileTechnology.component";
import { ListTextileTechnologyComponent } from "./list-textileTechnology/list-textileTechnology.component";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TextileTechnologyRoutes } from "./textileTechnology.routing";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(TextileTechnologyRoutes),
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    AddTextileTechnologyComponent,
    EditTextileTechnologyComponent,
    ListTextileTechnologyComponent,
  ],
})
export class TextileTechnologyModule {}
