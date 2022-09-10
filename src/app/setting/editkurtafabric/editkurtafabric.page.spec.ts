import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditkurtafabricPage } from './editkurtafabric.page';

describe('EditkurtafabricPage', () => {
  let component: EditkurtafabricPage;
  let fixture: ComponentFixture<EditkurtafabricPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditkurtafabricPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditkurtafabricPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
