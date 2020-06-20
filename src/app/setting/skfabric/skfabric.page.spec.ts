import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SkfabricPage } from './skfabric.page';

describe('SkfabricPage', () => {
  let component: SkfabricPage;
  let fixture: ComponentFixture<SkfabricPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkfabricPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SkfabricPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
