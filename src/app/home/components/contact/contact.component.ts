import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MailService } from 'src/app/services/mail.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contacto:FormGroup;
  enviado:boolean = false;

  constructor(private formBuilder: FormBuilder, private mailSvc:MailService) {
    this.contacto = this.formBuilder.group({
      nombre: ['',Validators.required],
      email: ['',[Validators.required,Validators.email]],
      telefono: [''],
      msg: ['',Validators.required],
    })
   }

  ngOnInit(): void {
  }

  get nombreFieldValid(){
    return this.contacto.get('nombre').touched && this.contacto.get('nombre').valid 
  }
  get nombreFieldInvalid(){
    return this.contacto.get('nombre').touched && this.contacto.get('nombre').invalid 
  }
  get emailFieldValid(){
    return this.contacto.get('email').touched && this.contacto.get('email').valid 
  }
  get emailFieldInvalid(){
    return this.contacto.get('email').touched && this.contacto.get('email').invalid 
  }
  get msgFieldValid(){
    return this.contacto.get('msg').touched && this.contacto.get('msg').valid 
  }
  get msgFieldInvalid(){
    return this.contacto.get('msg').touched && this.contacto.get('msg').invalid 
  }

enviar(){
  if(this.contacto.invalid){
    this.contacto.markAllAsTouched();
  }else{
    this.enviado = true;
    this.mailSvc.enviarMail(this.contacto.value).subscribe(res=>{
      console.log(res)
    });
    setTimeout(() => {
      this.enviado = false;
    }, 2000);
    this.contacto.reset();
  }  
}
}
