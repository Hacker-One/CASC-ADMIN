import {Component, Input, ChangeDetectionStrategy, Output, EventEmitter} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {forEach} from "@angular/router/src/utils/collection";

@Component({
    selector: 'ql-breadcrumb',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <div class="ql-breadcrumb" aria-label="Breadcrumb" role="navigation">
            <ng-content></ng-content>
        </div>
    `,
})
export class QlBreadcrumb {

    // @Input() useAutoRoute: boolean = false;
    @Input() separator: string = '/';
    @Input('separator-class') separatorClass: string;
    @Input() prevent: boolean = false;
    @Output('next') next: EventEmitter<string> = new EventEmitter<string>();

    constructor(private route: ActivatedRoute,
                private location: Location) {
        this.route.pathFromRoot.forEach((path: ActivatedRoute) => {
            // console.log(path.snapshot.url[0].path);
        });
    }

    autoRoute(){

    }
    itemHandle(path: string): void {
        this.next.emit(path)
    }
}
