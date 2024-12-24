import { Routes } from '@angular/router';
import { LoginComponent } from '../public';
import { NotFoundComponent } from '../public/components';
import { AdminComponent } from '../public/dashboard/admin/admin.component';
import { authGuard } from './guards';
import { BaseComponent } from '../public/dashboard/base/base.component';
import { CargaNotasComponent } from '../public/components/carga-notas/carga-notas.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    { path : 'login', component: LoginComponent },
    {
        path : '',
        component: AdminComponent,
        canActivate: [authGuard],
        children: [
            { path : 'base_dashboard', component: BaseComponent },
            { path : 'cargar_notas', component: CargaNotasComponent }
        ]
    },
    { path : 'secretaria', component: AdminComponent },
    { path : 'admin_dashboard', component:  AdminComponent },
    { path : 'base_dashboard', component:  BaseComponent},
    { path : 'cargar_notas', component:  CargaNotasComponent},
    { path : '**', component: NotFoundComponent }
];
