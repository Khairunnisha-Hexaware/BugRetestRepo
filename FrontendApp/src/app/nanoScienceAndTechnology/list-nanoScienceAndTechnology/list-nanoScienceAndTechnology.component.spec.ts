import { ComponentFixture, TestBed } from "@angular/core/testing";
import { of } from "rxjs";
import { NanoScienceAndTechnologyService } from "../nanoScienceAndTechnology.service";
import { ListNanoScienceAndTechnologyComponent } from "./list-nanoScienceAndTechnology.component";
import { NanoScienceAndTechnology } from "../nanoScienceAndTechnology";

describe("ListNanoScienceAndTechnologyComponent", () => {
  let mockpaginator: any;
  let mockdata: NanoScienceAndTechnology[] = [];
  let mockNanoScienceAndTechnologyService: any;
  let fixture: ComponentFixture<ListNanoScienceAndTechnologyComponent>;
  let component: ListNanoScienceAndTechnologyComponent;

  beforeEach(() => {
    mockdata = [
      {
        coursename: "coursename",
        coursedescription: "coursedescription",
        coursetype: "coursetype",
        courseduration: "courseduration",
        coursechedule: "coursechedule",
        coursefee: "coursefee",
        mobilenumber: "mobilenumber",
        dateofjoining: "dateofjoining",
      },
    ];

    mockNanoScienceAndTechnologyService = jasmine.createSpyObj([
      "getNanoScienceAndTechnology",
      "deleteNanoScienceAndTechnology",
    ]);
    mockpaginator = jasmine.createSpyObj("MatPaginator", ["pageIndex"]);

    TestBed.configureTestingModule({
      declarations: [ListNanoScienceAndTechnologyComponent],
      providers: [
        {
          provide: NanoScienceAndTechnologyService,
          useValue: mockNanoScienceAndTechnologyService,
        },
      ],
    });

    fixture = TestBed.createComponent(ListNanoScienceAndTechnologyComponent);
    component = fixture.componentInstance;
  });

  it("should get all the NanoScienceAndTechnologys", async () => {
    mockNanoScienceAndTechnologyService.getNanoScienceAndTechnology.and.returnValue(
      of(mockdata)
    );
    fixture.detectChanges();
    expect(component.data).toBe(mockdata);
  });

  describe("delete", () => {
    beforeEach(() => {
      mockNanoScienceAndTechnologyService.deleteNanoScienceAndTechnology.and.returnValue(
        of(true)
      );
      component.dataSource.data = mockdata;
      component.paginator = mockpaginator;
    });

    it("should delete the NanoScienceAndTechnology by id", () => {
      component.delete(0, 0);
      expect(component.data.length).toBe(0);
    });
  });
});
