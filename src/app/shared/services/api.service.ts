import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { URL } from './commonUrlService';
import { HttpHeaderService } from './http-header.service';

@Injectable()
export class ApiService {
    detail: any;  
  // baseUrL = 'http://192.168.0.32:8080/core/api/v1/ccp-invoice';
    //environment: any = { "api_url": URL.baseUrL+'hancock' };
    environment: any = URL.baseUrL;
    
    constructor(public http: HttpClient,public http1:HttpHeaderService) {
        console.log(this.environment);
    }1
    protected standardHeaders() {
        return {
            'Content-Type': 'application/json',
            'token': '12345',
        };
    }
    deletePaymentList(paymentId,invoiceId){
        // return  this.http1.post( this.invoiceEnvoironmentUrl.api_url+'/deletePaymentDetail?paymentId='+paymentId+'&invoiceId='+invoiceId+'&userId='+localStorage.loginuserid,'').map((response) => (response.json()), (error) => (error));;
        //http://localhost:9092/core/api/v1/ccp-invoice/deletePaymentDetail?paymentId=156&&invoiceId=673
       }
    save(object: any, url) {
        return this.http.post(this.environment.api_url + url, object);
    }

    saveArray(any,status, url) {
        console.log(any);
        return this.http1.post(this.environment.api_url + url +"?status="+status+"&userId="+localStorage.loginuserid, any).map((response) => (response.json()), (error) => (error));;;
    }

    getByObject(object: any, url) {
        return this.http.post(this.environment.api_url + url, object);
    }

    delete(id: any) {
        return this.http.delete(this.environment.api_url + id);
    }


    getById(id: any, url) {
        return this.http.get(this.environment.api_url + url + id);
    }

    get(url) {
        return this.http.get(this.environment.api_url + url);
    }

    getCustomer(url) {
        // let domainName = localStorage.domainidVal;
        // if(domainName == 'cloudnowtech.com'){
        //     domainName = '';
        // }
        // return this.http1.get(this.invoiceEnvoironmentUrl.api_url + url+'?userId='+localStorage.loginuserid+'&domainName='+domainName).map((response) => (response.json()), (error) => (error));
    }


    // getProducts(url) {
    //     // let domainName = localStorage.domainidVal;
    //     // if(domainName == 'cloudnowtech.com'){
    //     //     domainName = '';
    //     // }
    //     // return this.http1.get(this.invoiceEnvoironmentUrl.api_url + url+'?userId='+localStorage.loginuserid+'&domainName='+domainName).map((response) => (response.json()), (error) => (error));;
    // }

    // saveFileAndObject(file: File, Object, url): Observable<any> {
    //     // let domainName=localStorage.domainidVal
    //     // let formdata: FormData = new FormData();
    //     // formdata.append('file', file);
    //     // formdata.append('organisation', JSON.stringify(Object));
    //     // let options = { headers: new HttpHeaders().set('token', localStorage.apiToken) };
    //     // return this.http.post(this.environment.api_url + url+'?userId='+localStorage.loginuserid+'&domainName='+domainName,formdata,options);
    // }

    // saveWithDoubleParam(any, token, url): Observable<any> {
    //     // let formdata: FormData = new FormData();
    //     // formdata.append('domain', any);
    //     // formdata.append('token', token);
    //     // return this.http.post(this.environment.api_url + url, formdata);
    // }
    // getReport(url){
    //     // let domainName = localStorage.domainidVal;
    //     // if(domainName == 'cloudnowtech.com'){
    //     //     domainName = '';
    //     // }
    //     // return this.http1.get(this.invoiceEnvoironmentUrl.api_url + url+'?userId='+localStorage.loginuserid+'&domainName='+domainName).map((response) => (response.json()), (error) => (error));
    // }
    // submitPay(any,url): Observable<any> {
    //     return this.http1.post(this.invoiceEnvoironmentUrl.api_url+url+'?userId='+localStorage.loginuserid,any).map((response) => (response.json()), (error) => (error));
    // }
    // saveRazorTransaction(any,url): Observable<any>{
    //     return this.http1.post(this.invoiceEnvoironmentUrl.api_url+url+'?userId='+localStorage.loginuserid,any).map((response) =>(response.json()),(error) =>(error));
    // }
    // getPaymentStatus(id,url){
    //     return this.http.get(this.invoiceEnvoironmentUrl.api_url+'?invoiceId='+id);
    // }
    // generateOrderId(any,url): Observable<any> {
    //     return this.http1.post(this.invoiceEnvoironmentUrl.api_url+url+'?userId='+localStorage.loginuserid,any).map((response) => (response.json()), (error) => (error));
    // }
    // verifySignature(any, url): Observable<any> {
    //     return this.http1.post(this.invoiceEnvoironmentUrl.api_url+url+'?userId='+localStorage.loginuserid,any).map((response) => (response.json()), (error) => (error));
    // }
    // statusList(id,url){
    //     return this.http1.get(this.invoiceEnvoironmentUrl.api_url+url+'?invoiceHeaderId='+id+'&userId='+localStorage.loginuserid).map((response) => (response.json()), (error) => (error));
    // }

    // getOverDueReport(url){
    //     let domainName = localStorage.domainidVal;
    //     if(domainName == 'cloudnowtech.com'){
    //         domainName = '';
    //     }
    //     return this.http1.get(this.invoiceEnvoironmentUrl.api_url + url+'?userId='+localStorage.loginuserid+'&domainName='+domainName).map((response) => (response.json()), (error) => (error));
    // }

    // getWithDoubleParam(any, name, url): Observable<any> {
    //     let formdata: FormData = new FormData();
    //     formdata.append(name, any);
    //     return this.http.post(this.environment.api_url + url, formdata);
    // }


    // getUserDetails(domainidVal, userId, url): Observable<any> {
    //     let formdata: FormData = new FormData();
    //     formdata.append("userId", userId);
    //     formdata.append("domain", domainidVal);
    //     let options = { headers: new HttpHeaders().set('token', localStorage.apiToken) };
    //     return this.http.post(this.environment.api_url + url, formdata,options);
    // }

    // saveFile( file: File, userId, url): Observable<any> {
    //     let domainName = localStorage.domainidVal;
    //     let formdata: FormData = new FormData();
    //     formdata.append('file', file);
    //     formdata.append('userId', userId);
    //     let options = { headers: new HttpHeaders().set('token', localStorage.apiToken) };
    //     return this.http.post(this.environment.api_url + url+'?domainName='+domainName, formdata,options);
    // }

    
}


