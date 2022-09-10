import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KurtadesignPage } from './kurtadesign.page';

describe('KurtadesignPage', () => {
  let component: KurtadesignPage;
  let fixture: ComponentFixture<KurtadesignPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KurtadesignPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KurtadesignPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
