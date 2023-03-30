import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormBuilder } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { of } from "rxjs";
import { NanoScienceAndTechnology } from "../nanoScienceAndTechnology";
import { NanoScienceAndTechnologyService } from "../nanoScienceAndTechnology.service";
import { EditNanoScienceAndTechnologyComponent } from "./edit-nanoScienceAndTechnology.component";

describe("EditNanoScienceAndTechnologyComponent", () => {
  let mockrouter: any;
  let mockActivatedRoute: any;
  let mockdata: NanoScienceAndTechnology;
  let mockNanoScienceAndTechnologyService: any;
  let component: EditNanoScienceAndTechnologyComponent;
  let fixture: ComponentFixture<EditNanoScienceAndTechnologyComponent>;

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

    mockNanoScienceAndTechnologyService = jasmine.createSpyObj([
      "getNanoScienceAndTechnologyById",
      "editNanoScienceAndTechnology",
    ]);
    mockrouter = jasmine.createSpyObj("Router", ["navigate"]);

    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [EditNanoScienceAndTechnologyComponent],
      providers: [
        FormBuilder,
        {
          provide: NanoScienceAndTechnologyService,
          useValue: mockNanoScienceAndTechnologyService,
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
    fixture = TestBed.createComponent(EditNanoScienceAndTechnologyComponent);
    component = fixture.componentInstance;
  });

  it("should get the NanoScienceAndTechnology by id", () => {
    component.id = mockActivatedRoute.snapshot.params["id"];
    mockNanoScienceAndTechnologyService.getNanoScienceAndTechnologyById.and.returnValue(
      of(mockdata)
    );
    fixture.detectChanges();
    expect(component.data).toEqual(mockdata);
  });

  describe("edit", () => {
    beforeEach(() => {
      component.id = mockActivatedRoute.snapshot.params["id"];
      mockNanoScienceAndTechnologyService.getNanoScienceAndTechnologyById.and.returnValue(
        of(mockdata)
      );
      mockNanoScienceAndTechnologyService.editNanoScienceAndTechnology.and.returnValue(
        of(true)
      );
      fixture.detectChanges();
    });

    it("should edit the NanoScienceAndTechnology by id", () => {
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
        "/list-nanoScienceAndTechnology/",
      ]);
    });
  });
});
