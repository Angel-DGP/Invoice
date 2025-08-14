import { Component, OnInit } from '@angular/core';
import { Course } from '../../../model/Course';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-course',
  imports: [],
  templateUrl: './course.component.html',
})
export class CourseComponent implements OnInit {
  course!: Course;
  constructor(private service: CourseService) {}
  ngOnInit(): void {
    this.course = this.service.getCourse();
  }
}
