import { Injectable } from '@angular/core';
import {Title} from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class TitleService {

  constructor(private titleService: Title) { }

  public restoreDefault(): void {
    this.setTitle('');
  }
  public setTitle(arg: string): void {
    (arg && arg !== '') ? this.titleService.setTitle('Office Manager ' + arg)
      : this.titleService.setTitle('Office Manager');
  }
}
