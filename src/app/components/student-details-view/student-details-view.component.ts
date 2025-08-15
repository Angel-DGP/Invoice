import { Component, Input } from '@angular/core';
import { Student } from '../../../model/Student';
import { StudentItemComponent } from '../student-item-view/student-item-view.component';

@Component({
  selector: 'student-details-view',
  imports: [StudentItemComponent],
  templateUrl: './student-details-view.component.html',
})
export class StudentDetailsViewComponent {
  @Input() students!: Student[];
}
