import { Injector } from '@angular/core';

/**
 * This class is useful if you want to create a new instance of a class
 * that will use dependency injection, without receiving injected class in the constructor.
 * See PortalHelper for a good example of use.
 */
// @dynamic
export class MInjector {

	private static _injector: Injector;

	public static set(injector: Injector): void {
		MInjector._injector = injector;
	}

	public static get(): Injector {
		return MInjector._injector;
	}  
}
