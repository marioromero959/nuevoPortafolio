import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.scss']
})
export class ProyectsComponent implements OnInit {

  proyectos = [
    {
      titulo:'MiGualeguay',
      descripcion:'Aplicacion movíl desarrollada para el municipio de la Cuidad de Gualeguay.',
      img:'./../../../../assets/gualeapp.png',
      url:'https://github.com/marioromero959/Expedientes'
    },
    {
      titulo:'Centro de Psicología',
      descripcion:'Desarrollo Freelancer con WordPress para profesionales Licenciados en Psicologia.',
      img:'./../../../../assets/centroPEyC.png',
      url:'https://centropeyc.com.ar/'
    },
    {
      titulo:'E-commerce Velka',
      descripcion:'Tienda online desarrollada para venta de productos de moda de la marca Velka.',
      img:'./../../../../assets/velka.png',
      url:'https://github.com/marioromero959/velka-oficial'
    },

  ]

  constructor() { }

  ngOnInit(): void {
  }
}
