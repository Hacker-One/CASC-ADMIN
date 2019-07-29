import { Component, Input } from '@angular/core'
import { ModelStandard } from './utils'
import { QlTreeProps, QlTreeModelEvent, QlTreeModelData } from './tree-props'

export type UserSafeHooks = {
  findWholeModel: () => string[],
  findAllChecked: () => string[],
  removeAllChecked: () => void,
  updateItemChecked: (id: string | number) => void,
  updateItemExpanded: (id: string | number) => void,
}

@Component({
  selector: 'ql-tree',
  template: `
    <div class="ql-tree" role="tree">
      <ql-tree-item *ngFor="let item of identModel"
        [model]="item" [indent]="indent">
      </ql-tree-item>
      <div class="ql-tree__empty-block" *ngIf="!identModel && !identModel.length">
        <span class="ql-tree__empty-text">{{ emptyText }}</span>
      </div>
    </div>
  `,
})
export class QlTree extends QlTreeProps {

  @Input() set model(val: QlTreeModelData[]) {
    const standardTool = new ModelStandard({
      initDepth: 0,
      defaultExpandAll: this.defaultExpandAll,
      defaultExpandedKeys: this.defaultExpandedKeys,
      defaultCheckedKeys: this.defaultCheckedKeys,
    })
    this.identModel = standardTool.filterModel(val)
  }

  constructor(
  ) {
    super()
  }

  userSafeHooks: () => UserSafeHooks = () => ({
    findWholeModel: this.findWholeModel.bind(this),
    findAllChecked: this.findAllChecked.bind(this),
    updateItemChecked: this.updateChecked.bind(this),
    updateItemExpanded: this.updateExpanded.bind(this),
    removeAllChecked: this.removeAllChecked.bind(this),
  })

  findWholeModel(): string[] {
    if (!this.showCheckbox) return []
    return ModelStandard.findWholeModel(this.identModel)
  }

  findAllChecked(): string[] {
    if (!this.showCheckbox) return []
    return ModelStandard.FindAllChecked(this.identModel)
  }

  removeAllChecked(): void {
    ModelStandard.LoopRemoveChecked(this.identModel)
  }

  updateExpanded(id: string | number): void {
    this.identModel = ModelStandard.DeepUpdateExpanded(id, this.identModel, this.accordion)
  }

  updateChecked(id: string | number): void {
    if (!this.showCheckbox) return
    this.identModel = ModelStandard.DeepUpdateChecked(id, this.identModel)
  }

  emitter(next: QlTreeModelEvent): void {
    this.modelChange.emit(next)
  }

}
