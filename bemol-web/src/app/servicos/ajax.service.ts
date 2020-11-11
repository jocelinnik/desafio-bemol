import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class AjaxService {
    
    constructor(private http: HttpClient) {}
    
    public async buscarDadosEndereco(cep: string){
        const url = `https://viacep.com.br/ws/${cep}/json/unicode/`;
        let resultado = await this.http.get(url).toPromise();
        
        return resultado;
    }
}
