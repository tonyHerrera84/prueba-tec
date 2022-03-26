import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaptureShowdocComponent } from './capture-showdoc.component';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: CaptureShowdocComponent
  }
];

@NgModule({
  declarations: [
    CaptureShowdocComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    RouterModule.forChild(routes)
  ]
})
export class CaptureShowdocModule { }
