import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
import { RestoService } from 'src/app/resto.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list-menu',
  templateUrl: './list-menu.component.html',
  styleUrls: ['./list-menu.component.css']
})
export class ListMenuComponent implements OnInit {

  alert:boolean = false;

  addmenu = new FormGroup({
    item: new FormControl(''),
    price: new FormControl('')
  })

  constructor(private resto:RestoService) { }

  ngOnInit(): void {
  }

  collectMenu()
  {
    // this.resto.saveMenu(this.addmenu.value)
    // .subscribe((result) => {
    //   this.alert = true;
    //   this.addmenu.reset({})
    //   console.warn(result);
    // })
    console.warn(this.addmenu.value);
  }

}
