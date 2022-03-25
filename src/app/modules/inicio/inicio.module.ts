import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio.component';
import { RouterModule, Routes } from '@angular/router';
import { CardGridComponent } from '../../components/card-grid/card-grid.component';
import { MatIconModule} from '@angular/material/icon';

const routes: Routes = [
  {
    path: '',
    component: InicioComponent
  }
];

@NgModule({
  declarations: [
    InicioComponent,
    CardGridComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    RouterModule.forChild(routes)
  ]
})
export class InicioModule { }
