import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
import {RestoService} from '../resto.service'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  alert:boolean = false;
  reg = new FormGroup({
    
    name: new FormControl(''),
    password: new FormControl('')
  })

  constructor(private resto:RestoService) { }

  ngOnInit(): void {
  }

  collection()
  {
    this.resto.registerUser(this.reg.value)
    .subscribe((result) => {
      this.alert = true;
      this.reg.reset({})
    })
  }

  closeAlert()
  {
    this.alert = false;
  }

}
