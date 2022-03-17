import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {RestoService} from '../resto.service';
@Component({
  selector: 'app-update-resto',
  templateUrl: './update-resto.component.html',
  styleUrls: ['./update-resto.component.css']
})
export class UpdateRestoComponent implements OnInit {

  alert:boolean = false;

  editresto = new FormGroup({
    
    name: new FormControl(''),
    address: new FormControl('')
  })

  constructor(private router:ActivatedRoute,private resto:RestoService) { }

  ngOnInit(): void {
    console.warn(this.router.snapshot.params.id)
    this.resto.getCurrentresto(this.router.snapshot.params.id)
    .subscribe((result:any) => {
      this.editresto = new FormGroup({
    
        name: new FormControl(result['name']),
        address: new FormControl(result['address'])
      })
    })
  }

  collection()
  {
    console.warn(this.editresto.value);
    this.resto.updateresto(this.router.snapshot.params.id,this.editresto.value)
    .subscribe((result) => {
      this.alert = true;
    })
  }
  closeAlert()
  {
    this.alert = false;
  }

}

