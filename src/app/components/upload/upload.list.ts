import { Component, EventEmitter, Input, Output } from '@angular/core'
import { CommonFile } from './upload.interface'

@Component({
  selector: 'ql-upload-list',
  template: `
    <ul [class]="'ql-upload-list ql-upload-list--' + listType"
      [class.is-disabled]="qlDisabled">
      <li *ngFor="let file of files; let i = index"
        [class]="'ql-upload-list__item is-' + file.status">
        <img class="ql-upload-list__item-thumbnail"
          *ngIf="file.status !== 'uploading' && ['picture-card', 'picture'].indexOf(listType) > -1"
          [src]="file.url">
        <a class="ql-upload-list__item-name" (click)="clickHandle(file)">
          <i class="ql-icon-document"></i>
          {{file.name}}
        </a>
        <label class="ql-upload-list__item-status-label">
          <i [class.ql-icon-check]="['picture-card', 'picture'].indexOf(listType) > -1"
            [class.ql-icon-circle-check]="listType === 'text'"
            [class.ql-icon-upload-success]="true"></i>
        </label>
        <i class="ql-icon-close" *ngIf="!qlDisabled" (click)="removeHandle(file)"></i>
        <ql-progress *ngIf="file.status === 'uploading'"
          [type]="listType === 'picture-card' ? 'circle' : 'line'"
          [stroke-width]="listType === 'picture-card' ? 6 : 2"
          [percentage]="file.percentage">
        </ql-progress>
        <span class="ql-upload-list__item-actions" *ngIf="listType === 'picture-card'">
        <span class="ql-upload-list__item-preview"
          *ngIf="listType === 'picture-card'"
          (click)="previewHandle(file)">
          <i class="ql-icon-view"></i>
        </span>
        <span class="ql-upload-list__item-delete"
          *ngIf="!qlDisabled"
          (click)="removeHandle(file)">
          <i class="ql-icon-delete2"></i>
        </span>
      </span>
      </li>
    </ul>
  `,
})
export class QlUploadList {
  
  @Input() files: CommonFile[] = []
  @Input() qlDisabled: boolean = false
  @Input('list-type') listType: string
  @Output() remove: EventEmitter<CommonFile> = new EventEmitter<CommonFile>()
  @Output() preview: EventEmitter<CommonFile> = new EventEmitter<CommonFile>()
  
  clickHandle(file: CommonFile): void {
  
  }
  
  removeHandle(file: CommonFile): void {
    this.remove.emit(file)
  }
  
  
  previewHandle(file: CommonFile): void {
    this.preview.emit(file)
  }
  
}

