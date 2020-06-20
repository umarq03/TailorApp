import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CoatfabricPage } from './coatfabric.page';

describe('CoatfabricPage', () => {
  let component: CoatfabricPage;
  let fixture: ComponentFixture<CoatfabricPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoatfabricPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CoatfabricPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
