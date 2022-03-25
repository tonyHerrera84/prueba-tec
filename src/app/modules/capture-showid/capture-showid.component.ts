import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-capture-showid',
  templateUrl: './capture-showid.component.html',
  styleUrls: ['./capture-showid.component.scss']
})
export class CaptureShowidComponent implements OnInit {
  public foto: string | undefined;

  constructor() { }

  ngOnInit(): void {
    const localFoto = localStorage.getItem('foto');
    console.log(localFoto)
    if (localFoto) {
      this.foto = localFoto;
    }
  }

}
