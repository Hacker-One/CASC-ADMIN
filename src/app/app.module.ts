import { NgModule } from '@angular/core';
import { BrowserModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { NgxSpinnerModule } from 'ngx-spinner';
import { QlModule } from './qloud-angular.module';


/*
 * Platform and Environment providers/directives/pipes
 */
import { AppRouting } from './app.routing';


// App is our top level component
import { App } from './app.component';
import { AppState, InternalStateType } from './app.service';
import { GlobalState } from './global.state';
import { NgaModule } from './nga.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModulePreloadingStrategy } from './ModulePreloadingStrategy';
import { LocalStorage } from './local.storage';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppInterceptor } from './app-interceptor';
import { GestureConfig } from '@angular/material';
import { AppTranslationModule } from './app.translation.module';
import { CommonModule } from '@angular/common';
import { ProdPages } from './pages/prodPages.component';
import { Pages } from './pages/pages.component';
import { HomeComponent } from './system/home/home.component';
import { ShareModule } from './system/share/share.module';



// Application wide providers
const APP_PROVIDERS = [
    AppState,
    LocalStorage,
    GlobalState,
    ModulePreloadingStrategy
];

export type StoreType = {
    state: InternalStateType,
    restoreInputValues: () => void,
    disposeOldHosts: () => void
};

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
    bootstrap: [App],
    declarations: [
        App,
        ProdPages,
        Pages,
        HomeComponent
    ],
    imports: [ // import Angular's modules
        CommonModule,
        AppTranslationModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpModule,
        NgxSpinnerModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        QlModule.forRoot(),
        NgaModule.forRoot(),
        AppRouting,
        ShareModule
    ],
    providers: [ // expose our Services and Providers into Angular's dependency injection
        APP_PROVIDERS,
        {
            provide: HAMMER_GESTURE_CONFIG,
            useClass: GestureConfig
        },
        { provide: HTTP_INTERCEPTORS, useClass: AppInterceptor, multi: true }
    ]
})

export class AppModule {

    constructor(public appState: AppState) {
    }
}
