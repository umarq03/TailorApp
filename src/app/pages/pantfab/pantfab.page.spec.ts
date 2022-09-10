import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PantfabPage } from './pantfab.page';

describe('PantfabPage', () => {
  let component: PantfabPage;
  let fixture: ComponentFixture<PantfabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PantfabPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PantfabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
