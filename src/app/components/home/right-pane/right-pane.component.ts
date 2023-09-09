import { Component } from '@angular/core';
import { AccDescSm } from './acc-desc-sm.model';

@Component({
  selector: 'app-right-pane',
  templateUrl: './right-pane.component.html',
  styleUrls: ['./right-pane.component.css']
})
export class RightPaneComponent {
  accs: AccDescSm[] =[
    new AccDescSm('rampal','followed by ramesh and +5','person_1','Follow'),
    new AccDescSm('James_62','followed by focs and +3','person_2','Follow'),
    new AccDescSm('carlos56.mathew','followed by indiana21 and +6','person_3','Follow'),
    new AccDescSm('adam01','followed by eva02 and +1','person_4','Follow'),
    new AccDescSm('pollad','followed by breathat and +9','staff-1','Follow'),
  ];

  ownProfile: AccDescSm = new AccDescSm('_chapal.chor420','દાદાનો ગટુડો','person_1','Switch');

}
