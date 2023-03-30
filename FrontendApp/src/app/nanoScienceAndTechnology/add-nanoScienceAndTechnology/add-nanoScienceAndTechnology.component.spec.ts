import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { of } from "rxjs";
import { NanoScienceAndTechnologyService } from "../nanoScienceAndTechnology.service";
import { AddNanoScienceAndTechnologyComponent } from "./add-nanoScienceAndTechnology.component";

describe("AddNanoScienceAndTechnologyComponent", () => {
  let mockrouter: any;
  let mockNanoScienceAndTechnologyService: any;
  let fixture: ComponentFixture<AddNanoScienceAndTechnologyComponent>;
  let component: AddNanoScienceAndTechnologyComponent;

  beforeEach(() => {
    mockNanoScienceAndTechnologyService = jasmine.createSpyObj([
      "addNanoScienceAndTechnology",
    ]);
    mockrouter = jasmine.createSpyObj("Router", ["navigate"]);

    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AddNanoScienceAndTechnologyComponent],
      providers: [
        FormBuilder,
        {
          provide: NanoScienceAndTechnologyService,
          useValue: mockNanoScienceAndTechnologyService,
        },
        {
          provide: Router,
          useValue: mockrouter,
        },
      ],
    });

    fixture = TestBed.createComponent(AddNanoScienceAndTechnologyComponent);
    component = fixture.componentInstance;
  });

  describe("add", () => {
    beforeEach(() => {
      mockNanoScienceAndTechnologyService.addNanoScienceAndTechnology.and.returnValue(
        of(true)
      );
      fixture.detectChanges();
    });

    it("should add NanoScienceAndTechnology and navigate to list NanoScienceAndTechnology", () => {
      component.form.setValue({
        coursename: "coursename",
        coursedescription: "coursedescription",
        coursetype: "coursetype",
        courseduration: "courseduration",
        coursechedule: "coursechedule",
        coursefee: "coursefee",
        mobilenumber: "mobilenumber",
        dateofjoining: "dateofjoining",
      });
      component.add();
      mockrouter.navigate.and.returnValue(Promise.resolve(true));
      expect(mockrouter.navigate).toHaveBeenCalledWith([
        "/list-nanoScienceAndTechnology/",
      ]);
    });
  });
});
