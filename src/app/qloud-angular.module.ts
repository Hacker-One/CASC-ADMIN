import { NgModule, ModuleWithProviders } from '@angular/core'
import { QlMessageService } from './components/message/message.service'
import { QlNotificationService } from './components/notification/notification.service'

import { QlSharedModule } from './components/shared/module'
import { QlButtonsModule } from './components/button/module'
import { QlCheckboxsModule } from './components/checkbox/module'
import { QlIconsModule } from './components/icon/module'
import { QlRadiosModule } from './components/radio/module'
import { QlMenusModule } from './components/menu/module'
import { QlTooltipModule } from './components/tooltip/module'
import { QlRowModule } from './components/row/module'
import { QlColModule } from './components/col/module'
import { QlInputsModule } from './components/input/module'
import { QlInputNumberModule } from './components/input-number/module'
import { QlTagsModule } from './components/tag/module'
import { QlSelectModule } from './components/select/module'
import { QlSwitchModule } from './components/switch/module'
import { QlRateModule } from './components/rate/module'
import { QlProgressModule } from './components/progress/module'
import { QlStepsModule } from './components/steps/module'
import { QlLoadingModule } from './components/loading/module'
import { QlMessagesModule } from './components/message/module'
import { QlNotificationModule } from './components/notification/module'
import { QlCascaderModule } from './components/cascader/module'
import { QlBadgesModule } from './components/badge/module'
import { QlCardsModule } from './components/card/module'
import { QlDropdownModule } from './components/dropdown/module'
import { QlBreadcrumbsModule } from './components/breadcrumb/module'
import { QlDateModule } from './components/date-picker/module'
import { QlSliderModule } from './components/slider/module'
import { QlDialogModule } from './components/dialog/module'
import { QlCarouselModule } from './components/carousel/module'
import { QlCollapseModule } from './components/collapse/module'
import { QlAlertModule } from './components/alert/module'
import { QlPaginationModule } from './components/pagination/module'
import { QlUploadModule } from './components/upload/module'
import { QlTableModule } from './components/table/module'
import { QlContainerModule } from './components/container/module'
import { QlFormModule } from './components/form/module'
import { QlTreeModule } from './components/tree/module'

export const QLChildModules: any = {
    QlButtonsModule, QlIconsModule, QlRadiosModule, QlMenusModule, QlTooltipModule, QlRowModule,
    QlColModule, QlCheckboxsModule, QlInputsModule, QlInputNumberModule, QlTagsModule, QlSelectModule,
    QlSwitchModule, QlRateModule, QlProgressModule, QlStepsModule, QlLoadingModule, QlMessagesModule,
    QlSharedModule, QlNotificationModule, QlCascaderModule, QlBadgesModule, QlCardsModule, QlDropdownModule,
    QlBreadcrumbsModule, QlDateModule, QlSliderModule, QlDialogModule, QlCarouselModule, QlCollapseModule,
    QlAlertModule, QlPaginationModule, QlUploadModule, QlTableModule, QlContainerModule, QlFormModule,
    QlTreeModule,
}
export const QLMODULES_GROUP: any[] = [
    QlButtonsModule, QlIconsModule, QlRadiosModule, QlMenusModule, QlTooltipModule, QlRowModule,
    QlColModule, QlCheckboxsModule, QlInputsModule, QlInputNumberModule, QlTagsModule, QlSelectModule,
    QlSwitchModule, QlRateModule, QlProgressModule, QlStepsModule, QlLoadingModule, QlMessagesModule,
    QlSharedModule, QlNotificationModule, QlCascaderModule, QlBadgesModule, QlCardsModule, QlDropdownModule,
    QlBreadcrumbsModule, QlDateModule, QlSliderModule, QlDialogModule, QlCarouselModule, QlCollapseModule,
    QlAlertModule, QlPaginationModule, QlUploadModule, QlTableModule, QlContainerModule, QlFormModule,
    QlTreeModule,
]

@NgModule({
    imports: [
        QlButtonsModule.forRoot(), QlIconsModule.forRoot(), QlRadiosModule.forRoot(), QlMenusModule.forRoot(),
        QlTooltipModule.forRoot(), QlRowModule.forRoot(), QlColModule.forRoot(), QlCheckboxsModule.forRoot(),
        QlInputsModule.forRoot(), QlInputNumberModule.forRoot(), QlTagsModule.forRoot(), QlSelectModule.forRoot(),
        QlSwitchModule.forRoot(), QlRateModule.forRoot(), QlProgressModule.forRoot(), QlStepsModule.forRoot(),
        QlLoadingModule.forRoot(), QlMessagesModule.forRoot(), QlSharedModule.forRoot(), QlNotificationModule.forRoot(),
        QlCascaderModule.forRoot(), QlBadgesModule.forRoot(), QlCardsModule.forRoot(), QlDropdownModule.forRoot(),
        QlBreadcrumbsModule.forRoot(), QlDateModule.forRoot(), QlSliderModule.forRoot(), QlDialogModule.forRoot(),
        QlCarouselModule.forRoot(), QlCollapseModule.forRoot(), QlAlertModule.forRoot(), QlPaginationModule.forRoot(),
        QlUploadModule.forRoot(), QlTableModule.forRoot(), QlContainerModule.forRoot(), QlFormModule.forRoot(),
        QlTreeModule.forRoot(),
    ],
    exports: QLMODULES_GROUP,
})
class QlModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: QlModule,
            providers: [],
        }
    }
}


export {
    QlModule,
    QlMessageService,
    QlNotificationService,
}
