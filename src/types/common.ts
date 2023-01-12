export type GenericObject<T = any> = { [key in string | number | symbol]: T };

export type QueryParams = GenericObject<
  number | string | boolean | null | undefined
>;
