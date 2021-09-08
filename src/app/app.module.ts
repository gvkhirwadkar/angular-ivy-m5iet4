import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HighLightDirective } from '../highlight.directive';
import { FlippingCardComponent } from '../flipping-card/flipping-card.component';
import { PrismCubeComponent } from '../prism-cube/prism-cube.component';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { CustomDirectivePlaceholderComponent } from '../custom-directive-placeholder/custom-directive-placeholder.component';
import { BoxComponent } from '../box/box.component';
import { PrismBoxContainerComponent } from '../prism-box-container/prism-box-container.component';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [
    AppComponent,
    HelloComponent,
    HighLightDirective,
    FlippingCardComponent,
    PrismCubeComponent,
    CustomDirectivePlaceholderComponent,
    BoxComponent,
    PrismBoxContainerComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
