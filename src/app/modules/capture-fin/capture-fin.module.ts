import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaptureFinComponent } from './capture-fin.component';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: CaptureFinComponent
  }
];

@NgModule({
  declarations: [
    CaptureFinComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    RouterModule.forChild(routes)
  ]
})
export class CaptureFinModule { }
