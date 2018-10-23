import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { GoldenLayoutComponent } from './layout/golden-layout/golden-layout.component';
import { UserComponent } from './layout/golden-layout/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    GoldenLayoutComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  entryComponents: [
    GoldenLayoutComponent,
    UserComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
