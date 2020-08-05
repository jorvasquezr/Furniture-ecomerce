
import {Directive, ElementRef, forwardRef, HostListener, Input} from '@angular/core';
import {MAT_INPUT_VALUE_ACCESSOR} from '@angular/material';
import {NG_VALUE_ACCESSOR} from '@angular/forms';

@Directive({
  selector: '[creditCardNumber]',
  providers: [
    {provide: MAT_INPUT_VALUE_ACCESSOR, 
      useExisting: MatInputHyphenCardFormatDirective},
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => MatInputHyphenCardFormatDirective),
        multi: true,
      }] })

export class MatInputHyphenCardFormatDirective {

   // tslint:disable-next-line:variable-name
   private _value: string | null;

   constructor(private elementRef: ElementRef<HTMLInputElement>,
   ) {
   }
 
 
   get value(): string | null {
     return this._value;
   }
 
   @Input('value')
   set value(value: string | null) {
     this._value = value;
     this.formatValue(value);
   }
   private cardFormat(value:string):string{
   
     const a = ~~(value.length/4) ;
     var b:string="" ;
     for(var i=0 ; i<(a) ; i++){
       b+= value.substr(i*4,4) 
       if(i*4+4<value.length){
         b+= "-"
       }
       
     }
     b+=value.substr(a*4,value.length-a*4)
     b=b.substr(0,19);
     return b;
   }
 
   private formatValue(value: string | null) {
     if (value !== null) {
       this.elementRef.nativeElement.value = this.cardFormat(value);
     } else {
       this.elementRef.nativeElement.value = '';
     }
   }
 
 
   @HostListener('input', ['$event.target.value'])
   onInput(value) {
     // here we cut any non numerical symbols    
     this.writeValue(value)
   }
 

 

   onChange = (_: any) => {};
   onTouched = () => {};

  writeValue(value: any) {
    if(value !== undefined){
      this._value = value.replace(/[^\d]/g, '');
      this._value=this._value.substr(0,16)
      this.formatValue(this._value); // format Value
      this.onChange(this.value);
    }
  }

  registerOnChange(fn: (_: string) => {}): void {
    this.onChange = fn;
  }
  // Allows Angular to register a function to call when the input has been touched.
  // Save the function as a property to call later here.
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

}
