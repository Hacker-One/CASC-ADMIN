import {QlModule} from '../../qloud-angular.module';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {CommonModule} from "@angular/common";
import {NgaModule} from "../../nga.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


import {routing} from './app.routing';
import {ExSharedModule} from './shared/module';
import { DocsService } from './shared/doc.service'
import {UILayout} from "./pages/layout.component";
import {UIExamples} from "./pages/examples.component";
import {UIBasic} from "./pages/basic.component";
import {UIExLog} from "./log/log.component";

import {ExButtonComponent} from "./ex-components/element/button/button.component";
import {ExColorComponent} from "./ex-components/layout/color/color.component";
import {ExTableComponent} from "./ex-components/element/table/table.component";
import {ExTypographyComponent} from "./ex-components/layout/typography/typography.component";
import {ExContainerComponent} from "./ex-components/layout/container/container.component";
import {ExFormComponent} from "./ex-components/form/form-group/form.component";
import {ExBadgeComponent} from "./ex-components/element/badge/badge.component";
import {ExTagComponent} from "./ex-components/element/tag/tag.component";
import {ExCardComponent} from "./ex-components/element/card/card.component";
import {ExGridComponent} from "./ex-components/layout/grid/grid.component";
import {ExProgressComponent} from "./ex-components/element/progress/progress.component";
import {ExPaginationComponent} from "./ex-components/element/pagination/pagination.component";
import {ExTreeComponent} from "./ex-components/element/tree/tree.component";
import {ExBreadcrumbComponent} from "./ex-components/element/breadcrumb/breadcrumb.component";
import {ExDropdownComponent} from "./ex-components/element/dropdown/dropdown.component";
import {ExMenuComponent} from "./ex-components/element/menu/menu.component";
import {ExStepsComponent} from "./ex-components/element/steps/steps.component";
import {ExLoadingComponent} from "./ex-components/element/loading/loading.component";
import {ExMessageComponent} from "./ex-components/message/message.component";
import {ExNotificationComponent} from "./ex-components/notification/notification.component";
import {ExCarouselComponent} from "./ex-components/element/carousel/carousel.component";
import {ExCollapseComponent} from "./ex-components/element/collapse/collapse.component";
import {ExDialogComponent} from "./ex-components/dialog/dialog.component";
import {ExTooltipComponent} from "./ex-components/tooltip/tooltip.component";
import {ExCascaderComponent} from "./ex-components/form/cascader/cascader.component";
import {ExInputComponent} from "./ex-components/form/input/input.component";
import {ExRadioComponent} from "./ex-components/form/radio/radio.component";
import {ExCheckboxComponent} from "./ex-components/form/checkbox/checkbox.component";
import {ExDatePickerComponent} from "./ex-components/form/date-picker/date-picker.component";
import {ExInputNumberComponent} from "./ex-components/form/input-number/input-number.component";
import {ExRateComponent} from "./ex-components/form/rate/rate.component";
import {ExSelectComponent} from "./ex-components/form/select/select.component";
import {ExSliderComponent} from "./ex-components/form/slider/slider.component";
import {ExSwitchComponent} from "./ex-components/form/switch/switch.component";
import {ExUploadComponent} from "./ex-components/form/upload/upload.component";

@NgModule({
    declarations: [
        AppComponent,
        ExButtonComponent,
        ExColorComponent,
        ExTableComponent,
        ExTableComponent,
        ExTypographyComponent,
        ExContainerComponent,
        ExFormComponent,
        ExBadgeComponent,
        ExTagComponent,
        ExCardComponent,
        ExGridComponent,
        ExProgressComponent,
        ExPaginationComponent,
        ExTreeComponent,
        ExBreadcrumbComponent,
        ExDropdownComponent,
        ExMenuComponent,
        ExStepsComponent,
        ExLoadingComponent,
        ExMessageComponent,
        ExNotificationComponent,
        ExCarouselComponent,
        ExCollapseComponent,
        ExDialogComponent,
        ExTooltipComponent,
        ExCascaderComponent,
        ExInputComponent,
        ExRadioComponent,
        ExCheckboxComponent,
        ExDatePickerComponent,
        ExInputNumberComponent,
        ExRateComponent,
        ExSelectComponent,
        ExSliderComponent,
        ExSwitchComponent,
        ExUploadComponent,
        UILayout,
        UIBasic,
        UIExLog,
        UIExamples
    ],
    imports: [
        CommonModule,
        QlModule.forRoot(),
        ExSharedModule.forRoot(),
        NgaModule,
        routing,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [
        DocsService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
