import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { TextileTechnology } from "../textileTechnology";
import { TextileTechnologyService } from "../textileTechnology.service";

@Component({
  selector: "app-edit-textileTechnology",
  templateUrl: "./edit-textileTechnology.component.html",
  styleUrls: ["./edit-textileTechnology.component.css"],
})
export class EditTextileTechnologyComponent implements OnInit {
  data!: TextileTechnology;
  id!: any;
  form!: FormGroup;
  private sub!: Subscription;

  constructor(
    public fb: FormBuilder,
    private _router: Router,
    public service: TextileTechnologyService,
    private actRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    var id = this.actRoute.snapshot.params["id"];
    this.service
      .getTextileTechnologyById(id)
      .subscribe((data: TextileTechnology) => {
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
        .editTextileTechnology(id, this.form.value)
        .subscribe((res) => {
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
