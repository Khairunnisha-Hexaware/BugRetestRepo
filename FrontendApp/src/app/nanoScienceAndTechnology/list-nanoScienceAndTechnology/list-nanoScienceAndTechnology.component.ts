import { Component, ViewChild, OnInit } from "@angular/core";
import { NanoScienceAndTechnologyService } from "../nanoScienceAndTechnology.service";
import { NanoScienceAndTechnology } from "../nanoScienceAndTechnology";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";

@Component({
  selector: "app-list-nanoScienceAndTechnology",
  templateUrl: "./list-nanoScienceAndTechnology.component.html",
  styleUrls: ["./list-nanoScienceAndTechnology.component.css"],
})
export class ListNanoScienceAndTechnologyComponent implements OnInit {
  data: NanoScienceAndTechnology[] = [];
  dataSource = new MatTableDataSource<NanoScienceAndTechnology>();
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  displayedColumns: string[] = [
    "coursename",
    "coursedescription",
    "coursetype",
    "courseduration",
    "coursechedule",
    "coursefee",
    "mobilenumber",
    "dateofjoining",
    "action",
  ];

  constructor(public service: NanoScienceAndTechnologyService) {}

  ngOnInit(): void {
    this.service
      .getNanoScienceAndTechnology()
      .subscribe((data: NanoScienceAndTechnology[]) => {
        this.data = data;
        this.dataSource = new MatTableDataSource<NanoScienceAndTechnology>(
          this.data
        );
        setTimeout(() => {
          this.dataSource.paginator = this.paginator;
        }, 0);
      });
  }

  delete(index: number, id: number) {
    const data = this.dataSource.data;
    data.splice(this.paginator.pageIndex * this.paginator.pageSize + index, 1);
    this.dataSource.data = data;
    this.service.deleteNanoScienceAndTechnology(id).subscribe();
  }
}
