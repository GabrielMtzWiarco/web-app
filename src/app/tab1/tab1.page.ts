import { Component } from '@angular/core';
import { OpenNativeSettings } from '@awesome-cordova-plugins/open-native-settings/ngx';
import { SpinnerDialog } from '@awesome-cordova-plugins/spinner-dialog/ngx';
import { PhotoViewer, PhotoViewerOptions } from '@awesome-cordova-plugins/photo-viewer/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private openNativeSettings: OpenNativeSettings,
    private spinnerDialog: SpinnerDialog,private photoViewer: PhotoViewer) {}

  girar(){
    this.spinnerDialog.show();
    setTimeout(()=>{
      this.spinnerDialog.hide();
    },5000)
  }

  goToBt(){
    
    this.openNativeSettings.open("bluetooth").then((res)=>{

    },(err)=>{
alert(err);
    })

  }

  ver(){
    if(window.confirm("Quieres abrir una foto?")){
      var photoUrl = window.prompt("Ingrese la URL");
      var option:PhotoViewerOptions={
        closeButton:true
      }
      this.photoViewer.show(photoUrl,"Test photo",option)
    }
  }

}
