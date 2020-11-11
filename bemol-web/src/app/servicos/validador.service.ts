import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ValidadorService {
    
    constructor() {}
    
    validarEmail(email: string): boolean{
        let regex = new RegExp(/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+).(\.[a-z]{2,3})*$/);
        
        if(regex.test(email)) return true;
        else return false;
    }

    validarCPF(cpf: string): boolean{
        let regex = new RegExp(/^\d{11}$/);

        if(cpf.length===11 && regex.test(cpf)) return true;
        else return false;
    }

    validarCEP(cep: string): boolean{
        let regex = new RegExp(/^\d{8}$/);

        if(cep.length===8 && regex.test(cep)) return true;
        else return false;
    }
}
