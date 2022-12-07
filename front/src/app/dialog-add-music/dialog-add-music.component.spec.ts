import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddMusicComponent } from './dialog-add-music.component';

describe('DialogAddMusicComponent', () => {
  let component: DialogAddMusicComponent;
  let fixture: ComponentFixture<DialogAddMusicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAddMusicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAddMusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
