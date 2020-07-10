import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditcoatfabricPage } from './editcoatfabric.page';

describe('EditcoatfabricPage', () => {
  let component: EditcoatfabricPage;
  let fixture: ComponentFixture<EditcoatfabricPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditcoatfabricPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditcoatfabricPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
