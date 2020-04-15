import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KameezdesignsPage } from './kameezdesigns.page';

describe('KameezdesignsPage', () => {
  let component: KameezdesignsPage;
  let fixture: ComponentFixture<KameezdesignsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KameezdesignsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KameezdesignsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
