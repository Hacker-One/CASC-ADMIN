import {Component, ViewEncapsulation} from '@angular/core'
import {DomSanitizer, SafeUrl} from '@angular/platform-browser'
import {DocsService} from '../shared/doc.service'

export type Logs = {
    'releases-link': string
    releases: any[]
}

@Component({
    selector: 'ex-log',
    templateUrl: './log.component.html',
    styleUrls: ['./log.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class UIExLog {

    logs: Logs;

    constructor(private docsService: DocsService,
                private sanitizer: DomSanitizer,) {
    }

    makeSafeUrl(link: string | null): SafeUrl {
        const url: string = link || 'javascript:;'
        return this.sanitizer.bypassSecurityTrustUrl(url)
    }

    ngOnInit(): void {
        this.docsService.getChangeLogs()
            .subscribe(json => {
                this.logs = json
                this.logs.releases = this.logs.releases.reverse()
                console.log(this.logs);
            })
    }

}
