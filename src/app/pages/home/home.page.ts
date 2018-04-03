import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ComponentsPage } from '../components/components.page';
import { AppVersionComponent, StatusMessageComponent } from '../../../lib';
import { ScrollableListPage } from '../scrollable-list/scrollable-list.page';

@Component({
    templateUrl: './home.page.html'
})
export class HomePage {
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
            title: 'ScrollableList',
            description: 'Shows horizontal scrollable list items',
            component: StatusMessageComponent,
            page: ScrollableListPage
        }
    ];

    constructor(private navCtrl: NavController) {}

    goToComponentsPage(component: any): void {
        this.navCtrl.push(component.page || ComponentsPage, { component });
    }

    goToProvidersPage(provider: any): void {}
}
