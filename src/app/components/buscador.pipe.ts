import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../product';

@Pipe({
  name: 'buscador'
})
export class BuscadorPipe implements PipeTransform {

  transform(product: Product[], /* page: number = 0 */ search:any = ''): Product[] {
    /* return product.slice(page, page + 4); */
    /* if (search.length === 0) */
    const productoFiltrado = product.filter( prod => prod.name.includes( search ) );
    return productoFiltrado;      
  }

}
