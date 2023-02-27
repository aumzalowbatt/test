import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { TwoDigitDecimaNumberDirective } from './twodigitdecimalnumber.directive';
import { NumberDecimalPipe } from './number-decimal.pipe';

@NgModule({
  declarations: [		
    AppComponent,
    TwoDigitDecimaNumberDirective,
      NumberDecimalPipe
   ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
