import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoldenLayoutComponent } from './golden-layout.component';
import { UserComponent } from './user/user.component';
import { ReviewComponent } from './review/review.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    GoldenLayoutComponent,
    UserComponent,
    ReviewComponent
  ],
  providers: [],
  exports: [
    GoldenLayoutComponent,
    UserComponent,
    ReviewComponent
  ]
})
export class GoldenLayoutModule { }
