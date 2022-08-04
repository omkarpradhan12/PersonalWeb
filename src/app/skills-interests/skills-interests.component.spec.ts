import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsInterestsComponent } from './skills-interests.component';

describe('SkillsInterestsComponent', () => {
  let component: SkillsInterestsComponent;
  let fixture: ComponentFixture<SkillsInterestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsInterestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsInterestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
