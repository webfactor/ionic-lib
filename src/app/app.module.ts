import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppVersion } from '@ionic-native/app-version';
import { IonicApp, IonicModule } from 'ionic-angular';

import { WfmIonicLibModule } from '../lib';
import { AppComponent } from './app.component';
import { ComponentsPage } from './pages/components/components.page';
import { HomePage } from './pages/home/home.page';
import { ScrollableListPage } from './pages/scrollable-list/scrollable-list.page';

@NgModule({
    declarations: [AppComponent, HomePage, ComponentsPage, ScrollableListPage],
    imports: [
        BrowserModule,
        WfmIonicLibModule,
        IonicModule.forRoot(AppComponent),
        HttpClientModule
    ],
    providers: [AppVersion, HttpClient],
    bootstrap: [IonicApp],
    entryComponents: [AppComponent, HomePage, ComponentsPage, ScrollableListPage]
})
export class AppModule {}
