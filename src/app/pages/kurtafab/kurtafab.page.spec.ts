import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KurtafabPage } from './kurtafab.page';

describe('KurtafabPage', () => {
  let component: KurtafabPage;
  let fixture: ComponentFixture<KurtafabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KurtafabPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KurtafabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
