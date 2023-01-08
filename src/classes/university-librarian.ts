import { format, logger, logMethod, logParameter, sealed, writable } from '../decorators';
import * as Interfaces from '../interfaces';

// @sealed('UniversityLibrarian')
// @logger
export class UniversityLibrarian implements Interfaces.Librarian {
    department: string;
    @format()
    name: string;
    email: string;
    @logMethod
    assistCustomer(@logParameter custName: string, @logParameter bookTitle: string): void {
        console.log(`${this.name} is assisting ${custName} with book ${bookTitle}`);
    }
    // @writable(true)
    assistFaculty(): void {
        console.log('Assisting faculty');
    }
    // @writable(false)
    teachCommunity(): void {
        console.log('Teaching community');
    }
}
