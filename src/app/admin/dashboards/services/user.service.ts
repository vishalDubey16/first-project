import { ComponentRef, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Overlay,OverlayConfig,OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal'
import { FormComponent } from '../components/form/form.component';

@Injectable()
export class UserService {
    overlay: any;

  constructor(private _http:HttpClient) { }

  // overlay function
    public viewProfileOverlay(profileBtnRef: HTMLButtonElement) {
    const componentRef: ComponentRef<FormComponent> = this.overlayConfig (profileBtnRef);
  }

  public overlayConfig(profileBtn: HTMLButtonElement): ComponentRef<FormComponent> {
    const overlayConfig: OverlayConfig = new OverlayConfig();

   
    overlayConfig.positionStrategy = this.overlay.position().global()
      .centerHorizontally()
      .centerVertically();

    overlayConfig.hasBackdrop = true;

    const overlayRef = this.overlay.create(overlayConfig);
    const portal: ComponentPortal<FormComponent> = new ComponentPortal<FormComponent>(FormComponent);
    const componentRef: ComponentRef<FormComponent> = overlayRef.attach(portal);
    componentRef.instance.user.subscribe((res: any) => {
      console.log(res);
    })

    overlayRef.backdropClick().subscribe(() => overlayRef.detach());

    return componentRef;
  }

}