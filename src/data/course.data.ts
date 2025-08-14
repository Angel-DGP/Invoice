import { identifierName } from '@angular/compiler';
import { Course } from '../model/Course';

export const courseData: Course = {
  id: 1,
  name: 'Fundamentos Docker',
  students: [
    {
      id: 101,
      identification: 1,
      name: 'Carlos',
      surname: 'Garcia',
    },
    {
      id: 102,
      identification: 2,
      name: 'Juan',
      surname: 'Lopez',
    },
    {
      id: 103,
      identification: 3,
      name: 'Alberto',
      surname: 'Lara',
    },
    {
      id: 104,
      identification: 4,
      name: 'Gregory',
      surname: 'Cedeño',
    },
  ],
};
