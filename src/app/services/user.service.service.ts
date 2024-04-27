import { Injectable } from '@angular/core';
import {environment} from "../../environment/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  url:string = environment.apiUrl;

  constructor(private httpClient:HttpClient) { }

  signup(data:any){
    return this.httpClient.post(this.url +
    "/user/signup",data,{
      headers:new HttpHeaders().set('Content-Type', 'application/json')
    })
  }
}
