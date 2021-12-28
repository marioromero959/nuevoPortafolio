import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor(private http:HttpClient) { }

  enviarMail(correo:any){
    return this.http.post(`${environment.API_URL}api/users`,{emailBody:correo});
  }

}
