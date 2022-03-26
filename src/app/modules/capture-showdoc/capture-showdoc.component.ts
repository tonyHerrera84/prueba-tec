import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-capture-showdoc',
  templateUrl: './capture-showdoc.component.html',
  styleUrls: ['./capture-showdoc.component.scss']
})
export class CaptureShowdocComponent implements OnInit {
  public foto: string | undefined;

  constructor() { }

  ngOnInit(): void {
    const localFoto = localStorage.getItem('fotoDoc');
    console.log(localFoto)
    if (localFoto) {
      this.foto = localFoto;
    }
  }

}
