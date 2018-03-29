import { AppRateServiceProvider } from './../../../lib/src/providers/app-rate-service';
import { Api } from './../../../lib/src/providers/api';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ComponentsPageComponent } from '../components/components.page';
import { AppVersionComponent, StatusMessageComponent } from '../../../lib';


@Component({
    templateUrl: './home.page.html'
})
export class HomePageComponent {
    components: any[] = [
        {
            title: 'AppVersion',
            description: 'Shows the app version. 🎉',
            component: AppVersionComponent
        },
        {
            title: 'StatusMessage',
            description: 'Shows a nice message with an icon to be used in an <ion-list>.',
            component: StatusMessageComponent
        }
    ];


    constructor(private navCtrl: NavController) {}

    goToComponentsPage(component: any): void {
        this.navCtrl.push(ComponentsPageComponent, { component });
    }


}
