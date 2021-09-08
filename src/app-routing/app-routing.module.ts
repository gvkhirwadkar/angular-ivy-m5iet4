import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlippingCardComponent } from '../flipping-card/flipping-card.component';
import { PrismCubeComponent } from '../prism-cube/prism-cube.component';
import { CustomDirectivePlaceholderComponent } from '../custom-directive-placeholder/custom-directive-placeholder.component';
import { BoxComponent } from '../box/box.component';
import { PrismBoxContainerComponent } from '../prism-box-container/prism-box-container.component';

const routes: Routes = [
  { path: 'flipping-card', component: FlippingCardComponent },
  { path: 'custom-directive', component: CustomDirectivePlaceholderComponent },
  { path: 'prism-box', component: PrismBoxContainerComponent },
  { path: 'box', component: PrismBoxContainerComponent },
  { path: 'prism-cube', component: PrismBoxContainerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule {}
