import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-adm-admin',
  templateUrl: './adm-admin.component.html',
  styleUrls: ['./adm-admin.component.scss']
})
export class AdmAdminComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  sideBarOpen = false;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }


}
