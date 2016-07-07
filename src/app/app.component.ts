import { Component } from '@angular/core';
import { TextboxComponent } from './textbox'
import { MessageBoxComponent } from './message-box'

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [TextboxComponent, MessageBoxComponent]
})
export class AppComponent {
  title = 'Stupid Message Thing';
}
