import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CoatdesignPage } from './coatdesign.page';

describe('CoatdesignPage', () => {
  let component: CoatdesignPage;
  let fixture: ComponentFixture<CoatdesignPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoatdesignPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CoatdesignPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
