import { Component, Testability } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mon application angular';
  welcomeMsg = 'Bienvenu tout le monde';
  user = {
    id: 0,
    name: 'Michel François',
    image: '../assets/128.jpg',
    jobTitle: 'Customer Division Assistant'
  };
testClic() {
  console.log('user :', this.user);
}
testOver(evenement) {
  console.log(evenement.target);
}
changeText(e) {
    console.log('saisie : ' + e.target.value);
}

}
