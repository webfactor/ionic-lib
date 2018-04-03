import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AppVersionComponent, StatusMessageComponent } from '../../../lib';
import { ComponentsPageComponent } from '../components/components.page';
import { SearchButtonPage } from '../search-button/search-button.page';

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
        },
        {
            title: 'Search Directive',
            description: 'Adds search functionality w/ history to any button.',
            page: SearchButtonPage
        }
    ];

    constructor(private navCtrl: NavController) {}

    goToComponentsPage(component: any): void {
        this.navCtrl.push(component.page || ComponentsPageComponent, { component });
    }

    goToProvidersPage(provider: any): void {}
}
