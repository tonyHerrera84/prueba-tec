import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { WebcamImage, WebcamInitError, WebcamUtil } from 'ngx-webcam';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-capture-doc',
  templateUrl: './capture-doc.component.html',
  styleUrls: ['./capture-doc.component.scss']
})
export class CaptureDocComponent implements OnInit {
  loading = false;
  public multipleWebcamsAvailable = false;
  // latest snapshot
  public webcamImage: any;
  // webcam snapshot trigger
  private trigger: Subject<void> = new Subject<void>();
  public videoOptions: MediaTrackConstraints = {
    width: {ideal: 1024},
    height: {ideal: 576}
  };

  constructor(private _router: Router) {
    // this.webcamImage = null
  }

  ngOnInit(): void {
    WebcamUtil.getAvailableVideoInputs().then(
      (mediaDevices: MediaDeviceInfo[]) => {
        console.log(mediaDevices);
        this.multipleWebcamsAvailable = mediaDevices && mediaDevices.length > 1;
      }
    );
  }

  public handleImage(webcamImage: WebcamImage): void {
    console.info('received webcam image', webcamImage);
    this.webcamImage = webcamImage;
    if (webcamImage) {
      localStorage.setItem('fotoDoc', webcamImage.imageAsDataUrl)
      this.loading = true;
      setTimeout(() => {
        this._router.navigateByUrl('/capture-showdoc')
      }, 2000);
    }
  }

  public triggerSnapshot3(): void {
    console.log('test')
    this.trigger.next();
  }

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }
}
