import {NgModule} from '@angular/core';
import { ButtonModule,
         CheckboxModule,
         IconModule,
         NavbarModule,
         PopModule,
         TileModule,
         TabsModule,
         PicklistModule,
         SubnavModule,
         DrawerModule,
         SelectModule,
         FormFieldModule,
         InputModule,
         ListModule,
         AccordionModule,
         ProgressIndicatorsModule,
         ModalModule,
         TableModule,
         SortModule,
         ToasterModule } from '@healthcatalyst/cashmere';

@NgModule({
    exports: [
      ButtonModule,
      CheckboxModule,
      IconModule,
      NavbarModule,
      PopModule,
      TileModule,
      TabsModule,
      PicklistModule,
      SubnavModule,
      DrawerModule,
      PopModule,
      SelectModule,
      ListModule,
      FormFieldModule,
      AccordionModule,
      ProgressIndicatorsModule,
      ToasterModule,
      ModalModule,
      TableModule,
      SortModule,
      InputModule
    ]
})
export class CashmereModule {}
