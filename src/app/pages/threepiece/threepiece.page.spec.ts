import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ThreepiecePage } from './threepiece.page';

describe('ThreepiecePage', () => {
  let component: ThreepiecePage;
  let fixture: ComponentFixture<ThreepiecePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreepiecePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ThreepiecePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
