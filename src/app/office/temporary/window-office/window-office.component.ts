import {Component, Input, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {NbWindowService} from '@nebular/theme';
import {Office} from '../../shared/interfaces/office';
import {OfficePipePipe} from '../../shared/pipe/office-pipe.pipe';
import {OfficeDetailService} from '../../shared/services/office-detail.service';
import {OfficeDetail} from '../../shared/interfaces/officeDetail';

@Component({
  selector: 'ngx-window-office',
  templateUrl: './windows-office.component.html',
  styleUrls: ['./window-office.component.scss'],
})
export class WindowOfficeComponent implements OnInit {
  // bureau
  private _office: Office;
  @ViewChild('contentTemplate', { static: false }) contentTemplate: TemplateRef<any>;
  /**
   * constructor
   * @param windowService
   * @param _officePipe
   * @param serviceOfficeD
   */
  constructor(private windowService: NbWindowService, private _officePipe: OfficePipePipe,
              private serviceOfficeD: OfficeDetailService ) {}

  /**
   */
  ngOnInit(): void {}
  /**
   * ouvre la window
   */
  openWindow() {
    this.serviceOfficeD.fectOne(this._office._id).subscribe(( _: OfficeDetail ) => {
      this.windowService.open(
          this.contentTemplate,
          {windowClass: 'fullOffice', title:  this.name( _ ), context: _ },
      );
    });
  }

  /**
   * retourn le nom du bureaux
   * @param office
   */
  name(office: OfficeDetail): string {
    let name = '' + office.num;
    if (office.num < 10) {
      name = '0' + office.num;
    }
    return office.floor + '' + name + '' + office.building;
  }
  /*********************************************************GET&SETTER*************************************************/
  @Input()
  set office(o: Office) {
    this._office = o;
  }
}
