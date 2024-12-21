import { inject } from '@angular/core';
import { CanActivateFn, Router, UrlTree } from '@angular/router';
import { LoginService } from '../../services_mock';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(LoginService)
  const router = inject(Router)

  console.log("******************************************************")
  console.log("EJECUTANDO GUARD")
  console.log("******************************************************")

  let url_response : UrlTree;

  if(authService.verifRole().toLowerCase() == 'secretaria'){
    url_response = router.createUrlTree(['/secretaria'])
  }else{
    return false
  }

  return url_response;
};
