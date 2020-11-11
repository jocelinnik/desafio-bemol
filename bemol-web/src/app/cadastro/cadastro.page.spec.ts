import { HttpClient, HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UrlSerializer } from '@angular/router';
import { IonicModule, NavController, ToastController } from '@ionic/angular';
import { AjaxService } from '../servicos/ajax.service';
import { ValidadorService } from '../servicos/validador.service';
import { CadastroPageRoutingModule } from './cadastro-routing.module';

import { CadastroPage } from './cadastro.page';

describe('Teste da página CadastroPage', () => {
    let component: CadastroPage;
    let nav: NavController;
    let toast: ToastController;
    let http: HttpClient;
    let validadorService: ValidadorService;
    let apiService: AjaxService;
    let fixture: ComponentFixture<CadastroPage>;
    
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ CadastroPage ],
            imports: [IonicModule.forRoot(), HttpClientModule, CadastroPageRoutingModule],
            providers: [UrlSerializer]
        }).compileComponents();
        
        nav = TestBed.get(NavController);
        toast = TestBed.get(ToastController);
        http = TestBed.get(HttpClient);
        validadorService = TestBed.get(ValidadorService);
        apiService = TestBed.get(AjaxService);
        
        fixture = TestBed.createComponent(CadastroPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
