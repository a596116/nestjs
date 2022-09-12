import { registerDecorator, ValidationArguments, ValidationOptions } from "class-validator"
import { model } from "mongoose"
import { AuthDocument } from "src/module/db/schema/auth.schema"

/**
 * 判斷重複字段
 * @date 2022-09-12
 */
export function IsNotExistsRule(table: string, validationOptions?: ValidationOptions): PropertyDecorator {
    return function (object: Record<string, any>, propertyName: string) {
        registerDecorator({
            name: 'IsNotExistsRule',
            target: object.constructor,
            propertyName: propertyName,
            constraints: [table],
            options: validationOptions,
            validator: {
                async validate(value: string, args: ValidationArguments) {
                    const PatternModel = model<AuthDocument>('user')
                    const res = await PatternModel.findOne({
                        where: {
                            [args.property]: value
                        }
                    })
                    return !Boolean(res)
                }
            }
        })
    }
}