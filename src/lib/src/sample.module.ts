import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { SampleComponent } from './sample.component';
import { SampleService } from './sample.service';

export * from './sample.component';
export * from './sample.service';

@NgModule({
    imports: [CommonModule, IonicModule],
    declarations: [SampleComponent],
    exports: [SampleComponent]
})
export class SampleModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SampleModule,
            providers: [SampleService]
        };
    }
}
