import { Component } from '@angular/core';
import { NavParams, AlertController } from 'ionic-angular';

@Component({
    templateUrl: 'scrollable-list.page.html'
})
export class ScrollableListPage {
    component: any = null;
    items: any[] = [
        { title: 'Kitty 1', imageUrl: 'http://placekitten.com/g/101/101' },
        { title: 'Kitty 2', imageUrl: 'http://placekitten.com/g/102/102' },
        { title: 'Kitty 3', imageUrl: 'http://placekitten.com/g/103/103' },
        { title: 'Kitty 4', icon: 'logo-octocat' },
        { title: 'Kitty 5', imageUrl: 'http://placekitten.com/g/105/105' },
        { title: 'Kitty 6', imageUrl: 'http://placekitten.com/g/106/106' },
        { title: 'Kitty 7', imageUrl: 'http://placekitten.com/g/107/107' },
        { title: 'Kitty 8', imageUrl: 'http://placekitten.com/g/108/108' }
    ];

    constructor(private navParams: NavParams, private alertCtrl: AlertController) {
        this.component = this.navParams.get('component');
    }

    onItemClick(item: any): void {
        let alert = this.alertCtrl.create({
            title: item.title + ' clicked! 😸',
            buttons: ['Meow!']
        });
        alert.present();
    }
}
