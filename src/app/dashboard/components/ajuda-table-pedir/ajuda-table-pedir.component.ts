import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiServiceService } from '../../../../shared/api-service.service';

@Component({
  selector: 'app-ajuda-table-pedir',
  templateUrl: './ajuda-table-pedir.component.html',
  styleUrls: ['./ajuda-table-pedir.component.scss']
})
export class AjudaTablePedirComponent implements OnInit {

  displayModal: boolean = false;

  showModalDialog() {
      this.displayModal = true;
  }

  ajudaForm!: FormGroup;
  ajudaModel: any;
  ajudaDetails:any;
  showAddBtn: boolean=true;
  showUpdateBtn: boolean=false;


  constructor(private api: ApiServiceService, private fb: FormBuilder) {}

  ngOnInit(): void {
    //this.getAllAjudaDetails();
    this.createAjudaForm();
  }

  createAjudaForm(){
    this.ajudaForm = this.fb.group({
      id: [''],
      usuario:[''],
      descricao:[''],
      contato:[''],
      data:[]
    })
  }

  // getAllAjudaDetails(){
  //   this.api.getAllAjuda().subscribe(res=>{
  //     this.ajudaDetails = res;
  //   }, err=>{
  //     console.log(err);
  //   })
  // }

  onAddClick(){
    this.showAddBtn=true;
    this.showUpdateBtn=false;
  }

  postAjudaDetails(){
    this.ajudaModel = Object.assign({}, this.ajudaForm.value);

    this.api.postAjuda(this.ajudaModel).subscribe(res=>{
      alert("Ajuda cadastrada com sucesso!");
      let close = document.getElementById('close');
      close?.click();
      this.ajudaForm.reset();
     // this.getAllAjudaDetails();
    }, err=> {
      alert("Error");
    })
  }

  deleteAjudaDetail(id:any){
    this.api.deleteAjuda(id).subscribe(res=>{
      alert("Ajuda excluida com sucesso!");
    //  this.getAllAjudaDetails();
    }, err=>{
      alert("Falha ao excluir ajuda");
    })                       
  }

  edit(ajuda:any){
    this.showAddBtn=false;
    this.showUpdateBtn=true;
    this.ajudaForm.controls['id'].setValue(ajuda.id);
    this.ajudaForm.controls['usuario'].setValue(ajuda.usuario);
    this.ajudaForm.controls['descricao'].setValue(ajuda.descricao);
    this.ajudaForm.controls['contato'].setValue(ajuda.contato);
    this.ajudaForm.controls['data'].setValue(ajuda.data);
  }

  updateAjudaDetails(){
    this.ajudaModel = Object.assign({}, this.ajudaForm.value);
    this.api.updateAjuda(this.ajudaModel, this.ajudaModel.id).subscribe(res=>{
      alert("Alteração feita com sucesso!");
      let close = document.getElementById('close');
      close?.click();
      //this.getAllAjudaDetails();
      this.ajudaForm.reset();
      this.ajudaModel={};
    }, err=>{
      alert("Erro! Não foi possivel alterar");
    })
  }

  reset(){
    this.ajudaForm.reset();
    this.ajudaModel={};
  }

}
