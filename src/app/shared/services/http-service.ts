import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { HttpObserve } from "@angular/common/http/src/client";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

declare type ResponseType = "arraybuffer" | "blob" | "json" | "text";

const regexDT = /(\d{4})-(\d{2})-(\d{2})T(\d{2})\:(\d{2})\:(\d{2})(\.\d{0,10}){0,1}(([+-](\d{2})\:(\d{2}))?|Z)$/;

export const jsonDateParser = (key, value) => {
    if (typeof value === "string" && regexDT.exec(value)) {
        return new Date(value);
    }
    return value;
}

@Injectable()
export class HttpService {
    constructor(private http: HttpClient) {}

    public getApiCall<TResult>(url: string, params?: HttpParams, isAnonymous: boolean = false): Promise<TResult> {
        return this.sendApiCall<TResult>("get", url, null, params, isAnonymous);
    }

    public observeGetApiCall<TResult>(url: string, params?: HttpParams, isAnonymous: boolean = false): Observable<TResult> {
        return this.sendApiCallAsObservable<TResult>("get", url, null, params, isAnonymous);
    }

    public putApiCall<TResult>(url: string, objectToPost: any): Promise<TResult> {
        return this.sendApiCall<TResult>("put", url, objectToPost);
    }

    public postApiCall<TResult>(url: string, objectToPost: any): Promise<TResult> {
        return this.sendApiCall<TResult>("post", url, objectToPost);
    }

    public observePostApiCall<TResult>(url: string, objectToPost: any): Observable<TResult> {
        return this.sendApiCallAsObservable<TResult>("post", url, objectToPost);
    }

    public deleteApiCall<TResult>(url: string, objectToPost: any): Promise<TResult> {
        return this.sendApiCall<TResult>("delete", url, objectToPost);
    }

    private sendApiCall<TResult>
        (method: string, url: string, body?: any, params?: HttpParams, isAnon: boolean = false): Promise<TResult> {
            return this.sendApiCallAsObservable(method, url, body, params, isAnon).toPromise() as Promise<TResult>;
    }

    private sendApiCallAsObservable<TResult>
        (method: string, url: string, body?: any, params?: HttpParams, isAnon: boolean = false): Observable<TResult> {

            // if (!isAnon && !this.authService.isUserAuthenticated()) {
            //     throw new Error ("The user must be authenticated to perform requests");
            // }

            const options = {
                // headers: new HttpHeaders({ "Content-Type": "application/json" }),
                body: body,
                params: params,
                // withCredentials: true,
                observe: "response" as HttpObserve,
            };

            return this.http.request(method, url, options)
                .pipe(map(result => {
                  return result.body as TResult;
                }));
    }
}
