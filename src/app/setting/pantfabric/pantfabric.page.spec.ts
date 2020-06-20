import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PantfabricPage } from './pantfabric.page';

describe('PantfabricPage', () => {
  let component: PantfabricPage;
  let fixture: ComponentFixture<PantfabricPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PantfabricPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PantfabricPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
