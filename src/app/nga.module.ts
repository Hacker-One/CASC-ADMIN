import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppTranslationModule } from './app.translation.module';
import {
    BaBackTop,
    BaPageTopTab,
    BaContentTop,
    BaMenuItem,
    BaMenu,
    BaMsgCenter,
    BaPageTop,
    BaSidebar,
    BaAvatar,
} from './layout-components';
import { SysHeaderComponent, SysSiderbarComponent } from './system-layout';


import {
    BaScrollPosition,
} from './rests/directives';


import {
    BaImageLoaderService,
    BaPluginMenuLoaderservice,
    BaMenuService,
    BaHttpInterceptorService,
    BaIntervalService,
    BaTranslateService,
    BaThemePreloader,
    BaRouterHandleService,
    BaThemeSpinner
} from './rests/services';

import {
    EmailValidator,
    EqualPasswordsValidator
} from './rests/validators';
import { BaNoticeService } from './rests/services/baNotice/baNotice.service';
// import {MDBBootstrapModulesPro} from 'ng-uikit-pro-standard';
import { WebsocketService } from './rests/services/baWebSocket/websocket.service';
import { SwiperModule } from 'ngx-swiper-wrapper';

const NGA_COMPONENTS = [
    BaBackTop,
    BaPageTopTab,
    BaContentTop,
    BaMenuItem,
    BaMenu,
    BaMsgCenter,
    BaPageTop,
    BaSidebar,
    BaAvatar
];
const SYS_COMPONENTS = [
    SysHeaderComponent,
    SysSiderbarComponent
];

const NGA_DIRECTIVES = [
    BaScrollPosition,
];


const NGA_SERVICES = [
    BaImageLoaderService,
    BaPluginMenuLoaderservice,
    BaThemePreloader,
    BaThemeSpinner,
    BaRouterHandleService,
    BaHttpInterceptorService,
    BaIntervalService,
    BaTranslateService,
    WebsocketService,
    BaNoticeService,
    WebsocketService,
    BaMenuService
];

const NGA_VALIDATORS = [
    EmailValidator,
    EqualPasswordsValidator
];

@NgModule({
    declarations: [
        ...NGA_DIRECTIVES,
        ...NGA_COMPONENTS,
        ...SYS_COMPONENTS
    ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        SwiperModule,
        ReactiveFormsModule,
        AppTranslationModule,
    ],
    exports: [
        ...NGA_DIRECTIVES,
        ...NGA_COMPONENTS,
        ...SYS_COMPONENTS
    ]
})
export class NgaModule {
    static forRoot(): ModuleWithProviders {
        return <ModuleWithProviders>{
            ngModule: NgaModule,
            providers: [
                // BaThemeConfigProvider,
                // BaThemeConfig,
                ...NGA_VALIDATORS,
                ...NGA_SERVICES
            ],
        };
    }
}
