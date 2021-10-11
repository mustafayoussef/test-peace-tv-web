import { ViewportScroller } from '@angular/common';
import { Component, Input, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {
  constructor(private viewportScroller: ViewportScroller) { }
  drZaker = '../../../../assets/images/intro/Dr.zaker2.png'
  drZaker2 = '/src/assets/images/intro/Dr.zaker2.png'
  ngOnInit(): void {
  }
  onScroll(elementID: string): void {
    this.viewportScroller.scrollToAnchor(elementID)
  }
}
