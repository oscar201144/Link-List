import { Component, OnInit } from '@angular/core';
import {FormControl, FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  //Inyectar en el constructo en Frombuilder
  constructor( private fromBuilder: FormBuilder) {
    /// Creamos para el grupo de controladores el formulario de login
    this.form= this.fromBuilder.group({
      password:['',[]],
      mail:['',[]]
    })
  }

  ngOnInit(): void {
  }

}
