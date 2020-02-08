import {Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild} from '@angular/core';
import { NbWindowService} from '@nebular/theme';
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
  private _change$: EventEmitter<boolean>;
  @ViewChild('contentTemplate', { static: false }) contentTemplate: TemplateRef<any>;
  /**
   * constructor
   * @param windowService
   * @param serviceOfficeD
   */
  constructor(private windowService: NbWindowService,
              private serviceOfficeD: OfficeDetailService) {
    this._change$ = new EventEmitter<boolean>();
  }

  /**
   */
  ngOnInit(): void {}
  /**
   * ouvre la window
   */
  openWindow() {
    this.serviceOfficeD.fetchOne(this._office.id).subscribe((_: OfficeDetail ) => {
      const nbWindowsRef = this.windowService.open(
          DetailOfficeComponent,
          {windowClass: 'headerWindow', title:  this.name( _.office ), context: _ },
      );
      const tmpP = _.persons;
      const tmpO = _.office.size;
      nbWindowsRef.onClose.subscribe((__) => {
        this.change((tmpP !== _.persons) || (tmpO !== _.office.size) );
      });
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

  @Output('ChangeOffice')
  get change$() {
    return this._change$;
  }
  change(ischange: boolean) {
    this._change$.emit(ischange);
  }
  @Input()
  set office(o: Office) {
    this._office = o;
  }
}
