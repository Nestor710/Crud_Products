import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { PaginationPipe } from './pagination.pipe';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [CardComponent, PaginationPipe],
  exports: [CardComponent],
  imports: [
    CommonModule,
    RouterModule,
    NgxPaginationModule,
    FormsModule
  ]
})
export class ComponentsModule { }
