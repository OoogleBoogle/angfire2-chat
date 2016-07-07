/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { MessagingAreaComponent } from './messaging-area.component';

describe('Component: MessagingArea', () => {
  it('should create an instance', () => {
    let component = new MessagingAreaComponent();
    expect(component).toBeTruthy();
  });
});
