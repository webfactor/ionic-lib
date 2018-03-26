import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { StatusMessageComponent } from './components/status-message/status-message';
import { AppVersionComponent } from './components/app-version/app-version';
import { Api } from './providers/api';

const components = [StatusMessageComponent, AppVersionComponent];

@NgModule({
    imports: [CommonModule, IonicModule],
    declarations: components,
    entryComponents: components,
    exports: components
})
export class WfmIonicLibModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: WfmIonicLibModule,
            providers: [
                Api
            ]
        };
    }
}
