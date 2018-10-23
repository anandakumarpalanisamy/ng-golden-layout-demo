
import { Component, OnInit, ViewContainerRef, OnDestroy, ElementRef, ComponentRef, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { HostListener, ReflectiveInjector } from '@angular/core';
import { UserComponent } from './user/user.component';
import { ReviewComponent } from './review/review.component';

import { CONFIG } from './golden-layout.config';

declare var GoldenLayout: any;
declare var JQuery :any;
declare var $ :any;

@Component({
  selector: 'app-golden-layout',
  templateUrl: './golden-layout.component.html',
  styleUrls: ['./golden-layout.component.css']
})
export class GoldenLayoutComponent implements OnInit {

  @ViewChild('layout') private rootEl: ElementRef;
  private layout: any;

  constructor(
    private el: ElementRef,
    private viewContainer: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  ngOnInit () {
    this.initGoldenLayout();
  }

  
  initGoldenLayout (name: string = 'main') {
    console.log('******** CONFIG[name]', CONFIG[name]);
    this.layout = new GoldenLayout(CONFIG[name], this.rootEl.nativeElement);
    this.layout.registerComponent('user', (container, state) => {
      // container.getElement().html(state.component);
      console.log('******* 1');
      let users = this.componentFactoryResolver.resolveComponentFactory(UserComponent);
      let usersRef = this.viewContainer.createComponent(users);

      container.getElement().append($(usersRef.location.nativeElement));
    });
    this.layout.init();
  }

  addLayout(): void {
    console.log('****** addLayout');
    let newConfig = {
      type: 'component',
      componentName: 'user',
      componentState: {
        message:"Top Right"
      }
    };
    // 不创建新的,而是直接插入.否则拖动面板的时候会重新绘制。导致多出窗口。
    // this.layout.createDragSource($(this.el.nativeElement).find("#layout"), newConfig);
    this.layout.root.contentItems[0].addChild(newConfig);
  }

  @HostListener('window:resize', ['$event'])
  public onResize(event: any): void {
    if (this.layout) {
      this.layout.updateSize();
    }
  }

}
