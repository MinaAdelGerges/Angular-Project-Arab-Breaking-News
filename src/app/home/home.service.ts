import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private _http:HttpClient) { }

  getDepts(){
    return this._http.get("http://api.mohamed-sadek.com/News/Departments");
    
  }
}
