import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AlertController } from 'ionic-angular';

@Injectable()
export class AlertService {
    translations: any = {};
    ok: string = 'OK';
    cancel: string = 'Abbrechen';

    constructor(private alertCtrl: AlertController, protected translate: TranslateService) {}

    private getTranslations(): Promise<any> {
        return this.translate.get('global').toPromise();
    }

    async confirm(message: string, title: string = null, subTitle: string = null): Promise<any> {
        this.translations = await this.getTranslations();

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

    async show(message: string, title: string = null, subTitle: string = null): Promise<any> {
        this.translations = await this.getTranslations();

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
