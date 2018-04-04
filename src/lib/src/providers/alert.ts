import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AlertController } from 'ionic-angular';

@Injectable()
export class AlertService {
    translations: any = {};
    ok: string = 'OK';
    cancel: string = 'Abbrechen';

    constructor(private alertCtrl: AlertController, protected translate: TranslateService) {
        this.translate.get('global').subscribe(
            translations => {
                this.translations = translations;
            },
            err => console.log(err)
        );
    }

    confirm(title: string, message: string, options?: any): Promise<any> {
        return new Promise((resolve, reject) => {
            let options = {
                title,
                message,
                buttons: [
                    {
                        text: this.translations.cancel || this.cancel,
                        handler: () => reject()
                    },
                    {
                        text: this.translations.ok || this.ok,
                        handler: () => resolve()
                    }
                ]
            };

            let alert = this.alertCtrl.create(options);
            alert.present();
        });
    }

    show(title: string, message: string, options?: any): Promise<any> {
        return new Promise((resolve, reject) => {
            let options = {
                title,
                message,
                buttons: [
                    {
                        text: this.translations.ok || this.ok,
                        handler: () => resolve()
                    }
                ]
            };

            let alert = this.alertCtrl.create(options);
            alert.present();
        });
    }
}
