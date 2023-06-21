import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal, ComponentType, DomPortalOutlet } from '@angular/cdk/portal';
import { ApplicationRef, ComponentFactoryResolver, ComponentRef, Injector } from '@angular/core';
import { MInjector } from './m-injector';

/**
 * Use case:
 *
 * <code>
    this.portalHelper = new PortalHelper<MyComponent>();
	this.myComponent = this.portalHelper.open(MyComponent);
	this.myComponent.input1 = value1;
	this.myComponent.input2 = value2;
	this.myComponent.confirm.subscribe(() => {
		this.myComponent.afterClose.unsubscribe();
		this.portalHelper.close();
	});
 </code>
 */
export class MPortalService<T> {

	private readonly host: DomPortalOutlet;
	private portal!: ComponentPortal<T>;
	private ref!: ComponentRef<T>;
  private overlay!: Overlay;
  private overlayRef!: OverlayRef;
	private readonly componentFactoryResolver: ComponentFactoryResolver;
	private readonly appRef: ApplicationRef;

	constructor(injector?: Injector) {
		if (!injector) {
			injector = MInjector.get();
		}
    this.overlay = injector.get(Overlay);
		this.componentFactoryResolver = injector.get(ComponentFactoryResolver);
		this.appRef = injector.get(ApplicationRef);
		this.host = new DomPortalOutlet(document.body, this.componentFactoryResolver, this.appRef, injector);
    this.overlayRef =  this.overlay.create({
      height:'90%',
      width:'400px',
      hasBackdrop: true,
      panelClass:'slide-position',
      backdropClass:'backdrop'
    })
    this.overlayRef.backdropClick().subscribe(event => {
      console.warn('eeee')
      this.close();
    })
  }

	public open(componentType: ComponentType<T>): any {
  
    this.portal = new ComponentPortal(componentType);
    this.ref = this.overlayRef.attach(this.portal)
    return this.ref.instance;
   
	
	
	}



	public detectChanges(): void {
		this.ref.changeDetectorRef.detectChanges();
	}

	public close(): void {
		this.destroyPromptWindow();
	}

	private destroyPromptWindow(): void {
		this.ref.destroy();
    this.overlayRef.detach();
	}
}

