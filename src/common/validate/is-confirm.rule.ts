import { registerDecorator, ValidationArguments, ValidationOptions } from "class-validator"

/**
 * 判斷重複字段
 * @date 2022-09-12
 */
export function IsConfirmRule(validationOptions?: ValidationOptions): PropertyDecorator {
    return function (object: Record<string, any>, propertyName: string) {
        registerDecorator({
            name: 'IsConfirmRule',
            target: object.constructor,
            propertyName: propertyName,
            constraints: [],
            options: validationOptions,
            validator: {
                async validate(value: string, args: ValidationArguments) {
                    return Boolean(value == args.object[`${args.property}_confirm`])
                }
            }
        })
    }
}