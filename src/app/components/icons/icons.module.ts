
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgModule } from '@angular/core';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';






@NgModule({
  exports: [FontAwesomeModule],
  
})
export class IconsModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faSpinner);
  }
 }

