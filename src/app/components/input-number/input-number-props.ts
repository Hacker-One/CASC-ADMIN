import { EventEmitter, Input, Output } from '@angular/core'

export class QlInputNumberPoprs {
  
  @Input() set disabled(val: boolean) {   // todo, is discarded.
    console.warn('Qloud Angular: (disabled) is discarded, use [qlDisabled] replace it.')
  }
  @Input() qlDisabled: boolean = false
  @Input() min: number = 0
  @Input() max: number = Number.MAX_SAFE_INTEGER
  @Input() step: number = 1
  @Input() size: string                 // enum: large, small
  @Input() controls: boolean = true
  @Input() debounce: number = 300
  
  // bind value
  @Input() model: any = ''
  @Output() modelChange: EventEmitter<number> = new EventEmitter<number> ()
  
}
