import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppVersion } from '@ionic-native/app-version';
import { IonicApp, IonicModule } from 'ionic-angular';

import { WfmIonicLibModule } from '../lib';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, WfmIonicLibModule, IonicModule.forRoot(AppComponent)],
    providers: [AppVersion],
    bootstrap: [IonicApp],
    entryComponents: [AppComponent]
})
export class AppModule {}
