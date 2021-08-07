import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../product';

@Pipe({
  name: 'pagination'
})
export class PaginationPipe implements PipeTransform {

  transform(product: Product[], page: number = 0, search:any = ''): Product[] {
    if (search.length === 0) 
    return product.slice(page, page + 4);
    const productoFiltrado = product.filter( prod => prod.name.includes( search ) );
    return productoFiltrado;      
  }

}
