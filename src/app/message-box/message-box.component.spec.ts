/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { MessageBoxComponent } from './message-box.component';

describe('Component: MessageBox', () => {
  it('should create an instance', () => {
    let component = new MessageBoxComponent();
    expect(component).toBeTruthy();
  });
});
