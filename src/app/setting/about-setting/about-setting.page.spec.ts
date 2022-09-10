import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AboutSettingPage } from './about-setting.page';

describe('AboutSettingPage', () => {
  let component: AboutSettingPage;
  let fixture: ComponentFixture<AboutSettingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutSettingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AboutSettingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
