import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { AppVersionComponent } from './components/app-version/app-version';
import { StatusMessageComponent } from './components/status-message/status-message';
import { PrivacyModalPage } from './pages/privacy-modal/privacy-modal.page';
import { Api } from './providers/api';
import { PrivacyService } from './providers/privacy';

const components = [StatusMessageComponent, AppVersionComponent];
const pages = [PrivacyModalPage];

@NgModule({
    imports: [CommonModule, IonicModule],
    declarations: [...components, ...pages],
    entryComponents: [...components, ...pages],
    exports: components
})
export class WfmIonicLibModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: WfmIonicLibModule,
            providers: [Api, PrivacyService]
        };
    }
}
