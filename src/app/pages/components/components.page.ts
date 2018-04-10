import {
    Component,
    ComponentFactoryResolver,
    Injector,
    ViewChild,
    EmbeddedViewRef,
    AfterViewInit,
    ApplicationRef
} from '@angular/core';
import { NavParams, Content } from 'ionic-angular';

@Component({
    templateUrl: './components.page.html'
})
export class ComponentsPage implements AfterViewInit {
    component: any = {};

    @ViewChild(Content) content: Content;

    constructor(
        private navParams: NavParams,
        private componentFactoryResolver: ComponentFactoryResolver,
        private injector: Injector,
        private appRef: ApplicationRef
    ) {
        this.component = this.navParams.get('component');
    }

    ngAfterViewInit(): void {
        setTimeout(() => this.initComponent(), 1000);
    }

    private initComponent() {
        const componentRef = this.componentFactoryResolver
            .resolveComponentFactory(this.component.component)
            .create(this.injector);
        this.appRef.attachView(componentRef.hostView);
        const domElem = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;

        this.content.getScrollElement().appendChild(domElem);
        this.content.resize();
    }
}
