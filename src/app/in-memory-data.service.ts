import { InMemoryDbService } from '@angular/in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  
  //This houses the array of cubicles that holds the information for the week for each cubicle
  createDb() {
    const cubicles = [
      { id: 0, name: 'A1', employeeName: '', mon: '', tues: '', wed: '', thurs: '', fri: '' },
      { id: 1, name: 'B1', employeeName: '', mon: '', tues: '', wed: '', thurs: '', fri: '' },
      { id: 2, name: 'C1', employeeName: '', mon: '', tues: '', wed: '', thurs: '', fri: '' },
      { id: 3, name: 'D1', employeeName: '', mon: '', tues: '', wed: '', thurs: '', fri: '' },
      { id: 4, name: 'E1', employeeName: '', mon: '', tues: '', wed: '', thurs: '', fri: '' },
      { id: 5, name: 'A2', employeeName: '', mon: '', tues: '', wed: '', thurs: '', fri: '' },
      { id: 6, name: 'B2', employeeName: '', mon: '', tues: '', wed: '', thurs: '', fri: '' },
      { id: 7, name: 'C2', employeeName: '', mon: '', tues: '', wed: '', thurs: '', fri: '' },
      { id: 8, name: 'D2', employeeName: '', mon: '', tues: '', wed: '', thurs: '', fri: '' },
      { id: 9, name: 'E2', employeeName: '', mon: '', tues: '', wed: '', thurs: '', fri: '' },
      { id: 10, name: 'A3', employeeName: '', mon: '', tues: '', wed: '', thurs: '', fri: '' },
      { id: 11, name: 'B3', employeeName: '', mon: '', tues: '', wed: '', thurs: '', fri: '' },
      { id: 12, name: 'C3', employeeName: '', mon: '', tues: '', wed: '', thurs: '', fri: '' },
      { id: 13, name: 'D3', employeeName: '', mon: '', tues: '', wed: '', thurs: '', fri: '' },
      { id: 14, name: 'E3', employeeName: '', mon: '', tues: '', wed: '', thurs: '', fri: '' }
    ];
    return {cubicles};
  }
}