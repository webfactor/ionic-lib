import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'wf-scrollable-list',
    templateUrl: 'scrollable-list.html',
    styleUrls: ['scrollable-list.scss']
})
export class ScrollableListComponent {
    @Input() items: any[] = [];
    @Input() display: string = 'card';
    @Input() color: string = 'light';
    @Output() itemClick: EventEmitter<any> = new EventEmitter();

    getImage(item: any): string {
        return item.imageUrl || null;
    }

    getIcon(item: any): string {
        return item.icon || null;
    }

    onItemClick(item: any): void {
        this.itemClick.emit(item);
    }
}
