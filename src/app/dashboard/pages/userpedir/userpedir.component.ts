import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiServiceService } from '../../../../shared/api-service.service';


@Component({
  selector: 'app-userpedir',
  templateUrl: './userpedir.component.html',
  styleUrls: ['./userpedir.component.scss'],
  styles: [`
        :host ::ng-deep .p-dialog .product-image {
            width: 150px;
            margin: 0 auto 2rem auto;
            display: block;
        }
    `],
})
export class UserpedirComponent implements OnInit {

  sideBarOpen = false;

  sideBarToggler(): void {
    this.sideBarOpen = !this.sideBarOpen;
  }

  studentForm!: FormGroup;
  studentModel: any;

  constructor(private api: ApiServiceService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createStudentForm();
  }

  createStudentForm() {
    this.studentForm = this.fb.group({
      id:[''],
      name:[''],
      email:[''],
      phone:[''],
      address:[]
    });
  }

}
