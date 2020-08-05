
import {Directive, ElementRef, forwardRef, HostListener, Input} from '@angular/core';
import {MAT_INPUT_VALUE_ACCESSOR} from '@angular/material';
import {ControlValueAccessor,NG_VALUE_ACCESSOR} from '@angular/forms';


@Directive({
  selector: '[csv]',
  providers: [
    {provide: MAT_INPUT_VALUE_ACCESSOR, 
      useExisting: MatInputCsvCardFormatDirective},
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => MatInputCsvCardFormatDirective),
        multi: true,
      }] })

export class MatInputCsvCardFormatDirective implements ControlValueAccessor{

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

 
   private formatValue(value: string | null) {
     if (value !== null) {
       this.elementRef.nativeElement.value = value.substr(0,3);
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
      this._value=this._value.substr(0,3);
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
