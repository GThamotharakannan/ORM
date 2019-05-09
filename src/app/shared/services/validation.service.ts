import { Component, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';

export class ValidationService {
    
    static creditCardValidator(control: AbstractControl) {        
        // tslint:disable-next-line:max-line-length
        if (control.value.match(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/)) {
            return null;
        } else {
            return { 'invalidCreditCard': true };
        }
    }

    static emailValidator(control: AbstractControl) {
      const ControlValue = control.value ? control.value.trim() : null;
      // tslint:disable-next-line:max-line-length
      const re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
      if (re.test(ControlValue)) {
          return null;
      } else {
          return { 'invalidEmailAddress': true };
      }
    }

    static passwordValidator(control: AbstractControl) {
      if (control.value.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$/)) {
          return null;
      } else {
          return { 'invalidPassword': true };
      }
    }

    static spaceValidator(control: AbstractControl) {
      const ControlValue = control.value ? control.value.trim() : null;
      if (ControlValue) {
          return null;
      } else {
          return { 'invalidPropertyData': true };
      }
    }

    static numberValidator(control: AbstractControl) {
      const ControlValue = control.value ? control.value.trim() : null;
      const re = /^[+-]?\d*\.\d+$|^[+-]?\d+(\.\d*)?$/;
      if (re.test(ControlValue)) {
          return null;
      } else {
          return { 'invalidNumber': true };
      }
    }
    static numberValidatorR(control: AbstractControl) {
        const ControlValue = control.value ? control.value.trim() : null;
        const re = /^[0-9-]{12}?$/;
        if (re.test(ControlValue)) {
            return null;
        } else {
            return { 'invalidNumber': true };
        }
      }

    static passwordRepeatValidation(control) {
      const password = control.parent ? control.parent.controls['Password'].value : null;
      const passControl = control.root.get('Password'); // Or magic is this
      if (control.value === password) {
          return null;
      } else {
          return { 'invalidMismatchPassword': true };
      }
    }

    static domainNameValidation(control) {
      const ControlValue = control.value ? control.value.trim() : null;
      const re = /^[a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+$/;
      if (re.test(ControlValue)) {
          return null;
      } else {
          return { 'invalidDomain': true };
      }
    }

    static alphaWithInsideSpaceValidation(control) {
      const ControlValue = control.value ? control.value.trim() : null;
      const re = /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/;
      console.log(re.test(ControlValue));

      if (re.test(ControlValue)) {
          return null;
      } else {
          return { 'invalidName': true };
      }
    }
    static alphaWithInsideSpaceValidationR(control) {
        const ControlValue = control.value ? control.value.trim() : null;
        const re = /^[a-zA-Z]{1}[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/;
        console.log(re.test(ControlValue));
  
        if (re.test(ControlValue)) {
            return null;
        } else {
            return { 'invalidName': true };
        }
      }
    // /^[.@&]?[a-zA-Z0-9 ]+[ !.@&()]?[ a-zA-Z0-9!()]+/
    static companynameValidation(control) {
        const ControlValue = control.value ? control.value.trim() : null;
        const re = /^[.@&]?[a-zA-Z0-9 ]+[ !.@&()]?[ a-zA-Z0-9!()]+/;
        
        if (re.test(ControlValue)) {
            return null;
        } else {
            return { 'invalidCompanynameName': true };
        }
    }

    static minimumone(control) {
        const ControlValue = control.value ? control.value.trim() : null;        
        if (0<ControlValue && ControlValue.toString()[0] != 0) {
            return null;
        } else {
            return { 'minimumOneError': true };
        }
    }    
    static gstValidation(control) {
        const ControlValue = control.value ? control.value.trim() : null;
        const re = /^[0-9]{2}[A-Za-z]{3}[CPHFATBLJGcphfatblj]{1}[A-Za-z]{1}[0-9]{4}[A-Za-z]{1}[0-9A-Za-z]{1}(Z|z)[0-9A-Za-z]{1}$/;
            
        const n = control.value ? control.value.trim().substring(0,2) : 99 ;     
        const codeVerify = (n == '35' || n == '28' || n == '37' || n == '12' || n == '18' || n == '10' || n == '04' || 
            n == '22' || n == '26' || n == '25' || n == '07' || n == '30' || n == '24' || n == '06' || 
        n == '02' || n == '01' || n == '20' || n == '29' || n == '32' || n == '31' || n == '23' || 
        n == '27' || n == '14' || n == '17' || n == '15' || n == '13' || n == '21' || n == '34' || 
        n == '03' || n == '08' || n == '11' || n == '33' || n == '36' || n == '16' || n == '09' || 
        n == '05' || n == '19') ? true:false;
        
        const ZValue = control.value ? control.value.trim() : 'test';
        const ZValueVarify = ((ZValue.substring(ZValue.length-2)[0]) == 'Z' && ZValue.length == 15) ? true:false;
        
        if (re.test(ControlValue) && codeVerify && ZValueVarify) {
            return null;
        } else {
            return { 'invalidGst': true };
        }
    }

    static getStatcodechk(number){   
        const n = number.substring(0,2);     
        (n == '35' || n == '28' || n == '37' || n == '12' || n == '18' || n == '10' || n == '04' || 
        n == '22' || n == '26' || n == '25' || n == '07' || n == '30' || n == '24' || n == '06' || 
        n == '02' || n == '01' || n == '20' || n == '29' || n == '32' || n == '31' || n == '23' || 
        n == '27' || n == '14' || n == '17' || n == '15' || n == '13' || n == '21' || n == '34' || 
        n == '03' || n == '08' || n == '11' || n == '33' || n == '36' || n == '16' || n == '09' || 
        n == '05' || n == '19') ? true:false;
        return n;
    } 
    static domainNameValidationR(control) {
        const ControlValue = control.value ? control.value.trim() : null;
        
        const re = /^[0-9A-Za-z]{2,50}[\.]{1}[a-z]{2,3}]*$/;
        if (re.test(ControlValue)) {
            return null;
        } else {
            return { 'invalidDomain': true };
        }
      }
      static emailValidationR(control) {
        const ControlValue = control.value ? control.value.trim() : null;
        
        const re = /^[0-9A-Za-z\.\!\#\$\%\^\&\*\_\-]{2,50}[@]{1}[A-Za-z]{1,25}(?:\.[a-zA-Z]{2,})+$/;
        if (re.test(ControlValue)) {
            return null;
        } else {
            return { 'invalidDomain': true };
        }
      }
      static amountValidation(control) {
        const ControlValue = control.value ? control.value.trim() : null;
        
        const re = /^[0-9]{0,11}[\.]{0,1}[0-9]{1,5}]*$/;
        if (re.test(ControlValue)) {
            return null;
        } else {
            return { 'invalidAmount': true };
        }
      }
}
