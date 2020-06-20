import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MoreRatelistPage } from './more-ratelist.page';

describe('MoreRatelistPage', () => {
  let component: MoreRatelistPage;
  let fixture: ComponentFixture<MoreRatelistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoreRatelistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MoreRatelistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
