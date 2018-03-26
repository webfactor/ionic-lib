import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule } from 'ionic-angular';

import { SampleModule } from '../lib';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, SampleModule, IonicModule.forRoot(AppComponent)],
    providers: [],
    bootstrap: [IonicApp],
    entryComponents: [AppComponent]
})
export class AppModule {}
