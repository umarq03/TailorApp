import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StarterSettingPage } from './starter-setting.page';

describe('StarterSettingPage', () => {
  let component: StarterSettingPage;
  let fixture: ComponentFixture<StarterSettingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarterSettingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StarterSettingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
