/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RecipeListService } from './RecipeList.service';

describe('Service: RecipeList', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecipeListService]
    });
  });

  it('should ...', inject([RecipeListService], (service: RecipeListService) => {
    expect(service).toBeTruthy();
  }));
});
