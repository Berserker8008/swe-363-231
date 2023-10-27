import { Component } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent {
  showMessageFlag: boolean = false;

  showMessage() {
    this.showMessageFlag = true;
  }
}
