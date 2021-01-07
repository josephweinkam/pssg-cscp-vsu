import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ApplicationType, EnumHelper } from "../../enums-list";
import { POSTAL_CODE } from "../../regex.constants";

export class TravelExpensesHelper {
    enum = new EnumHelper();
    postalRegex = POSTAL_CODE;
    public setupFormGroup(fb: FormBuilder, form_type: ApplicationType): FormGroup {
        let group = {
            mileage: ['', [Validators.required]],
            mileageExpenses: ['', [Validators.required]],
            otherTransportationExpenses: fb.array([this.addOtherTransportationExpense(fb)]),
            accommodationExpenses: fb.array([this.addAccommodationExpense(fb)]),
            mealExpenses: fb.array([this.addMealExpense(fb)], [Validators.required]),
            mealTotal: [{ value: 0, disabled: true }],
            otherExpenses: fb.array([this.addOtherExpense(fb)]),

            didYouPayChildcareExpenses: [false],
            children: fb.array([]),


            additionalComments: [''],
        }
        return fb.group(group);
    }

    addOtherTransportationExpense(fb: FormBuilder) {
        let group = {
            type: [''],
            amount: [''],
        };

        return fb.group(group);
    }

    addAccommodationExpense(fb: FormBuilder) {
        let group = {
            type: [''],
            numberOfNights: [''],
            dailyRoomRate: [''],
            totalExpenses: [{ value: 0, disabled: true }],
        };

        return fb.group(group);
    }

    addMealExpense(fb: FormBuilder) {
        let group = {
            date: ['', [Validators.required]],
            breakfast: ['', [Validators.required]],
            lunch: ['', [Validators.required]],
            dinner: ['', [Validators.required]],
            total: [{ value: 0, disabled: true }],
        };

        return fb.group(group);
    }

    addOtherExpense(fb: FormBuilder) {
        let group = {
            description: ['', [Validators.required]],
            amount: ['', [Validators.required]],
        };

        return fb.group(group);
    }

    addChild(fb: FormBuilder) {
        let group = {
            age: [''],
            startDate: [''],
            endDate: [''],
            firstName: ['', [Validators.required]],
            lastName: ['', [Validators.required]],
            phone: ['', [Validators.required]],
            address: fb.group({
                line1: ['', [Validators.required]],
                line2: [''],
                city: ['', [Validators.required]],
                postalCode: ['', [Validators.required, Validators.pattern(this.postalRegex)]],
                province: ['British Columbia', [Validators.required]],
                country: ['Canada', [Validators.required]],
            }),
            childcareProviderGSTNumber: ['', [Validators.required]],
            amountPaid: ['', [Validators.required]],
        };

        return fb.group(group);
    }
}