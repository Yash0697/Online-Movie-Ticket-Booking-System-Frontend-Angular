import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appPhonenumber]'
})
export class PhonenumberDirective {

  private regex = new RegExp('^[^0][0-9]*$')
  private specialKeys: Array<string> = ['Backspace', 'ArrowLeft', 'ArrowRight'];
  constructor( private elementRef : ElementRef ) { }

  /**
   * Key board event
   * @param event
   */

  @HostListener('keydown', ['$event'])onKeyDown(event:KeyboardEvent){
    if(this.specialKeys.indexOf(event.key) !== -1){
      return;
    }
    const inputValue:string = this.elementRef.nativeElement.value.concat(event.key);
    if(inputValue && !String(inputValue).match(this.regex)){
      event.preventDefault();
    }
    return;
  }

  /**
  * Key board event
  * @param event
  */

  @HostListener('paste', ['$event']) onPaste(event) {

    const clipboardData = (event.originalEvent || event).clipboardData.getData('text/plain');
    if(clipboardData){
      const regex1 = RegExp('^[^0][0-9]*$');
      if(!regex1.test(clipboardData)){
        event.preventDefault();
      }
    }
          return;
  }
}
