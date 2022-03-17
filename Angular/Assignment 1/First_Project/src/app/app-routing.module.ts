import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddRestoComponent} from './add-resto/add-resto.component'
import {UpdateRestoComponent} from './update-resto/update-resto.component'
import {ListRestoComponent} from './list-resto/list-resto.component'
import {LoginComponent} from './login/login.component'
import {RegisterComponent} from './register/register.component'
import {ListMenuComponent} from './list-menu/list-menu.component'

const routes: Routes = [

  {
    component:AddRestoComponent,
    path:'add'
  },
  {
    component:ListRestoComponent,
    path:'list'
  },
  {
    component:UpdateRestoComponent,
    path:'update/:id'
  },
  {
    component:LoginComponent,
    path:'login'
  },
  {
    component:RegisterComponent,
    path:'register'
  },
  {
    component:ListMenuComponent,
    path:'menu'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
