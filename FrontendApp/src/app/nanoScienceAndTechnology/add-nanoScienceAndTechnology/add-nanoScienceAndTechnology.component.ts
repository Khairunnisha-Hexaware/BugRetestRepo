import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { NanoScienceAndTechnologyService } from "../nanoScienceAndTechnology.service";

@Component({
  selector: "app-add-nanoScienceAndTechnology",
  templateUrl: "./add-nanoScienceAndTechnology.component.html",
  styleUrls: ["./add-nanoScienceAndTechnology.component.css"],
})
export class AddNanoScienceAndTechnologyComponent implements OnInit {
  form!: FormGroup;

  constructor(
    public fb: FormBuilder,
    private _router: Router,
    public service: NanoScienceAndTechnologyService
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
      this.service
        .addNanoScienceAndTechnology(this.form.value)
        .subscribe((res) => {
          this._router.navigate(["/list-nanoScienceAndTechnology/"]);
        });
    }
  }

  back() {
    this._router.navigate(["/list-nanoScienceAndTechnology/"]);
  }

  public handleError = (controlName: string, errorName: string) => {
    return this.form.controls[controlName].hasError(errorName);
  };
}
