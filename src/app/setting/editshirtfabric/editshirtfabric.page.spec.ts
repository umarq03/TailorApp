import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditshirtfabricPage } from './editshirtfabric.page';

describe('EditshirtfabricPage', () => {
  let component: EditshirtfabricPage;
  let fixture: ComponentFixture<EditshirtfabricPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditshirtfabricPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditshirtfabricPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
