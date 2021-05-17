import { AbstractControl, ValidationErrors } from "@angular/forms";
import { PasswordFormComponent } from './password-form.component';

export class passwordValidators {
    static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (control.value === 'naga')
                    resolve(null);
                else
                    resolve({ shouldBeUnquie: true });
            }, 2000);
        });
    }
    static passwordsShldMatch(control: AbstractControl): ValidationErrors | null {
        if (control.get('newPass')!== control.get('confirmPass')) {
            return { passwordsShldMatch: true };
        }
        return null;
    }
}