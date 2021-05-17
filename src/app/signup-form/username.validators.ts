import { AbstractControl, ValidationErrors } from "@angular/forms";
import { promise } from "selenium-webdriver";

export class UsernameValidators {
    static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
        if ((control.value as String).indexOf(' ') >= 0) {
            return { cannotContainSpace: true };
        }
        return null;
    }

    static shouldBeUnquie(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve) => {
            setTimeout(() => {
                if (control.value === 'naga')
                    resolve({ shouldBeUnquie: true });
                else
                    resolve(null);
            }, 2000);
        });
    }
}