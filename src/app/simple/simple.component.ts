import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import 'rxjs/add/operator/first';

@Component({
  moduleId: module.id,
  selector: 'seed-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.scss']
})
export class SimpleComponent implements OnInit {

  constructor(private translate: TranslateService) { }

  ngOnInit() {
  }

  sayHello() {
    // Hard coded hello message
    // alert('One hello to rule them all');

    // Hello message with translation
    this.translate.get('simple.message').first()
    .subscribe(message => alert(message));
  }
}
