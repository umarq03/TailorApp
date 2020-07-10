import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShirtdesignPage } from './shirtdesign.page';

describe('ShirtdesignPage', () => {
  let component: ShirtdesignPage;
  let fixture: ComponentFixture<ShirtdesignPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShirtdesignPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShirtdesignPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
