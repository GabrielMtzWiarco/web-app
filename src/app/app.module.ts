import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { OpenNativeSettings } from '@awesome-cordova-plugins/open-native-settings/ngx';
import { SpinnerDialog } from '@awesome-cordova-plugins/spinner-dialog/ngx';
import { PhotoViewer } from '@awesome-cordova-plugins/photo-viewer/ngx';
import { Vibration } from '@awesome-cordova-plugins/vibration/ngx';
import { DocumentViewer } from '@awesome-cordova-plugins/document-viewer/ngx';
import { Dialogs } from '@awesome-cordova-plugins/dialogs/ngx';
import { Toast } from '@awesome-cordova-plugins/toast/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },OpenNativeSettings,
    SpinnerDialog,PhotoViewer,Vibration,DocumentViewer,Dialogs,Toast],
  bootstrap: [AppComponent],
})
export class AppModule {}
