import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KurtadesignsPage } from './kurtadesigns.page';

describe('KurtadesignsPage', () => {
  let component: KurtadesignsPage;
  let fixture: ComponentFixture<KurtadesignsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KurtadesignsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KurtadesignsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
