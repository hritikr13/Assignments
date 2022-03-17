import { Component, OnInit } from '@angular/core';
import { RestoService } from '../resto.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:string = '';
  password:string = '';

  constructor(private resto: RestoService,private router:Router) { }
  
  ngOnInit(): void {
  }

  logit()
  {
    if(this.user == "hritikr13@gmail.com" && this.password == "hritik123")
    {
      this.router.navigateByUrl("/list");
    }
    else
    {
      alert("ENTER THE RIGHT ADMIN USERNAME AND PASSWORD");
    }
  }

}
