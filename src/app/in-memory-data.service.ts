import { InMemoryDbService } from '@angular/in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const cubicles = [
      { id: 0, name: 'A1', employeeName: '', mon: '', tues: '', wed: '', thurs: '', fri: '' },
      { id: 1, name: 'A2', employeeName: '', mon: '', tues: '', wed: '', thurs: '', fri: '' },
      { id: 2, name: 'A3', employeeName: '', mon: '', tues: '', wed: '', thurs: '', fri: '' },
      { id: 3, name: 'B1', employeeName: '', mon: '', tues: '', wed: '', thurs: '', fri: '' },
      { id: 4, name: 'B2', employeeName: '', mon: '', tues: '', wed: '', thurs: '', fri: '' },
      { id: 5, name: 'B3', employeeName: '', mon: '', tues: '', wed: '', thurs: '', fri: '' },
      { id: 6, name: 'C1', employeeName: '', mon: '', tues: '', wed: '', thurs: '', fri: '' },
      { id: 7, name: 'C2', employeeName: '', mon: '', tues: '', wed: '', thurs: '', fri: '' },
      { id: 8, name: 'C3', employeeName: '', mon: '', tues: '', wed: '', thurs: '', fri: '' },
      { id: 9, name: 'D1', employeeName: '', mon: '', tues: '', wed: '', thurs: '', fri: '' },
      { id: 10, name: 'D2', employeeName: '', mon: '', tues: '', wed: '', thurs: '', fri: '' },
      { id: 11, name: 'D3', employeeName: '', mon: '', tues: '', wed: '', thurs: '', fri: '' },
      { id: 12, name: 'E1', employeeName: '', mon: '', tues: '', wed: '', thurs: '', fri: '' },
      { id: 13, name: 'E2', employeeName: '', mon: '', tues: '', wed: '', thurs: '', fri: '' },
      { id: 14, name: 'E3', employeeName: '', mon: '', tues: '', wed: '', thurs: '', fri: '' }
    ];
    return {cubicles};
  }
}