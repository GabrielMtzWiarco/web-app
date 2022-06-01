import { Component } from '@angular/core';
import { Dialogs } from '@awesome-cordova-plugins/dialogs/ngx';
import { Toast } from '@awesome-cordova-plugins/toast/ngx';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private dialogs: Dialogs,private toast: Toast) {}

  alerta(){
    this.toast.show(`Boton alerta clickeado`, '3000', 'center').subscribe(
      toast => {
      }
    );

    this.dialogs.alert("Alert","Plugins de dialogos","ok").then((data)=>{
      this.toast.show(JSON.stringify(data),"2000","bottom").subscribe(()=>{})
    })
  }

  beep(){
    this.toast.show(`Boton beep clickeado`, '5000', 'center').subscribe(
      toast => {
      }
    );

    this.dialogs.beep(5);
  }

  confirmar(){

    this.toast.show(`Boton Confirmar clickeado`, '5000', 'center').subscribe(
      toast => {
      }
    );

    this.dialogs.confirm("Seguro?","Plugins de dialogos",["Si","No"]).then((data)=>{
      this.toast.show(JSON.stringify(data),"2000","bottom").subscribe(()=>{})
    })
  }

  prompt1(){
    
    this.toast.show(`Boton Prompt clickeado`, '5000', 'center').subscribe(
      toast => {
      }
    );

    this.dialogs.prompt("Alert","Plugins de dialogos",["ok","Cancel"],"Mensaje predeterminado").then((data)=>{
      this.toast.show(JSON.stringify(data),"2000","bottom").subscribe(()=>{})
    })

  }

}
