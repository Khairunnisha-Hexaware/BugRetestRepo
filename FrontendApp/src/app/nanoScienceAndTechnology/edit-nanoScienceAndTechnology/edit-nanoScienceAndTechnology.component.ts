import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { NanoScienceAndTechnology } from "../nanoScienceAndTechnology";
import { NanoScienceAndTechnologyService } from "../nanoScienceAndTechnology.service";

@Component({
  selector: "app-edit-nanoScienceAndTechnology",
  templateUrl: "./edit-nanoScienceAndTechnology.component.html",
  styleUrls: ["./edit-nanoScienceAndTechnology.component.css"],
})
export class EditNanoScienceAndTechnologyComponent implements OnInit {
  data!: NanoScienceAndTechnology;
  id!: any;
  form!: FormGroup;
  private sub!: Subscription;

  constructor(
    public fb: FormBuilder,
    private _router: Router,
    public service: NanoScienceAndTechnologyService,
    private actRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    var id = this.actRoute.snapshot.params["id"];
    this.service
      .getNanoScienceAndTechnologyById(id)
      .subscribe((data: NanoScienceAndTechnology) => {
        this.data = data;
      });
    this.update();
  }

  update() {
    this.form = new FormGroup({
      coursename: new FormControl("", [Validators.required]),
      coursedescription: new FormControl("", [Validators.required]),
      coursetype: new FormControl("", [Validators.required]),
      courseduration: new FormControl("", [Validators.required]),
      coursechedule: new FormControl("", [Validators.required]),
      coursefee: new FormControl("", [Validators.required]),
      mobilenumber: new FormControl("", [Validators.required]),
      dateofjoining: new FormControl("", [Validators.required]),
    });
  }

  edit() {
    if (this.form.valid) {
      var id = this.actRoute.snapshot.params["id"];
      this.service
        .editNanoScienceAndTechnology(id, this.form.value)
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
