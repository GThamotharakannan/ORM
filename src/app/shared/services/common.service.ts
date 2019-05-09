import { Component, OnInit } from '@angular/core';

export class CommonService {

  static guid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
  }
  static getCurrentDate() {
    let d = new Date();
    let month;
    let date;
    (d.getMonth() + 1 < 10) ? month = '0' + (d.getMonth() + 1) : month = (d.getMonth() + 1);
    d.getDate() < 10 ? date = '0' + d.getDate() : date = d.getDate();
    //   return d.getFullYear() + '-' + month + '-' + date;     
    return d.getFullYear() + '-' + month + '-' + date;
    // console.log(( d.getFullYear() +'-'+month + '-' + date))
  }

  static clonegetCurrentDate() {
    let d = new Date();
    let month;
    let date;
    (d.getMonth() + 1 < 10) ? month = '0' + (d.getMonth() + 1) : month = (d.getMonth() + 1);
    d.getDate() < 10 ? date = '0' + d.getDate() : date = d.getDate();
    //   return d.getFullYear() + '-' + month + '-' + date;
    // return d.getFullYear() + '-' + month + '-' + date;
    // console.log(( d.getFullYear() +'-'+month + '-' + date))
    return date + '-' + month + '-' + d.getFullYear();
  }
  static setCurrentDateTicket() {
    let d = new Date();
    let month;
    let date;
    (d.getMonth() + 1 < 10) ? month = '0' + (d.getMonth() + 1) : month = (d.getMonth() + 1);
    d.getDate() < 10 ? date = '0' + d.getDate() : date = d.getDate();
    //return d.getFullYear() + '-' + month + '-' + date;
    // console.log(( d.getFullYear() +'-'+month + '-' + date))

    return date + '-' + month + '-' + d.getFullYear();
  }
  static getConvertDate(value) {
    let d = new Date(value);
    let month;
    let date;
    (d.getMonth() + 1 < 10) ? month = '0' + (d.getMonth() + 1) : month = (d.getMonth() + 1);
    d.getDate() < 10 ? date = '0' + d.getDate() : date = d.getDate();
    // return d.getFullYear() + '-' + month + '-' + date;
    // console.log(( d.getFullYear() +'-'+month + '-' + date))
    return date + '-' + month + '-' + d.getFullYear();
  }

  static getConvertDateYear(value) {
    let d = new Date(value);
    let month;
    let date;
    (d.getMonth() + 1 < 10) ? month = '0' + (d.getMonth() + 1) : month = (d.getMonth() + 1);
    d.getDate() < 10 ? date = '0' + d.getDate() : date = d.getDate();
    // return d.getFullYear() + '-' + month + '-' + date;
    // console.log(( d.getFullYear() +'-'+month + '-' + date))
    return d.getFullYear() + '-' + month + '-' + date;
  }


  static unixTime(unixtime) {
    var u = new Date(unixtime * 1000);
    return u.getUTCFullYear() +
      '-' + ('0' + u.getUTCMonth()).slice(-2) +
      '-' + ('0' + u.getUTCDate()).slice(-2) +
      ' ' + ('0' + u.getUTCHours()).slice(-2) +
      ':' + ('0' + u.getUTCMinutes()).slice(-2) +
      ':' + ('0' + u.getUTCSeconds()).slice(-2) +
      '.' + (u.getUTCMilliseconds() / 1000).toFixed(3).slice(2, 5)
  }
  static unixTimeConvert(unixtime) {
    var u = new Date(unixtime * 1000);
    return ('0' + u.getUTCHours()).slice(-2) +
      ':' + ('0' + u.getUTCMinutes()).slice(-2) +
      ':' + ('0' + u.getUTCSeconds()).slice(-2)
  }
  static getTimeRpts() {
    var u = new Date();
    return ('0' + u.getHours()).slice(-2) +
      ':' + ('0' + u.getMinutes()).slice(-2) +
      ':' + ('0' + u.getSeconds()).slice(-2)
  }
  static logRequestDate() {
    return Date.now();
    // return this.getCurrentDate()+'T'+this.getTimeRpts();
  }
  static getStateCode(ShortNumber) {
    let SCode = [{ '35': 'AN' }, { '28': 'AP' }, { '37': 'AD' },
    { '12': 'AR' }, { '18': 'AS' }, { '10': 'BH' }, { '04': 'CH' }, { '22': 'CT' }, { '26': 'DN' },
    { '25': 'DD' }, { '07': 'DL' }, { '30': 'GA' }, { '24': 'GJ' }, { '06': 'HR' }, { '02': 'HP' },
    { '01': 'JK' }, { '20': 'JH' }, { '29': 'KA' }, { '32': 'KL' }, { '31': 'LD' },
    { '23': 'MP' }, { '27': 'MH' }, { '14': 'MN' }, { '17': 'ME' }, { '15': 'MI' }, { '13': 'NL' },
    { '21': 'OR' }, { '34': 'PY' }, { '03': 'PB' }, { '08': 'RJ' }, { '11': 'SK' }, { '33': 'TN' },
    { '36': 'TS' }, { '16': 'TR' }, { '09': 'UP' }, { '05': 'UT' }, { '19': 'WB' }];
    for (let i = 0; i < SCode.length; i++) {
      if (SCode[i][ShortNumber]) {
        return SCode[i][ShortNumber];
      }
    }
  }
  static convertCurrencyINR(inputVal) {
    let input = parseInt(inputVal);
    if (!isNaN(input)) {
      var currencySymbol = '₹';
      //var output = Number(input).toLocaleString('en-IN');   <-- This method is not working fine in all browsers!           
      var result = input.toString().split('.');

      var lastThree = result[0].substring(result[0].length - 3);
      var otherNumbers = result[0].substring(0, result[0].length - 3);
      if (otherNumbers != '')
        lastThree = ',' + lastThree;
      var output = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;

      if (result.length > 1) {
        output += "." + result[1];
      }
      return currencySymbol + output;
    }
  }
  // static getLocalValue(){
  //   return localStorage.menusname;
  // }
  static setParentMenu() {
    return localStorage.ParentMenu;
  }
  static setNavMenu() { 
    return localStorage.NavMenu;
  }
  static setActiveMenu() {
    return localStorage.ActiveMenu;
  }
  static unixDate(unixtime) {
    var u = new Date(unixtime * 1000);
    return u.getUTCFullYear() +
      '-' + ('0' + u.getUTCMonth()).slice(-2) +
      '-' + ('0' + u.getUTCDate()).slice(-2) +
      ' ' + ('0' + u.getUTCHours()).slice(-2)
  }
  static convertStatment(str) {
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
  }
  static dateFormat(str) {
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [day,mnth,date.getFullYear()].join("-");
  }

  static cusStatment(str) {
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + (date.getDate())).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
  }


}
