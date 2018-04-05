import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

@Component({
    selector: 'privacy-modal-page',
    templateUrl: 'privacy-modal.page.html'
})
export class PrivacyModalPage {
    document: { title: string; body: string; updatedAt: string } = null;

    constructor(private navParams: NavParams, private viewController: ViewController) {
        this.document = this.navParams.get('document');
    }

    onConfirm(): void {
        this.viewController.dismiss(true);
    }
}
