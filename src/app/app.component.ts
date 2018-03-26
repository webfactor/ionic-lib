import { Component } from '@angular/core';
import { Api } from '../lib/src/lib.module';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    constructor(private api: Api) {
        this.api.setBaseUrl('http://persofleet.webfactormedia.de/api/v1/');
        this.api.get('bla').subscribe(res => {
            console.log(res);            
        });
    }
}
