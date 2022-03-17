import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ListMenuComponent } from './list-menu/list-menu.component';



@NgModule({
  declarations: [ListMenuComponent],
  exports:[
    ListMenuComponent,
    ReactiveFormsModule,
    FormsModule
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class MenuModule { }
