import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'ql-upload-dragger',
  template: `
    <div class="ql-upload-dragger"
      [class.is-dragover]="dragger"
      (drop)="dropHandle($event)"
      (dragover)="dragoverHandle($event)"
      (dragleave)="dragLeaveHandle($event)">
      <ng-content></ng-content>
    </div>
  `,
})
export class QlUploadDragger {
  
  @Input() qlDisabled: boolean = false
  @Output() change: EventEmitter<any> = new EventEmitter<any>()
  
  dragger: boolean = false
  
  dragoverHandle(event: Event): void {
    event.preventDefault()
    if (this.qlDisabled) return
    this.dragger = true
  }
  
  dragLeaveHandle(event: Event): void {
    event.preventDefault()
    this.dragger = false
  }
  
  dropHandle(event: DragEvent): void {
    event.preventDefault()
    if (this.qlDisabled) return
    this.change.emit({ target: { files: event.dataTransfer.files }})
  }
}

