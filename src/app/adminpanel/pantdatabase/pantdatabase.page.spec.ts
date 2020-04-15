import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PantdatabasePage } from './pantdatabase.page';

describe('PantdatabasePage', () => {
  let component: PantdatabasePage;
  let fixture: ComponentFixture<PantdatabasePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PantdatabasePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PantdatabasePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
