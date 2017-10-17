import { Component } from '@angular/core';

class User {
  constructor(
    public num?: number,
  ) {}
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  powerlevel = 0;

  updating = new User();

  onSubmit(reg){

    this.powerlevel = this.updating.num;
    this.updating = new User();
    reg.resetForm();

  }
  // fullImagePath: string = './assets/img.jpg';

}
