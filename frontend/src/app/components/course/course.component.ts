import { Component, OnInit } from '@angular/core';
import { Course } from '../../../model/Course';
import { CourseService } from '../../services/course.service';
import { StudentDetailsViewComponent } from "../student-details-view/student-details-view.component";

@Component({
  selector: 'app-course',
  imports: [StudentDetailsViewComponent],
  templateUrl: './course.component.html',
})
export class CourseComponent implements OnInit {
  course!: Course;
  constructor(private service: CourseService) {}
  ngOnInit(): void {
    this.course = this.service.getCourse();
  }
}
