
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


export class HelloWorldBean{
  constructor(public message:string){

  }
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private httpClient : HttpClient
  ) { }

  executeHelloWorldBeanService(){

    return this.httpClient.get<HelloWorldBean>('http://localhost:8088/hello-world-bean');
    // console.log("execute Hell  o World Bean Service")

  } 

  executeHelloWorldBeanServiceWithPathVariable(name:string){
    let basicAuthHeaderString = this.getBasicAuthenticationHeaderString(); 

    let headers = new HttpHeaders({
      Authorization:basicAuthHeaderString
    });
    
    return this.httpClient.get<HelloWorldBean>(`http://localhost:8088/hello-world-bean/path-variable/${name}`,
    {headers:headers});
  } 

  /*Access to fetch at 'http://localhost:8088/login' 
  (redirected from 'http://localhost:8088/hello-world-bean/path-variable/manohar') 
  from origin 'http://localhost:4200' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header 
  is present on the requested resource. 
  If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS 
  disabled. */

  /*Access to fetch at 'http://localhost:8088/login' 
  (redirected from 'http://localhost:8088/hello-world-bean/path-variable/manohar') 
  from origin 'http://localhost:4200' has been blocked by CORS policy: Response to preflight request doesn't pass access control check: 
  No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the 
  request's mode to 'no-cors' to fetch the resource with CORS disabled. */

  getBasicAuthenticationHeaderString(){
    let username = 'manohar'; 
    let password = 'manohar123'; 
    let authorizedHeaderString = 'Basic ' + window.btoa(username+":"+password);
    return authorizedHeaderString;
  }
}
