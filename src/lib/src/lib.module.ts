import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { StatusMessageComponent } from './components/status-message/status-message';
import { AppVersionComponent } from './components/app-version/app-version';

export * from './components/status-message/status-message';
export * from './components/app-version/app-version';

@NgModule({
    imports: [CommonModule, IonicModule],
    declarations: [StatusMessageComponent, AppVersionComponent],
    exports: [StatusMessageComponent, AppVersionComponent]
})
export class WfmIonicLibModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: WfmIonicLibModule,
            providers: [
                // SampleService
            ]
        };
    }
}
