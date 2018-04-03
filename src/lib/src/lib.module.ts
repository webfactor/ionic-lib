import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { SearchModalPage } from './pages/search-modal/search-modal';
import { AppVersionComponent } from './components/app-version/app-version';
import { StatusMessageComponent } from './components/status-message/status-message';
import { SearchButtonDirective } from './directives/search-button';
import { Api } from './providers/api';

const pages = [SearchModalPage];
const components = [StatusMessageComponent, AppVersionComponent];
const directives = [SearchButtonDirective];

@NgModule({
    imports: [CommonModule, IonicModule],
    declarations: [...components, ...directives, ...pages],
    entryComponents: [...components, ...pages],
    exports: [...components, ...directives, ...pages]
})
export class WfmIonicLibModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: WfmIonicLibModule,
            providers: [Api]
        };
    }
}
