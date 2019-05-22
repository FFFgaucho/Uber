import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';
import { FeedPageModule } from '../feed/feed.module';
import { TabsPage } from './tabs.page';
import { IntroPageModule } from '../intro/intro.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    FeedPageModule,
    IntroPageModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
