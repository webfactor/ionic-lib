import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppVersion } from '@ionic-native/app-version';
import { IonicApp, IonicModule } from 'ionic-angular';

import { WfmIonicLibModule } from '../lib';
import { Api } from '../lib/src/lib.module';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        WfmIonicLibModule,
        IonicModule.forRoot(AppComponent),
        HttpClientModule
    ],
    providers: [AppVersion, Api, HttpClient],
    bootstrap: [IonicApp],
    entryComponents: [AppComponent]
})
export class AppModule {}
