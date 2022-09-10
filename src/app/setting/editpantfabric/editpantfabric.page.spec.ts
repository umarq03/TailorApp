import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditpantfabricPage } from './editpantfabric.page';

describe('EditpantfabricPage', () => {
  let component: EditpantfabricPage;
  let fixture: ComponentFixture<EditpantfabricPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditpantfabricPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditpantfabricPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
