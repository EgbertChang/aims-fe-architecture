// 框架库
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// 业务模块
import { AppModule } from './app/app.module';

declare const module: any;
if (module.hot) {
    // 可以执行热更新
    module.hot.accept()
}

enableProdMode();
platformBrowserDynamic().bootstrapModule(AppModule).catch(err => console.log(err));
