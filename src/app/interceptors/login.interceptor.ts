import { HttpEventType, HttpInterceptorFn } from '@angular/common/http';
import { tap } from 'rxjs';

export const loginInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('********************************************************************')
  console.log('INTERCEPTOR WORK')
  console.log(req)


  
  const reqWithHeader = req.clone({
    headers: req.headers.set('X-New-Header', 'new header value'),
  });
  return next(reqWithHeader)
}
  
