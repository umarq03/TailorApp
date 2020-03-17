import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KurtaPage } from './kurta.page';

describe('KurtaPage', () => {
  let component: KurtaPage;
  let fixture: ComponentFixture<KurtaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KurtaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KurtaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
