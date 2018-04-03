import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppVersion } from '@ionic-native/app-version';
import { IonicStorageModule } from '@ionic/storage';
import { IonicApp, IonicModule } from 'ionic-angular';

import { WfmIonicLibModule } from '../lib';
import { AppComponent } from './app.component';
import { ComponentsPageComponent } from './pages/components/components.page';
import { HomePageComponent } from './pages/home/home.page';
import { SearchButtonPage } from './pages/search-button/search-button.page';

const pages = [AppComponent, HomePageComponent, ComponentsPageComponent, SearchButtonPage];

@NgModule({
    declarations: pages,
    imports: [
        BrowserModule,
        WfmIonicLibModule,
        IonicModule.forRoot(AppComponent),
        IonicStorageModule.forRoot(),
        HttpClientModule
    ],
    providers: [AppVersion, HttpClient],
    bootstrap: [IonicApp],
    entryComponents: pages
})
export class AppModule {}
