import {Component, Input, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {NbWindowService} from '@nebular/theme';
import {DetailOfficeComponent} from '../detail-office/detail-office.component';
import {Office} from '../../shared/interfaces/office';
import {OfficePipePipe} from '../../shared/pipe/office-pipe.pipe';

@Component({
  selector: 'ngx-window-office',
  templateUrl: './windows-office.component.html',
  styleUrls: ['./window-office.component.scss'],
})
export class WindowOfficeComponent implements OnInit {
  // bureau
  private _office: Office;

  /**
   * constructor
   * @param windowService
   * @param _officePipe
   */
  constructor(private windowService: NbWindowService, private _officePipe: OfficePipePipe) {}

  /**
   */
  ngOnInit(): void {}
  /**
   * ouvre la window
   */
  openWindow() {
    this.windowService.open(DetailOfficeComponent, {
      title: this.name(this._office),
      context: this._office,
      windowClass: 'windowfullOffice'});
  }

  /**
   * retourn le nom du bureaux
   * @param office
   */
  name(office: Office): string {
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
