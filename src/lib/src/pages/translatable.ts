import { TranslateService } from '@ngx-translate/core';

export abstract class Translatable {
    translations: any = {};

    constructor(protected translate: TranslateService) {}

    public getTranslations(keys: string | string[]): Promise<any> {
        return new Promise((resolve, reject) => {
            this.translate.get(keys).subscribe(
                translations => {
                    this.translations = translations;
                    resolve(translations);
                },
                err => {
                    reject(err);
                }
            );
        });
    }
}
