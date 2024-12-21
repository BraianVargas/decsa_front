import { Routes } from '@angular/router';
import { LoginComponent } from '../public';
import { NotFoundComponent } from '../public/components';
import { AdminComponent } from '../public/dashboard/admin/admin.component';
import { authGuard } from './guards';
import { BaseComponent } from '../public/dashboard/base/base.component';

export const routes: Routes = [
    { path : '', redirectTo: '/login', pathMatch: 'full' },
    { path : 'login', component: LoginComponent },
    { path : 'secretaria', component: AdminComponent },
    { path : 'admin_dashboard', component:  AdminComponent },
    { path : 'base_dashboard', component:  BaseComponent},
    { path : '**', component: NotFoundComponent }
];
