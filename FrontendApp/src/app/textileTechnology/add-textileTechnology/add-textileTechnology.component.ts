import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { TextileTechnologyService } from "../textileTechnology.service";

@Component({
  selector: "app-add-textileTechnology",
  templateUrl: "./add-textileTechnology.component.html",
  styleUrls: ["./add-textileTechnology.component.css"],
})
export class AddTextileTechnologyComponent implements OnInit {
  form!: FormGroup;

  constructor(
    public fb: FormBuilder,
    private _router: Router,
    public service: TextileTechnologyService
  ) {}

  ngOnInit(): void {
    this.submit();
  }

  submit() {
    this.form = this.fb.group({
      coursename: ["", []],
      coursedescription: ["", []],
      coursetype: ["", []],
      courseduration: ["", []],
      coursechedule: ["", []],
      coursefee: ["", []],
      mobilenumber: ["", []],
      dateofjoining: ["", []],
    });
  }

  add() {
    if (this.form.valid) {
      this.service.addTextileTechnology(this.form.value).subscribe((res) => {
        this._router.navigate(["/list-textileTechnology/"]);
      });
    }
  }

  back() {
    this._router.navigate(["/list-textileTechnology/"]);
  }

  public handleError = (controlName: string, errorName: string) => {
    return this.form.controls[controlName].hasError(errorName);
  };
}
