import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormBuilder } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { of } from "rxjs";
import { TextileTechnology } from "../textileTechnology";
import { TextileTechnologyService } from "../textileTechnology.service";
import { EditTextileTechnologyComponent } from "./edit-textileTechnology.component";

describe("EditTextileTechnologyComponent", () => {
  let mockrouter: any;
  let mockActivatedRoute: any;
  let mockdata: TextileTechnology;
  let mockTextileTechnologyService: any;
  let component: EditTextileTechnologyComponent;
  let fixture: ComponentFixture<EditTextileTechnologyComponent>;

  beforeEach(() => {
    mockdata = {
      coursename: "coursename",
      coursedescription: "coursedescription",
      coursetype: "coursetype",
      courseduration: "courseduration",
      coursechedule: "coursechedule",
      coursefee: "coursefee",
      mobilenumber: "mobilenumber",
      dateofjoining: "dateofjoining",
    };

    mockTextileTechnologyService = jasmine.createSpyObj([
      "getTextileTechnologyById",
      "editTextileTechnology",
    ]);
    mockrouter = jasmine.createSpyObj("Router", ["navigate"]);

    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [EditTextileTechnologyComponent],
      providers: [
        FormBuilder,
        {
          provide: TextileTechnologyService,
          useValue: mockTextileTechnologyService,
        },
        {
          provide: ActivatedRoute,
          useValue: (mockActivatedRoute = {
            snapshot: { params: { id: "1" } },
          }),
        },
        { provide: Router, useValue: mockrouter },
      ],
    });
    fixture = TestBed.createComponent(EditTextileTechnologyComponent);
    component = fixture.componentInstance;
  });

  it("should get the TextileTechnology by id", () => {
    component.id = mockActivatedRoute.snapshot.params["id"];
    mockTextileTechnologyService.getTextileTechnologyById.and.returnValue(
      of(mockdata)
    );
    fixture.detectChanges();
    expect(component.data).toEqual(mockdata);
  });

  describe("edit", () => {
    beforeEach(() => {
      component.id = mockActivatedRoute.snapshot.params["id"];
      mockTextileTechnologyService.getTextileTechnologyById.and.returnValue(
        of(mockdata)
      );
      mockTextileTechnologyService.editTextileTechnology.and.returnValue(
        of(true)
      );
      fixture.detectChanges();
    });

    it("should edit the TextileTechnology by id", () => {
      component.id = mockActivatedRoute.snapshot.params["id"];
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
      component.edit();
      mockrouter.navigate.and.returnValue(Promise.resolve(true));
      expect(mockrouter.navigate).toHaveBeenCalledWith([
        "/list-textileTechnology/",
      ]);
    });
  });
});
