import {Component, Input, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {NbWindowService} from '@nebular/theme';
import {Office} from '../../shared/interfaces/office';
import {OfficeDetailService} from '../../shared/services/office-detail.service';
import {OfficeDetail} from '../../shared/interfaces/officeDetail';
import {DetailOfficeComponent} from '../detail-office/detail-office.component';

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
   * @param serviceOfficeD
   */
  constructor(private windowService: NbWindowService,
              private serviceOfficeD: OfficeDetailService) {}

  /**
   */
  ngOnInit(): void {}
  /**
   * ouvre la window
   */
  openWindow() {
    this.serviceOfficeD.fectOne(this._office.id).subscribe(( _: OfficeDetail ) => {
      this.windowService.open(
          DetailOfficeComponent,
          {windowClass: 'headerWindow', title:  this.name( _.office ), context: _ },
      );
    });
  }

  /**
   * retourn le nom du bureaux
   * @param office
   */
  name(office: Office): string {
    return  office.building + '' + office.floor + '' + office.num + '';
  }
  /*********************************************************GET&SETTER*************************************************/
  @Input()
  set office(o: Office) {
    this._office = o;
  }
}
