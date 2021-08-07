import { RouterModule, Routes } from "@angular/router";
import { AgregarComponent } from './agregar/agregar.component';
import { PagesComponent } from './pages.component';
import { CardComponent } from '../components/card/card.component';
import { EditarComponent } from './editar/editar.component';

const pagesRoutes: Routes = [
    { 
        path: '', 
        component: PagesComponent,
        children: [
            { path: 'agregar', component: AgregarComponent },
            { path: 'editar/:id', component: EditarComponent },
            { path: 'card', component: CardComponent },
            { path: '', redirectTo:'', pathMatch:'full' }
        ]
    },
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);