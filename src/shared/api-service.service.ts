import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }

  baseUrl : string = environment.baseUrl; 

  postAjuda(data:any){
    return this.http.post<any>(this.baseUrl+'/cadastroajuda', data);
  }

  getAllAjuda(){
    return this.http.get<any>(this.baseUrl+'/cadastroajuda');
  }

  deleteAjuda(id:any){
    return this.http.delete<any>(this.baseUrl+'/cadastroajuda/'+id);
  }

  updateAjuda(data:any, id:number){
    return this.http.put<any>(this.baseUrl+'/cadastroajuda/'+id, data);
  }

}
