import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KurtafabricPage } from './kurtafabric.page';

describe('KurtafabricPage', () => {
  let component: KurtafabricPage;
  let fixture: ComponentFixture<KurtafabricPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KurtafabricPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KurtafabricPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
