import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutComponent } from './layout.component';
import { GoldenLayoutModule } from './golden-layout/golden-layout.module';

@NgModule({
  imports: [
    CommonModule,
    GoldenLayoutModule
  ],
  declarations: [
    LayoutComponent
  ],
  exports: [
    LayoutComponent
  ]
})
export class LayoutModule { }
