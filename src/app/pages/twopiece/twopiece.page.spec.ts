import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TwopiecePage } from './twopiece.page';

describe('TwopiecePage', () => {
  let component: TwopiecePage;
  let fixture: ComponentFixture<TwopiecePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwopiecePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TwopiecePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
