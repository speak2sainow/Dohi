import { Component } from '@angular/core';

@Component({
  selector: 'http-test',
  template: `
    <button> Test Get Request </button><br>
    <p>Output: {{GetData}}</p>
            `,
})
export class HTTPTestComponent {
    GetData: string;
}
