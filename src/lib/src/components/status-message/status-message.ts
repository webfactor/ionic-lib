import { Component, Input } from '@angular/core';

@Component({
    selector: 'wf-status-message',
    templateUrl: 'status-message.html',
    styleUrls: ['status-message.scss']
})
export class StatusMessageComponent {
    @Input() icon?: string = 'information-circle';
}
