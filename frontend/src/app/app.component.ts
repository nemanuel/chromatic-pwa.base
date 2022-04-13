import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ITest, TestService } from './services/test/test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';
  testValue: Observable<ITest> = this.service.getTest();

  constructor(private service: TestService) { }

}
