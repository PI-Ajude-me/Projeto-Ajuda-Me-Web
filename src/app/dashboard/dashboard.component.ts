import { Component, OnInit } from '@angular/core';
import { PessoaFisica } from 'src/model/pessoa';
import { DataserviceService } from 'src/service/dataservice.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  pessoafisica: PessoaFisica = new PessoaFisica();
 
  constructor(private dataservice: DataserviceService) { }

  ngOnInit(): void {
    this.pessoafisica =  this.dataservice.getPessoaFisica();
  }

  sideBarOpen = false;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }


  selected!: Date | null;

}
