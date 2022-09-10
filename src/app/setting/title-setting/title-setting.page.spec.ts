import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TitleSettingPage } from './title-setting.page';

describe('TitleSettingPage', () => {
  let component: TitleSettingPage;
  let fixture: ComponentFixture<TitleSettingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitleSettingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TitleSettingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
