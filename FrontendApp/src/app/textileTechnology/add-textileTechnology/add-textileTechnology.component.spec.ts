import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { of } from "rxjs";
import { TextileTechnologyService } from "../textileTechnology.service";
import { AddTextileTechnologyComponent } from "./add-textileTechnology.component";

describe("AddTextileTechnologyComponent", () => {
  let mockrouter: any;
  let mockTextileTechnologyService: any;
  let fixture: ComponentFixture<AddTextileTechnologyComponent>;
  let component: AddTextileTechnologyComponent;

  beforeEach(() => {
    mockTextileTechnologyService = jasmine.createSpyObj([
      "addTextileTechnology",
    ]);
    mockrouter = jasmine.createSpyObj("Router", ["navigate"]);

    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AddTextileTechnologyComponent],
      providers: [
        FormBuilder,
        {
          provide: TextileTechnologyService,
          useValue: mockTextileTechnologyService,
        },
        {
          provide: Router,
          useValue: mockrouter,
        },
      ],
    });

    fixture = TestBed.createComponent(AddTextileTechnologyComponent);
    component = fixture.componentInstance;
  });

  describe("add", () => {
    beforeEach(() => {
      mockTextileTechnologyService.addTextileTechnology.and.returnValue(
        of(true)
      );
      fixture.detectChanges();
    });

    it("should add TextileTechnology and navigate to list TextileTechnology", () => {
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
        "/list-textileTechnology/",
      ]);
    });
  });
});
