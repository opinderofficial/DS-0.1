import { MainRoutingModule } from './main-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterPageComponent } from './master-page/master-page.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UserSidebarComponent } from './user-sidebar/user-sidebar.component';



@NgModule({
  declarations: [
    MasterPageComponent,
    HeaderComponent,
    FooterComponent,
    UserSidebarComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class LayoutModule { }
