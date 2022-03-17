import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
import {RestoService} from '../resto.service';

@Component({
  selector: 'app-add-resto',
  templateUrl: './add-resto.component.html',
  styleUrls: ['./add-resto.component.css']
})
export class AddRestoComponent implements OnInit {

  alert:boolean = false;

  addresto = new FormGroup({
    
    name: new FormControl(''),
    address: new FormControl('')
  })

  constructor(private resto:RestoService) { }

  ngOnInit(): void {
  }

  collectResto()
  {
    this.resto.saveResto(this.addresto.value).subscribe((result) => {
      this.alert = true;
      this.addresto.reset({})
    })
    
  }
  closeAlert()
  {
    this.alert = false;
  }

}
