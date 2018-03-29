import { Storage } from '@ionic/storage';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppVersion } from '@ionic-native/app-version';
import { IonicApp, IonicModule } from 'ionic-angular';

import { WfmIonicLibModule } from '../lib';
import { AppComponent } from './app.component';
import { ComponentsPageComponent } from './pages/components/components.page';
import { HomePageComponent } from './pages/home/home.page';

@NgModule({
    declarations: [AppComponent, HomePageComponent, ComponentsPageComponent],
    imports: [
        BrowserModule,
        WfmIonicLibModule,
        IonicModule.forRoot(AppComponent),
        HttpClientModule
    ],
    providers: [AppVersion, HttpClient, Storage],
    bootstrap: [IonicApp],
    entryComponents: [AppComponent, HomePageComponent, ComponentsPageComponent]
})
export class AppModule {}
