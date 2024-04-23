import { InjectionToken } from "@angular/core";

// Creating a Dependency injection for Local Storage to be used in the Angular Application
export const localStorageToken = new InjectionToken<any>('local storage',{
    // Making it global and will be managed by Angular CLI
    providedIn : 'root',
    // Returning the localStorage object of the Storage interface
    factory(){
        return localStorage;
    }
});