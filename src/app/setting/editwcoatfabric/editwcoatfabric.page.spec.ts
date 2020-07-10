import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditwcoatfabricPage } from './editwcoatfabric.page';

describe('EditwcoatfabricPage', () => {
  let component: EditwcoatfabricPage;
  let fixture: ComponentFixture<EditwcoatfabricPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditwcoatfabricPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditwcoatfabricPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
