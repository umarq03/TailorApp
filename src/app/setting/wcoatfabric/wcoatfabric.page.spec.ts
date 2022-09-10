import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WcoatfabricPage } from './wcoatfabric.page';

describe('WcoatfabricPage', () => {
  let component: WcoatfabricPage;
  let fixture: ComponentFixture<WcoatfabricPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WcoatfabricPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WcoatfabricPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
