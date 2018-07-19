import {Http, RequestOptionsArgs, Response, RequestOptions, ConnectionBackend, Headers} from '@angular/http';	
import 'rxjs/add/operator/map';	
import { Observable } from 'rxjs/Observable';	
import { Storage } from '@ionic/storage';	

export class HttpProvider extends Http {	  	  
  
  constructor (
    connectionBackend: ConnectionBackend, 
    requestOptions: RequestOptions, 
    public storage: Storage 
  ) {	    
    
    super(connectionBackend, requestOptions);	  
  }

  get(url: string, options?: RequestOptionsArgs): Observable<Response> {	    
    return Observable.fromPromise (	      
      this.getRequestOptionArgs()	    
    ).mergeMap((options) => { 
      return super.get(url, options) 
    });	  
  }	

  post(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
    return Observable.fromPromise (	      
      this.getRequestOptionArgs()	    
    ).mergeMap((options) => { 
      return super.post(url, body, options) 
    })	  
  }	

  put(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {	    
    return Observable.fromPromise (	      
      this.getRequestOptionArgs()	    
    ).mergeMap((options) => { 
      return super.put(url, body, options) 
    })	  
  }

  getRequestOptionArgs(options?: RequestOptionsArgs) {	    
    return this.storage.get('token')	    
      .then((token) => {	      
        if (options == null) {	        
          options = new RequestOptions();	      
        }	      
        if (options.headers == null) {	          
          options.headers = new Headers();	      
        }	      
        if (token !== null) {	        
          options.headers.append('authorization', token);  	      
        }	      
        options.headers.append('Content-Type', 'application/json');	
      return options;  	    
    })	  
  }	
}