import { BrowserModule } from '@angular/platform-browser';
import { NgModule, DoBootstrap, ApplicationRef, Injector } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { createCustomElement } from '@angular/elements';
import { AppComponent } from './app.component';
import { MyWebComponentComponent } from './my-web-component/my-web-component.component';

@NgModule({
   imports: [
      BrowserModule,
      FormsModule,
   ],
   declarations: [
      AppComponent,
      MyWebComponentComponent
   ],
   providers: [],
   entryComponents: [
      MyWebComponentComponent
   ],
   bootstrap: []
})
export class AppModule implements DoBootstrap {

   constructor(private injector: Injector) {
   }

   ngDoBootstrap(appRef: ApplicationRef): void {
      const Elm = createCustomElement(MyWebComponentComponent, { injector: this.injector });
      customElements.define('my-web-component', Elm);
   }

}
