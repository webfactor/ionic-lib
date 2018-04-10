import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { AppVersionComponent } from './components/app-version/app-version';
import { ScrollableListComponent } from './components/scrollable-list/scrollable-list';
import { StatusMessageComponent } from './components/status-message/status-message';
import { SearchButtonDirective } from './directives/search-button';
import { SearchModalPage } from './pages/search-modal/search-modal';
import { AdmobService } from './providers/admob';
import { AlertService } from './providers/alert';
import { Api } from './providers/api';
import { ToastService } from './providers/toast';

const pages = [SearchModalPage];
const components = [StatusMessageComponent, AppVersionComponent, ScrollableListComponent];
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
            providers: [Api, ToastService, AlertService, AdmobService]
        };
    }
}
