import { IsOptional, IsString, registerDecorator, ValidationOptions } from 'class-validator';

export function IsOptionalString(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    IsOptional()(object, propertyName);
    IsString(validationOptions)(object, propertyName);
  };
}