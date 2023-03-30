import { Component, ViewChild, OnInit } from "@angular/core";
import { TextileTechnologyService } from "../textileTechnology.service";
import { TextileTechnology } from "../textileTechnology";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";

@Component({
  selector: "app-list-textileTechnology",
  templateUrl: "./list-textileTechnology.component.html",
  styleUrls: ["./list-textileTechnology.component.css"],
})
export class ListTextileTechnologyComponent implements OnInit {
  data: TextileTechnology[] = [];
  dataSource = new MatTableDataSource<TextileTechnology>();
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

  constructor(public service: TextileTechnologyService) {}

  ngOnInit(): void {
    this.service
      .getTextileTechnology()
      .subscribe((data: TextileTechnology[]) => {
        this.data = data;
        this.dataSource = new MatTableDataSource<TextileTechnology>(this.data);
        setTimeout(() => {
          this.dataSource.paginator = this.paginator;
        }, 0);
      });
  }

  delete(index: number, id: number) {
    const data = this.dataSource.data;
    data.splice(this.paginator.pageIndex * this.paginator.pageSize + index, 1);
    this.dataSource.data = data;
    this.service.deleteTextileTechnology(id).subscribe();
  }
}
