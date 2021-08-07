import { Component, OnInit } from '@angular/core';
import { PageService } from '../../page/page.service';
import { Product } from '../../product';

import Swal from "sweetalert2";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  products: Product;
  public page: number = 0;
  public search: string = '';
  borrar: boolean = true;
  productSelected: any;
  constructor( private pageService:PageService ) { }
  
  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.pageService.getProducts()
    .subscribe( (res:Product) => {
      this.products = res
    });
  }

  deleteProduct(id:any) {
      if (this.borrar) {
        Swal.fire({
          title: '¿Estas seguro?',
          html: `El producto: ${this.products.name} Se borrara permanentemente!`,
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Si, Borrar!'
        }).then((result) => {
          if (result.isConfirmed) {
            this.pageService.deleteProduct(id)
          .subscribe( res =>{
            this.getProducts();
          })
            Swal.fire(
              'Borrado!',
              'El producto ha sido borrado.',
              'success'
              )
            }
          })
      }
    }

  onSearch( search:string ) {
    this.search = search;
  }

  nextPage() {
    this.page += 4;
  }
  prevPage() {
    this.page -= 4
  }
}
