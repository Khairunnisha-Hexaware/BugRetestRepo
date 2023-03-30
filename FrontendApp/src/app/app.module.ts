
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { AppRoutes } from './app.routing';
import { AppComponent } from './app.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { FullComponent } from './layouts/full/full.component';
import { AppHeaderComponent } from './layouts/full/header/header.component';
import { AppSidebarComponent } from './layouts/full/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './demo-material-module';

import { TruncatePipe } from './truncate.pipe';
import { SharedModule } from './shared/shared.module';
import { SpinnerComponent } from './shared/spinner.component';
import { AddTextileTechnologyComponent } from "./textileTechnology/add-textileTechnology/add-textileTechnology.component";
import { EditTextileTechnologyComponent } from "./textileTechnology/edit-textileTechnology/edit-textileTechnology.component";
import { ListTextileTechnologyComponent } from "./textileTechnology/list-textileTechnology/list-textileTechnology.component";
import { AddNanoScienceAndTechnologyComponent } from "./nanoScienceAndTechnology/add-nanoScienceAndTechnology/add-nanoScienceAndTechnology.component";
import { EditNanoScienceAndTechnologyComponent } from "./nanoScienceAndTechnology/edit-nanoScienceAndTechnology/edit-nanoScienceAndTechnology.component";
import { ListNanoScienceAndTechnologyComponent } from "./nanoScienceAndTechnology/list-nanoScienceAndTechnology/list-nanoScienceAndTechnology.component";

@NgModule({
  declarations: [
    AppComponent,
    FullComponent,
    AppHeaderComponent,
    SpinnerComponent,
    AppSidebarComponent,
    TruncatePipe,
        AddTextileTechnologyComponent,
        EditTextileTechnologyComponent,
        ListTextileTechnologyComponent,
        AddNanoScienceAndTechnologyComponent,
        EditNanoScienceAndTechnologyComponent,
        ListNanoScienceAndTechnologyComponent
    ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    HttpClientModule,
    SharedModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
