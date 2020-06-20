import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CoatfabPage } from './coatfab.page';

describe('CoatfabPage', () => {
  let component: CoatfabPage;
  let fixture: ComponentFixture<CoatfabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoatfabPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CoatfabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
