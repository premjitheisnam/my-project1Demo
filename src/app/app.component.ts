import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-project1Demo';
  name="premjit";

  get(){
    return this.name;
  }
  object = {
    name: "john",
    age: 33
  }
  array = ['tiger','lion','dog']
}
