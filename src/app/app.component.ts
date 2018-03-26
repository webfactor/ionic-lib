import { Component, ViewChild } from '@angular/core';
import { NavController, Nav } from 'ionic-angular';
import { ComponentsPageComponent } from './pages/components/components.page';
import { HomePageComponent } from './pages/home/home.page';

@Component({
    selector: 'ion-app',
    template: '<ion-nav [root]="rootPage"></ion-nav>'
})
export class AppComponent {
    rootPage: any = HomePageComponent;
}
