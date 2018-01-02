import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {HttpModule} from "@angular/http";
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import 'hammerjs';
import { MatAutocompleteModule, MatButtonModule, MatButtonToggleModule, 
  MatCardModule, MatCheckboxModule, MatChipsModule, MatDatepickerModule,
  MatDialogModule, MatExpansionModule, MatGridListModule, MatIconModule, 
  MatInputModule, MatListModule, MatMenuModule, MatNativeDateModule,
  MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule, 
  MatRadioModule, MatRippleModule, MatSelectModule, MatSidenavModule, 
  MatSliderModule, MatSlideToggleModule, MatSnackBarModule, MatSortModule, 
  MatTableModule, MatTabsModule, MatToolbarModule, MatTooltipModule } from '@angular/material';
import {RepoService} from "./repo.service";
import { RepoListComponent } from './repo-list/repo-list.component';
import { AppRoutingModule } from './/app-routing.module';
import { RepoComponent } from './repo/repo.component';

@NgModule({
  declarations: [
    AppComponent,
    RepoListComponent,
    RepoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    FormsModule,
    AppRoutingModule,
    MatAutocompleteModule, MatButtonModule, MatButtonToggleModule, 
    MatCardModule, MatCheckboxModule, MatChipsModule, MatDatepickerModule,
    MatDialogModule, MatExpansionModule, MatGridListModule, MatIconModule, 
    MatInputModule, MatListModule, MatMenuModule, MatNativeDateModule,
    MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule, 
    MatRadioModule, MatRippleModule, MatSelectModule, MatSidenavModule, 
    MatSliderModule, MatSlideToggleModule, MatSnackBarModule, MatSortModule, 
    MatTableModule, MatTabsModule, MatToolbarModule, MatTooltipModule, AppRoutingModule
  ],
  providers: [RepoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
