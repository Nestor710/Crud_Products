import { Component, OnInit } from '@angular/core';
import { PageService } from '../page.service';
import { Product } from '../../product';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {
  categories:any;
  product = new Product();
  constructor( private pageService: PageService, private route:Router ) { }

  ngOnInit(): void {
    this.getCategory();
  }

  getCategory() {
    this.pageService.getCategory()
    .subscribe( res =>{
        this.categories = res        
    })
  }
  
  createProduct(){
    this.pageService.createNewProduct(this.product)
    .subscribe( res => {
      Swal.fire({
        icon:'success',
        title: 'El producto ha sido creado',
        timerProgressBar: true,
        timer: 2500
      });
      this.route.navigate(['/card']);
      this.product = {
        category_id: '',
        id:'',
        name: '',
        description: '',
        category_name: ''
      }
    });
  }
}
