import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';

import Usuario from '../modelos/usuario';
import { AjaxService } from '../servicos/ajax.service';
import { ValidadorService } from '../servicos/validador.service';

@Component({
    selector: 'app-cadastro',
    templateUrl: './cadastro.page.html',
    styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
    usuario: Usuario;
    validacoes: any;
	configuracoes: any;
    
    constructor(
        public nav: NavController,
        public toast: ToastController,
        private validadorService: ValidadorService,
        private apiService: AjaxService
    ) {}
    
    ngOnInit() {
        this.usuario = new Usuario();
		this.configuracoes = {
			verSenha: {
				bol: false,
				campo: "password",
				icone: "eye-off"
			}
		}
    }

    verSenha(){
        this.configuracoes.verSenha.bol = !this.configuracoes.verSenha.bol;
		this.configuracoes.verSenha.campo = (this.configuracoes.verSenha.bol) ? "text" : "password";
		this.configuracoes.verSenha.icone = (this.configuracoes.verSenha.bol) ? "eye" : "eye-off";
    }

    async mostrarToast(msg: string){
        const toast = await this.toast.create({
            message: msg,
            position: "top",
            duration: 3000
        });
        toast.present();
    }

    buscarDadosEndereco(){
        if(this.validadorService.validarCEP(this.usuario.cep)){
            let result = this.apiService.buscarDadosEndereco(this.usuario.cep);

            result.then((dados: any) => {
                this.usuario.rua = dados.logradouro;
                this.usuario.bairro = dados.bairro;
                this.usuario.cidade = dados.localidade;
                this.usuario.uf = dados.uf;
            });
        }else{
            this.mostrarToast("CEP inválido, por favor tente de novo");
        }
    }

    salvar(){
        let emailValido = this.validadorService.validarEmail(this.usuario.email);
        let cpfValido = this.validadorService.validarCPF(this.usuario.cpf);

        if(emailValido && cpfValido){
            this.mostrarToast("Usuario cadastrado");
            this.nav.navigateForward("/home");
        }else{
            let msg = "Campos inválidos:\n";
            msg += (!cpfValido) ? "CPF\n": "";
            msg += (!emailValido) ? "E-mail\n" : "";
            msg += "Tente de novo";

            this.mostrarToast(msg);
        }
    }
}
