import { ComponentFixture, TestBed } from "@angular/core/testing";
import { of } from "rxjs";
import { TextileTechnologyService } from "../textileTechnology.service";
import { ListTextileTechnologyComponent } from "./list-textileTechnology.component";
import { TextileTechnology } from "../textileTechnology";

describe("ListTextileTechnologyComponent", () => {
  let mockpaginator: any;
  let mockdata: TextileTechnology[] = [];
  let mockTextileTechnologyService: any;
  let fixture: ComponentFixture<ListTextileTechnologyComponent>;
  let component: ListTextileTechnologyComponent;

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

    mockTextileTechnologyService = jasmine.createSpyObj([
      "getTextileTechnology",
      "deleteTextileTechnology",
    ]);
    mockpaginator = jasmine.createSpyObj("MatPaginator", ["pageIndex"]);

    TestBed.configureTestingModule({
      declarations: [ListTextileTechnologyComponent],
      providers: [
        {
          provide: TextileTechnologyService,
          useValue: mockTextileTechnologyService,
        },
      ],
    });

    fixture = TestBed.createComponent(ListTextileTechnologyComponent);
    component = fixture.componentInstance;
  });

  it("should get all the TextileTechnologys", async () => {
    mockTextileTechnologyService.getTextileTechnology.and.returnValue(
      of(mockdata)
    );
    fixture.detectChanges();
    expect(component.data).toBe(mockdata);
  });

  describe("delete", () => {
    beforeEach(() => {
      mockTextileTechnologyService.deleteTextileTechnology.and.returnValue(
        of(true)
      );
      component.dataSource.data = mockdata;
      component.paginator = mockpaginator;
    });

    it("should delete the TextileTechnology by id", () => {
      component.delete(0, 0);
      expect(component.data.length).toBe(0);
    });
  });
});
