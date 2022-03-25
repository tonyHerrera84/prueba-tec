import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaptureShowidComponent } from './capture-showid.component';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: CaptureShowidComponent
  }
];

@NgModule({
  declarations: [
    CaptureShowidComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    RouterModule.forChild(routes)
  ]
})
export class CaptureShowidModule { }
