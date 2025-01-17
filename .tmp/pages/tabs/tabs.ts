import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { SharePage } from '../share/share';
import { MePage } from '../me/me';
import { ContactPage } from '../contact/contact';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = SharePage;
  tab3Root: any = ContactPage;
  tab4Root: any = MePage;

  constructor() {
      
  }
}
