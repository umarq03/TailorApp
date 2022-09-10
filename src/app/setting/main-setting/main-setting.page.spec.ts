import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MainSettingPage } from './main-setting.page';

describe('MainSettingPage', () => {
  let component: MainSettingPage;
  let fixture: ComponentFixture<MainSettingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainSettingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MainSettingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
