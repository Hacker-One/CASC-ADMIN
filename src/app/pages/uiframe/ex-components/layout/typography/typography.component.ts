import {Component} from '@angular/core'


@Component({
    selector: 'ex-typography',
    templateUrl: './typography.component.html',
    styleUrls: ['./typography.component.scss'],
})
export class ExTypographyComponent {
    tableData1: any[] = [{
        px: '12',
        rem: '12/10 = 1.2',
    }, {
        px: '14',
        rem: '14/10 = 1.4',
    }, {
        px: '16',
        rem: '16/10 = 1.6',
    }, {
        px: '18',
        rem: '18/10 = 1.8',
    }, {
        px: '20',
        rem: '20/10 = 2.0',
    }, {
        px: '24',
        rem: '24/10 = 2.4',
    }, {
        px: '30',
        rem: '30/10 = 3.0',
    }, {
        px: '42',
        rem: '42/10 = 4.2',
    }, {
        px: '48',
        rem: '48/10 = 4.8',
    }];
    tableData2: any[] = [{
        style: '<div class="h1">标准字</div>',
        size: '3.6rem(36px)',
        lineHeight: '5.4rem',
        apply: '装饰性文字/Banner/Icon',
    }, {
        style: '<div class="h2">标准字</div>',
        size: '2.4rem(24px)',
        lineHeight: '3.6rem',
        apply: '文章正标题',
    }, {
        style: '<div class="h3">标准字</div>',
        size: '1.8rem(18px)',
        lineHeight: '2.7rem',
        apply: '强调标题/Widgets标题',
    }, {
        style: '<div class="h4">标准字</div>',
        size: '1.6rem(16px)',
        lineHeight: '2.4rem',
        apply: '弹出框标题/表格标题',
    }, {
        style: '<div class="h5">标准字</div>',
        size: '1.4rem(14px)',
        lineHeight: '2.1rem',
        apply: '默认字号/左导航/页签/表格内文字/正文',
    }, {
        style: '<div class="h6">标准字</div>',
        size: '1.2rem(12px)',
        lineHeight: '1.8rem',
        apply: '内联按钮内文字/内联标签内文字/辅助文字',
    }]
}
