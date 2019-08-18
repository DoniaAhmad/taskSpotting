import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'welcome', loadChildren: './welcome/welcome.module#welcomePageModule' },
  { path: 'yes-no', loadChildren: './yes-no/yes-no.module#YesNoPageModule' },
  { path: 'choose', loadChildren: './choose/choose.module#ChoosePageModule' },
  { path: 'range', loadChildren: './range/range.module#RangePageModule' },
  { path: 'rate', loadChildren: './rate/rate.module#RatePageModule' },
  { path: 'post-image', loadChildren: './post-image/post-image.module#PostImagePageModule' },
  { path: 'video', loadChildren: './video/video.module#VideoPageModule' },
  { path: 'view', loadChildren: './view/view.module#ViewPageModule' },
  { path: 'congrats', loadChildren: './congrats/congrats.module#CongratsPageModule' },
  { path: 'campaigns', loadChildren: './campaigns/campaigns.module#CampaignsPageModule' },
  { path: 'campaign-details', loadChildren: './campaign-details/campaign-details.module#CampaignDetailsPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
