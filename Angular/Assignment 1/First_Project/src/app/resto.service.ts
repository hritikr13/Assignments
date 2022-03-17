import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class RestoService {

  url = "http://localhost:3000/resturent"
  rootUrl = "http://localhost:3000/"
  menuUrl = "http://localhost:3000/menu"
  constructor(private http:HttpClient) { }
  
  getList()
  {
    return this.http.get(this.url)
  }
  getUser()
  {
    return this.http.get(this.rootUrl+"users");
  }

  saveResto(data: any)
  {
    return this.http.post(this.url,data);
  }
  saveMenu(data:any)
  {
    return this.http.post(this.menuUrl,data);
  }

  deleteResto(id: any)
  {
    return this.http.delete(`${this.url}/${id}`)
  }
  getCurrentresto(id: any)
  {
    return this.http.get(`${this.url}/${id}`)
  }
  updateresto(id: any,data: any)
  {
    return this.http.put(`${this.url}/${id}`,data)
  }
  registerUser(data: any)
  {
    return this.http.post(this.rootUrl+"users",data);
  }
}
