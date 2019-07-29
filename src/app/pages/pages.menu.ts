//存放插件的路由信息
export const PLUGIN_MODULE=[
    {
        path: 'uiframe',
        loadChildren: './pages/uiframe/app.module#AppModule',
        data: {
            preload: true
        }
    }
];
