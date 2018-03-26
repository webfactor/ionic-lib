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

    providers: any[] = [
        {
            title: 'Api',
            description: 'Communicates with your api.'
        }
    ];

    constructor(private navCtrl: NavController) {}

    goToComponentsPage(component: any): void {
        this.navCtrl.push(ComponentsPageComponent, { component });
    }

    goToProvidersPage(provider: any): void {}
}
