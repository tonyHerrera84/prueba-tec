import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaptureIdComponent } from './capture-id.component';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, Routes } from '@angular/router';
import { WebcamModule } from 'ngx-webcam';

const routes: Routes = [
  {
    path: '',
    component: CaptureIdComponent
  }
];

@NgModule({
  declarations: [
    CaptureIdComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    WebcamModule,
    RouterModule.forChild(routes)
  ]
})
export class CaptureIdModule { }
