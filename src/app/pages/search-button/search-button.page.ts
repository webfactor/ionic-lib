import { Component } from '@angular/core';
import { AlertController, NavParams } from 'ionic-angular';

@Component({
    selector: 'search-button-page',
    templateUrl: 'search-button.page.html'
})
export class SearchButtonPage {
    component: any = {};

    constructor(private alertCtrl: AlertController, private navParams: NavParams) {
        this.component = this.navParams.get('component');
    }

    onSearch(term: string): void {
        let alert = this.alertCtrl.create({
            title: `Du hast nach '${term}' gesucht`,
            buttons: ['Yep!']
        });
        alert.present();
    }
}
