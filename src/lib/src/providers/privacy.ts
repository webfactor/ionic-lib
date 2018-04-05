import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ModalController } from 'ionic-angular';
import * as moment from 'moment';

import { PrivacyModalPage } from '../pages/privacy-modal/privacy-modal.page';

/**
 * TODO:
 * - Verwurstung mit DocumentService
 * --> Markdown
 * --> Mehrsprachigkeit
 * - Android Back Button verhindern
 */

@Injectable()
export class PrivacyService {
    private readonly storageKey: string = 'privacyConfirmationDate';
    private url: string = '';
    private document: { body: string; updatedAt: string } = null;

    constructor(
        private storage: Storage,
        private http: HttpClient,
        private modalCtrl: ModalController
    ) {}

    setUrl(url: string): void {
        this.url = url;
    }

    async checkForPrivacyUpdates(): Promise<any> {
        let lastConfirmation: moment.Moment;

        try {
            lastConfirmation = await this.getConfirmationDate();
        } catch (err) {
            lastConfirmation = null;
        } finally {
            this.document = await this.getContent();
            if (!lastConfirmation || moment(this.document.updatedAt).isAfter(lastConfirmation)) {
                return this.presentConfirmationModal();
            }

            return Promise.resolve();
        }
    }

    private getConfirmationDate(): Promise<moment.Moment> {
        return new Promise((resolve, reject) => {
            this.storage
                .get(this.storageKey)
                .then(date => {
                    date ? resolve(moment(date)) : reject();
                })
                .catch(err => {
                    reject();
                });
        });
    }

    private getContent(): Promise<{ title: string; body: string; updatedAt: string }> {
        return this.http
            .get(this.url)
            .map((body: any) => {
                let doc = this.findPrivacyDocument(body.documents || body.data.documents);
                return doc || body;
            })
            .toPromise();
    }

    private findPrivacyDocument(
        documents: any[]
    ): { title: string; body: string; updatedAt: string } {
        return documents.find(doc => doc.type == 'privacy');
    }

    presentConfirmationModal(): Promise<any> {
        return new Promise((resolve, reject) => {
            let modal = this.modalCtrl.create(PrivacyModalPage, {
                document: this.document,
                enableBackdropDismiss: false
            });
            modal.present();
            modal.onDidDismiss((confirmed: boolean) => {
                if (confirmed) {
                    this.storage.set(this.storageKey, moment().toISOString());
                    resolve();
                } else {
                    reject();
                }
            });
        });
    }
}
