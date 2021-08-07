import { Component, OnInit } from '@angular/core';
import { PageService } from '../page.service';
import { Product } from '../../product';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  id:any
  categories:any;
  product = new Product();
  produc:any;
  constructor( private pageService: PageService, 
                private router:Router, 
                private route:ActivatedRoute ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.getProduct();
    this.getCategories();
  }
  getProduct() {
    this.pageService.getProductById(this.id)
    .subscribe( (res:Product) => {
      this.product = res;
      console.log(this.product);
    });
  }

  editarProduct(id:number){
    this.pageService.updateProduct(id, this.product)
    .subscribe( (res:Product) => {
    this.product = res;
    Swal.fire({
      icon: 'success',
      title: 'Usuario editado con éxito',
    })
      this.router.navigate(['/card']);
    });
  }


  getCategories(){
    this.pageService.getCategory()
    .subscribe( res =>{
        this.categories = res;
    });
  }

}
