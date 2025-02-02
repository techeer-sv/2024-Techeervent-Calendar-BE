import { registerDecorator, ValidationOptions } from 'class-validator';

export function IsTrimmedNotEmpty(
    validationOptions?: ValidationOptions,
): PropertyDecorator {
    return function (object: object, propertyName: string): void {
        registerDecorator({
            name: 'isTrimmedNotEmpty',
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            validator: {
                validate(value: string): boolean {
                    if (typeof value === 'string') {
                        return value.trim().length > 0;
                    }
                    return false;
                },
                defaultMessage(): string {
                    return `${propertyName}은(는) 반드시 입력해야 합니다.`;
                },
            },
        });
    };
}
