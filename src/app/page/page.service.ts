import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  constructor( private http: HttpClient  ) { }
  
  getProducts() {
    return this.http.get(`${environment.apiUrl}/products`);
  }

  getProductById(id:any) {
    return this.http.get(`${environment.apiUrl}/product/${id}`);
  }

  getCategory() {
    return this.http.get(`${environment.apiUrl}/categories`);
  }

  createNewProduct(data) {
    return this.http.post(`${environment.apiUrl}/newProduct`, data);
  }

  deleteProduct(id:any) {
    return this.http.delete(`${environment.apiUrl}/deleteProduct/${id}`);
  }
  
  updateProduct(id:any, data:any) {
    return this.http.put(`${environment.apiUrl}/updateProduct/${id}`, data);
  }
}
