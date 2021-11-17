import { Injectable } from '@angular/core';
import { Global } from 'src/app/global';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Productos } from 'src/app/Interfaces/productos';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private global:Global, private http:HttpClient) { }

  getProductos(){
    return this.http.get<Productos[]>(this.global.API_BACKEND+'Productos_');
  }

  getProductoById(productoId: string){
    return this.http.get<Productos>(this.global.API_BACKEND+'Productos_/'+ productoId);
  }

  addProductos(producto: Productos){
    const headers = new HttpHeaders({'Content-Type':'application/json'})
    return this.http.post(this.global.API_BACKEND+'Productos_',producto,{headers:headers});
  }

  updateProductos(producto: Productos){
    const headers = new HttpHeaders({'Content-Type':'application/json'})
    return this.http.put(this.global.API_BACKEND+'Productos_/'+producto.PRO_COD,producto,{headers:headers});
  }

  deleteProductos(producto: Productos){
    const headers = new HttpHeaders({'Content-Type':'application/json'})
    return this.http.delete(this.global.API_BACKEND+'Productos_/'+producto.PRO_COD);
  }
}
