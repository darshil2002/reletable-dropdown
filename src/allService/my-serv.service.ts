import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Root, projectAllData } from 'src/module';


@Injectable({
  providedIn: 'root'
})
export class MyServService {

  constructor(private http:HttpClient) { }

  getRoleData(){
    return this.http.get<Root>('https://cmi-ofm.azurewebsites.net/api/Program')
  }
  getProjectData(){
    return this.http.get<projectAllData>('https://cmi-ofm.azurewebsites.net/api/GetAllActiveProject')
  }
}
