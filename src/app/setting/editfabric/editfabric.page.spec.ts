import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditfabricPage } from './editfabric.page';

describe('EditfabricPage', () => {
  let component: EditfabricPage;
  let fixture: ComponentFixture<EditfabricPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditfabricPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditfabricPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
