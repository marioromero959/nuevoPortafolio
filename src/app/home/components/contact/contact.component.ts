import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contacto:FormGroup;
  enviado:boolean = false;

  constructor(private formBuilder: FormBuilder) {
    this.contacto = this.formBuilder.group({
      nombre: ['',Validators.required],
      email: ['',Validators.required],
      telefono: [''],
      msg: ['',Validators.required],
    })
   }

  ngOnInit(): void {
  }
enviar(){
  let forms = document.querySelectorAll('.form-control')
  if(this.contacto.invalid){
    forms.forEach(form=>{
      form.classList.add('is-invalid');
    })
  }else{
    forms.forEach(form=>{
      form.classList.remove('is-invalid');
    })
    console.log('enviado');
  }
  
}
}
