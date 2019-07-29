import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { QlTree } from './tree'
import { QlTreeItem } from './tree-item'
import { QlCheckboxsModule } from '../checkbox/module'

@NgModule({
  declarations: [QlTree, QlTreeItem],
  exports: [QlTree, QlTreeItem],
  imports: [CommonModule, QlCheckboxsModule],
  entryComponents: [QlTree],
})
export class QlTreeModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: QlTreeModule, providers: []}
  }
}
