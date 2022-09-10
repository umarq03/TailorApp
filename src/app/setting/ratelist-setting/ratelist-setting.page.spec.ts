import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RatelistSettingPage } from './ratelist-setting.page';

describe('RatelistSettingPage', () => {
  let component: RatelistSettingPage;
  let fixture: ComponentFixture<RatelistSettingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatelistSettingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RatelistSettingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
