import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { QlTooltipModule } from '../tooltip/module'
import { QlMenuItemGroup } from './menu-item-group'
import { QlMenuItem } from './menu-item'
import { QlSubmenu } from './submenu'
import { QlMenu } from './menu'


@NgModule({
  declarations: [QlMenu, QlSubmenu, QlMenuItem, QlMenuItemGroup],
  exports: [QlMenu, QlSubmenu, QlMenuItem, QlMenuItemGroup],
  imports: [CommonModule, QlTooltipModule.forRoot()],
  entryComponents: [QlMenu, QlSubmenu, QlMenuItem, QlMenuItemGroup],
})
export class QlMenusModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: QlMenusModule, providers: [] }
  }
}
