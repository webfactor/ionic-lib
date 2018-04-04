import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { AppVersionComponent } from './components/app-version/app-version';
import { StatusMessageComponent } from './components/status-message/status-message';
import { AlertService } from './providers/alert';
import { Api } from './providers/api';
import { ToastService } from './providers/toast';

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
            providers: [Api, ToastService, AlertService]
        };
    }
}
