import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PantPage } from './pant.page';

describe('PantPage', () => {
  let component: PantPage;
  let fixture: ComponentFixture<PantPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PantPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PantPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
