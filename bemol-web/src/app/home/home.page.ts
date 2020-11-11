import { Component } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private nav: NavController, 
    private toast: ToastController
  ) {}

  async mostrarToast(msg: string){
    const toast = await this.toast.create({
        message: msg,
        position: "top",
        duration: 1000
    });
    toast.present();
}

  sair(){
    this.mostrarToast("Saindo...");
    this.nav.navigateBack("/cadastro");
  }
}
