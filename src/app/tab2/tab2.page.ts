import { Component } from '@angular/core';
import { Vibration } from '@awesome-cordova-plugins/vibration/ngx';
import { DocumentViewer, DocumentViewerOptions } from '@awesome-cordova-plugins/document-viewer/ngx';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private vibration: Vibration,private document: DocumentViewer) {}

  parar(){
    this.vibration.vibrate(0);
  }

  vibra(){
    this.vibration.vibrate(6000);
  }

  pausado(){
    this.vibration.vibrate([2000,1000,2000]);
  }

  preView(){
    var Url  ="https://docs.google.com/file/d/0B805zFYVXQ6SbEVJc1prMkRBa1k/view?resourcekey=0-R_fPPyztQ0SPox8XdXEs9w";

    const options:DocumentViewerOptions = {
      title: 'My PDF'
    }

    this.document.viewDocument(Url, 'application/pdf', options)

  }

}
