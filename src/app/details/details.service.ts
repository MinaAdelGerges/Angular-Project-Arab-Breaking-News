import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { isNgTemplate } from '../../../node_modules/@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  constructor(private _http:HttpClient) { }
  // getNewsDetails(){
  //   return this._http.get(`http://api.mohamed-sadek.com/News/item/${}`);
    
  // }
}
