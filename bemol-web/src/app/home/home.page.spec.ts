import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UrlSerializer } from '@angular/router';
import { IonicModule, NavController, ToastController } from '@ionic/angular';
import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';

describe('Teste da página HomePage', () => {
    let component: HomePage;
    let nav: NavController;
    let toast: ToastController;
    let fixture: ComponentFixture<HomePage>;
    
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ HomePage ],
            imports: [IonicModule.forRoot(), HomePageRoutingModule],
            providers: [UrlSerializer]
        }).compileComponents();
        
        nav = TestBed.get(NavController);
        toast = TestBed.get(ToastController);
        
        fixture = TestBed.createComponent(HomePage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
