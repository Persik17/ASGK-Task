import { Component, Input } from '@angular/core';

import { Pass } from '../../models';

@Component({
  selector: 'app-pass',
  templateUrl: './pass.component.html',
  styleUrls: ['./pass.component.css']
})
export class PassComponent {
  @Input() pass: Pass;
}
