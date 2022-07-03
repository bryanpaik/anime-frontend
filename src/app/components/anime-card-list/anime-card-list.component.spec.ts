import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeCardListComponent } from './anime-card-list.component';

describe('AnimeCardListComponent', () => {
  let component: AnimeCardListComponent;
  let fixture: ComponentFixture<AnimeCardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimeCardListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimeCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
