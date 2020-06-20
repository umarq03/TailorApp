import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PantdesignsPage } from './pantdesigns.page';

describe('PantdesignsPage', () => {
  let component: PantdesignsPage;
  let fixture: ComponentFixture<PantdesignsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PantdesignsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PantdesignsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
