import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'inicio',
    loadChildren: () =>
      import('./modules/inicio/inicio.module').then(
        (m) => m.InicioModule
      )
  },
  {
    path: 'capture-id',
    loadChildren: () =>
      import('./modules/capture-id/capture-id.module').then(
        (m) => m.CaptureIdModule
      )
  },
  {
    path: 'capture-showid',
    loadChildren: () =>
      import('./modules/capture-showid/capture-showid.module').then(
        (m) => m.CaptureShowidModule
      )
  },
  {
    path: 'capture-doc',
    loadChildren: () =>
      import('./modules/capture-doc/capture-doc.module').then(
        (m) => m.CaptureDocModule
      )
  },
  {
    path: 'capture-showdoc',
    loadChildren: () =>
      import('./modules/capture-showdoc/capture-showdoc.module').then(
        (m) => m.CaptureShowdocModule
      )
  },
  {
    path: 'capture-fin',
    loadChildren: () =>
      import('./modules/capture-fin/capture-fin.module').then(
        (m) => m.CaptureFinModule
      )
  },
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
