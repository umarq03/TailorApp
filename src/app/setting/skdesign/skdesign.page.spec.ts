import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SkdesignPage } from './skdesign.page';

describe('SkdesignPage', () => {
  let component: SkdesignPage;
  let fixture: ComponentFixture<SkdesignPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkdesignPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SkdesignPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
