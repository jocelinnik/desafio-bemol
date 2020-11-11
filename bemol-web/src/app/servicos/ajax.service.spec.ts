import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { AjaxService } from './ajax.service';

describe('Teste do serviço AjaxService', () => {
    let service: AjaxService;
    let http: HttpClient;
    
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule]
        });
        http = TestBed.inject(HttpClient);
        service = TestBed.inject(AjaxService);
    });
    
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
