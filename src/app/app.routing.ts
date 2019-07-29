import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { ModulePreloadingStrategy } from './ModulePreloadingStrategy';
import { PLUGIN_MODULE } from './pages/pages.menu';
import { environment } from '../environments/environment';
import { ProdPages } from './pages/prodPages.component';
import { Pages } from './pages/pages.component';
import { HomeComponent } from './system/home/home.component';


export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'manage',
        loadChildren:'./system/manage/manage.module#ManageModule'
    },
    {
        path: '**', redirectTo: ''
    },
];
export const proroutes: Routes = [

    {
        path: '',
        component: ProdPages,
        children: PLUGIN_MODULE
    },
    {
        path: '**', redirectTo: ''
    }
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(environment.production ? proroutes : routes, {
    useHash: true/**取消浏览器#号*/,
    preloadingStrategy: ModulePreloadingStrategy/**预加载配置*/
});
