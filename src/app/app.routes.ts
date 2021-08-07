import { RouterModule, Routes } from "@angular/router";
import { NoFoundComponent } from './page/no-found/no-found.component';

const appRoutes: Routes = [
    { path: '**', component: NoFoundComponent },
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes);