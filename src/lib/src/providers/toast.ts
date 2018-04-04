import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';

@Injectable()
export class ToastService {
    constructor(public toast: ToastController) {}

    presentShort(message: string, position: 'top' | 'middle' | 'bottom' = 'bottom') {
        this.presentWithOptions(message, position);
    }

    presentLong(message: string, position: 'top' | 'middle' | 'bottom' = 'bottom') {
        this.presentWithOptions(message, position, 5000);
    }

    presentWithOptions(
        message: string,
        position: 'top' | 'middle' | 'bottom' = 'bottom',
        duration: number = 2500,
        showCloseButton: boolean = false,
        closeButtonText: string = 'OK'
    ) {
        let toast = this.toast.create({
            message,
            duration,
            position,
            showCloseButton,
            closeButtonText
        });
        toast.present();
    }
}
