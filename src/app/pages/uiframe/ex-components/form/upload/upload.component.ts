import {Component, forwardRef, Inject, ViewEncapsulation} from '@angular/core'
import {QlMessageService} from '../../../../../qloud-angular.module'
import {SafeUrl, DomSanitizer} from '@angular/platform-browser'
import code from './code'

@Component({
    selector: 'ex-upload-demo',
    template: ` `,
})
export class ExUploadDemoComponent {

    private fileList: any[] = [{
        name: 'food.jpeg',
        url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?' +
        'imageMogr2/thumbnail/360x360/format/webp/quality/100'
    },
        {
            name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99b' +
        'ce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        }]
    private imageUrl: SafeUrl
    private dialogImageUrl: SafeUrl
    private showDialog: boolean = false

    constructor(@Inject(forwardRef(() => QlMessageService)) private message: QlMessageService,
                @Inject(forwardRef(() => DomSanitizer)) private sanitizer: DomSanitizer,) {
    }

    limit500(file: File): boolean {
        if (file.size > 500000) {
            this.message.info('文件超过了 500 kb.')
            return false
        }
        return true
    }

    successHandle(event: any): void {
        const file: File = event.commonFile.raw
        this.imageUrl = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(file))
        this.message.info('文件上传成功')
    }

    errorHandle(event: any): void {
        const {error} = event
        this.message.error('文件上传失败:' + error)
    }

    previewHandle(commonFile: any): void {
        const file: File = commonFile.raw
        this.dialogImageUrl = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(file))
        console.log(this.dialogImageUrl)
        this.showDialog = true
    }

    removeHandle(commonFile: any): void {
        this.message.info('文件已移除')
    }
}

@Component({
    selector: 'ex-upload',
    templateUrl: './upload.component.html',
    styleUrls: ['./upload.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class ExUploadComponent {

    code: string[] = code
    exClass: any = ExUploadDemoComponent

    apidoc:any={
        "name": "Upload Attributes",
        "attrs": [
            {
                "name": "action",
                "notes": "必选参数, 上传的地址",
                "type": "string",
                "enum": null,
                "default": null
            },
            {
                "name": "headers",
                "notes": "可选参数, 设置上传的请求头部",
                "type": "object",
                "enum": null,
                "default": null
            },
            {
                "name": "multiple",
                "notes": "可选参数, 是否支持多选文件",
                "type": "boolean",
                "enum": null,
                "default": false
            },
            {
                "name": "with-credentials",
                "notes": "支持发送 cookie 凭证信息",
                "type": "boolean",
                "enum": null,
                "default": false
            },
            {
                "name": "show-file-list",
                "notes": "是否显示已上传文件列表",
                "type": "boolean",
                "enum": null,
                "default": true
            },
            {
                "name": "drag",
                "notes": "是否启用拖拽上传",
                "type": "boolean",
                "enum": null,
                "default": false
            },
            {
                "name": "accept",
                "notes": "可选参数, 接受上传的 <a href=\"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-accept\">文件类型</a>",
                "type": "string",
                "enum": null,
                "default": null
            },
            {
                "name": "preview",
                "notes": "可选参数, 点击已上传的文件链接时的事件",
                "type": "EventEmitter<CommonFile>, CommonFile: { id: string, size: number,status: string,name: string,raw: File,url?: SafeUrl, percentage?: number }",
                "enum": null,
                "default": null
            },
            {
                "name": "remove",
                "notes": "可选参数, 文件列表移除文件时的事件",
                "type": "EventEmitter<CommonFile>",
                "enum": null,
                "default": null
            },
            {
                "name": "progress",
                "notes": "可选参数, 文件上传的进度事件",
                "type": "EventEmitter<{ commonFile: CommonFile, percentage: number }>",
                "enum": null,
                "default": null
            },
            {
                "name": "success",
                "notes": "可选参数, 文件上传成功时的事件",
                "type": "EventEmitter<{ commonFile: CommonFile, response: HttpResponse<any> }>",
                "enum": null,
                "default": null
            },
            {
                "name": "error",
                "notes": "可选参数, 文件上传失败时的事件",
                "type": "EventEmitter<{ commonFile: CommonFile, error: any }>",
                "enum": null,
                "default": null
            },
            {
                "name": "upload-filter",
                "notes": "上传前的过滤函数，你可以根据参数中的文件对象来过滤，返回 <code>false</code> 可阻止文件上传。",
                "type": "(f: File) => boolean",
                "enum": null,
                "default": "f => true"
            },
            {
                "name": "list-type",
                "notes": "文件列表展示方式",
                "type": "string",
                "enum": "text / picture / picture-card",
                "default": "text"
            },
            {
                "name": "file-list",
                "notes": "已上传的文件列表",
                "type": "Array<{ name: string, url: string }>",
                "enum": null,
                "default": null
            },
            {
                "name": "elDisabled",
                "notes": "是否禁用",
                "type": "boolean",
                "enum": null,
                "default": false
            }
        ]
    }

}
