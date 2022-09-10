import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EmailSettingPage } from './email-setting.page';

describe('EmailSettingPage', () => {
  let component: EmailSettingPage;
  let fixture: ComponentFixture<EmailSettingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailSettingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EmailSettingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
