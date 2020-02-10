import { Injectable } from '@angular/core';
import {Office} from '../interfaces/office';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment.prod';
import {defaultIfEmpty, filter} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class OfficeService {
  private readonly _backendURL: any;
  // liste des bureaux
  // private _office: Office[];

  constructor(private _http: HttpClient) {
    // this._office = OFFICES;
    this._backendURL = {};

    // build backend base url
    let baseUrl = `${environment.backend.protocol}://${environment.backend.host}`;
    if (environment.backend.port) {
      baseUrl += `:${environment.backend.port}`;
    }

    // build all backend urls
    Object.keys(environment.backend.endpoints).forEach(k => this._backendURL[ k ] = `${baseUrl}${environment.backend.endpoints[ k ]}`);

  }

  /**
   * renvoit la liste des bureaux
   */
  fecth(): Observable<Office[]> {
    return this._http.get<Office[]>(this._backendURL.allOffice)
        .pipe(
            filter(_ => !!_),
            defaultIfEmpty([]),
        );
  }

  /**
   * renvoit la liste des bureaux
   */
  officeDate(timestamp: number): Observable<Office[]> {
    return this._http.get<Office[]>(this._backendURL.officeDate.replace(':timestamp', timestamp))
        .pipe(
            filter(_ => !!_),
            defaultIfEmpty([]),
        );
  }
//   @GetMapping("date/{timestamp}")
//   public ResponseEntity<List<OfficesDto>> getOffices(@PathVariable long timestamp){
//   List<Office> offices = officeService.fetchAll();
//   //Liste des occupations par bureau
//   List<Double> occupations = new ArrayList<Double>();
//   for(Office office: offices){
//   Double occupation = 0.0;
//   List<OfficeAssignment> officeAssignments = officeAssignmentService.findByOfficeID(office.getId(), true);
//   for(OfficeAssignment oa : officeAssignments) {
//   if (timestamp > oa.getStartDate().toEpochDay()*24*60*60*1000 &&
//   timestamp < oa.getEndDate().toEpochDay()*24*60*60*1000){
//   occupation += oa.getPerson().getStatus().getSize();
// }
// }
// //occupations.add(this.findOccupationByOfficeId(office.getId()));
// occupations.add(occupation);
// }
// //List de si il y a un étranger par bureau
// List<Boolean> hasStrangers = new ArrayList<Boolean>();
// for(Office office: offices){
//   hasStrangers.add(officeAssignmentService.hasStrangerByOfficeId(office.getId()));
// }
// List<OfficesDto> officesDTO = mapOfficesDtosFromOffices(offices, occupations, hasStrangers);
// return new ResponseEntity<List<OfficesDto>>(officesDTO, HttpStatus.OK);
// }

  /**
   *
   * @param files
   */
  import(files: any[]): Observable<any> {
      const formData = new FormData();
      formData.append('file', files[0]);
      return  this._http.post( this._backendURL.importOffice, formData);
  }

  /**
   *
   * @param office
   */
  updateCapacity(office: Office) {
    return  this._http.put<Office>(this._backendURL.updateCapacity, office);
  }
  // /**
  //  *
  //  * @param files
  //  */
  // importDefault(): Observable<any> {
  //   return  this._http.get( this._backendURL.importOffice);
  // }
  //
  // /**
  //  * Function to return request options
  //  */
  // private _options(headerList: object = {}): any {
  //   return { headers: new HttpHeaders(Object.assign({ 'Content-Type': 'application/json' }, headerList)) };
  // }
}
