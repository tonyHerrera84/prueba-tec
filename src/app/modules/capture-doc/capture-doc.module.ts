import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaptureDocComponent } from './capture-doc.component';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, Routes } from '@angular/router';
import { WebcamModule } from 'ngx-webcam';

const routes: Routes = [
  {
    path: '',
    component: CaptureDocComponent
  }
];

@NgModule({
  declarations: [
    CaptureDocComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    WebcamModule,
    RouterModule.forChild(routes)
  ]
})
export class CaptureDocModule { }
