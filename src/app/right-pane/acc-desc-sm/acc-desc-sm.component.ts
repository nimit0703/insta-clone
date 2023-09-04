import { Component,Input } from '@angular/core';
import { AccDescSm } from '../acc-desc-sm.model';

@Component({
  selector: 'app-acc-desc-sm',
  templateUrl: './acc-desc-sm.component.html',
  styleUrls: ['./acc-desc-sm.component.css']
})
export class AccDescSmComponent {
  @Input() acc:AccDescSm;
}
