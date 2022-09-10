import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShirtfabricPage } from './shirtfabric.page';

describe('ShirtfabricPage', () => {
  let component: ShirtfabricPage;
  let fixture: ComponentFixture<ShirtfabricPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShirtfabricPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShirtfabricPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
