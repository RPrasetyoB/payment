/**
 * Client
 **/

import * as runtime from "./runtime/library.js";
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model Users
 *
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>;
/**
 * Model Fishes
 *
 */
export type Fishes = $Result.DefaultSelection<Prisma.$FishesPayload>;
/**
 * Model Schedule_ships
 *
 */
export type Schedule_ships =
  $Result.DefaultSelection<Prisma.$Schedule_shipsPayload>;
/**
 * Model Types
 *
 */
export type Types = $Result.DefaultSelection<Prisma.$TypesPayload>;
/**
 * Model Coupon_discount
 *
 */
export type Coupon_discount =
  $Result.DefaultSelection<Prisma.$Coupon_discountPayload>;
/**
 * Model Events
 *
 */
export type Events = $Result.DefaultSelection<Prisma.$EventsPayload>;
/**
 * Model Discounted_fish
 *
 */
export type Discounted_fish =
  $Result.DefaultSelection<Prisma.$Discounted_fishPayload>;
/**
 * Model Roles
 *
 */
export type Roles = $Result.DefaultSelection<Prisma.$RolesPayload>;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = "log" extends keyof T
    ? T["log"] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<T["log"]>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>["other"] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(
    eventType: V,
    callback: (
      event: V extends "query" ? Prisma.QueryEvent : Prisma.LogEvent
    ) => void
  ): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel }
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (
      prisma: Omit<PrismaClient, runtime.ITXClientDenyList>
    ) => $Utils.JsPromise<R>,
    options?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    }
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
   * ```
   */
  get users(): Prisma.UsersDelegate<ExtArgs>;

  /**
   * `prisma.fishes`: Exposes CRUD operations for the **Fishes** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Fishes
   * const fishes = await prisma.fishes.findMany()
   * ```
   */
  get fishes(): Prisma.FishesDelegate<ExtArgs>;

  /**
   * `prisma.schedule_ships`: Exposes CRUD operations for the **Schedule_ships** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Schedule_ships
   * const schedule_ships = await prisma.schedule_ships.findMany()
   * ```
   */
  get schedule_ships(): Prisma.Schedule_shipsDelegate<ExtArgs>;

  /**
   * `prisma.types`: Exposes CRUD operations for the **Types** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Types
   * const types = await prisma.types.findMany()
   * ```
   */
  get types(): Prisma.TypesDelegate<ExtArgs>;

  /**
   * `prisma.coupon_discount`: Exposes CRUD operations for the **Coupon_discount** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Coupon_discounts
   * const coupon_discounts = await prisma.coupon_discount.findMany()
   * ```
   */
  get coupon_discount(): Prisma.Coupon_discountDelegate<ExtArgs>;

  /**
   * `prisma.events`: Exposes CRUD operations for the **Events** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Events
   * const events = await prisma.events.findMany()
   * ```
   */
  get events(): Prisma.EventsDelegate<ExtArgs>;

  /**
   * `prisma.discounted_fish`: Exposes CRUD operations for the **Discounted_fish** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Discounted_fish
   * const discounted_fish = await prisma.discounted_fish.findMany()
   * ```
   */
  get discounted_fish(): Prisma.Discounted_fishDelegate<ExtArgs>;

  /**
   * `prisma.roles`: Exposes CRUD operations for the **Roles** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Roles
   * const roles = await prisma.roles.findMany()
   * ```
   */
  get roles(): Prisma.RolesDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;
  export import NotFoundError = runtime.NotFoundError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 5.10.2
   * Query Engine version: 5a9203d0590c951969e85a7d07215503f4672eb9
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from.
   */
  export type JsonObject = { [Key in string]?: JsonValue };

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue =
    | string
    | number
    | boolean
    | JsonObject
    | JsonArray
    | null;

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {
    readonly [Key in string]?: InputJsonValue | null;
  };

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray
    extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue =
    | string
    | number
    | boolean
    | InputJsonObject
    | InputJsonArray
    | { toJSON(): unknown };

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
     * Type of `Prisma.DbNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class DbNull {
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<
    infer U
  >
    ? U
    : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<
    T extends (...args: any) => $Utils.JsPromise<any>
  > = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude
    ? "Please either choose `select` or `include`."
    : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object
    ? U extends object
      ? (Without<T, U> & U) | (Without<U, T> & T)
      : U
    : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
    ? False
    : T extends Date
    ? False
    : T extends Uint8Array
    ? False
    : T extends BigInt
    ? False
    : T extends object
    ? True
    : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<
    __Either<O, K>
  >;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O
    ? O[K]
    : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown
    ? AtStrict<O, K>
    : never;
  export type At<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
        [K in keyof A]: A[K];
      } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
      ?
          | (K extends keyof O ? { [P in K]: O[P] } & O : O)
          | ({ [P in keyof O as P extends K ? K : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown
    ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>>
    : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0;

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<
    T,
    U = Omit<T, "_avg" | "_sum" | "_count" | "_min" | "_max">
  > = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<"OR", K>, Extends<"AND", K>>,
      Extends<"NOT", K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<
            UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never
          >
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<
    T,
    K extends Enumerable<keyof T> | keyof T
  > = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}`
    ? never
    : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never
    ? never
    : FieldRef<Model, FieldType>;

  export const ModelName: {
    Users: "Users";
    Fishes: "Fishes";
    Schedule_ships: "Schedule_ships";
    Types: "Types";
    Coupon_discount: "Coupon_discount";
    Events: "Events";
    Discounted_fish: "Discounted_fish";
    Roles: "Roles";
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb
    extends $Utils.Fn<
      { extArgs: $Extensions.InternalArgs },
      $Utils.Record<string, any>
    > {
    returns: Prisma.TypeMap<this["params"]["extArgs"]>;
  }

  export type TypeMap<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    meta: {
      modelProps:
        | "users"
        | "fishes"
        | "schedule_ships"
        | "types"
        | "coupon_discount"
        | "events"
        | "discounted_fish"
        | "roles";
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>;
        fields: Prisma.UsersFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>;
          };
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>;
          };
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[];
          };
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>;
          };
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>;
          };
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>;
          };
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>;
          };
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUsers>;
          };
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UsersGroupByOutputType>[];
          };
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>;
            result: $Utils.Optional<UsersCountAggregateOutputType> | number;
          };
        };
      };
      Fishes: {
        payload: Prisma.$FishesPayload<ExtArgs>;
        fields: Prisma.FishesFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.FishesFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FishesPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.FishesFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FishesPayload>;
          };
          findFirst: {
            args: Prisma.FishesFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FishesPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.FishesFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FishesPayload>;
          };
          findMany: {
            args: Prisma.FishesFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FishesPayload>[];
          };
          create: {
            args: Prisma.FishesCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FishesPayload>;
          };
          createMany: {
            args: Prisma.FishesCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.FishesDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FishesPayload>;
          };
          update: {
            args: Prisma.FishesUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FishesPayload>;
          };
          deleteMany: {
            args: Prisma.FishesDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.FishesUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.FishesUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FishesPayload>;
          };
          aggregate: {
            args: Prisma.FishesAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateFishes>;
          };
          groupBy: {
            args: Prisma.FishesGroupByArgs<ExtArgs>;
            result: $Utils.Optional<FishesGroupByOutputType>[];
          };
          count: {
            args: Prisma.FishesCountArgs<ExtArgs>;
            result: $Utils.Optional<FishesCountAggregateOutputType> | number;
          };
        };
      };
      Schedule_ships: {
        payload: Prisma.$Schedule_shipsPayload<ExtArgs>;
        fields: Prisma.Schedule_shipsFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.Schedule_shipsFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$Schedule_shipsPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.Schedule_shipsFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$Schedule_shipsPayload>;
          };
          findFirst: {
            args: Prisma.Schedule_shipsFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$Schedule_shipsPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.Schedule_shipsFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$Schedule_shipsPayload>;
          };
          findMany: {
            args: Prisma.Schedule_shipsFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$Schedule_shipsPayload>[];
          };
          create: {
            args: Prisma.Schedule_shipsCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$Schedule_shipsPayload>;
          };
          createMany: {
            args: Prisma.Schedule_shipsCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.Schedule_shipsDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$Schedule_shipsPayload>;
          };
          update: {
            args: Prisma.Schedule_shipsUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$Schedule_shipsPayload>;
          };
          deleteMany: {
            args: Prisma.Schedule_shipsDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.Schedule_shipsUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.Schedule_shipsUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$Schedule_shipsPayload>;
          };
          aggregate: {
            args: Prisma.Schedule_shipsAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateSchedule_ships>;
          };
          groupBy: {
            args: Prisma.Schedule_shipsGroupByArgs<ExtArgs>;
            result: $Utils.Optional<Schedule_shipsGroupByOutputType>[];
          };
          count: {
            args: Prisma.Schedule_shipsCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<Schedule_shipsCountAggregateOutputType>
              | number;
          };
        };
      };
      Types: {
        payload: Prisma.$TypesPayload<ExtArgs>;
        fields: Prisma.TypesFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.TypesFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TypesPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.TypesFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TypesPayload>;
          };
          findFirst: {
            args: Prisma.TypesFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TypesPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.TypesFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TypesPayload>;
          };
          findMany: {
            args: Prisma.TypesFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TypesPayload>[];
          };
          create: {
            args: Prisma.TypesCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TypesPayload>;
          };
          createMany: {
            args: Prisma.TypesCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.TypesDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TypesPayload>;
          };
          update: {
            args: Prisma.TypesUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TypesPayload>;
          };
          deleteMany: {
            args: Prisma.TypesDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.TypesUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.TypesUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TypesPayload>;
          };
          aggregate: {
            args: Prisma.TypesAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateTypes>;
          };
          groupBy: {
            args: Prisma.TypesGroupByArgs<ExtArgs>;
            result: $Utils.Optional<TypesGroupByOutputType>[];
          };
          count: {
            args: Prisma.TypesCountArgs<ExtArgs>;
            result: $Utils.Optional<TypesCountAggregateOutputType> | number;
          };
        };
      };
      Coupon_discount: {
        payload: Prisma.$Coupon_discountPayload<ExtArgs>;
        fields: Prisma.Coupon_discountFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.Coupon_discountFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$Coupon_discountPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.Coupon_discountFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$Coupon_discountPayload>;
          };
          findFirst: {
            args: Prisma.Coupon_discountFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$Coupon_discountPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.Coupon_discountFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$Coupon_discountPayload>;
          };
          findMany: {
            args: Prisma.Coupon_discountFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$Coupon_discountPayload>[];
          };
          create: {
            args: Prisma.Coupon_discountCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$Coupon_discountPayload>;
          };
          createMany: {
            args: Prisma.Coupon_discountCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.Coupon_discountDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$Coupon_discountPayload>;
          };
          update: {
            args: Prisma.Coupon_discountUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$Coupon_discountPayload>;
          };
          deleteMany: {
            args: Prisma.Coupon_discountDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.Coupon_discountUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.Coupon_discountUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$Coupon_discountPayload>;
          };
          aggregate: {
            args: Prisma.Coupon_discountAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateCoupon_discount>;
          };
          groupBy: {
            args: Prisma.Coupon_discountGroupByArgs<ExtArgs>;
            result: $Utils.Optional<Coupon_discountGroupByOutputType>[];
          };
          count: {
            args: Prisma.Coupon_discountCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<Coupon_discountCountAggregateOutputType>
              | number;
          };
        };
      };
      Events: {
        payload: Prisma.$EventsPayload<ExtArgs>;
        fields: Prisma.EventsFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.EventsFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EventsPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.EventsFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EventsPayload>;
          };
          findFirst: {
            args: Prisma.EventsFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EventsPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.EventsFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EventsPayload>;
          };
          findMany: {
            args: Prisma.EventsFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EventsPayload>[];
          };
          create: {
            args: Prisma.EventsCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EventsPayload>;
          };
          createMany: {
            args: Prisma.EventsCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.EventsDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EventsPayload>;
          };
          update: {
            args: Prisma.EventsUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EventsPayload>;
          };
          deleteMany: {
            args: Prisma.EventsDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.EventsUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.EventsUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$EventsPayload>;
          };
          aggregate: {
            args: Prisma.EventsAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateEvents>;
          };
          groupBy: {
            args: Prisma.EventsGroupByArgs<ExtArgs>;
            result: $Utils.Optional<EventsGroupByOutputType>[];
          };
          count: {
            args: Prisma.EventsCountArgs<ExtArgs>;
            result: $Utils.Optional<EventsCountAggregateOutputType> | number;
          };
        };
      };
      Discounted_fish: {
        payload: Prisma.$Discounted_fishPayload<ExtArgs>;
        fields: Prisma.Discounted_fishFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.Discounted_fishFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$Discounted_fishPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.Discounted_fishFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$Discounted_fishPayload>;
          };
          findFirst: {
            args: Prisma.Discounted_fishFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$Discounted_fishPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.Discounted_fishFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$Discounted_fishPayload>;
          };
          findMany: {
            args: Prisma.Discounted_fishFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$Discounted_fishPayload>[];
          };
          create: {
            args: Prisma.Discounted_fishCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$Discounted_fishPayload>;
          };
          createMany: {
            args: Prisma.Discounted_fishCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.Discounted_fishDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$Discounted_fishPayload>;
          };
          update: {
            args: Prisma.Discounted_fishUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$Discounted_fishPayload>;
          };
          deleteMany: {
            args: Prisma.Discounted_fishDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.Discounted_fishUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.Discounted_fishUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$Discounted_fishPayload>;
          };
          aggregate: {
            args: Prisma.Discounted_fishAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateDiscounted_fish>;
          };
          groupBy: {
            args: Prisma.Discounted_fishGroupByArgs<ExtArgs>;
            result: $Utils.Optional<Discounted_fishGroupByOutputType>[];
          };
          count: {
            args: Prisma.Discounted_fishCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<Discounted_fishCountAggregateOutputType>
              | number;
          };
        };
      };
      Roles: {
        payload: Prisma.$RolesPayload<ExtArgs>;
        fields: Prisma.RolesFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.RolesFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RolesPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.RolesFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RolesPayload>;
          };
          findFirst: {
            args: Prisma.RolesFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RolesPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.RolesFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RolesPayload>;
          };
          findMany: {
            args: Prisma.RolesFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RolesPayload>[];
          };
          create: {
            args: Prisma.RolesCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RolesPayload>;
          };
          createMany: {
            args: Prisma.RolesCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.RolesDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RolesPayload>;
          };
          update: {
            args: Prisma.RolesUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RolesPayload>;
          };
          deleteMany: {
            args: Prisma.RolesDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.RolesUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.RolesUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RolesPayload>;
          };
          aggregate: {
            args: Prisma.RolesAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateRoles>;
          };
          groupBy: {
            args: Prisma.RolesGroupByArgs<ExtArgs>;
            result: $Utils.Optional<RolesGroupByOutputType>[];
          };
          count: {
            args: Prisma.RolesCountArgs<ExtArgs>;
            result: $Utils.Optional<RolesCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<
    "define",
    Prisma.TypeMapCb,
    $Extensions.DefaultArgs
  >;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = "pretty" | "colorless" | "minimal";
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[];
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    };
  }

  /* Types for Logging */
  export type LogLevel = "info" | "query" | "warn" | "error";
  export type LogDefinition = {
    level: LogLevel;
    emit: "stdout" | "event";
  };

  export type GetLogType<T extends LogLevel | LogDefinition> =
    T extends LogDefinition
      ? T["emit"] extends "event"
        ? T["level"]
        : never
      : never;
  export type GetEvents<T extends any> = T extends Array<
    LogLevel | LogDefinition
  >
    ? GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | "findUnique"
    | "findUniqueOrThrow"
    | "findMany"
    | "findFirst"
    | "findFirstOrThrow"
    | "create"
    | "createMany"
    | "update"
    | "updateMany"
    | "upsert"
    | "delete"
    | "deleteMany"
    | "executeRaw"
    | "queryRaw"
    | "aggregate"
    | "count"
    | "runCommandRaw"
    | "findRaw"
    | "groupBy";

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(
    log: Array<LogLevel | LogDefinition>
  ): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<
    Prisma.DefaultPrismaClient,
    runtime.ITXClientDenyList
  >;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    Fishes: number;
    Schedule_ships: number;
    Coupon_discount: number;
  };

  export type UsersCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    Fishes?: boolean | UsersCountOutputTypeCountFishesArgs;
    Schedule_ships?: boolean | UsersCountOutputTypeCountSchedule_shipsArgs;
    Coupon_discount?: boolean | UsersCountOutputTypeCountCoupon_discountArgs;
  };

  // Custom InputTypes

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountFishesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    where?: FishesWhereInput;
  };

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountSchedule_shipsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    where?: Schedule_shipsWhereInput;
  };

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountCoupon_discountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    where?: Coupon_discountWhereInput;
  };

  /**
   * Count Type FishesCountOutputType
   */

  export type FishesCountOutputType = {
    discounted_fish: number;
  };

  export type FishesCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    discounted_fish?: boolean | FishesCountOutputTypeCountDiscounted_fishArgs;
  };

  // Custom InputTypes

  /**
   * FishesCountOutputType without action
   */
  export type FishesCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the FishesCountOutputType
     */
    select?: FishesCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * FishesCountOutputType without action
   */
  export type FishesCountOutputTypeCountDiscounted_fishArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    where?: Discounted_fishWhereInput;
  };

  /**
   * Count Type TypesCountOutputType
   */

  export type TypesCountOutputType = {
    Fishes: number;
  };

  export type TypesCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    Fishes?: boolean | TypesCountOutputTypeCountFishesArgs;
  };

  // Custom InputTypes

  /**
   * TypesCountOutputType without action
   */
  export type TypesCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the TypesCountOutputType
     */
    select?: TypesCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * TypesCountOutputType without action
   */
  export type TypesCountOutputTypeCountFishesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    where?: FishesWhereInput;
  };

  /**
   * Count Type EventsCountOutputType
   */

  export type EventsCountOutputType = {
    Fishes: number;
  };

  export type EventsCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    Fishes?: boolean | EventsCountOutputTypeCountFishesArgs;
  };

  // Custom InputTypes

  /**
   * EventsCountOutputType without action
   */
  export type EventsCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the EventsCountOutputType
     */
    select?: EventsCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * EventsCountOutputType without action
   */
  export type EventsCountOutputTypeCountFishesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    where?: FishesWhereInput;
  };

  /**
   * Count Type RolesCountOutputType
   */

  export type RolesCountOutputType = {
    Users: number;
  };

  export type RolesCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    Users?: boolean | RolesCountOutputTypeCountUsersArgs;
  };

  // Custom InputTypes

  /**
   * RolesCountOutputType without action
   */
  export type RolesCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the RolesCountOutputType
     */
    select?: RolesCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * RolesCountOutputType without action
   */
  export type RolesCountOutputTypeCountUsersArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    where?: UsersWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model Users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null;
    _avg: UsersAvgAggregateOutputType | null;
    _sum: UsersSumAggregateOutputType | null;
    _min: UsersMinAggregateOutputType | null;
    _max: UsersMaxAggregateOutputType | null;
  };

  export type UsersAvgAggregateOutputType = {
    role_id: number | null;
  };

  export type UsersSumAggregateOutputType = {
    role_id: number | null;
  };

  export type UsersMinAggregateOutputType = {
    id: string | null;
    role_id: number | null;
    username: string | null;
    password: string | null;
    created_date: Date | null;
  };

  export type UsersMaxAggregateOutputType = {
    id: string | null;
    role_id: number | null;
    username: string | null;
    password: string | null;
    created_date: Date | null;
  };

  export type UsersCountAggregateOutputType = {
    id: number;
    role_id: number;
    username: number;
    password: number;
    created_date: number;
    _all: number;
  };

  export type UsersAvgAggregateInputType = {
    role_id?: true;
  };

  export type UsersSumAggregateInputType = {
    role_id?: true;
  };

  export type UsersMinAggregateInputType = {
    id?: true;
    role_id?: true;
    username?: true;
    password?: true;
    created_date?: true;
  };

  export type UsersMaxAggregateInputType = {
    id?: true;
    role_id?: true;
    username?: true;
    password?: true;
    created_date?: true;
  };

  export type UsersCountAggregateInputType = {
    id?: true;
    role_id?: true;
    username?: true;
    password?: true;
    created_date?: true;
    _all?: true;
  };

  export type UsersAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Users
     **/
    _count?: true | UsersCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: UsersAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: UsersSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UsersMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UsersMaxAggregateInputType;
  };

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
    [P in keyof T & keyof AggregateUsers]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>;
  };

  export type UsersGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    where?: UsersWhereInput;
    orderBy?:
      | UsersOrderByWithAggregationInput
      | UsersOrderByWithAggregationInput[];
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum;
    having?: UsersScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UsersCountAggregateInputType | true;
    _avg?: UsersAvgAggregateInputType;
    _sum?: UsersSumAggregateInputType;
    _min?: UsersMinAggregateInputType;
    _max?: UsersMaxAggregateInputType;
  };

  export type UsersGroupByOutputType = {
    id: string;
    role_id: number;
    username: string;
    password: string;
    created_date: Date;
    _count: UsersCountAggregateOutputType | null;
    _avg: UsersAvgAggregateOutputType | null;
    _sum: UsersSumAggregateOutputType | null;
    _min: UsersMinAggregateOutputType | null;
    _max: UsersMaxAggregateOutputType | null;
  };

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<UsersGroupByOutputType, T["by"]> & {
          [P in keyof T & keyof UsersGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>;
        }
      >
    >;

  export type UsersSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      role_id?: boolean;
      username?: boolean;
      password?: boolean;
      created_date?: boolean;
      role?: boolean | RolesDefaultArgs<ExtArgs>;
      Fishes?: boolean | Users$FishesArgs<ExtArgs>;
      Schedule_ships?: boolean | Users$Schedule_shipsArgs<ExtArgs>;
      Coupon_discount?: boolean | Users$Coupon_discountArgs<ExtArgs>;
      _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["users"]
  >;

  export type UsersSelectScalar = {
    id?: boolean;
    role_id?: boolean;
    username?: boolean;
    password?: boolean;
    created_date?: boolean;
  };

  export type UsersInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    role?: boolean | RolesDefaultArgs<ExtArgs>;
    Fishes?: boolean | Users$FishesArgs<ExtArgs>;
    Schedule_ships?: boolean | Users$Schedule_shipsArgs<ExtArgs>;
    Coupon_discount?: boolean | Users$Coupon_discountArgs<ExtArgs>;
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $UsersPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    name: "Users";
    objects: {
      role: Prisma.$RolesPayload<ExtArgs>;
      Fishes: Prisma.$FishesPayload<ExtArgs>[];
      Schedule_ships: Prisma.$Schedule_shipsPayload<ExtArgs>[];
      Coupon_discount: Prisma.$Coupon_discountPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        role_id: number;
        username: string;
        password: string;
        created_date: Date;
      },
      ExtArgs["result"]["users"]
    >;
    composites: {};
  };

  type UsersGetPayload<
    S extends boolean | null | undefined | UsersDefaultArgs
  > = $Result.GetResult<Prisma.$UsersPayload, S>;

  type UsersCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = Omit<UsersFindManyArgs, "select" | "include" | "distinct"> & {
    select?: UsersCountAggregateInputType | true;
  };

  export interface UsersDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["Users"];
      meta: { name: "Users" };
    };
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends UsersFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>
    ): Prisma__UsersClient<
      $Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUnique"> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Users that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UsersClient<
      $Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow">,
      never,
      ExtArgs
    >;

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends UsersFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>
    ): Prisma__UsersClient<
      $Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirst"> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UsersClient<
      $Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirstOrThrow">,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends UsersFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany">
    >;

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     *
     **/
    create<T extends UsersCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UsersCreateArgs<ExtArgs>>
    ): Prisma__UsersClient<
      $Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "create">,
      never,
      ExtArgs
    >;

    /**
     * Create many Users.
     *     @param {UsersCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const users = await prisma.users.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends UsersCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     *
     **/
    delete<T extends UsersDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>
    ): Prisma__UsersClient<
      $Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "delete">,
      never,
      ExtArgs
    >;

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends UsersUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>
    ): Prisma__UsersClient<
      $Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "update">,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends UsersDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends UsersUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     **/
    upsert<T extends UsersUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>
    ): Prisma__UsersClient<
      $Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "upsert">,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], UsersCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends UsersAggregateArgs>(
      args: Subset<T, UsersAggregateArgs>
    ): Prisma.PrismaPromise<GetUsersAggregateType<T>>;

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs["orderBy"] }
        : { orderBy?: UsersGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [
                  Error,
                  "Field ",
                  P,
                  ` in "having" needs to be provided in "by"`
                ];
          }[HavingFields]
        : "take" extends Keys<T>
        ? "orderBy" extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : "skip" extends Keys<T>
        ? "orderBy" extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields]
    >(
      args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors
      ? GetUsersGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Users model
     */
    readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";

    role<T extends RolesDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, RolesDefaultArgs<ExtArgs>>
    ): Prisma__RolesClient<
      | $Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "findUniqueOrThrow">
      | Null,
      Null,
      ExtArgs
    >;

    Fishes<T extends Users$FishesArgs<ExtArgs> = {}>(
      args?: Subset<T, Users$FishesArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$FishesPayload<ExtArgs>, T, "findMany"> | Null
    >;

    Schedule_ships<T extends Users$Schedule_shipsArgs<ExtArgs> = {}>(
      args?: Subset<T, Users$Schedule_shipsArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<Prisma.$Schedule_shipsPayload<ExtArgs>, T, "findMany">
      | Null
    >;

    Coupon_discount<T extends Users$Coupon_discountArgs<ExtArgs> = {}>(
      args?: Subset<T, Users$Coupon_discountArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$Coupon_discountPayload<ExtArgs>,
          T,
          "findMany"
        >
      | Null
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Users model
   */
  interface UsersFieldRefs {
    readonly id: FieldRef<"Users", "String">;
    readonly role_id: FieldRef<"Users", "Int">;
    readonly username: FieldRef<"Users", "String">;
    readonly password: FieldRef<"Users", "String">;
    readonly created_date: FieldRef<"Users", "DateTime">;
  }

  // Custom InputTypes

  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude<ExtArgs> | null;
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput;
  };

  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude<ExtArgs> | null;
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput;
  };

  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude<ExtArgs> | null;
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[];
  };

  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude<ExtArgs> | null;
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[];
  };

  /**
   * Users findMany
   */
  export type UsersFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude<ExtArgs> | null;
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[];
  };

  /**
   * Users create
   */
  export type UsersCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude<ExtArgs> | null;
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>;
  };

  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Users update
   */
  export type UsersUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude<ExtArgs> | null;
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>;
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput;
  };

  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput;
  };

  /**
   * Users upsert
   */
  export type UsersUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude<ExtArgs> | null;
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput;
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>;
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>;
  };

  /**
   * Users delete
   */
  export type UsersDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude<ExtArgs> | null;
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput;
  };

  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput;
  };

  /**
   * Users.Fishes
   */
  export type Users$FishesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Fishes
     */
    select?: FishesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FishesInclude<ExtArgs> | null;
    where?: FishesWhereInput;
    orderBy?: FishesOrderByWithRelationInput | FishesOrderByWithRelationInput[];
    cursor?: FishesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: FishesScalarFieldEnum | FishesScalarFieldEnum[];
  };

  /**
   * Users.Schedule_ships
   */
  export type Users$Schedule_shipsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Schedule_ships
     */
    select?: Schedule_shipsSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Schedule_shipsInclude<ExtArgs> | null;
    where?: Schedule_shipsWhereInput;
    orderBy?:
      | Schedule_shipsOrderByWithRelationInput
      | Schedule_shipsOrderByWithRelationInput[];
    cursor?: Schedule_shipsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Schedule_shipsScalarFieldEnum | Schedule_shipsScalarFieldEnum[];
  };

  /**
   * Users.Coupon_discount
   */
  export type Users$Coupon_discountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Coupon_discount
     */
    select?: Coupon_discountSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Coupon_discountInclude<ExtArgs> | null;
    where?: Coupon_discountWhereInput;
    orderBy?:
      | Coupon_discountOrderByWithRelationInput
      | Coupon_discountOrderByWithRelationInput[];
    cursor?: Coupon_discountWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?:
      | Coupon_discountScalarFieldEnum
      | Coupon_discountScalarFieldEnum[];
  };

  /**
   * Users without action
   */
  export type UsersDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude<ExtArgs> | null;
  };

  /**
   * Model Fishes
   */

  export type AggregateFishes = {
    _count: FishesCountAggregateOutputType | null;
    _avg: FishesAvgAggregateOutputType | null;
    _sum: FishesSumAggregateOutputType | null;
    _min: FishesMinAggregateOutputType | null;
    _max: FishesMaxAggregateOutputType | null;
  };

  export type FishesAvgAggregateOutputType = {
    price: number | null;
    price_usd: number | null;
  };

  export type FishesSumAggregateOutputType = {
    price: number | null;
    price_usd: number | null;
  };

  export type FishesMinAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    type_id: string | null;
    event_id: string | null;
    name: string | null;
    price: number | null;
    price_usd: number | null;
    gender: string | null;
    size: string | null;
    images1: string | null;
    images2: string | null;
    images3: string | null;
    videoURL: string | null;
    isAvailable: boolean | null;
    isEvent: boolean | null;
    isNewArrival: boolean | null;
    created_date: Date | null;
  };

  export type FishesMaxAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    type_id: string | null;
    event_id: string | null;
    name: string | null;
    price: number | null;
    price_usd: number | null;
    gender: string | null;
    size: string | null;
    images1: string | null;
    images2: string | null;
    images3: string | null;
    videoURL: string | null;
    isAvailable: boolean | null;
    isEvent: boolean | null;
    isNewArrival: boolean | null;
    created_date: Date | null;
  };

  export type FishesCountAggregateOutputType = {
    id: number;
    user_id: number;
    type_id: number;
    event_id: number;
    name: number;
    price: number;
    price_usd: number;
    gender: number;
    size: number;
    images1: number;
    images2: number;
    images3: number;
    videoURL: number;
    isAvailable: number;
    isEvent: number;
    isNewArrival: number;
    created_date: number;
    _all: number;
  };

  export type FishesAvgAggregateInputType = {
    price?: true;
    price_usd?: true;
  };

  export type FishesSumAggregateInputType = {
    price?: true;
    price_usd?: true;
  };

  export type FishesMinAggregateInputType = {
    id?: true;
    user_id?: true;
    type_id?: true;
    event_id?: true;
    name?: true;
    price?: true;
    price_usd?: true;
    gender?: true;
    size?: true;
    images1?: true;
    images2?: true;
    images3?: true;
    videoURL?: true;
    isAvailable?: true;
    isEvent?: true;
    isNewArrival?: true;
    created_date?: true;
  };

  export type FishesMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    type_id?: true;
    event_id?: true;
    name?: true;
    price?: true;
    price_usd?: true;
    gender?: true;
    size?: true;
    images1?: true;
    images2?: true;
    images3?: true;
    videoURL?: true;
    isAvailable?: true;
    isEvent?: true;
    isNewArrival?: true;
    created_date?: true;
  };

  export type FishesCountAggregateInputType = {
    id?: true;
    user_id?: true;
    type_id?: true;
    event_id?: true;
    name?: true;
    price?: true;
    price_usd?: true;
    gender?: true;
    size?: true;
    images1?: true;
    images2?: true;
    images3?: true;
    videoURL?: true;
    isAvailable?: true;
    isEvent?: true;
    isNewArrival?: true;
    created_date?: true;
    _all?: true;
  };

  export type FishesAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which Fishes to aggregate.
     */
    where?: FishesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Fishes to fetch.
     */
    orderBy?: FishesOrderByWithRelationInput | FishesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: FishesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Fishes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Fishes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Fishes
     **/
    _count?: true | FishesCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: FishesAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: FishesSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: FishesMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: FishesMaxAggregateInputType;
  };

  export type GetFishesAggregateType<T extends FishesAggregateArgs> = {
    [P in keyof T & keyof AggregateFishes]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFishes[P]>
      : GetScalarType<T[P], AggregateFishes[P]>;
  };

  export type FishesGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    where?: FishesWhereInput;
    orderBy?:
      | FishesOrderByWithAggregationInput
      | FishesOrderByWithAggregationInput[];
    by: FishesScalarFieldEnum[] | FishesScalarFieldEnum;
    having?: FishesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: FishesCountAggregateInputType | true;
    _avg?: FishesAvgAggregateInputType;
    _sum?: FishesSumAggregateInputType;
    _min?: FishesMinAggregateInputType;
    _max?: FishesMaxAggregateInputType;
  };

  export type FishesGroupByOutputType = {
    id: string;
    user_id: string;
    type_id: string;
    event_id: string;
    name: string;
    price: number;
    price_usd: number;
    gender: string;
    size: string;
    images1: string;
    images2: string | null;
    images3: string | null;
    videoURL: string | null;
    isAvailable: boolean;
    isEvent: boolean;
    isNewArrival: boolean;
    created_date: Date;
    _count: FishesCountAggregateOutputType | null;
    _avg: FishesAvgAggregateOutputType | null;
    _sum: FishesSumAggregateOutputType | null;
    _min: FishesMinAggregateOutputType | null;
    _max: FishesMaxAggregateOutputType | null;
  };

  type GetFishesGroupByPayload<T extends FishesGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<FishesGroupByOutputType, T["by"]> & {
          [P in keyof T & keyof FishesGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FishesGroupByOutputType[P]>
            : GetScalarType<T[P], FishesGroupByOutputType[P]>;
        }
      >
    >;

  export type FishesSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      user_id?: boolean;
      type_id?: boolean;
      event_id?: boolean;
      name?: boolean;
      price?: boolean;
      price_usd?: boolean;
      gender?: boolean;
      size?: boolean;
      images1?: boolean;
      images2?: boolean;
      images3?: boolean;
      videoURL?: boolean;
      isAvailable?: boolean;
      isEvent?: boolean;
      isNewArrival?: boolean;
      created_date?: boolean;
      user?: boolean | UsersDefaultArgs<ExtArgs>;
      type?: boolean | TypesDefaultArgs<ExtArgs>;
      events?: boolean | EventsDefaultArgs<ExtArgs>;
      discounted_fish?: boolean | Fishes$discounted_fishArgs<ExtArgs>;
      _count?: boolean | FishesCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["fishes"]
  >;

  export type FishesSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    type_id?: boolean;
    event_id?: boolean;
    name?: boolean;
    price?: boolean;
    price_usd?: boolean;
    gender?: boolean;
    size?: boolean;
    images1?: boolean;
    images2?: boolean;
    images3?: boolean;
    videoURL?: boolean;
    isAvailable?: boolean;
    isEvent?: boolean;
    isNewArrival?: boolean;
    created_date?: boolean;
  };

  export type FishesInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    user?: boolean | UsersDefaultArgs<ExtArgs>;
    type?: boolean | TypesDefaultArgs<ExtArgs>;
    events?: boolean | EventsDefaultArgs<ExtArgs>;
    discounted_fish?: boolean | Fishes$discounted_fishArgs<ExtArgs>;
    _count?: boolean | FishesCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $FishesPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    name: "Fishes";
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>;
      type: Prisma.$TypesPayload<ExtArgs>;
      events: Prisma.$EventsPayload<ExtArgs>;
      discounted_fish: Prisma.$Discounted_fishPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        type: any;
        id: string;
        user_id: string;
        type_id: string;
        event_id: string;
        name: string;
        price: number;
        price_usd: number;
        gender: string;
        size: string;
        images1: string;
        images2: string | null;
        images3: string | null;
        videoURL: string | null;
        isAvailable: boolean;
        isEvent: boolean;
        isNewArrival: boolean;
        created_date: Date;
      },
      ExtArgs["result"]["fishes"]
    >;
    composites: {};
  };

  type FishesGetPayload<
    S extends boolean | null | undefined | FishesDefaultArgs
  > = $Result.GetResult<Prisma.$FishesPayload, S>;

  type FishesCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = Omit<FishesFindManyArgs, "select" | "include" | "distinct"> & {
    select?: FishesCountAggregateInputType | true;
  };

  export interface FishesDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["Fishes"];
      meta: { name: "Fishes" };
    };
    /**
     * Find zero or one Fishes that matches the filter.
     * @param {FishesFindUniqueArgs} args - Arguments to find a Fishes
     * @example
     * // Get one Fishes
     * const fishes = await prisma.fishes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends FishesFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, FishesFindUniqueArgs<ExtArgs>>
    ): Prisma__FishesClient<
      $Result.GetResult<Prisma.$FishesPayload<ExtArgs>, T, "findUnique"> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Fishes that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {FishesFindUniqueOrThrowArgs} args - Arguments to find a Fishes
     * @example
     * // Get one Fishes
     * const fishes = await prisma.fishes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends FishesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FishesFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__FishesClient<
      $Result.GetResult<Prisma.$FishesPayload<ExtArgs>, T, "findUniqueOrThrow">,
      never,
      ExtArgs
    >;

    /**
     * Find the first Fishes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FishesFindFirstArgs} args - Arguments to find a Fishes
     * @example
     * // Get one Fishes
     * const fishes = await prisma.fishes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends FishesFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, FishesFindFirstArgs<ExtArgs>>
    ): Prisma__FishesClient<
      $Result.GetResult<Prisma.$FishesPayload<ExtArgs>, T, "findFirst"> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Fishes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FishesFindFirstOrThrowArgs} args - Arguments to find a Fishes
     * @example
     * // Get one Fishes
     * const fishes = await prisma.fishes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends FishesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FishesFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__FishesClient<
      $Result.GetResult<Prisma.$FishesPayload<ExtArgs>, T, "findFirstOrThrow">,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Fishes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FishesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Fishes
     * const fishes = await prisma.fishes.findMany()
     *
     * // Get first 10 Fishes
     * const fishes = await prisma.fishes.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const fishesWithIdOnly = await prisma.fishes.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends FishesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FishesFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$FishesPayload<ExtArgs>, T, "findMany">
    >;

    /**
     * Create a Fishes.
     * @param {FishesCreateArgs} args - Arguments to create a Fishes.
     * @example
     * // Create one Fishes
     * const Fishes = await prisma.fishes.create({
     *   data: {
     *     // ... data to create a Fishes
     *   }
     * })
     *
     **/
    create<T extends FishesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, FishesCreateArgs<ExtArgs>>
    ): Prisma__FishesClient<
      $Result.GetResult<Prisma.$FishesPayload<ExtArgs>, T, "create">,
      never,
      ExtArgs
    >;

    /**
     * Create many Fishes.
     *     @param {FishesCreateManyArgs} args - Arguments to create many Fishes.
     *     @example
     *     // Create many Fishes
     *     const fishes = await prisma.fishes.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends FishesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FishesCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Fishes.
     * @param {FishesDeleteArgs} args - Arguments to delete one Fishes.
     * @example
     * // Delete one Fishes
     * const Fishes = await prisma.fishes.delete({
     *   where: {
     *     // ... filter to delete one Fishes
     *   }
     * })
     *
     **/
    delete<T extends FishesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, FishesDeleteArgs<ExtArgs>>
    ): Prisma__FishesClient<
      $Result.GetResult<Prisma.$FishesPayload<ExtArgs>, T, "delete">,
      never,
      ExtArgs
    >;

    /**
     * Update one Fishes.
     * @param {FishesUpdateArgs} args - Arguments to update one Fishes.
     * @example
     * // Update one Fishes
     * const fishes = await prisma.fishes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends FishesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, FishesUpdateArgs<ExtArgs>>
    ): Prisma__FishesClient<
      $Result.GetResult<Prisma.$FishesPayload<ExtArgs>, T, "update">,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Fishes.
     * @param {FishesDeleteManyArgs} args - Arguments to filter Fishes to delete.
     * @example
     * // Delete a few Fishes
     * const { count } = await prisma.fishes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends FishesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FishesDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Fishes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FishesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Fishes
     * const fishes = await prisma.fishes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends FishesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, FishesUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Fishes.
     * @param {FishesUpsertArgs} args - Arguments to update or create a Fishes.
     * @example
     * // Update or create a Fishes
     * const fishes = await prisma.fishes.upsert({
     *   create: {
     *     // ... data to create a Fishes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Fishes we want to update
     *   }
     * })
     **/
    upsert<T extends FishesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, FishesUpsertArgs<ExtArgs>>
    ): Prisma__FishesClient<
      $Result.GetResult<Prisma.$FishesPayload<ExtArgs>, T, "upsert">,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Fishes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FishesCountArgs} args - Arguments to filter Fishes to count.
     * @example
     * // Count the number of Fishes
     * const count = await prisma.fishes.count({
     *   where: {
     *     // ... the filter for the Fishes we want to count
     *   }
     * })
     **/
    count<T extends FishesCountArgs>(
      args?: Subset<T, FishesCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], FishesCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Fishes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FishesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends FishesAggregateArgs>(
      args: Subset<T, FishesAggregateArgs>
    ): Prisma.PrismaPromise<GetFishesAggregateType<T>>;

    /**
     * Group by Fishes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FishesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends FishesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FishesGroupByArgs["orderBy"] }
        : { orderBy?: FishesGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [
                  Error,
                  "Field ",
                  P,
                  ` in "having" needs to be provided in "by"`
                ];
          }[HavingFields]
        : "take" extends Keys<T>
        ? "orderBy" extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : "skip" extends Keys<T>
        ? "orderBy" extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields]
    >(
      args: SubsetIntersection<T, FishesGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors
      ? GetFishesGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Fishes model
     */
    readonly fields: FishesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Fishes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FishesClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";

    user<T extends UsersDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UsersDefaultArgs<ExtArgs>>
    ): Prisma__UsersClient<
      | $Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow">
      | Null,
      Null,
      ExtArgs
    >;

    type<T extends TypesDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, TypesDefaultArgs<ExtArgs>>
    ): Prisma__TypesClient<
      | $Result.GetResult<Prisma.$TypesPayload<ExtArgs>, T, "findUniqueOrThrow">
      | Null,
      Null,
      ExtArgs
    >;

    events<T extends EventsDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, EventsDefaultArgs<ExtArgs>>
    ): Prisma__EventsClient<
      | $Result.GetResult<
          Prisma.$EventsPayload<ExtArgs>,
          T,
          "findUniqueOrThrow"
        >
      | Null,
      Null,
      ExtArgs
    >;

    discounted_fish<T extends Fishes$discounted_fishArgs<ExtArgs> = {}>(
      args?: Subset<T, Fishes$discounted_fishArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$Discounted_fishPayload<ExtArgs>,
          T,
          "findMany"
        >
      | Null
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Fishes model
   */
  interface FishesFieldRefs {
    readonly id: FieldRef<"Fishes", "String">;
    readonly user_id: FieldRef<"Fishes", "String">;
    readonly type_id: FieldRef<"Fishes", "String">;
    readonly event_id: FieldRef<"Fishes", "String">;
    readonly name: FieldRef<"Fishes", "String">;
    readonly price: FieldRef<"Fishes", "Int">;
    readonly price_usd: FieldRef<"Fishes", "Int">;
    readonly gender: FieldRef<"Fishes", "String">;
    readonly size: FieldRef<"Fishes", "String">;
    readonly images1: FieldRef<"Fishes", "String">;
    readonly images2: FieldRef<"Fishes", "String">;
    readonly images3: FieldRef<"Fishes", "String">;
    readonly videoURL: FieldRef<"Fishes", "String">;
    readonly isAvailable: FieldRef<"Fishes", "Boolean">;
    readonly isEvent: FieldRef<"Fishes", "Boolean">;
    readonly isNewArrival: FieldRef<"Fishes", "Boolean">;
    readonly created_date: FieldRef<"Fishes", "DateTime">;
  }

  // Custom InputTypes

  /**
   * Fishes findUnique
   */
  export type FishesFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Fishes
     */
    select?: FishesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FishesInclude<ExtArgs> | null;
    /**
     * Filter, which Fishes to fetch.
     */
    where: FishesWhereUniqueInput;
  };

  /**
   * Fishes findUniqueOrThrow
   */
  export type FishesFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Fishes
     */
    select?: FishesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FishesInclude<ExtArgs> | null;
    /**
     * Filter, which Fishes to fetch.
     */
    where: FishesWhereUniqueInput;
  };

  /**
   * Fishes findFirst
   */
  export type FishesFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Fishes
     */
    select?: FishesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FishesInclude<ExtArgs> | null;
    /**
     * Filter, which Fishes to fetch.
     */
    where?: FishesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Fishes to fetch.
     */
    orderBy?: FishesOrderByWithRelationInput | FishesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Fishes.
     */
    cursor?: FishesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Fishes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Fishes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Fishes.
     */
    distinct?: FishesScalarFieldEnum | FishesScalarFieldEnum[];
  };

  /**
   * Fishes findFirstOrThrow
   */
  export type FishesFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Fishes
     */
    select?: FishesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FishesInclude<ExtArgs> | null;
    /**
     * Filter, which Fishes to fetch.
     */
    where?: FishesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Fishes to fetch.
     */
    orderBy?: FishesOrderByWithRelationInput | FishesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Fishes.
     */
    cursor?: FishesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Fishes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Fishes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Fishes.
     */
    distinct?: FishesScalarFieldEnum | FishesScalarFieldEnum[];
  };

  /**
   * Fishes findMany
   */
  export type FishesFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Fishes
     */
    select?: FishesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FishesInclude<ExtArgs> | null;
    /**
     * Filter, which Fishes to fetch.
     */
    where?: FishesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Fishes to fetch.
     */
    orderBy?: FishesOrderByWithRelationInput | FishesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Fishes.
     */
    cursor?: FishesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Fishes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Fishes.
     */
    skip?: number;
    distinct?: FishesScalarFieldEnum | FishesScalarFieldEnum[];
  };

  /**
   * Fishes create
   */
  export type FishesCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Fishes
     */
    select?: FishesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FishesInclude<ExtArgs> | null;
    /**
     * The data needed to create a Fishes.
     */
    data: XOR<FishesCreateInput, FishesUncheckedCreateInput>;
  };

  /**
   * Fishes createMany
   */
  export type FishesCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to create many Fishes.
     */
    data: FishesCreateManyInput | FishesCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Fishes update
   */
  export type FishesUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Fishes
     */
    select?: FishesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FishesInclude<ExtArgs> | null;
    /**
     * The data needed to update a Fishes.
     */
    data: XOR<FishesUpdateInput, FishesUncheckedUpdateInput>;
    /**
     * Choose, which Fishes to update.
     */
    where: FishesWhereUniqueInput;
  };

  /**
   * Fishes updateMany
   */
  export type FishesUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to update Fishes.
     */
    data: XOR<FishesUpdateManyMutationInput, FishesUncheckedUpdateManyInput>;
    /**
     * Filter which Fishes to update
     */
    where?: FishesWhereInput;
  };

  /**
   * Fishes upsert
   */
  export type FishesUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Fishes
     */
    select?: FishesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FishesInclude<ExtArgs> | null;
    /**
     * The filter to search for the Fishes to update in case it exists.
     */
    where: FishesWhereUniqueInput;
    /**
     * In case the Fishes found by the `where` argument doesn't exist, create a new Fishes with this data.
     */
    create: XOR<FishesCreateInput, FishesUncheckedCreateInput>;
    /**
     * In case the Fishes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FishesUpdateInput, FishesUncheckedUpdateInput>;
  };

  /**
   * Fishes delete
   */
  export type FishesDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Fishes
     */
    select?: FishesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FishesInclude<ExtArgs> | null;
    /**
     * Filter which Fishes to delete.
     */
    where: FishesWhereUniqueInput;
  };

  /**
   * Fishes deleteMany
   */
  export type FishesDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which Fishes to delete
     */
    where?: FishesWhereInput;
  };

  /**
   * Fishes.discounted_fish
   */
  export type Fishes$discounted_fishArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Discounted_fish
     */
    select?: Discounted_fishSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Discounted_fishInclude<ExtArgs> | null;
    where?: Discounted_fishWhereInput;
    orderBy?:
      | Discounted_fishOrderByWithRelationInput
      | Discounted_fishOrderByWithRelationInput[];
    cursor?: Discounted_fishWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?:
      | Discounted_fishScalarFieldEnum
      | Discounted_fishScalarFieldEnum[];
  };

  /**
   * Fishes without action
   */
  export type FishesDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Fishes
     */
    select?: FishesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FishesInclude<ExtArgs> | null;
  };

  /**
   * Model Schedule_ships
   */

  export type AggregateSchedule_ships = {
    _count: Schedule_shipsCountAggregateOutputType | null;
    _min: Schedule_shipsMinAggregateOutputType | null;
    _max: Schedule_shipsMaxAggregateOutputType | null;
  };

  export type Schedule_shipsMinAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    scheduleName: string | null;
    scheduleImage: string | null;
    scheduleDescription: string | null;
    created_date: Date | null;
  };

  export type Schedule_shipsMaxAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    scheduleName: string | null;
    scheduleImage: string | null;
    scheduleDescription: string | null;
    created_date: Date | null;
  };

  export type Schedule_shipsCountAggregateOutputType = {
    id: number;
    user_id: number;
    scheduleName: number;
    scheduleImage: number;
    scheduleDescription: number;
    created_date: number;
    _all: number;
  };

  export type Schedule_shipsMinAggregateInputType = {
    id?: true;
    user_id?: true;
    scheduleName?: true;
    scheduleImage?: true;
    scheduleDescription?: true;
    created_date?: true;
  };

  export type Schedule_shipsMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    scheduleName?: true;
    scheduleImage?: true;
    scheduleDescription?: true;
    created_date?: true;
  };

  export type Schedule_shipsCountAggregateInputType = {
    id?: true;
    user_id?: true;
    scheduleName?: true;
    scheduleImage?: true;
    scheduleDescription?: true;
    created_date?: true;
    _all?: true;
  };

  export type Schedule_shipsAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which Schedule_ships to aggregate.
     */
    where?: Schedule_shipsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Schedule_ships to fetch.
     */
    orderBy?:
      | Schedule_shipsOrderByWithRelationInput
      | Schedule_shipsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Schedule_shipsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Schedule_ships from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Schedule_ships.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Schedule_ships
     **/
    _count?: true | Schedule_shipsCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: Schedule_shipsMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: Schedule_shipsMaxAggregateInputType;
  };

  export type GetSchedule_shipsAggregateType<
    T extends Schedule_shipsAggregateArgs
  > = {
    [P in keyof T & keyof AggregateSchedule_ships]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSchedule_ships[P]>
      : GetScalarType<T[P], AggregateSchedule_ships[P]>;
  };

  export type Schedule_shipsGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    where?: Schedule_shipsWhereInput;
    orderBy?:
      | Schedule_shipsOrderByWithAggregationInput
      | Schedule_shipsOrderByWithAggregationInput[];
    by: Schedule_shipsScalarFieldEnum[] | Schedule_shipsScalarFieldEnum;
    having?: Schedule_shipsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Schedule_shipsCountAggregateInputType | true;
    _min?: Schedule_shipsMinAggregateInputType;
    _max?: Schedule_shipsMaxAggregateInputType;
  };

  export type Schedule_shipsGroupByOutputType = {
    id: string;
    user_id: string;
    scheduleName: string;
    scheduleImage: string;
    scheduleDescription: string | null;
    created_date: Date;
    _count: Schedule_shipsCountAggregateOutputType | null;
    _min: Schedule_shipsMinAggregateOutputType | null;
    _max: Schedule_shipsMaxAggregateOutputType | null;
  };

  type GetSchedule_shipsGroupByPayload<T extends Schedule_shipsGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<Schedule_shipsGroupByOutputType, T["by"]> & {
          [P in keyof T &
            keyof Schedule_shipsGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Schedule_shipsGroupByOutputType[P]>
            : GetScalarType<T[P], Schedule_shipsGroupByOutputType[P]>;
        }
      >
    >;

  export type Schedule_shipsSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      user_id?: boolean;
      scheduleName?: boolean;
      scheduleImage?: boolean;
      scheduleDescription?: boolean;
      created_date?: boolean;
      user?: boolean | UsersDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["schedule_ships"]
  >;

  export type Schedule_shipsSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    scheduleName?: boolean;
    scheduleImage?: boolean;
    scheduleDescription?: boolean;
    created_date?: boolean;
  };

  export type Schedule_shipsInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    user?: boolean | UsersDefaultArgs<ExtArgs>;
  };

  export type $Schedule_shipsPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    name: "Schedule_ships";
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        user_id: string;
        scheduleName: string;
        scheduleImage: string;
        scheduleDescription: string | null;
        created_date: Date;
      },
      ExtArgs["result"]["schedule_ships"]
    >;
    composites: {};
  };

  type Schedule_shipsGetPayload<
    S extends boolean | null | undefined | Schedule_shipsDefaultArgs
  > = $Result.GetResult<Prisma.$Schedule_shipsPayload, S>;

  type Schedule_shipsCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = Omit<Schedule_shipsFindManyArgs, "select" | "include" | "distinct"> & {
    select?: Schedule_shipsCountAggregateInputType | true;
  };

  export interface Schedule_shipsDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["Schedule_ships"];
      meta: { name: "Schedule_ships" };
    };
    /**
     * Find zero or one Schedule_ships that matches the filter.
     * @param {Schedule_shipsFindUniqueArgs} args - Arguments to find a Schedule_ships
     * @example
     * // Get one Schedule_ships
     * const schedule_ships = await prisma.schedule_ships.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends Schedule_shipsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, Schedule_shipsFindUniqueArgs<ExtArgs>>
    ): Prisma__Schedule_shipsClient<
      $Result.GetResult<
        Prisma.$Schedule_shipsPayload<ExtArgs>,
        T,
        "findUnique"
      > | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Schedule_ships that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {Schedule_shipsFindUniqueOrThrowArgs} args - Arguments to find a Schedule_ships
     * @example
     * // Get one Schedule_ships
     * const schedule_ships = await prisma.schedule_ships.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends Schedule_shipsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, Schedule_shipsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__Schedule_shipsClient<
      $Result.GetResult<
        Prisma.$Schedule_shipsPayload<ExtArgs>,
        T,
        "findUniqueOrThrow"
      >,
      never,
      ExtArgs
    >;

    /**
     * Find the first Schedule_ships that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Schedule_shipsFindFirstArgs} args - Arguments to find a Schedule_ships
     * @example
     * // Get one Schedule_ships
     * const schedule_ships = await prisma.schedule_ships.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends Schedule_shipsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, Schedule_shipsFindFirstArgs<ExtArgs>>
    ): Prisma__Schedule_shipsClient<
      $Result.GetResult<
        Prisma.$Schedule_shipsPayload<ExtArgs>,
        T,
        "findFirst"
      > | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Schedule_ships that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Schedule_shipsFindFirstOrThrowArgs} args - Arguments to find a Schedule_ships
     * @example
     * // Get one Schedule_ships
     * const schedule_ships = await prisma.schedule_ships.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends Schedule_shipsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, Schedule_shipsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__Schedule_shipsClient<
      $Result.GetResult<
        Prisma.$Schedule_shipsPayload<ExtArgs>,
        T,
        "findFirstOrThrow"
      >,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Schedule_ships that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Schedule_shipsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Schedule_ships
     * const schedule_ships = await prisma.schedule_ships.findMany()
     *
     * // Get first 10 Schedule_ships
     * const schedule_ships = await prisma.schedule_ships.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const schedule_shipsWithIdOnly = await prisma.schedule_ships.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends Schedule_shipsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Schedule_shipsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$Schedule_shipsPayload<ExtArgs>, T, "findMany">
    >;

    /**
     * Create a Schedule_ships.
     * @param {Schedule_shipsCreateArgs} args - Arguments to create a Schedule_ships.
     * @example
     * // Create one Schedule_ships
     * const Schedule_ships = await prisma.schedule_ships.create({
     *   data: {
     *     // ... data to create a Schedule_ships
     *   }
     * })
     *
     **/
    create<T extends Schedule_shipsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, Schedule_shipsCreateArgs<ExtArgs>>
    ): Prisma__Schedule_shipsClient<
      $Result.GetResult<Prisma.$Schedule_shipsPayload<ExtArgs>, T, "create">,
      never,
      ExtArgs
    >;

    /**
     * Create many Schedule_ships.
     *     @param {Schedule_shipsCreateManyArgs} args - Arguments to create many Schedule_ships.
     *     @example
     *     // Create many Schedule_ships
     *     const schedule_ships = await prisma.schedule_ships.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends Schedule_shipsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Schedule_shipsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Schedule_ships.
     * @param {Schedule_shipsDeleteArgs} args - Arguments to delete one Schedule_ships.
     * @example
     * // Delete one Schedule_ships
     * const Schedule_ships = await prisma.schedule_ships.delete({
     *   where: {
     *     // ... filter to delete one Schedule_ships
     *   }
     * })
     *
     **/
    delete<T extends Schedule_shipsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, Schedule_shipsDeleteArgs<ExtArgs>>
    ): Prisma__Schedule_shipsClient<
      $Result.GetResult<Prisma.$Schedule_shipsPayload<ExtArgs>, T, "delete">,
      never,
      ExtArgs
    >;

    /**
     * Update one Schedule_ships.
     * @param {Schedule_shipsUpdateArgs} args - Arguments to update one Schedule_ships.
     * @example
     * // Update one Schedule_ships
     * const schedule_ships = await prisma.schedule_ships.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends Schedule_shipsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, Schedule_shipsUpdateArgs<ExtArgs>>
    ): Prisma__Schedule_shipsClient<
      $Result.GetResult<Prisma.$Schedule_shipsPayload<ExtArgs>, T, "update">,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Schedule_ships.
     * @param {Schedule_shipsDeleteManyArgs} args - Arguments to filter Schedule_ships to delete.
     * @example
     * // Delete a few Schedule_ships
     * const { count } = await prisma.schedule_ships.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends Schedule_shipsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Schedule_shipsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Schedule_ships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Schedule_shipsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Schedule_ships
     * const schedule_ships = await prisma.schedule_ships.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends Schedule_shipsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, Schedule_shipsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Schedule_ships.
     * @param {Schedule_shipsUpsertArgs} args - Arguments to update or create a Schedule_ships.
     * @example
     * // Update or create a Schedule_ships
     * const schedule_ships = await prisma.schedule_ships.upsert({
     *   create: {
     *     // ... data to create a Schedule_ships
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Schedule_ships we want to update
     *   }
     * })
     **/
    upsert<T extends Schedule_shipsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, Schedule_shipsUpsertArgs<ExtArgs>>
    ): Prisma__Schedule_shipsClient<
      $Result.GetResult<Prisma.$Schedule_shipsPayload<ExtArgs>, T, "upsert">,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Schedule_ships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Schedule_shipsCountArgs} args - Arguments to filter Schedule_ships to count.
     * @example
     * // Count the number of Schedule_ships
     * const count = await prisma.schedule_ships.count({
     *   where: {
     *     // ... the filter for the Schedule_ships we want to count
     *   }
     * })
     **/
    count<T extends Schedule_shipsCountArgs>(
      args?: Subset<T, Schedule_shipsCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], Schedule_shipsCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Schedule_ships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Schedule_shipsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends Schedule_shipsAggregateArgs>(
      args: Subset<T, Schedule_shipsAggregateArgs>
    ): Prisma.PrismaPromise<GetSchedule_shipsAggregateType<T>>;

    /**
     * Group by Schedule_ships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Schedule_shipsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends Schedule_shipsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Schedule_shipsGroupByArgs["orderBy"] }
        : { orderBy?: Schedule_shipsGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [
                  Error,
                  "Field ",
                  P,
                  ` in "having" needs to be provided in "by"`
                ];
          }[HavingFields]
        : "take" extends Keys<T>
        ? "orderBy" extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : "skip" extends Keys<T>
        ? "orderBy" extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields]
    >(
      args: SubsetIntersection<T, Schedule_shipsGroupByArgs, OrderByArg> &
        InputErrors
    ): {} extends InputErrors
      ? GetSchedule_shipsGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Schedule_ships model
     */
    readonly fields: Schedule_shipsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Schedule_ships.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Schedule_shipsClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";

    user<T extends UsersDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UsersDefaultArgs<ExtArgs>>
    ): Prisma__UsersClient<
      | $Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow">
      | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Schedule_ships model
   */
  interface Schedule_shipsFieldRefs {
    readonly id: FieldRef<"Schedule_ships", "String">;
    readonly user_id: FieldRef<"Schedule_ships", "String">;
    readonly scheduleName: FieldRef<"Schedule_ships", "String">;
    readonly scheduleImage: FieldRef<"Schedule_ships", "String">;
    readonly scheduleDescription: FieldRef<"Schedule_ships", "String">;
    readonly created_date: FieldRef<"Schedule_ships", "DateTime">;
  }

  // Custom InputTypes

  /**
   * Schedule_ships findUnique
   */
  export type Schedule_shipsFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Schedule_ships
     */
    select?: Schedule_shipsSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Schedule_shipsInclude<ExtArgs> | null;
    /**
     * Filter, which Schedule_ships to fetch.
     */
    where: Schedule_shipsWhereUniqueInput;
  };

  /**
   * Schedule_ships findUniqueOrThrow
   */
  export type Schedule_shipsFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Schedule_ships
     */
    select?: Schedule_shipsSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Schedule_shipsInclude<ExtArgs> | null;
    /**
     * Filter, which Schedule_ships to fetch.
     */
    where: Schedule_shipsWhereUniqueInput;
  };

  /**
   * Schedule_ships findFirst
   */
  export type Schedule_shipsFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Schedule_ships
     */
    select?: Schedule_shipsSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Schedule_shipsInclude<ExtArgs> | null;
    /**
     * Filter, which Schedule_ships to fetch.
     */
    where?: Schedule_shipsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Schedule_ships to fetch.
     */
    orderBy?:
      | Schedule_shipsOrderByWithRelationInput
      | Schedule_shipsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Schedule_ships.
     */
    cursor?: Schedule_shipsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Schedule_ships from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Schedule_ships.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Schedule_ships.
     */
    distinct?: Schedule_shipsScalarFieldEnum | Schedule_shipsScalarFieldEnum[];
  };

  /**
   * Schedule_ships findFirstOrThrow
   */
  export type Schedule_shipsFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Schedule_ships
     */
    select?: Schedule_shipsSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Schedule_shipsInclude<ExtArgs> | null;
    /**
     * Filter, which Schedule_ships to fetch.
     */
    where?: Schedule_shipsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Schedule_ships to fetch.
     */
    orderBy?:
      | Schedule_shipsOrderByWithRelationInput
      | Schedule_shipsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Schedule_ships.
     */
    cursor?: Schedule_shipsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Schedule_ships from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Schedule_ships.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Schedule_ships.
     */
    distinct?: Schedule_shipsScalarFieldEnum | Schedule_shipsScalarFieldEnum[];
  };

  /**
   * Schedule_ships findMany
   */
  export type Schedule_shipsFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Schedule_ships
     */
    select?: Schedule_shipsSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Schedule_shipsInclude<ExtArgs> | null;
    /**
     * Filter, which Schedule_ships to fetch.
     */
    where?: Schedule_shipsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Schedule_ships to fetch.
     */
    orderBy?:
      | Schedule_shipsOrderByWithRelationInput
      | Schedule_shipsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Schedule_ships.
     */
    cursor?: Schedule_shipsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Schedule_ships from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Schedule_ships.
     */
    skip?: number;
    distinct?: Schedule_shipsScalarFieldEnum | Schedule_shipsScalarFieldEnum[];
  };

  /**
   * Schedule_ships create
   */
  export type Schedule_shipsCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Schedule_ships
     */
    select?: Schedule_shipsSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Schedule_shipsInclude<ExtArgs> | null;
    /**
     * The data needed to create a Schedule_ships.
     */
    data: XOR<Schedule_shipsCreateInput, Schedule_shipsUncheckedCreateInput>;
  };

  /**
   * Schedule_ships createMany
   */
  export type Schedule_shipsCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to create many Schedule_ships.
     */
    data: Schedule_shipsCreateManyInput | Schedule_shipsCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Schedule_ships update
   */
  export type Schedule_shipsUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Schedule_ships
     */
    select?: Schedule_shipsSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Schedule_shipsInclude<ExtArgs> | null;
    /**
     * The data needed to update a Schedule_ships.
     */
    data: XOR<Schedule_shipsUpdateInput, Schedule_shipsUncheckedUpdateInput>;
    /**
     * Choose, which Schedule_ships to update.
     */
    where: Schedule_shipsWhereUniqueInput;
  };

  /**
   * Schedule_ships updateMany
   */
  export type Schedule_shipsUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to update Schedule_ships.
     */
    data: XOR<
      Schedule_shipsUpdateManyMutationInput,
      Schedule_shipsUncheckedUpdateManyInput
    >;
    /**
     * Filter which Schedule_ships to update
     */
    where?: Schedule_shipsWhereInput;
  };

  /**
   * Schedule_ships upsert
   */
  export type Schedule_shipsUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Schedule_ships
     */
    select?: Schedule_shipsSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Schedule_shipsInclude<ExtArgs> | null;
    /**
     * The filter to search for the Schedule_ships to update in case it exists.
     */
    where: Schedule_shipsWhereUniqueInput;
    /**
     * In case the Schedule_ships found by the `where` argument doesn't exist, create a new Schedule_ships with this data.
     */
    create: XOR<Schedule_shipsCreateInput, Schedule_shipsUncheckedCreateInput>;
    /**
     * In case the Schedule_ships was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Schedule_shipsUpdateInput, Schedule_shipsUncheckedUpdateInput>;
  };

  /**
   * Schedule_ships delete
   */
  export type Schedule_shipsDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Schedule_ships
     */
    select?: Schedule_shipsSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Schedule_shipsInclude<ExtArgs> | null;
    /**
     * Filter which Schedule_ships to delete.
     */
    where: Schedule_shipsWhereUniqueInput;
  };

  /**
   * Schedule_ships deleteMany
   */
  export type Schedule_shipsDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which Schedule_ships to delete
     */
    where?: Schedule_shipsWhereInput;
  };

  /**
   * Schedule_ships without action
   */
  export type Schedule_shipsDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Schedule_ships
     */
    select?: Schedule_shipsSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Schedule_shipsInclude<ExtArgs> | null;
  };

  /**
   * Model Types
   */

  export type AggregateTypes = {
    _count: TypesCountAggregateOutputType | null;
    _min: TypesMinAggregateOutputType | null;
    _max: TypesMaxAggregateOutputType | null;
  };

  export type TypesMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    created_date: Date | null;
  };

  export type TypesMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    created_date: Date | null;
  };

  export type TypesCountAggregateOutputType = {
    id: number;
    name: number;
    created_date: number;
    _all: number;
  };

  export type TypesMinAggregateInputType = {
    id?: true;
    name?: true;
    created_date?: true;
  };

  export type TypesMaxAggregateInputType = {
    id?: true;
    name?: true;
    created_date?: true;
  };

  export type TypesCountAggregateInputType = {
    id?: true;
    name?: true;
    created_date?: true;
    _all?: true;
  };

  export type TypesAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which Types to aggregate.
     */
    where?: TypesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Types to fetch.
     */
    orderBy?: TypesOrderByWithRelationInput | TypesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: TypesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Types from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Types.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Types
     **/
    _count?: true | TypesCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: TypesMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: TypesMaxAggregateInputType;
  };

  export type GetTypesAggregateType<T extends TypesAggregateArgs> = {
    [P in keyof T & keyof AggregateTypes]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTypes[P]>
      : GetScalarType<T[P], AggregateTypes[P]>;
  };

  export type TypesGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    where?: TypesWhereInput;
    orderBy?:
      | TypesOrderByWithAggregationInput
      | TypesOrderByWithAggregationInput[];
    by: TypesScalarFieldEnum[] | TypesScalarFieldEnum;
    having?: TypesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TypesCountAggregateInputType | true;
    _min?: TypesMinAggregateInputType;
    _max?: TypesMaxAggregateInputType;
  };

  export type TypesGroupByOutputType = {
    id: string;
    name: string;
    created_date: Date;
    _count: TypesCountAggregateOutputType | null;
    _min: TypesMinAggregateOutputType | null;
    _max: TypesMaxAggregateOutputType | null;
  };

  type GetTypesGroupByPayload<T extends TypesGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<TypesGroupByOutputType, T["by"]> & {
          [P in keyof T & keyof TypesGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TypesGroupByOutputType[P]>
            : GetScalarType<T[P], TypesGroupByOutputType[P]>;
        }
      >
    >;

  export type TypesSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      created_date?: boolean;
      Fishes?: boolean | Types$FishesArgs<ExtArgs>;
      _count?: boolean | TypesCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["types"]
  >;

  export type TypesSelectScalar = {
    id?: boolean;
    name?: boolean;
    created_date?: boolean;
  };

  export type TypesInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    Fishes?: boolean | Types$FishesArgs<ExtArgs>;
    _count?: boolean | TypesCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $TypesPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    name: "Types";
    objects: {
      Fishes: Prisma.$FishesPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        name: string;
        created_date: Date;
      },
      ExtArgs["result"]["types"]
    >;
    composites: {};
  };

  type TypesGetPayload<
    S extends boolean | null | undefined | TypesDefaultArgs
  > = $Result.GetResult<Prisma.$TypesPayload, S>;

  type TypesCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = Omit<TypesFindManyArgs, "select" | "include" | "distinct"> & {
    select?: TypesCountAggregateInputType | true;
  };

  export interface TypesDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["Types"];
      meta: { name: "Types" };
    };
    /**
     * Find zero or one Types that matches the filter.
     * @param {TypesFindUniqueArgs} args - Arguments to find a Types
     * @example
     * // Get one Types
     * const types = await prisma.types.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends TypesFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TypesFindUniqueArgs<ExtArgs>>
    ): Prisma__TypesClient<
      $Result.GetResult<Prisma.$TypesPayload<ExtArgs>, T, "findUnique"> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Types that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {TypesFindUniqueOrThrowArgs} args - Arguments to find a Types
     * @example
     * // Get one Types
     * const types = await prisma.types.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends TypesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TypesFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TypesClient<
      $Result.GetResult<Prisma.$TypesPayload<ExtArgs>, T, "findUniqueOrThrow">,
      never,
      ExtArgs
    >;

    /**
     * Find the first Types that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypesFindFirstArgs} args - Arguments to find a Types
     * @example
     * // Get one Types
     * const types = await prisma.types.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends TypesFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TypesFindFirstArgs<ExtArgs>>
    ): Prisma__TypesClient<
      $Result.GetResult<Prisma.$TypesPayload<ExtArgs>, T, "findFirst"> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Types that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypesFindFirstOrThrowArgs} args - Arguments to find a Types
     * @example
     * // Get one Types
     * const types = await prisma.types.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends TypesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TypesFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TypesClient<
      $Result.GetResult<Prisma.$TypesPayload<ExtArgs>, T, "findFirstOrThrow">,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Types that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Types
     * const types = await prisma.types.findMany()
     *
     * // Get first 10 Types
     * const types = await prisma.types.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const typesWithIdOnly = await prisma.types.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends TypesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TypesFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$TypesPayload<ExtArgs>, T, "findMany">
    >;

    /**
     * Create a Types.
     * @param {TypesCreateArgs} args - Arguments to create a Types.
     * @example
     * // Create one Types
     * const Types = await prisma.types.create({
     *   data: {
     *     // ... data to create a Types
     *   }
     * })
     *
     **/
    create<T extends TypesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TypesCreateArgs<ExtArgs>>
    ): Prisma__TypesClient<
      $Result.GetResult<Prisma.$TypesPayload<ExtArgs>, T, "create">,
      never,
      ExtArgs
    >;

    /**
     * Create many Types.
     *     @param {TypesCreateManyArgs} args - Arguments to create many Types.
     *     @example
     *     // Create many Types
     *     const types = await prisma.types.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends TypesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TypesCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Types.
     * @param {TypesDeleteArgs} args - Arguments to delete one Types.
     * @example
     * // Delete one Types
     * const Types = await prisma.types.delete({
     *   where: {
     *     // ... filter to delete one Types
     *   }
     * })
     *
     **/
    delete<T extends TypesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TypesDeleteArgs<ExtArgs>>
    ): Prisma__TypesClient<
      $Result.GetResult<Prisma.$TypesPayload<ExtArgs>, T, "delete">,
      never,
      ExtArgs
    >;

    /**
     * Update one Types.
     * @param {TypesUpdateArgs} args - Arguments to update one Types.
     * @example
     * // Update one Types
     * const types = await prisma.types.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends TypesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TypesUpdateArgs<ExtArgs>>
    ): Prisma__TypesClient<
      $Result.GetResult<Prisma.$TypesPayload<ExtArgs>, T, "update">,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Types.
     * @param {TypesDeleteManyArgs} args - Arguments to filter Types to delete.
     * @example
     * // Delete a few Types
     * const { count } = await prisma.types.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends TypesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TypesDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Types
     * const types = await prisma.types.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends TypesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TypesUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Types.
     * @param {TypesUpsertArgs} args - Arguments to update or create a Types.
     * @example
     * // Update or create a Types
     * const types = await prisma.types.upsert({
     *   create: {
     *     // ... data to create a Types
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Types we want to update
     *   }
     * })
     **/
    upsert<T extends TypesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TypesUpsertArgs<ExtArgs>>
    ): Prisma__TypesClient<
      $Result.GetResult<Prisma.$TypesPayload<ExtArgs>, T, "upsert">,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypesCountArgs} args - Arguments to filter Types to count.
     * @example
     * // Count the number of Types
     * const count = await prisma.types.count({
     *   where: {
     *     // ... the filter for the Types we want to count
     *   }
     * })
     **/
    count<T extends TypesCountArgs>(
      args?: Subset<T, TypesCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], TypesCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends TypesAggregateArgs>(
      args: Subset<T, TypesAggregateArgs>
    ): Prisma.PrismaPromise<GetTypesAggregateType<T>>;

    /**
     * Group by Types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends TypesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TypesGroupByArgs["orderBy"] }
        : { orderBy?: TypesGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [
                  Error,
                  "Field ",
                  P,
                  ` in "having" needs to be provided in "by"`
                ];
          }[HavingFields]
        : "take" extends Keys<T>
        ? "orderBy" extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : "skip" extends Keys<T>
        ? "orderBy" extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields]
    >(
      args: SubsetIntersection<T, TypesGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors
      ? GetTypesGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Types model
     */
    readonly fields: TypesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Types.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TypesClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";

    Fishes<T extends Types$FishesArgs<ExtArgs> = {}>(
      args?: Subset<T, Types$FishesArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$FishesPayload<ExtArgs>, T, "findMany"> | Null
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Types model
   */
  interface TypesFieldRefs {
    readonly id: FieldRef<"Types", "String">;
    readonly name: FieldRef<"Types", "String">;
    readonly created_date: FieldRef<"Types", "DateTime">;
  }

  // Custom InputTypes

  /**
   * Types findUnique
   */
  export type TypesFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Types
     */
    select?: TypesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TypesInclude<ExtArgs> | null;
    /**
     * Filter, which Types to fetch.
     */
    where: TypesWhereUniqueInput;
  };

  /**
   * Types findUniqueOrThrow
   */
  export type TypesFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Types
     */
    select?: TypesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TypesInclude<ExtArgs> | null;
    /**
     * Filter, which Types to fetch.
     */
    where: TypesWhereUniqueInput;
  };

  /**
   * Types findFirst
   */
  export type TypesFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Types
     */
    select?: TypesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TypesInclude<ExtArgs> | null;
    /**
     * Filter, which Types to fetch.
     */
    where?: TypesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Types to fetch.
     */
    orderBy?: TypesOrderByWithRelationInput | TypesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Types.
     */
    cursor?: TypesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Types from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Types.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Types.
     */
    distinct?: TypesScalarFieldEnum | TypesScalarFieldEnum[];
  };

  /**
   * Types findFirstOrThrow
   */
  export type TypesFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Types
     */
    select?: TypesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TypesInclude<ExtArgs> | null;
    /**
     * Filter, which Types to fetch.
     */
    where?: TypesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Types to fetch.
     */
    orderBy?: TypesOrderByWithRelationInput | TypesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Types.
     */
    cursor?: TypesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Types from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Types.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Types.
     */
    distinct?: TypesScalarFieldEnum | TypesScalarFieldEnum[];
  };

  /**
   * Types findMany
   */
  export type TypesFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Types
     */
    select?: TypesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TypesInclude<ExtArgs> | null;
    /**
     * Filter, which Types to fetch.
     */
    where?: TypesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Types to fetch.
     */
    orderBy?: TypesOrderByWithRelationInput | TypesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Types.
     */
    cursor?: TypesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Types from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Types.
     */
    skip?: number;
    distinct?: TypesScalarFieldEnum | TypesScalarFieldEnum[];
  };

  /**
   * Types create
   */
  export type TypesCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Types
     */
    select?: TypesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TypesInclude<ExtArgs> | null;
    /**
     * The data needed to create a Types.
     */
    data: XOR<TypesCreateInput, TypesUncheckedCreateInput>;
  };

  /**
   * Types createMany
   */
  export type TypesCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to create many Types.
     */
    data: TypesCreateManyInput | TypesCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Types update
   */
  export type TypesUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Types
     */
    select?: TypesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TypesInclude<ExtArgs> | null;
    /**
     * The data needed to update a Types.
     */
    data: XOR<TypesUpdateInput, TypesUncheckedUpdateInput>;
    /**
     * Choose, which Types to update.
     */
    where: TypesWhereUniqueInput;
  };

  /**
   * Types updateMany
   */
  export type TypesUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to update Types.
     */
    data: XOR<TypesUpdateManyMutationInput, TypesUncheckedUpdateManyInput>;
    /**
     * Filter which Types to update
     */
    where?: TypesWhereInput;
  };

  /**
   * Types upsert
   */
  export type TypesUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Types
     */
    select?: TypesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TypesInclude<ExtArgs> | null;
    /**
     * The filter to search for the Types to update in case it exists.
     */
    where: TypesWhereUniqueInput;
    /**
     * In case the Types found by the `where` argument doesn't exist, create a new Types with this data.
     */
    create: XOR<TypesCreateInput, TypesUncheckedCreateInput>;
    /**
     * In case the Types was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TypesUpdateInput, TypesUncheckedUpdateInput>;
  };

  /**
   * Types delete
   */
  export type TypesDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Types
     */
    select?: TypesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TypesInclude<ExtArgs> | null;
    /**
     * Filter which Types to delete.
     */
    where: TypesWhereUniqueInput;
  };

  /**
   * Types deleteMany
   */
  export type TypesDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which Types to delete
     */
    where?: TypesWhereInput;
  };

  /**
   * Types.Fishes
   */
  export type Types$FishesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Fishes
     */
    select?: FishesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FishesInclude<ExtArgs> | null;
    where?: FishesWhereInput;
    orderBy?: FishesOrderByWithRelationInput | FishesOrderByWithRelationInput[];
    cursor?: FishesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: FishesScalarFieldEnum | FishesScalarFieldEnum[];
  };

  /**
   * Types without action
   */
  export type TypesDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Types
     */
    select?: TypesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TypesInclude<ExtArgs> | null;
  };

  /**
   * Model Coupon_discount
   */

  export type AggregateCoupon_discount = {
    _count: Coupon_discountCountAggregateOutputType | null;
    _avg: Coupon_discountAvgAggregateOutputType | null;
    _sum: Coupon_discountSumAggregateOutputType | null;
    _min: Coupon_discountMinAggregateOutputType | null;
    _max: Coupon_discountMaxAggregateOutputType | null;
  };

  export type Coupon_discountAvgAggregateOutputType = {
    discountMinTransaction_idr: number | null;
    discountMinTransaction_usd: number | null;
    discountMinTransaction_fish: number | null;
    discountPercentage: number | null;
    discountMaxPrice_idr: number | null;
    discountMaxPrice_usd: number | null;
  };

  export type Coupon_discountSumAggregateOutputType = {
    discountMinTransaction_idr: number | null;
    discountMinTransaction_usd: number | null;
    discountMinTransaction_fish: number | null;
    discountPercentage: number | null;
    discountMaxPrice_idr: number | null;
    discountMaxPrice_usd: number | null;
  };

  export type Coupon_discountMinAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    discountCode: string | null;
    discountMinTransaction_idr: number | null;
    discountMinTransaction_usd: number | null;
    discountMinTransaction_fish: number | null;
    discountPercentage: number | null;
    discountMaxPrice_idr: number | null;
    discountMaxPrice_usd: number | null;
    expirationDate: Date | null;
    created_date: Date | null;
  };

  export type Coupon_discountMaxAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    discountCode: string | null;
    discountMinTransaction_idr: number | null;
    discountMinTransaction_usd: number | null;
    discountMinTransaction_fish: number | null;
    discountPercentage: number | null;
    discountMaxPrice_idr: number | null;
    discountMaxPrice_usd: number | null;
    expirationDate: Date | null;
    created_date: Date | null;
  };

  export type Coupon_discountCountAggregateOutputType = {
    id: number;
    user_id: number;
    discountCode: number;
    discountMinTransaction_idr: number;
    discountMinTransaction_usd: number;
    discountMinTransaction_fish: number;
    discountPercentage: number;
    discountMaxPrice_idr: number;
    discountMaxPrice_usd: number;
    expirationDate: number;
    created_date: number;
    _all: number;
  };

  export type Coupon_discountAvgAggregateInputType = {
    discountMinTransaction_idr?: true;
    discountMinTransaction_usd?: true;
    discountMinTransaction_fish?: true;
    discountPercentage?: true;
    discountMaxPrice_idr?: true;
    discountMaxPrice_usd?: true;
  };

  export type Coupon_discountSumAggregateInputType = {
    discountMinTransaction_idr?: true;
    discountMinTransaction_usd?: true;
    discountMinTransaction_fish?: true;
    discountPercentage?: true;
    discountMaxPrice_idr?: true;
    discountMaxPrice_usd?: true;
  };

  export type Coupon_discountMinAggregateInputType = {
    id?: true;
    user_id?: true;
    discountCode?: true;
    discountMinTransaction_idr?: true;
    discountMinTransaction_usd?: true;
    discountMinTransaction_fish?: true;
    discountPercentage?: true;
    discountMaxPrice_idr?: true;
    discountMaxPrice_usd?: true;
    expirationDate?: true;
    created_date?: true;
  };

  export type Coupon_discountMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    discountCode?: true;
    discountMinTransaction_idr?: true;
    discountMinTransaction_usd?: true;
    discountMinTransaction_fish?: true;
    discountPercentage?: true;
    discountMaxPrice_idr?: true;
    discountMaxPrice_usd?: true;
    expirationDate?: true;
    created_date?: true;
  };

  export type Coupon_discountCountAggregateInputType = {
    id?: true;
    user_id?: true;
    discountCode?: true;
    discountMinTransaction_idr?: true;
    discountMinTransaction_usd?: true;
    discountMinTransaction_fish?: true;
    discountPercentage?: true;
    discountMaxPrice_idr?: true;
    discountMaxPrice_usd?: true;
    expirationDate?: true;
    created_date?: true;
    _all?: true;
  };

  export type Coupon_discountAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which Coupon_discount to aggregate.
     */
    where?: Coupon_discountWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Coupon_discounts to fetch.
     */
    orderBy?:
      | Coupon_discountOrderByWithRelationInput
      | Coupon_discountOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Coupon_discountWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Coupon_discounts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Coupon_discounts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Coupon_discounts
     **/
    _count?: true | Coupon_discountCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: Coupon_discountAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: Coupon_discountSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: Coupon_discountMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: Coupon_discountMaxAggregateInputType;
  };

  export type GetCoupon_discountAggregateType<
    T extends Coupon_discountAggregateArgs
  > = {
    [P in keyof T & keyof AggregateCoupon_discount]: P extends
      | "_count"
      | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCoupon_discount[P]>
      : GetScalarType<T[P], AggregateCoupon_discount[P]>;
  };

  export type Coupon_discountGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    where?: Coupon_discountWhereInput;
    orderBy?:
      | Coupon_discountOrderByWithAggregationInput
      | Coupon_discountOrderByWithAggregationInput[];
    by: Coupon_discountScalarFieldEnum[] | Coupon_discountScalarFieldEnum;
    having?: Coupon_discountScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Coupon_discountCountAggregateInputType | true;
    _avg?: Coupon_discountAvgAggregateInputType;
    _sum?: Coupon_discountSumAggregateInputType;
    _min?: Coupon_discountMinAggregateInputType;
    _max?: Coupon_discountMaxAggregateInputType;
  };

  export type Coupon_discountGroupByOutputType = {
    id: string;
    user_id: string;
    discountCode: string;
    discountMinTransaction_idr: number;
    discountMinTransaction_usd: number;
    discountMinTransaction_fish: number;
    discountPercentage: number;
    discountMaxPrice_idr: number;
    discountMaxPrice_usd: number;
    expirationDate: Date;
    created_date: Date;
    _count: Coupon_discountCountAggregateOutputType | null;
    _avg: Coupon_discountAvgAggregateOutputType | null;
    _sum: Coupon_discountSumAggregateOutputType | null;
    _min: Coupon_discountMinAggregateOutputType | null;
    _max: Coupon_discountMaxAggregateOutputType | null;
  };

  type GetCoupon_discountGroupByPayload<T extends Coupon_discountGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<Coupon_discountGroupByOutputType, T["by"]> & {
          [P in keyof T &
            keyof Coupon_discountGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Coupon_discountGroupByOutputType[P]>
            : GetScalarType<T[P], Coupon_discountGroupByOutputType[P]>;
        }
      >
    >;

  export type Coupon_discountSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      user_id?: boolean;
      discountCode?: boolean;
      discountMinTransaction_idr?: boolean;
      discountMinTransaction_usd?: boolean;
      discountMinTransaction_fish?: boolean;
      discountPercentage?: boolean;
      discountMaxPrice_idr?: boolean;
      discountMaxPrice_usd?: boolean;
      expirationDate?: boolean;
      created_date?: boolean;
      user?: boolean | UsersDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["coupon_discount"]
  >;

  export type Coupon_discountSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    discountCode?: boolean;
    discountMinTransaction_idr?: boolean;
    discountMinTransaction_usd?: boolean;
    discountMinTransaction_fish?: boolean;
    discountPercentage?: boolean;
    discountMaxPrice_idr?: boolean;
    discountMaxPrice_usd?: boolean;
    expirationDate?: boolean;
    created_date?: boolean;
  };

  export type Coupon_discountInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    user?: boolean | UsersDefaultArgs<ExtArgs>;
  };

  export type $Coupon_discountPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    name: "Coupon_discount";
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        user_id: string;
        discountCode: string;
        discountMinTransaction_idr: number;
        discountMinTransaction_usd: number;
        discountMinTransaction_fish: number;
        discountPercentage: number;
        discountMaxPrice_idr: number;
        discountMaxPrice_usd: number;
        expirationDate: Date;
        created_date: Date;
      },
      ExtArgs["result"]["coupon_discount"]
    >;
    composites: {};
  };

  type Coupon_discountGetPayload<
    S extends boolean | null | undefined | Coupon_discountDefaultArgs
  > = $Result.GetResult<Prisma.$Coupon_discountPayload, S>;

  type Coupon_discountCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = Omit<Coupon_discountFindManyArgs, "select" | "include" | "distinct"> & {
    select?: Coupon_discountCountAggregateInputType | true;
  };

  export interface Coupon_discountDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["Coupon_discount"];
      meta: { name: "Coupon_discount" };
    };
    /**
     * Find zero or one Coupon_discount that matches the filter.
     * @param {Coupon_discountFindUniqueArgs} args - Arguments to find a Coupon_discount
     * @example
     * // Get one Coupon_discount
     * const coupon_discount = await prisma.coupon_discount.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends Coupon_discountFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, Coupon_discountFindUniqueArgs<ExtArgs>>
    ): Prisma__Coupon_discountClient<
      $Result.GetResult<
        Prisma.$Coupon_discountPayload<ExtArgs>,
        T,
        "findUnique"
      > | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Coupon_discount that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {Coupon_discountFindUniqueOrThrowArgs} args - Arguments to find a Coupon_discount
     * @example
     * // Get one Coupon_discount
     * const coupon_discount = await prisma.coupon_discount.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends Coupon_discountFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, Coupon_discountFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__Coupon_discountClient<
      $Result.GetResult<
        Prisma.$Coupon_discountPayload<ExtArgs>,
        T,
        "findUniqueOrThrow"
      >,
      never,
      ExtArgs
    >;

    /**
     * Find the first Coupon_discount that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Coupon_discountFindFirstArgs} args - Arguments to find a Coupon_discount
     * @example
     * // Get one Coupon_discount
     * const coupon_discount = await prisma.coupon_discount.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends Coupon_discountFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, Coupon_discountFindFirstArgs<ExtArgs>>
    ): Prisma__Coupon_discountClient<
      $Result.GetResult<
        Prisma.$Coupon_discountPayload<ExtArgs>,
        T,
        "findFirst"
      > | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Coupon_discount that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Coupon_discountFindFirstOrThrowArgs} args - Arguments to find a Coupon_discount
     * @example
     * // Get one Coupon_discount
     * const coupon_discount = await prisma.coupon_discount.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends Coupon_discountFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, Coupon_discountFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__Coupon_discountClient<
      $Result.GetResult<
        Prisma.$Coupon_discountPayload<ExtArgs>,
        T,
        "findFirstOrThrow"
      >,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Coupon_discounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Coupon_discountFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Coupon_discounts
     * const coupon_discounts = await prisma.coupon_discount.findMany()
     *
     * // Get first 10 Coupon_discounts
     * const coupon_discounts = await prisma.coupon_discount.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const coupon_discountWithIdOnly = await prisma.coupon_discount.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends Coupon_discountFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Coupon_discountFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$Coupon_discountPayload<ExtArgs>, T, "findMany">
    >;

    /**
     * Create a Coupon_discount.
     * @param {Coupon_discountCreateArgs} args - Arguments to create a Coupon_discount.
     * @example
     * // Create one Coupon_discount
     * const Coupon_discount = await prisma.coupon_discount.create({
     *   data: {
     *     // ... data to create a Coupon_discount
     *   }
     * })
     *
     **/
    create<T extends Coupon_discountCreateArgs<ExtArgs>>(
      args: SelectSubset<T, Coupon_discountCreateArgs<ExtArgs>>
    ): Prisma__Coupon_discountClient<
      $Result.GetResult<Prisma.$Coupon_discountPayload<ExtArgs>, T, "create">,
      never,
      ExtArgs
    >;

    /**
     * Create many Coupon_discounts.
     *     @param {Coupon_discountCreateManyArgs} args - Arguments to create many Coupon_discounts.
     *     @example
     *     // Create many Coupon_discounts
     *     const coupon_discount = await prisma.coupon_discount.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends Coupon_discountCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Coupon_discountCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Coupon_discount.
     * @param {Coupon_discountDeleteArgs} args - Arguments to delete one Coupon_discount.
     * @example
     * // Delete one Coupon_discount
     * const Coupon_discount = await prisma.coupon_discount.delete({
     *   where: {
     *     // ... filter to delete one Coupon_discount
     *   }
     * })
     *
     **/
    delete<T extends Coupon_discountDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, Coupon_discountDeleteArgs<ExtArgs>>
    ): Prisma__Coupon_discountClient<
      $Result.GetResult<Prisma.$Coupon_discountPayload<ExtArgs>, T, "delete">,
      never,
      ExtArgs
    >;

    /**
     * Update one Coupon_discount.
     * @param {Coupon_discountUpdateArgs} args - Arguments to update one Coupon_discount.
     * @example
     * // Update one Coupon_discount
     * const coupon_discount = await prisma.coupon_discount.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends Coupon_discountUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, Coupon_discountUpdateArgs<ExtArgs>>
    ): Prisma__Coupon_discountClient<
      $Result.GetResult<Prisma.$Coupon_discountPayload<ExtArgs>, T, "update">,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Coupon_discounts.
     * @param {Coupon_discountDeleteManyArgs} args - Arguments to filter Coupon_discounts to delete.
     * @example
     * // Delete a few Coupon_discounts
     * const { count } = await prisma.coupon_discount.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends Coupon_discountDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Coupon_discountDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Coupon_discounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Coupon_discountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Coupon_discounts
     * const coupon_discount = await prisma.coupon_discount.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends Coupon_discountUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, Coupon_discountUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Coupon_discount.
     * @param {Coupon_discountUpsertArgs} args - Arguments to update or create a Coupon_discount.
     * @example
     * // Update or create a Coupon_discount
     * const coupon_discount = await prisma.coupon_discount.upsert({
     *   create: {
     *     // ... data to create a Coupon_discount
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Coupon_discount we want to update
     *   }
     * })
     **/
    upsert<T extends Coupon_discountUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, Coupon_discountUpsertArgs<ExtArgs>>
    ): Prisma__Coupon_discountClient<
      $Result.GetResult<Prisma.$Coupon_discountPayload<ExtArgs>, T, "upsert">,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Coupon_discounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Coupon_discountCountArgs} args - Arguments to filter Coupon_discounts to count.
     * @example
     * // Count the number of Coupon_discounts
     * const count = await prisma.coupon_discount.count({
     *   where: {
     *     // ... the filter for the Coupon_discounts we want to count
     *   }
     * })
     **/
    count<T extends Coupon_discountCountArgs>(
      args?: Subset<T, Coupon_discountCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], Coupon_discountCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Coupon_discount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Coupon_discountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends Coupon_discountAggregateArgs>(
      args: Subset<T, Coupon_discountAggregateArgs>
    ): Prisma.PrismaPromise<GetCoupon_discountAggregateType<T>>;

    /**
     * Group by Coupon_discount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Coupon_discountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends Coupon_discountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Coupon_discountGroupByArgs["orderBy"] }
        : { orderBy?: Coupon_discountGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [
                  Error,
                  "Field ",
                  P,
                  ` in "having" needs to be provided in "by"`
                ];
          }[HavingFields]
        : "take" extends Keys<T>
        ? "orderBy" extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : "skip" extends Keys<T>
        ? "orderBy" extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields]
    >(
      args: SubsetIntersection<T, Coupon_discountGroupByArgs, OrderByArg> &
        InputErrors
    ): {} extends InputErrors
      ? GetCoupon_discountGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Coupon_discount model
     */
    readonly fields: Coupon_discountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Coupon_discount.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Coupon_discountClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";

    user<T extends UsersDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UsersDefaultArgs<ExtArgs>>
    ): Prisma__UsersClient<
      | $Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow">
      | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Coupon_discount model
   */
  interface Coupon_discountFieldRefs {
    readonly id: FieldRef<"Coupon_discount", "String">;
    readonly user_id: FieldRef<"Coupon_discount", "String">;
    readonly discountCode: FieldRef<"Coupon_discount", "String">;
    readonly discountMinTransaction_idr: FieldRef<"Coupon_discount", "Int">;
    readonly discountMinTransaction_usd: FieldRef<"Coupon_discount", "Int">;
    readonly discountMinTransaction_fish: FieldRef<"Coupon_discount", "Int">;
    readonly discountPercentage: FieldRef<"Coupon_discount", "Int">;
    readonly discountMaxPrice_idr: FieldRef<"Coupon_discount", "Int">;
    readonly discountMaxPrice_usd: FieldRef<"Coupon_discount", "Int">;
    readonly expirationDate: FieldRef<"Coupon_discount", "DateTime">;
    readonly created_date: FieldRef<"Coupon_discount", "DateTime">;
  }

  // Custom InputTypes

  /**
   * Coupon_discount findUnique
   */
  export type Coupon_discountFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Coupon_discount
     */
    select?: Coupon_discountSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Coupon_discountInclude<ExtArgs> | null;
    /**
     * Filter, which Coupon_discount to fetch.
     */
    where: Coupon_discountWhereUniqueInput;
  };

  /**
   * Coupon_discount findUniqueOrThrow
   */
  export type Coupon_discountFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Coupon_discount
     */
    select?: Coupon_discountSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Coupon_discountInclude<ExtArgs> | null;
    /**
     * Filter, which Coupon_discount to fetch.
     */
    where: Coupon_discountWhereUniqueInput;
  };

  /**
   * Coupon_discount findFirst
   */
  export type Coupon_discountFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Coupon_discount
     */
    select?: Coupon_discountSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Coupon_discountInclude<ExtArgs> | null;
    /**
     * Filter, which Coupon_discount to fetch.
     */
    where?: Coupon_discountWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Coupon_discounts to fetch.
     */
    orderBy?:
      | Coupon_discountOrderByWithRelationInput
      | Coupon_discountOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Coupon_discounts.
     */
    cursor?: Coupon_discountWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Coupon_discounts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Coupon_discounts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Coupon_discounts.
     */
    distinct?:
      | Coupon_discountScalarFieldEnum
      | Coupon_discountScalarFieldEnum[];
  };

  /**
   * Coupon_discount findFirstOrThrow
   */
  export type Coupon_discountFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Coupon_discount
     */
    select?: Coupon_discountSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Coupon_discountInclude<ExtArgs> | null;
    /**
     * Filter, which Coupon_discount to fetch.
     */
    where?: Coupon_discountWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Coupon_discounts to fetch.
     */
    orderBy?:
      | Coupon_discountOrderByWithRelationInput
      | Coupon_discountOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Coupon_discounts.
     */
    cursor?: Coupon_discountWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Coupon_discounts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Coupon_discounts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Coupon_discounts.
     */
    distinct?:
      | Coupon_discountScalarFieldEnum
      | Coupon_discountScalarFieldEnum[];
  };

  /**
   * Coupon_discount findMany
   */
  export type Coupon_discountFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Coupon_discount
     */
    select?: Coupon_discountSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Coupon_discountInclude<ExtArgs> | null;
    /**
     * Filter, which Coupon_discounts to fetch.
     */
    where?: Coupon_discountWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Coupon_discounts to fetch.
     */
    orderBy?:
      | Coupon_discountOrderByWithRelationInput
      | Coupon_discountOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Coupon_discounts.
     */
    cursor?: Coupon_discountWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Coupon_discounts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Coupon_discounts.
     */
    skip?: number;
    distinct?:
      | Coupon_discountScalarFieldEnum
      | Coupon_discountScalarFieldEnum[];
  };

  /**
   * Coupon_discount create
   */
  export type Coupon_discountCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Coupon_discount
     */
    select?: Coupon_discountSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Coupon_discountInclude<ExtArgs> | null;
    /**
     * The data needed to create a Coupon_discount.
     */
    data: XOR<Coupon_discountCreateInput, Coupon_discountUncheckedCreateInput>;
  };

  /**
   * Coupon_discount createMany
   */
  export type Coupon_discountCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to create many Coupon_discounts.
     */
    data: Coupon_discountCreateManyInput | Coupon_discountCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Coupon_discount update
   */
  export type Coupon_discountUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Coupon_discount
     */
    select?: Coupon_discountSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Coupon_discountInclude<ExtArgs> | null;
    /**
     * The data needed to update a Coupon_discount.
     */
    data: XOR<Coupon_discountUpdateInput, Coupon_discountUncheckedUpdateInput>;
    /**
     * Choose, which Coupon_discount to update.
     */
    where: Coupon_discountWhereUniqueInput;
  };

  /**
   * Coupon_discount updateMany
   */
  export type Coupon_discountUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to update Coupon_discounts.
     */
    data: XOR<
      Coupon_discountUpdateManyMutationInput,
      Coupon_discountUncheckedUpdateManyInput
    >;
    /**
     * Filter which Coupon_discounts to update
     */
    where?: Coupon_discountWhereInput;
  };

  /**
   * Coupon_discount upsert
   */
  export type Coupon_discountUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Coupon_discount
     */
    select?: Coupon_discountSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Coupon_discountInclude<ExtArgs> | null;
    /**
     * The filter to search for the Coupon_discount to update in case it exists.
     */
    where: Coupon_discountWhereUniqueInput;
    /**
     * In case the Coupon_discount found by the `where` argument doesn't exist, create a new Coupon_discount with this data.
     */
    create: XOR<
      Coupon_discountCreateInput,
      Coupon_discountUncheckedCreateInput
    >;
    /**
     * In case the Coupon_discount was found with the provided `where` argument, update it with this data.
     */
    update: XOR<
      Coupon_discountUpdateInput,
      Coupon_discountUncheckedUpdateInput
    >;
  };

  /**
   * Coupon_discount delete
   */
  export type Coupon_discountDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Coupon_discount
     */
    select?: Coupon_discountSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Coupon_discountInclude<ExtArgs> | null;
    /**
     * Filter which Coupon_discount to delete.
     */
    where: Coupon_discountWhereUniqueInput;
  };

  /**
   * Coupon_discount deleteMany
   */
  export type Coupon_discountDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which Coupon_discounts to delete
     */
    where?: Coupon_discountWhereInput;
  };

  /**
   * Coupon_discount without action
   */
  export type Coupon_discountDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Coupon_discount
     */
    select?: Coupon_discountSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Coupon_discountInclude<ExtArgs> | null;
  };

  /**
   * Model Events
   */

  export type AggregateEvents = {
    _count: EventsCountAggregateOutputType | null;
    _min: EventsMinAggregateOutputType | null;
    _max: EventsMaxAggregateOutputType | null;
  };

  export type EventsMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    created_date: Date | null;
  };

  export type EventsMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    created_date: Date | null;
  };

  export type EventsCountAggregateOutputType = {
    id: number;
    name: number;
    created_date: number;
    _all: number;
  };

  export type EventsMinAggregateInputType = {
    id?: true;
    name?: true;
    created_date?: true;
  };

  export type EventsMaxAggregateInputType = {
    id?: true;
    name?: true;
    created_date?: true;
  };

  export type EventsCountAggregateInputType = {
    id?: true;
    name?: true;
    created_date?: true;
    _all?: true;
  };

  export type EventsAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which Events to aggregate.
     */
    where?: EventsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Events to fetch.
     */
    orderBy?: EventsOrderByWithRelationInput | EventsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: EventsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Events from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Events.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Events
     **/
    _count?: true | EventsCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: EventsMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: EventsMaxAggregateInputType;
  };

  export type GetEventsAggregateType<T extends EventsAggregateArgs> = {
    [P in keyof T & keyof AggregateEvents]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvents[P]>
      : GetScalarType<T[P], AggregateEvents[P]>;
  };

  export type EventsGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    where?: EventsWhereInput;
    orderBy?:
      | EventsOrderByWithAggregationInput
      | EventsOrderByWithAggregationInput[];
    by: EventsScalarFieldEnum[] | EventsScalarFieldEnum;
    having?: EventsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: EventsCountAggregateInputType | true;
    _min?: EventsMinAggregateInputType;
    _max?: EventsMaxAggregateInputType;
  };

  export type EventsGroupByOutputType = {
    id: string;
    name: string;
    created_date: Date;
    _count: EventsCountAggregateOutputType | null;
    _min: EventsMinAggregateOutputType | null;
    _max: EventsMaxAggregateOutputType | null;
  };

  type GetEventsGroupByPayload<T extends EventsGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<EventsGroupByOutputType, T["by"]> & {
          [P in keyof T & keyof EventsGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventsGroupByOutputType[P]>
            : GetScalarType<T[P], EventsGroupByOutputType[P]>;
        }
      >
    >;

  export type EventsSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      created_date?: boolean;
      Fishes?: boolean | Events$FishesArgs<ExtArgs>;
      _count?: boolean | EventsCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["events"]
  >;

  export type EventsSelectScalar = {
    id?: boolean;
    name?: boolean;
    created_date?: boolean;
  };

  export type EventsInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    Fishes?: boolean | Events$FishesArgs<ExtArgs>;
    _count?: boolean | EventsCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $EventsPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    name: "Events";
    objects: {
      Fishes: Prisma.$FishesPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        name: string;
        created_date: Date;
      },
      ExtArgs["result"]["events"]
    >;
    composites: {};
  };

  type EventsGetPayload<
    S extends boolean | null | undefined | EventsDefaultArgs
  > = $Result.GetResult<Prisma.$EventsPayload, S>;

  type EventsCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = Omit<EventsFindManyArgs, "select" | "include" | "distinct"> & {
    select?: EventsCountAggregateInputType | true;
  };

  export interface EventsDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["Events"];
      meta: { name: "Events" };
    };
    /**
     * Find zero or one Events that matches the filter.
     * @param {EventsFindUniqueArgs} args - Arguments to find a Events
     * @example
     * // Get one Events
     * const events = await prisma.events.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends EventsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, EventsFindUniqueArgs<ExtArgs>>
    ): Prisma__EventsClient<
      $Result.GetResult<Prisma.$EventsPayload<ExtArgs>, T, "findUnique"> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Events that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {EventsFindUniqueOrThrowArgs} args - Arguments to find a Events
     * @example
     * // Get one Events
     * const events = await prisma.events.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends EventsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, EventsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__EventsClient<
      $Result.GetResult<Prisma.$EventsPayload<ExtArgs>, T, "findUniqueOrThrow">,
      never,
      ExtArgs
    >;

    /**
     * Find the first Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventsFindFirstArgs} args - Arguments to find a Events
     * @example
     * // Get one Events
     * const events = await prisma.events.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends EventsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, EventsFindFirstArgs<ExtArgs>>
    ): Prisma__EventsClient<
      $Result.GetResult<Prisma.$EventsPayload<ExtArgs>, T, "findFirst"> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Events that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventsFindFirstOrThrowArgs} args - Arguments to find a Events
     * @example
     * // Get one Events
     * const events = await prisma.events.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends EventsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, EventsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__EventsClient<
      $Result.GetResult<Prisma.$EventsPayload<ExtArgs>, T, "findFirstOrThrow">,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Events
     * const events = await prisma.events.findMany()
     *
     * // Get first 10 Events
     * const events = await prisma.events.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const eventsWithIdOnly = await prisma.events.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends EventsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EventsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$EventsPayload<ExtArgs>, T, "findMany">
    >;

    /**
     * Create a Events.
     * @param {EventsCreateArgs} args - Arguments to create a Events.
     * @example
     * // Create one Events
     * const Events = await prisma.events.create({
     *   data: {
     *     // ... data to create a Events
     *   }
     * })
     *
     **/
    create<T extends EventsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, EventsCreateArgs<ExtArgs>>
    ): Prisma__EventsClient<
      $Result.GetResult<Prisma.$EventsPayload<ExtArgs>, T, "create">,
      never,
      ExtArgs
    >;

    /**
     * Create many Events.
     *     @param {EventsCreateManyArgs} args - Arguments to create many Events.
     *     @example
     *     // Create many Events
     *     const events = await prisma.events.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends EventsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EventsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Events.
     * @param {EventsDeleteArgs} args - Arguments to delete one Events.
     * @example
     * // Delete one Events
     * const Events = await prisma.events.delete({
     *   where: {
     *     // ... filter to delete one Events
     *   }
     * })
     *
     **/
    delete<T extends EventsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, EventsDeleteArgs<ExtArgs>>
    ): Prisma__EventsClient<
      $Result.GetResult<Prisma.$EventsPayload<ExtArgs>, T, "delete">,
      never,
      ExtArgs
    >;

    /**
     * Update one Events.
     * @param {EventsUpdateArgs} args - Arguments to update one Events.
     * @example
     * // Update one Events
     * const events = await prisma.events.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends EventsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, EventsUpdateArgs<ExtArgs>>
    ): Prisma__EventsClient<
      $Result.GetResult<Prisma.$EventsPayload<ExtArgs>, T, "update">,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Events.
     * @param {EventsDeleteManyArgs} args - Arguments to filter Events to delete.
     * @example
     * // Delete a few Events
     * const { count } = await prisma.events.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends EventsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EventsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Events
     * const events = await prisma.events.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends EventsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, EventsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Events.
     * @param {EventsUpsertArgs} args - Arguments to update or create a Events.
     * @example
     * // Update or create a Events
     * const events = await prisma.events.upsert({
     *   create: {
     *     // ... data to create a Events
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Events we want to update
     *   }
     * })
     **/
    upsert<T extends EventsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, EventsUpsertArgs<ExtArgs>>
    ): Prisma__EventsClient<
      $Result.GetResult<Prisma.$EventsPayload<ExtArgs>, T, "upsert">,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventsCountArgs} args - Arguments to filter Events to count.
     * @example
     * // Count the number of Events
     * const count = await prisma.events.count({
     *   where: {
     *     // ... the filter for the Events we want to count
     *   }
     * })
     **/
    count<T extends EventsCountArgs>(
      args?: Subset<T, EventsCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], EventsCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends EventsAggregateArgs>(
      args: Subset<T, EventsAggregateArgs>
    ): Prisma.PrismaPromise<GetEventsAggregateType<T>>;

    /**
     * Group by Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends EventsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventsGroupByArgs["orderBy"] }
        : { orderBy?: EventsGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [
                  Error,
                  "Field ",
                  P,
                  ` in "having" needs to be provided in "by"`
                ];
          }[HavingFields]
        : "take" extends Keys<T>
        ? "orderBy" extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : "skip" extends Keys<T>
        ? "orderBy" extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields]
    >(
      args: SubsetIntersection<T, EventsGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors
      ? GetEventsGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Events model
     */
    readonly fields: EventsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Events.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventsClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";

    Fishes<T extends Events$FishesArgs<ExtArgs> = {}>(
      args?: Subset<T, Events$FishesArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$FishesPayload<ExtArgs>, T, "findMany"> | Null
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Events model
   */
  interface EventsFieldRefs {
    readonly id: FieldRef<"Events", "String">;
    readonly name: FieldRef<"Events", "String">;
    readonly created_date: FieldRef<"Events", "DateTime">;
  }

  // Custom InputTypes

  /**
   * Events findUnique
   */
  export type EventsFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventsInclude<ExtArgs> | null;
    /**
     * Filter, which Events to fetch.
     */
    where: EventsWhereUniqueInput;
  };

  /**
   * Events findUniqueOrThrow
   */
  export type EventsFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventsInclude<ExtArgs> | null;
    /**
     * Filter, which Events to fetch.
     */
    where: EventsWhereUniqueInput;
  };

  /**
   * Events findFirst
   */
  export type EventsFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventsInclude<ExtArgs> | null;
    /**
     * Filter, which Events to fetch.
     */
    where?: EventsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Events to fetch.
     */
    orderBy?: EventsOrderByWithRelationInput | EventsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Events.
     */
    cursor?: EventsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Events from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Events.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Events.
     */
    distinct?: EventsScalarFieldEnum | EventsScalarFieldEnum[];
  };

  /**
   * Events findFirstOrThrow
   */
  export type EventsFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventsInclude<ExtArgs> | null;
    /**
     * Filter, which Events to fetch.
     */
    where?: EventsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Events to fetch.
     */
    orderBy?: EventsOrderByWithRelationInput | EventsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Events.
     */
    cursor?: EventsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Events from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Events.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Events.
     */
    distinct?: EventsScalarFieldEnum | EventsScalarFieldEnum[];
  };

  /**
   * Events findMany
   */
  export type EventsFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventsInclude<ExtArgs> | null;
    /**
     * Filter, which Events to fetch.
     */
    where?: EventsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Events to fetch.
     */
    orderBy?: EventsOrderByWithRelationInput | EventsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Events.
     */
    cursor?: EventsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Events from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Events.
     */
    skip?: number;
    distinct?: EventsScalarFieldEnum | EventsScalarFieldEnum[];
  };

  /**
   * Events create
   */
  export type EventsCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventsInclude<ExtArgs> | null;
    /**
     * The data needed to create a Events.
     */
    data: XOR<EventsCreateInput, EventsUncheckedCreateInput>;
  };

  /**
   * Events createMany
   */
  export type EventsCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to create many Events.
     */
    data: EventsCreateManyInput | EventsCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Events update
   */
  export type EventsUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventsInclude<ExtArgs> | null;
    /**
     * The data needed to update a Events.
     */
    data: XOR<EventsUpdateInput, EventsUncheckedUpdateInput>;
    /**
     * Choose, which Events to update.
     */
    where: EventsWhereUniqueInput;
  };

  /**
   * Events updateMany
   */
  export type EventsUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to update Events.
     */
    data: XOR<EventsUpdateManyMutationInput, EventsUncheckedUpdateManyInput>;
    /**
     * Filter which Events to update
     */
    where?: EventsWhereInput;
  };

  /**
   * Events upsert
   */
  export type EventsUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventsInclude<ExtArgs> | null;
    /**
     * The filter to search for the Events to update in case it exists.
     */
    where: EventsWhereUniqueInput;
    /**
     * In case the Events found by the `where` argument doesn't exist, create a new Events with this data.
     */
    create: XOR<EventsCreateInput, EventsUncheckedCreateInput>;
    /**
     * In case the Events was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventsUpdateInput, EventsUncheckedUpdateInput>;
  };

  /**
   * Events delete
   */
  export type EventsDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventsInclude<ExtArgs> | null;
    /**
     * Filter which Events to delete.
     */
    where: EventsWhereUniqueInput;
  };

  /**
   * Events deleteMany
   */
  export type EventsDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which Events to delete
     */
    where?: EventsWhereInput;
  };

  /**
   * Events.Fishes
   */
  export type Events$FishesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Fishes
     */
    select?: FishesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FishesInclude<ExtArgs> | null;
    where?: FishesWhereInput;
    orderBy?: FishesOrderByWithRelationInput | FishesOrderByWithRelationInput[];
    cursor?: FishesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: FishesScalarFieldEnum | FishesScalarFieldEnum[];
  };

  /**
   * Events without action
   */
  export type EventsDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventsInclude<ExtArgs> | null;
  };

  /**
   * Model Discounted_fish
   */

  export type AggregateDiscounted_fish = {
    _count: Discounted_fishCountAggregateOutputType | null;
    _avg: Discounted_fishAvgAggregateOutputType | null;
    _sum: Discounted_fishSumAggregateOutputType | null;
    _min: Discounted_fishMinAggregateOutputType | null;
    _max: Discounted_fishMaxAggregateOutputType | null;
  };

  export type Discounted_fishAvgAggregateOutputType = {
    discountPercentage: number | null;
    discountPriceIdr: number | null;
    discountPriceUsd: number | null;
  };

  export type Discounted_fishSumAggregateOutputType = {
    discountPercentage: number | null;
    discountPriceIdr: number | null;
    discountPriceUsd: number | null;
  };

  export type Discounted_fishMinAggregateOutputType = {
    id: string | null;
    fish_id: string | null;
    isDiscount: boolean | null;
    discountPercentage: number | null;
    discountPriceIdr: number | null;
    discountPriceUsd: number | null;
    created_date: Date | null;
  };

  export type Discounted_fishMaxAggregateOutputType = {
    id: string | null;
    fish_id: string | null;
    isDiscount: boolean | null;
    discountPercentage: number | null;
    discountPriceIdr: number | null;
    discountPriceUsd: number | null;
    created_date: Date | null;
  };

  export type Discounted_fishCountAggregateOutputType = {
    id: number;
    fish_id: number;
    isDiscount: number;
    discountPercentage: number;
    discountPriceIdr: number;
    discountPriceUsd: number;
    created_date: number;
    _all: number;
  };

  export type Discounted_fishAvgAggregateInputType = {
    discountPercentage?: true;
    discountPriceIdr?: true;
    discountPriceUsd?: true;
  };

  export type Discounted_fishSumAggregateInputType = {
    discountPercentage?: true;
    discountPriceIdr?: true;
    discountPriceUsd?: true;
  };

  export type Discounted_fishMinAggregateInputType = {
    id?: true;
    fish_id?: true;
    isDiscount?: true;
    discountPercentage?: true;
    discountPriceIdr?: true;
    discountPriceUsd?: true;
    created_date?: true;
  };

  export type Discounted_fishMaxAggregateInputType = {
    id?: true;
    fish_id?: true;
    isDiscount?: true;
    discountPercentage?: true;
    discountPriceIdr?: true;
    discountPriceUsd?: true;
    created_date?: true;
  };

  export type Discounted_fishCountAggregateInputType = {
    id?: true;
    fish_id?: true;
    isDiscount?: true;
    discountPercentage?: true;
    discountPriceIdr?: true;
    discountPriceUsd?: true;
    created_date?: true;
    _all?: true;
  };

  export type Discounted_fishAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which Discounted_fish to aggregate.
     */
    where?: Discounted_fishWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Discounted_fish to fetch.
     */
    orderBy?:
      | Discounted_fishOrderByWithRelationInput
      | Discounted_fishOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Discounted_fishWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Discounted_fish from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Discounted_fish.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Discounted_fish
     **/
    _count?: true | Discounted_fishCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: Discounted_fishAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: Discounted_fishSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: Discounted_fishMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: Discounted_fishMaxAggregateInputType;
  };

  export type GetDiscounted_fishAggregateType<
    T extends Discounted_fishAggregateArgs
  > = {
    [P in keyof T & keyof AggregateDiscounted_fish]: P extends
      | "_count"
      | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDiscounted_fish[P]>
      : GetScalarType<T[P], AggregateDiscounted_fish[P]>;
  };

  export type Discounted_fishGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    where?: Discounted_fishWhereInput;
    orderBy?:
      | Discounted_fishOrderByWithAggregationInput
      | Discounted_fishOrderByWithAggregationInput[];
    by: Discounted_fishScalarFieldEnum[] | Discounted_fishScalarFieldEnum;
    having?: Discounted_fishScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Discounted_fishCountAggregateInputType | true;
    _avg?: Discounted_fishAvgAggregateInputType;
    _sum?: Discounted_fishSumAggregateInputType;
    _min?: Discounted_fishMinAggregateInputType;
    _max?: Discounted_fishMaxAggregateInputType;
  };

  export type Discounted_fishGroupByOutputType = {
    id: string;
    fish_id: string;
    isDiscount: boolean;
    discountPercentage: number;
    discountPriceIdr: number;
    discountPriceUsd: number;
    created_date: Date;
    _count: Discounted_fishCountAggregateOutputType | null;
    _avg: Discounted_fishAvgAggregateOutputType | null;
    _sum: Discounted_fishSumAggregateOutputType | null;
    _min: Discounted_fishMinAggregateOutputType | null;
    _max: Discounted_fishMaxAggregateOutputType | null;
  };

  type GetDiscounted_fishGroupByPayload<T extends Discounted_fishGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<Discounted_fishGroupByOutputType, T["by"]> & {
          [P in keyof T &
            keyof Discounted_fishGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Discounted_fishGroupByOutputType[P]>
            : GetScalarType<T[P], Discounted_fishGroupByOutputType[P]>;
        }
      >
    >;

  export type Discounted_fishSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      fish_id?: boolean;
      isDiscount?: boolean;
      discountPercentage?: boolean;
      discountPriceIdr?: boolean;
      discountPriceUsd?: boolean;
      created_date?: boolean;
      fish?: boolean | FishesDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["discounted_fish"]
  >;

  export type Discounted_fishSelectScalar = {
    id?: boolean;
    fish_id?: boolean;
    isDiscount?: boolean;
    discountPercentage?: boolean;
    discountPriceIdr?: boolean;
    discountPriceUsd?: boolean;
    created_date?: boolean;
  };

  export type Discounted_fishInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    fish?: boolean | FishesDefaultArgs<ExtArgs>;
  };

  export type $Discounted_fishPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    name: "Discounted_fish";
    objects: {
      fish: Prisma.$FishesPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        fish_id: string;
        isDiscount: boolean;
        discountPercentage: number;
        discountPriceIdr: number;
        discountPriceUsd: number;
        created_date: Date;
      },
      ExtArgs["result"]["discounted_fish"]
    >;
    composites: {};
  };

  type Discounted_fishGetPayload<
    S extends boolean | null | undefined | Discounted_fishDefaultArgs
  > = $Result.GetResult<Prisma.$Discounted_fishPayload, S>;

  type Discounted_fishCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = Omit<Discounted_fishFindManyArgs, "select" | "include" | "distinct"> & {
    select?: Discounted_fishCountAggregateInputType | true;
  };

  export interface Discounted_fishDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["Discounted_fish"];
      meta: { name: "Discounted_fish" };
    };
    /**
     * Find zero or one Discounted_fish that matches the filter.
     * @param {Discounted_fishFindUniqueArgs} args - Arguments to find a Discounted_fish
     * @example
     * // Get one Discounted_fish
     * const discounted_fish = await prisma.discounted_fish.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends Discounted_fishFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, Discounted_fishFindUniqueArgs<ExtArgs>>
    ): Prisma__Discounted_fishClient<
      $Result.GetResult<
        Prisma.$Discounted_fishPayload<ExtArgs>,
        T,
        "findUnique"
      > | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Discounted_fish that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {Discounted_fishFindUniqueOrThrowArgs} args - Arguments to find a Discounted_fish
     * @example
     * // Get one Discounted_fish
     * const discounted_fish = await prisma.discounted_fish.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends Discounted_fishFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, Discounted_fishFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__Discounted_fishClient<
      $Result.GetResult<
        Prisma.$Discounted_fishPayload<ExtArgs>,
        T,
        "findUniqueOrThrow"
      >,
      never,
      ExtArgs
    >;

    /**
     * Find the first Discounted_fish that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Discounted_fishFindFirstArgs} args - Arguments to find a Discounted_fish
     * @example
     * // Get one Discounted_fish
     * const discounted_fish = await prisma.discounted_fish.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends Discounted_fishFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, Discounted_fishFindFirstArgs<ExtArgs>>
    ): Prisma__Discounted_fishClient<
      $Result.GetResult<
        Prisma.$Discounted_fishPayload<ExtArgs>,
        T,
        "findFirst"
      > | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Discounted_fish that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Discounted_fishFindFirstOrThrowArgs} args - Arguments to find a Discounted_fish
     * @example
     * // Get one Discounted_fish
     * const discounted_fish = await prisma.discounted_fish.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends Discounted_fishFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, Discounted_fishFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__Discounted_fishClient<
      $Result.GetResult<
        Prisma.$Discounted_fishPayload<ExtArgs>,
        T,
        "findFirstOrThrow"
      >,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Discounted_fish that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Discounted_fishFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Discounted_fish
     * const discounted_fish = await prisma.discounted_fish.findMany()
     *
     * // Get first 10 Discounted_fish
     * const discounted_fish = await prisma.discounted_fish.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const discounted_fishWithIdOnly = await prisma.discounted_fish.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends Discounted_fishFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Discounted_fishFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$Discounted_fishPayload<ExtArgs>, T, "findMany">
    >;

    /**
     * Create a Discounted_fish.
     * @param {Discounted_fishCreateArgs} args - Arguments to create a Discounted_fish.
     * @example
     * // Create one Discounted_fish
     * const Discounted_fish = await prisma.discounted_fish.create({
     *   data: {
     *     // ... data to create a Discounted_fish
     *   }
     * })
     *
     **/
    create<T extends Discounted_fishCreateArgs<ExtArgs>>(
      args: SelectSubset<T, Discounted_fishCreateArgs<ExtArgs>>
    ): Prisma__Discounted_fishClient<
      $Result.GetResult<Prisma.$Discounted_fishPayload<ExtArgs>, T, "create">,
      never,
      ExtArgs
    >;

    /**
     * Create many Discounted_fish.
     *     @param {Discounted_fishCreateManyArgs} args - Arguments to create many Discounted_fish.
     *     @example
     *     // Create many Discounted_fish
     *     const discounted_fish = await prisma.discounted_fish.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends Discounted_fishCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Discounted_fishCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Discounted_fish.
     * @param {Discounted_fishDeleteArgs} args - Arguments to delete one Discounted_fish.
     * @example
     * // Delete one Discounted_fish
     * const Discounted_fish = await prisma.discounted_fish.delete({
     *   where: {
     *     // ... filter to delete one Discounted_fish
     *   }
     * })
     *
     **/
    delete<T extends Discounted_fishDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, Discounted_fishDeleteArgs<ExtArgs>>
    ): Prisma__Discounted_fishClient<
      $Result.GetResult<Prisma.$Discounted_fishPayload<ExtArgs>, T, "delete">,
      never,
      ExtArgs
    >;

    /**
     * Update one Discounted_fish.
     * @param {Discounted_fishUpdateArgs} args - Arguments to update one Discounted_fish.
     * @example
     * // Update one Discounted_fish
     * const discounted_fish = await prisma.discounted_fish.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends Discounted_fishUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, Discounted_fishUpdateArgs<ExtArgs>>
    ): Prisma__Discounted_fishClient<
      $Result.GetResult<Prisma.$Discounted_fishPayload<ExtArgs>, T, "update">,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Discounted_fish.
     * @param {Discounted_fishDeleteManyArgs} args - Arguments to filter Discounted_fish to delete.
     * @example
     * // Delete a few Discounted_fish
     * const { count } = await prisma.discounted_fish.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends Discounted_fishDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Discounted_fishDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Discounted_fish.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Discounted_fishUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Discounted_fish
     * const discounted_fish = await prisma.discounted_fish.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends Discounted_fishUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, Discounted_fishUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Discounted_fish.
     * @param {Discounted_fishUpsertArgs} args - Arguments to update or create a Discounted_fish.
     * @example
     * // Update or create a Discounted_fish
     * const discounted_fish = await prisma.discounted_fish.upsert({
     *   create: {
     *     // ... data to create a Discounted_fish
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Discounted_fish we want to update
     *   }
     * })
     **/
    upsert<T extends Discounted_fishUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, Discounted_fishUpsertArgs<ExtArgs>>
    ): Prisma__Discounted_fishClient<
      $Result.GetResult<Prisma.$Discounted_fishPayload<ExtArgs>, T, "upsert">,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Discounted_fish.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Discounted_fishCountArgs} args - Arguments to filter Discounted_fish to count.
     * @example
     * // Count the number of Discounted_fish
     * const count = await prisma.discounted_fish.count({
     *   where: {
     *     // ... the filter for the Discounted_fish we want to count
     *   }
     * })
     **/
    count<T extends Discounted_fishCountArgs>(
      args?: Subset<T, Discounted_fishCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], Discounted_fishCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Discounted_fish.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Discounted_fishAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends Discounted_fishAggregateArgs>(
      args: Subset<T, Discounted_fishAggregateArgs>
    ): Prisma.PrismaPromise<GetDiscounted_fishAggregateType<T>>;

    /**
     * Group by Discounted_fish.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Discounted_fishGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends Discounted_fishGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Discounted_fishGroupByArgs["orderBy"] }
        : { orderBy?: Discounted_fishGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [
                  Error,
                  "Field ",
                  P,
                  ` in "having" needs to be provided in "by"`
                ];
          }[HavingFields]
        : "take" extends Keys<T>
        ? "orderBy" extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : "skip" extends Keys<T>
        ? "orderBy" extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields]
    >(
      args: SubsetIntersection<T, Discounted_fishGroupByArgs, OrderByArg> &
        InputErrors
    ): {} extends InputErrors
      ? GetDiscounted_fishGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Discounted_fish model
     */
    readonly fields: Discounted_fishFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Discounted_fish.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Discounted_fishClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";

    fish<T extends FishesDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, FishesDefaultArgs<ExtArgs>>
    ): Prisma__FishesClient<
      | $Result.GetResult<
          Prisma.$FishesPayload<ExtArgs>,
          T,
          "findUniqueOrThrow"
        >
      | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Discounted_fish model
   */
  interface Discounted_fishFieldRefs {
    readonly id: FieldRef<"Discounted_fish", "String">;
    readonly fish_id: FieldRef<"Discounted_fish", "String">;
    readonly isDiscount: FieldRef<"Discounted_fish", "Boolean">;
    readonly discountPercentage: FieldRef<"Discounted_fish", "Int">;
    readonly discountPriceIdr: FieldRef<"Discounted_fish", "Int">;
    readonly discountPriceUsd: FieldRef<"Discounted_fish", "Int">;
    readonly created_date: FieldRef<"Discounted_fish", "DateTime">;
  }

  // Custom InputTypes

  /**
   * Discounted_fish findUnique
   */
  export type Discounted_fishFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Discounted_fish
     */
    select?: Discounted_fishSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Discounted_fishInclude<ExtArgs> | null;
    /**
     * Filter, which Discounted_fish to fetch.
     */
    where: Discounted_fishWhereUniqueInput;
  };

  /**
   * Discounted_fish findUniqueOrThrow
   */
  export type Discounted_fishFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Discounted_fish
     */
    select?: Discounted_fishSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Discounted_fishInclude<ExtArgs> | null;
    /**
     * Filter, which Discounted_fish to fetch.
     */
    where: Discounted_fishWhereUniqueInput;
  };

  /**
   * Discounted_fish findFirst
   */
  export type Discounted_fishFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Discounted_fish
     */
    select?: Discounted_fishSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Discounted_fishInclude<ExtArgs> | null;
    /**
     * Filter, which Discounted_fish to fetch.
     */
    where?: Discounted_fishWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Discounted_fish to fetch.
     */
    orderBy?:
      | Discounted_fishOrderByWithRelationInput
      | Discounted_fishOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Discounted_fish.
     */
    cursor?: Discounted_fishWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Discounted_fish from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Discounted_fish.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Discounted_fish.
     */
    distinct?:
      | Discounted_fishScalarFieldEnum
      | Discounted_fishScalarFieldEnum[];
  };

  /**
   * Discounted_fish findFirstOrThrow
   */
  export type Discounted_fishFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Discounted_fish
     */
    select?: Discounted_fishSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Discounted_fishInclude<ExtArgs> | null;
    /**
     * Filter, which Discounted_fish to fetch.
     */
    where?: Discounted_fishWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Discounted_fish to fetch.
     */
    orderBy?:
      | Discounted_fishOrderByWithRelationInput
      | Discounted_fishOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Discounted_fish.
     */
    cursor?: Discounted_fishWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Discounted_fish from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Discounted_fish.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Discounted_fish.
     */
    distinct?:
      | Discounted_fishScalarFieldEnum
      | Discounted_fishScalarFieldEnum[];
  };

  /**
   * Discounted_fish findMany
   */
  export type Discounted_fishFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Discounted_fish
     */
    select?: Discounted_fishSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Discounted_fishInclude<ExtArgs> | null;
    /**
     * Filter, which Discounted_fish to fetch.
     */
    where?: Discounted_fishWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Discounted_fish to fetch.
     */
    orderBy?:
      | Discounted_fishOrderByWithRelationInput
      | Discounted_fishOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Discounted_fish.
     */
    cursor?: Discounted_fishWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Discounted_fish from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Discounted_fish.
     */
    skip?: number;
    distinct?:
      | Discounted_fishScalarFieldEnum
      | Discounted_fishScalarFieldEnum[];
  };

  /**
   * Discounted_fish create
   */
  export type Discounted_fishCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Discounted_fish
     */
    select?: Discounted_fishSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Discounted_fishInclude<ExtArgs> | null;
    /**
     * The data needed to create a Discounted_fish.
     */
    data: XOR<Discounted_fishCreateInput, Discounted_fishUncheckedCreateInput>;
  };

  /**
   * Discounted_fish createMany
   */
  export type Discounted_fishCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to create many Discounted_fish.
     */
    data: Discounted_fishCreateManyInput | Discounted_fishCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Discounted_fish update
   */
  export type Discounted_fishUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Discounted_fish
     */
    select?: Discounted_fishSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Discounted_fishInclude<ExtArgs> | null;
    /**
     * The data needed to update a Discounted_fish.
     */
    data: XOR<Discounted_fishUpdateInput, Discounted_fishUncheckedUpdateInput>;
    /**
     * Choose, which Discounted_fish to update.
     */
    where: Discounted_fishWhereUniqueInput;
  };

  /**
   * Discounted_fish updateMany
   */
  export type Discounted_fishUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to update Discounted_fish.
     */
    data: XOR<
      Discounted_fishUpdateManyMutationInput,
      Discounted_fishUncheckedUpdateManyInput
    >;
    /**
     * Filter which Discounted_fish to update
     */
    where?: Discounted_fishWhereInput;
  };

  /**
   * Discounted_fish upsert
   */
  export type Discounted_fishUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Discounted_fish
     */
    select?: Discounted_fishSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Discounted_fishInclude<ExtArgs> | null;
    /**
     * The filter to search for the Discounted_fish to update in case it exists.
     */
    where: Discounted_fishWhereUniqueInput;
    /**
     * In case the Discounted_fish found by the `where` argument doesn't exist, create a new Discounted_fish with this data.
     */
    create: XOR<
      Discounted_fishCreateInput,
      Discounted_fishUncheckedCreateInput
    >;
    /**
     * In case the Discounted_fish was found with the provided `where` argument, update it with this data.
     */
    update: XOR<
      Discounted_fishUpdateInput,
      Discounted_fishUncheckedUpdateInput
    >;
  };

  /**
   * Discounted_fish delete
   */
  export type Discounted_fishDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Discounted_fish
     */
    select?: Discounted_fishSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Discounted_fishInclude<ExtArgs> | null;
    /**
     * Filter which Discounted_fish to delete.
     */
    where: Discounted_fishWhereUniqueInput;
  };

  /**
   * Discounted_fish deleteMany
   */
  export type Discounted_fishDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which Discounted_fish to delete
     */
    where?: Discounted_fishWhereInput;
  };

  /**
   * Discounted_fish without action
   */
  export type Discounted_fishDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Discounted_fish
     */
    select?: Discounted_fishSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Discounted_fishInclude<ExtArgs> | null;
  };

  /**
   * Model Roles
   */

  export type AggregateRoles = {
    _count: RolesCountAggregateOutputType | null;
    _avg: RolesAvgAggregateOutputType | null;
    _sum: RolesSumAggregateOutputType | null;
    _min: RolesMinAggregateOutputType | null;
    _max: RolesMaxAggregateOutputType | null;
  };

  export type RolesAvgAggregateOutputType = {
    id: number | null;
  };

  export type RolesSumAggregateOutputType = {
    id: number | null;
  };

  export type RolesMinAggregateOutputType = {
    id: number | null;
    name: string | null;
    created_date: Date | null;
  };

  export type RolesMaxAggregateOutputType = {
    id: number | null;
    name: string | null;
    created_date: Date | null;
  };

  export type RolesCountAggregateOutputType = {
    id: number;
    name: number;
    created_date: number;
    _all: number;
  };

  export type RolesAvgAggregateInputType = {
    id?: true;
  };

  export type RolesSumAggregateInputType = {
    id?: true;
  };

  export type RolesMinAggregateInputType = {
    id?: true;
    name?: true;
    created_date?: true;
  };

  export type RolesMaxAggregateInputType = {
    id?: true;
    name?: true;
    created_date?: true;
  };

  export type RolesCountAggregateInputType = {
    id?: true;
    name?: true;
    created_date?: true;
    _all?: true;
  };

  export type RolesAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which Roles to aggregate.
     */
    where?: RolesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Roles to fetch.
     */
    orderBy?: RolesOrderByWithRelationInput | RolesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: RolesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Roles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Roles
     **/
    _count?: true | RolesCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: RolesAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: RolesSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: RolesMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: RolesMaxAggregateInputType;
  };

  export type GetRolesAggregateType<T extends RolesAggregateArgs> = {
    [P in keyof T & keyof AggregateRoles]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoles[P]>
      : GetScalarType<T[P], AggregateRoles[P]>;
  };

  export type RolesGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    where?: RolesWhereInput;
    orderBy?:
      | RolesOrderByWithAggregationInput
      | RolesOrderByWithAggregationInput[];
    by: RolesScalarFieldEnum[] | RolesScalarFieldEnum;
    having?: RolesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RolesCountAggregateInputType | true;
    _avg?: RolesAvgAggregateInputType;
    _sum?: RolesSumAggregateInputType;
    _min?: RolesMinAggregateInputType;
    _max?: RolesMaxAggregateInputType;
  };

  export type RolesGroupByOutputType = {
    id: number;
    name: string;
    created_date: Date;
    _count: RolesCountAggregateOutputType | null;
    _avg: RolesAvgAggregateOutputType | null;
    _sum: RolesSumAggregateOutputType | null;
    _min: RolesMinAggregateOutputType | null;
    _max: RolesMaxAggregateOutputType | null;
  };

  type GetRolesGroupByPayload<T extends RolesGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<RolesGroupByOutputType, T["by"]> & {
          [P in keyof T & keyof RolesGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RolesGroupByOutputType[P]>
            : GetScalarType<T[P], RolesGroupByOutputType[P]>;
        }
      >
    >;

  export type RolesSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      created_date?: boolean;
      Users?: boolean | Roles$UsersArgs<ExtArgs>;
      _count?: boolean | RolesCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["roles"]
  >;

  export type RolesSelectScalar = {
    id?: boolean;
    name?: boolean;
    created_date?: boolean;
  };

  export type RolesInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    Users?: boolean | Roles$UsersArgs<ExtArgs>;
    _count?: boolean | RolesCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $RolesPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    name: "Roles";
    objects: {
      Users: Prisma.$UsersPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        name: string;
        created_date: Date;
      },
      ExtArgs["result"]["roles"]
    >;
    composites: {};
  };

  type RolesGetPayload<
    S extends boolean | null | undefined | RolesDefaultArgs
  > = $Result.GetResult<Prisma.$RolesPayload, S>;

  type RolesCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = Omit<RolesFindManyArgs, "select" | "include" | "distinct"> & {
    select?: RolesCountAggregateInputType | true;
  };

  export interface RolesDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["Roles"];
      meta: { name: "Roles" };
    };
    /**
     * Find zero or one Roles that matches the filter.
     * @param {RolesFindUniqueArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends RolesFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, RolesFindUniqueArgs<ExtArgs>>
    ): Prisma__RolesClient<
      $Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "findUnique"> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Roles that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {RolesFindUniqueOrThrowArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends RolesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RolesFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__RolesClient<
      $Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "findUniqueOrThrow">,
      never,
      ExtArgs
    >;

    /**
     * Find the first Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesFindFirstArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends RolesFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, RolesFindFirstArgs<ExtArgs>>
    ): Prisma__RolesClient<
      $Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "findFirst"> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Roles that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesFindFirstOrThrowArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends RolesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RolesFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__RolesClient<
      $Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "findFirstOrThrow">,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.roles.findMany()
     *
     * // Get first 10 Roles
     * const roles = await prisma.roles.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const rolesWithIdOnly = await prisma.roles.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends RolesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RolesFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "findMany">
    >;

    /**
     * Create a Roles.
     * @param {RolesCreateArgs} args - Arguments to create a Roles.
     * @example
     * // Create one Roles
     * const Roles = await prisma.roles.create({
     *   data: {
     *     // ... data to create a Roles
     *   }
     * })
     *
     **/
    create<T extends RolesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, RolesCreateArgs<ExtArgs>>
    ): Prisma__RolesClient<
      $Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "create">,
      never,
      ExtArgs
    >;

    /**
     * Create many Roles.
     *     @param {RolesCreateManyArgs} args - Arguments to create many Roles.
     *     @example
     *     // Create many Roles
     *     const roles = await prisma.roles.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends RolesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RolesCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Roles.
     * @param {RolesDeleteArgs} args - Arguments to delete one Roles.
     * @example
     * // Delete one Roles
     * const Roles = await prisma.roles.delete({
     *   where: {
     *     // ... filter to delete one Roles
     *   }
     * })
     *
     **/
    delete<T extends RolesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, RolesDeleteArgs<ExtArgs>>
    ): Prisma__RolesClient<
      $Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "delete">,
      never,
      ExtArgs
    >;

    /**
     * Update one Roles.
     * @param {RolesUpdateArgs} args - Arguments to update one Roles.
     * @example
     * // Update one Roles
     * const roles = await prisma.roles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends RolesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, RolesUpdateArgs<ExtArgs>>
    ): Prisma__RolesClient<
      $Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "update">,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Roles.
     * @param {RolesDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.roles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends RolesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RolesDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const roles = await prisma.roles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends RolesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, RolesUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Roles.
     * @param {RolesUpsertArgs} args - Arguments to update or create a Roles.
     * @example
     * // Update or create a Roles
     * const roles = await prisma.roles.upsert({
     *   create: {
     *     // ... data to create a Roles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Roles we want to update
     *   }
     * })
     **/
    upsert<T extends RolesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, RolesUpsertArgs<ExtArgs>>
    ): Prisma__RolesClient<
      $Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "upsert">,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.roles.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
     **/
    count<T extends RolesCountArgs>(
      args?: Subset<T, RolesCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], RolesCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends RolesAggregateArgs>(
      args: Subset<T, RolesAggregateArgs>
    ): Prisma.PrismaPromise<GetRolesAggregateType<T>>;

    /**
     * Group by Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends RolesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RolesGroupByArgs["orderBy"] }
        : { orderBy?: RolesGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [
                  Error,
                  "Field ",
                  P,
                  ` in "having" needs to be provided in "by"`
                ];
          }[HavingFields]
        : "take" extends Keys<T>
        ? "orderBy" extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : "skip" extends Keys<T>
        ? "orderBy" extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields]
    >(
      args: SubsetIntersection<T, RolesGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors
      ? GetRolesGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Roles model
     */
    readonly fields: RolesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Roles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RolesClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";

    Users<T extends Roles$UsersArgs<ExtArgs> = {}>(
      args?: Subset<T, Roles$UsersArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany"> | Null
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Roles model
   */
  interface RolesFieldRefs {
    readonly id: FieldRef<"Roles", "Int">;
    readonly name: FieldRef<"Roles", "String">;
    readonly created_date: FieldRef<"Roles", "DateTime">;
  }

  // Custom InputTypes

  /**
   * Roles findUnique
   */
  export type RolesFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RolesInclude<ExtArgs> | null;
    /**
     * Filter, which Roles to fetch.
     */
    where: RolesWhereUniqueInput;
  };

  /**
   * Roles findUniqueOrThrow
   */
  export type RolesFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RolesInclude<ExtArgs> | null;
    /**
     * Filter, which Roles to fetch.
     */
    where: RolesWhereUniqueInput;
  };

  /**
   * Roles findFirst
   */
  export type RolesFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RolesInclude<ExtArgs> | null;
    /**
     * Filter, which Roles to fetch.
     */
    where?: RolesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Roles to fetch.
     */
    orderBy?: RolesOrderByWithRelationInput | RolesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Roles.
     */
    cursor?: RolesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Roles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Roles.
     */
    distinct?: RolesScalarFieldEnum | RolesScalarFieldEnum[];
  };

  /**
   * Roles findFirstOrThrow
   */
  export type RolesFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RolesInclude<ExtArgs> | null;
    /**
     * Filter, which Roles to fetch.
     */
    where?: RolesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Roles to fetch.
     */
    orderBy?: RolesOrderByWithRelationInput | RolesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Roles.
     */
    cursor?: RolesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Roles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Roles.
     */
    distinct?: RolesScalarFieldEnum | RolesScalarFieldEnum[];
  };

  /**
   * Roles findMany
   */
  export type RolesFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RolesInclude<ExtArgs> | null;
    /**
     * Filter, which Roles to fetch.
     */
    where?: RolesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Roles to fetch.
     */
    orderBy?: RolesOrderByWithRelationInput | RolesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Roles.
     */
    cursor?: RolesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Roles.
     */
    skip?: number;
    distinct?: RolesScalarFieldEnum | RolesScalarFieldEnum[];
  };

  /**
   * Roles create
   */
  export type RolesCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RolesInclude<ExtArgs> | null;
    /**
     * The data needed to create a Roles.
     */
    data: XOR<RolesCreateInput, RolesUncheckedCreateInput>;
  };

  /**
   * Roles createMany
   */
  export type RolesCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to create many Roles.
     */
    data: RolesCreateManyInput | RolesCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Roles update
   */
  export type RolesUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RolesInclude<ExtArgs> | null;
    /**
     * The data needed to update a Roles.
     */
    data: XOR<RolesUpdateInput, RolesUncheckedUpdateInput>;
    /**
     * Choose, which Roles to update.
     */
    where: RolesWhereUniqueInput;
  };

  /**
   * Roles updateMany
   */
  export type RolesUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to update Roles.
     */
    data: XOR<RolesUpdateManyMutationInput, RolesUncheckedUpdateManyInput>;
    /**
     * Filter which Roles to update
     */
    where?: RolesWhereInput;
  };

  /**
   * Roles upsert
   */
  export type RolesUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RolesInclude<ExtArgs> | null;
    /**
     * The filter to search for the Roles to update in case it exists.
     */
    where: RolesWhereUniqueInput;
    /**
     * In case the Roles found by the `where` argument doesn't exist, create a new Roles with this data.
     */
    create: XOR<RolesCreateInput, RolesUncheckedCreateInput>;
    /**
     * In case the Roles was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RolesUpdateInput, RolesUncheckedUpdateInput>;
  };

  /**
   * Roles delete
   */
  export type RolesDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RolesInclude<ExtArgs> | null;
    /**
     * Filter which Roles to delete.
     */
    where: RolesWhereUniqueInput;
  };

  /**
   * Roles deleteMany
   */
  export type RolesDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which Roles to delete
     */
    where?: RolesWhereInput;
  };

  /**
   * Roles.Users
   */
  export type Roles$UsersArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude<ExtArgs> | null;
    where?: UsersWhereInput;
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[];
    cursor?: UsersWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[];
  };

  /**
   * Roles without action
   */
  export type RolesDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RolesInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: "ReadUncommitted";
    ReadCommitted: "ReadCommitted";
    RepeatableRead: "RepeatableRead";
    Serializable: "Serializable";
  };

  export type TransactionIsolationLevel =
    (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const UsersScalarFieldEnum: {
    id: "id";
    role_id: "role_id";
    username: "username";
    password: "password";
    created_date: "created_date";
  };

  export type UsersScalarFieldEnum =
    (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum];

  export const FishesScalarFieldEnum: {
    id: "id";
    user_id: "user_id";
    type_id: "type_id";
    event_id: "event_id";
    name: "name";
    price: "price";
    price_usd: "price_usd";
    gender: "gender";
    size: "size";
    images1: "images1";
    images2: "images2";
    images3: "images3";
    videoURL: "videoURL";
    isAvailable: "isAvailable";
    isEvent: "isEvent";
    isNewArrival: "isNewArrival";
    created_date: "created_date";
  };

  export type FishesScalarFieldEnum =
    (typeof FishesScalarFieldEnum)[keyof typeof FishesScalarFieldEnum];

  export const Schedule_shipsScalarFieldEnum: {
    id: "id";
    user_id: "user_id";
    scheduleName: "scheduleName";
    scheduleImage: "scheduleImage";
    scheduleDescription: "scheduleDescription";
    created_date: "created_date";
  };

  export type Schedule_shipsScalarFieldEnum =
    (typeof Schedule_shipsScalarFieldEnum)[keyof typeof Schedule_shipsScalarFieldEnum];

  export const TypesScalarFieldEnum: {
    id: "id";
    name: "name";
    created_date: "created_date";
  };

  export type TypesScalarFieldEnum =
    (typeof TypesScalarFieldEnum)[keyof typeof TypesScalarFieldEnum];

  export const Coupon_discountScalarFieldEnum: {
    id: "id";
    user_id: "user_id";
    discountCode: "discountCode";
    discountMinTransaction_idr: "discountMinTransaction_idr";
    discountMinTransaction_usd: "discountMinTransaction_usd";
    discountMinTransaction_fish: "discountMinTransaction_fish";
    discountPercentage: "discountPercentage";
    discountMaxPrice_idr: "discountMaxPrice_idr";
    discountMaxPrice_usd: "discountMaxPrice_usd";
    expirationDate: "expirationDate";
    created_date: "created_date";
  };

  export type Coupon_discountScalarFieldEnum =
    (typeof Coupon_discountScalarFieldEnum)[keyof typeof Coupon_discountScalarFieldEnum];

  export const EventsScalarFieldEnum: {
    id: "id";
    name: "name";
    created_date: "created_date";
  };

  export type EventsScalarFieldEnum =
    (typeof EventsScalarFieldEnum)[keyof typeof EventsScalarFieldEnum];

  export const Discounted_fishScalarFieldEnum: {
    id: "id";
    fish_id: "fish_id";
    isDiscount: "isDiscount";
    discountPercentage: "discountPercentage";
    discountPriceIdr: "discountPriceIdr";
    discountPriceUsd: "discountPriceUsd";
    created_date: "created_date";
  };

  export type Discounted_fishScalarFieldEnum =
    (typeof Discounted_fishScalarFieldEnum)[keyof typeof Discounted_fishScalarFieldEnum];

  export const RolesScalarFieldEnum: {
    id: "id";
    name: "name";
    created_date: "created_date";
  };

  export type RolesScalarFieldEnum =
    (typeof RolesScalarFieldEnum)[keyof typeof RolesScalarFieldEnum];

  export const SortOrder: {
    asc: "asc";
    desc: "desc";
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: "default";
    insensitive: "insensitive";
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: "first";
    last: "last";
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "String"
  >;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "String[]"
  >;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Int"
  >;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Int[]"
  >;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "DateTime"
  >;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "DateTime[]"
  >;

  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Boolean"
  >;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Float"
  >;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Float[]"
  >;

  /**
   * Deep Input Types
   */

  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[];
    OR?: UsersWhereInput[];
    NOT?: UsersWhereInput | UsersWhereInput[];
    id?: StringFilter<"Users"> | string;
    role_id?: IntFilter<"Users"> | number;
    username?: StringFilter<"Users"> | string;
    password?: StringFilter<"Users"> | string;
    created_date?: DateTimeFilter<"Users"> | Date | string;
    role?: XOR<RolesRelationFilter, RolesWhereInput>;
    Fishes?: FishesListRelationFilter;
    Schedule_ships?: Schedule_shipsListRelationFilter;
    Coupon_discount?: Coupon_discountListRelationFilter;
  };

  export type UsersOrderByWithRelationInput = {
    id?: SortOrder;
    role_id?: SortOrder;
    username?: SortOrder;
    password?: SortOrder;
    created_date?: SortOrder;
    role?: RolesOrderByWithRelationInput;
    Fishes?: FishesOrderByRelationAggregateInput;
    Schedule_ships?: Schedule_shipsOrderByRelationAggregateInput;
    Coupon_discount?: Coupon_discountOrderByRelationAggregateInput;
  };

  export type UsersWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      username?: string;
      AND?: UsersWhereInput | UsersWhereInput[];
      OR?: UsersWhereInput[];
      NOT?: UsersWhereInput | UsersWhereInput[];
      role_id?: IntFilter<"Users"> | number;
      password?: StringFilter<"Users"> | string;
      created_date?: DateTimeFilter<"Users"> | Date | string;
      role?: XOR<RolesRelationFilter, RolesWhereInput>;
      Fishes?: FishesListRelationFilter;
      Schedule_ships?: Schedule_shipsListRelationFilter;
      Coupon_discount?: Coupon_discountListRelationFilter;
    },
    "id" | "username"
  >;

  export type UsersOrderByWithAggregationInput = {
    id?: SortOrder;
    role_id?: SortOrder;
    username?: SortOrder;
    password?: SortOrder;
    created_date?: SortOrder;
    _count?: UsersCountOrderByAggregateInput;
    _avg?: UsersAvgOrderByAggregateInput;
    _max?: UsersMaxOrderByAggregateInput;
    _min?: UsersMinOrderByAggregateInput;
    _sum?: UsersSumOrderByAggregateInput;
  };

  export type UsersScalarWhereWithAggregatesInput = {
    AND?:
      | UsersScalarWhereWithAggregatesInput
      | UsersScalarWhereWithAggregatesInput[];
    OR?: UsersScalarWhereWithAggregatesInput[];
    NOT?:
      | UsersScalarWhereWithAggregatesInput
      | UsersScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"Users"> | string;
    role_id?: IntWithAggregatesFilter<"Users"> | number;
    username?: StringWithAggregatesFilter<"Users"> | string;
    password?: StringWithAggregatesFilter<"Users"> | string;
    created_date?: DateTimeWithAggregatesFilter<"Users"> | Date | string;
  };

  export type FishesWhereInput = {
    AND?: FishesWhereInput | FishesWhereInput[];
    OR?: FishesWhereInput[];
    NOT?: FishesWhereInput | FishesWhereInput[];
    id?: StringFilter<"Fishes"> | string;
    user_id?: StringFilter<"Fishes"> | string;
    type_id?: StringFilter<"Fishes"> | string;
    event_id?: StringFilter<"Fishes"> | string;
    name?: StringFilter<"Fishes"> | string;
    price?: IntFilter<"Fishes"> | number;
    price_usd?: IntFilter<"Fishes"> | number;
    gender?: StringFilter<"Fishes"> | string;
    size?: StringFilter<"Fishes"> | string;
    images1?: StringFilter<"Fishes"> | string;
    images2?: StringNullableFilter<"Fishes"> | string | null;
    images3?: StringNullableFilter<"Fishes"> | string | null;
    videoURL?: StringNullableFilter<"Fishes"> | string | null;
    isAvailable?: BoolFilter<"Fishes"> | boolean;
    isEvent?: BoolFilter<"Fishes"> | boolean;
    isNewArrival?: BoolFilter<"Fishes"> | boolean;
    created_date?: DateTimeFilter<"Fishes"> | Date | string;
    user?: XOR<UsersRelationFilter, UsersWhereInput>;
    type?: XOR<TypesRelationFilter, TypesWhereInput>;
    events?: XOR<EventsRelationFilter, EventsWhereInput>;
    discounted_fish?: Discounted_fishListRelationFilter;
  };

  export type FishesOrderByWithRelationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    type_id?: SortOrder;
    event_id?: SortOrder;
    name?: SortOrder;
    price?: SortOrder;
    price_usd?: SortOrder;
    gender?: SortOrder;
    size?: SortOrder;
    images1?: SortOrder;
    images2?: SortOrderInput | SortOrder;
    images3?: SortOrderInput | SortOrder;
    videoURL?: SortOrderInput | SortOrder;
    isAvailable?: SortOrder;
    isEvent?: SortOrder;
    isNewArrival?: SortOrder;
    created_date?: SortOrder;
    user?: UsersOrderByWithRelationInput;
    type?: TypesOrderByWithRelationInput;
    events?: EventsOrderByWithRelationInput;
    discounted_fish?: Discounted_fishOrderByRelationAggregateInput;
  };

  export type FishesWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: FishesWhereInput | FishesWhereInput[];
      OR?: FishesWhereInput[];
      NOT?: FishesWhereInput | FishesWhereInput[];
      user_id?: StringFilter<"Fishes"> | string;
      type_id?: StringFilter<"Fishes"> | string;
      event_id?: StringFilter<"Fishes"> | string;
      name?: StringFilter<"Fishes"> | string;
      price?: IntFilter<"Fishes"> | number;
      price_usd?: IntFilter<"Fishes"> | number;
      gender?: StringFilter<"Fishes"> | string;
      size?: StringFilter<"Fishes"> | string;
      images1?: StringFilter<"Fishes"> | string;
      images2?: StringNullableFilter<"Fishes"> | string | null;
      images3?: StringNullableFilter<"Fishes"> | string | null;
      videoURL?: StringNullableFilter<"Fishes"> | string | null;
      isAvailable?: BoolFilter<"Fishes"> | boolean;
      isEvent?: BoolFilter<"Fishes"> | boolean;
      isNewArrival?: BoolFilter<"Fishes"> | boolean;
      created_date?: DateTimeFilter<"Fishes"> | Date | string;
      user?: XOR<UsersRelationFilter, UsersWhereInput>;
      type?: XOR<TypesRelationFilter, TypesWhereInput>;
      events?: XOR<EventsRelationFilter, EventsWhereInput>;
      discounted_fish?: Discounted_fishListRelationFilter;
    },
    "id"
  >;

  export type FishesOrderByWithAggregationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    type_id?: SortOrder;
    event_id?: SortOrder;
    name?: SortOrder;
    price?: SortOrder;
    price_usd?: SortOrder;
    gender?: SortOrder;
    size?: SortOrder;
    images1?: SortOrder;
    images2?: SortOrderInput | SortOrder;
    images3?: SortOrderInput | SortOrder;
    videoURL?: SortOrderInput | SortOrder;
    isAvailable?: SortOrder;
    isEvent?: SortOrder;
    isNewArrival?: SortOrder;
    created_date?: SortOrder;
    _count?: FishesCountOrderByAggregateInput;
    _avg?: FishesAvgOrderByAggregateInput;
    _max?: FishesMaxOrderByAggregateInput;
    _min?: FishesMinOrderByAggregateInput;
    _sum?: FishesSumOrderByAggregateInput;
  };

  export type FishesScalarWhereWithAggregatesInput = {
    AND?:
      | FishesScalarWhereWithAggregatesInput
      | FishesScalarWhereWithAggregatesInput[];
    OR?: FishesScalarWhereWithAggregatesInput[];
    NOT?:
      | FishesScalarWhereWithAggregatesInput
      | FishesScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"Fishes"> | string;
    user_id?: StringWithAggregatesFilter<"Fishes"> | string;
    type_id?: StringWithAggregatesFilter<"Fishes"> | string;
    event_id?: StringWithAggregatesFilter<"Fishes"> | string;
    name?: StringWithAggregatesFilter<"Fishes"> | string;
    price?: IntWithAggregatesFilter<"Fishes"> | number;
    price_usd?: IntWithAggregatesFilter<"Fishes"> | number;
    gender?: StringWithAggregatesFilter<"Fishes"> | string;
    size?: StringWithAggregatesFilter<"Fishes"> | string;
    images1?: StringWithAggregatesFilter<"Fishes"> | string;
    images2?: StringNullableWithAggregatesFilter<"Fishes"> | string | null;
    images3?: StringNullableWithAggregatesFilter<"Fishes"> | string | null;
    videoURL?: StringNullableWithAggregatesFilter<"Fishes"> | string | null;
    isAvailable?: BoolWithAggregatesFilter<"Fishes"> | boolean;
    isEvent?: BoolWithAggregatesFilter<"Fishes"> | boolean;
    isNewArrival?: BoolWithAggregatesFilter<"Fishes"> | boolean;
    created_date?: DateTimeWithAggregatesFilter<"Fishes"> | Date | string;
  };

  export type Schedule_shipsWhereInput = {
    AND?: Schedule_shipsWhereInput | Schedule_shipsWhereInput[];
    OR?: Schedule_shipsWhereInput[];
    NOT?: Schedule_shipsWhereInput | Schedule_shipsWhereInput[];
    id?: StringFilter<"Schedule_ships"> | string;
    user_id?: StringFilter<"Schedule_ships"> | string;
    scheduleName?: StringFilter<"Schedule_ships"> | string;
    scheduleImage?: StringFilter<"Schedule_ships"> | string;
    scheduleDescription?:
      | StringNullableFilter<"Schedule_ships">
      | string
      | null;
    created_date?: DateTimeFilter<"Schedule_ships"> | Date | string;
    user?: XOR<UsersRelationFilter, UsersWhereInput>;
  };

  export type Schedule_shipsOrderByWithRelationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    scheduleName?: SortOrder;
    scheduleImage?: SortOrder;
    scheduleDescription?: SortOrderInput | SortOrder;
    created_date?: SortOrder;
    user?: UsersOrderByWithRelationInput;
  };

  export type Schedule_shipsWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: Schedule_shipsWhereInput | Schedule_shipsWhereInput[];
      OR?: Schedule_shipsWhereInput[];
      NOT?: Schedule_shipsWhereInput | Schedule_shipsWhereInput[];
      user_id?: StringFilter<"Schedule_ships"> | string;
      scheduleName?: StringFilter<"Schedule_ships"> | string;
      scheduleImage?: StringFilter<"Schedule_ships"> | string;
      scheduleDescription?:
        | StringNullableFilter<"Schedule_ships">
        | string
        | null;
      created_date?: DateTimeFilter<"Schedule_ships"> | Date | string;
      user?: XOR<UsersRelationFilter, UsersWhereInput>;
    },
    "id"
  >;

  export type Schedule_shipsOrderByWithAggregationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    scheduleName?: SortOrder;
    scheduleImage?: SortOrder;
    scheduleDescription?: SortOrderInput | SortOrder;
    created_date?: SortOrder;
    _count?: Schedule_shipsCountOrderByAggregateInput;
    _max?: Schedule_shipsMaxOrderByAggregateInput;
    _min?: Schedule_shipsMinOrderByAggregateInput;
  };

  export type Schedule_shipsScalarWhereWithAggregatesInput = {
    AND?:
      | Schedule_shipsScalarWhereWithAggregatesInput
      | Schedule_shipsScalarWhereWithAggregatesInput[];
    OR?: Schedule_shipsScalarWhereWithAggregatesInput[];
    NOT?:
      | Schedule_shipsScalarWhereWithAggregatesInput
      | Schedule_shipsScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"Schedule_ships"> | string;
    user_id?: StringWithAggregatesFilter<"Schedule_ships"> | string;
    scheduleName?: StringWithAggregatesFilter<"Schedule_ships"> | string;
    scheduleImage?: StringWithAggregatesFilter<"Schedule_ships"> | string;
    scheduleDescription?:
      | StringNullableWithAggregatesFilter<"Schedule_ships">
      | string
      | null;
    created_date?:
      | DateTimeWithAggregatesFilter<"Schedule_ships">
      | Date
      | string;
  };

  export type TypesWhereInput = {
    AND?: TypesWhereInput | TypesWhereInput[];
    OR?: TypesWhereInput[];
    NOT?: TypesWhereInput | TypesWhereInput[];
    id?: StringFilter<"Types"> | string;
    name?: StringFilter<"Types"> | string;
    created_date?: DateTimeFilter<"Types"> | Date | string;
    Fishes?: FishesListRelationFilter;
  };

  export type TypesOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    created_date?: SortOrder;
    Fishes?: FishesOrderByRelationAggregateInput;
  };

  export type TypesWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: TypesWhereInput | TypesWhereInput[];
      OR?: TypesWhereInput[];
      NOT?: TypesWhereInput | TypesWhereInput[];
      name?: StringFilter<"Types"> | string;
      created_date?: DateTimeFilter<"Types"> | Date | string;
      Fishes?: FishesListRelationFilter;
    },
    "id"
  >;

  export type TypesOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    created_date?: SortOrder;
    _count?: TypesCountOrderByAggregateInput;
    _max?: TypesMaxOrderByAggregateInput;
    _min?: TypesMinOrderByAggregateInput;
  };

  export type TypesScalarWhereWithAggregatesInput = {
    AND?:
      | TypesScalarWhereWithAggregatesInput
      | TypesScalarWhereWithAggregatesInput[];
    OR?: TypesScalarWhereWithAggregatesInput[];
    NOT?:
      | TypesScalarWhereWithAggregatesInput
      | TypesScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"Types"> | string;
    name?: StringWithAggregatesFilter<"Types"> | string;
    created_date?: DateTimeWithAggregatesFilter<"Types"> | Date | string;
  };

  export type Coupon_discountWhereInput = {
    AND?: Coupon_discountWhereInput | Coupon_discountWhereInput[];
    OR?: Coupon_discountWhereInput[];
    NOT?: Coupon_discountWhereInput | Coupon_discountWhereInput[];
    id?: StringFilter<"Coupon_discount"> | string;
    user_id?: StringFilter<"Coupon_discount"> | string;
    discountCode?: StringFilter<"Coupon_discount"> | string;
    discountMinTransaction_idr?: IntFilter<"Coupon_discount"> | number;
    discountMinTransaction_usd?: IntFilter<"Coupon_discount"> | number;
    discountMinTransaction_fish?: IntFilter<"Coupon_discount"> | number;
    discountPercentage?: IntFilter<"Coupon_discount"> | number;
    discountMaxPrice_idr?: IntFilter<"Coupon_discount"> | number;
    discountMaxPrice_usd?: IntFilter<"Coupon_discount"> | number;
    expirationDate?: DateTimeFilter<"Coupon_discount"> | Date | string;
    created_date?: DateTimeFilter<"Coupon_discount"> | Date | string;
    user?: XOR<UsersRelationFilter, UsersWhereInput>;
  };

  export type Coupon_discountOrderByWithRelationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    discountCode?: SortOrder;
    discountMinTransaction_idr?: SortOrder;
    discountMinTransaction_usd?: SortOrder;
    discountMinTransaction_fish?: SortOrder;
    discountPercentage?: SortOrder;
    discountMaxPrice_idr?: SortOrder;
    discountMaxPrice_usd?: SortOrder;
    expirationDate?: SortOrder;
    created_date?: SortOrder;
    user?: UsersOrderByWithRelationInput;
  };

  export type Coupon_discountWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: Coupon_discountWhereInput | Coupon_discountWhereInput[];
      OR?: Coupon_discountWhereInput[];
      NOT?: Coupon_discountWhereInput | Coupon_discountWhereInput[];
      user_id?: StringFilter<"Coupon_discount"> | string;
      discountCode?: StringFilter<"Coupon_discount"> | string;
      discountMinTransaction_idr?: IntFilter<"Coupon_discount"> | number;
      discountMinTransaction_usd?: IntFilter<"Coupon_discount"> | number;
      discountMinTransaction_fish?: IntFilter<"Coupon_discount"> | number;
      discountPercentage?: IntFilter<"Coupon_discount"> | number;
      discountMaxPrice_idr?: IntFilter<"Coupon_discount"> | number;
      discountMaxPrice_usd?: IntFilter<"Coupon_discount"> | number;
      expirationDate?: DateTimeFilter<"Coupon_discount"> | Date | string;
      created_date?: DateTimeFilter<"Coupon_discount"> | Date | string;
      user?: XOR<UsersRelationFilter, UsersWhereInput>;
    },
    "id"
  >;

  export type Coupon_discountOrderByWithAggregationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    discountCode?: SortOrder;
    discountMinTransaction_idr?: SortOrder;
    discountMinTransaction_usd?: SortOrder;
    discountMinTransaction_fish?: SortOrder;
    discountPercentage?: SortOrder;
    discountMaxPrice_idr?: SortOrder;
    discountMaxPrice_usd?: SortOrder;
    expirationDate?: SortOrder;
    created_date?: SortOrder;
    _count?: Coupon_discountCountOrderByAggregateInput;
    _avg?: Coupon_discountAvgOrderByAggregateInput;
    _max?: Coupon_discountMaxOrderByAggregateInput;
    _min?: Coupon_discountMinOrderByAggregateInput;
    _sum?: Coupon_discountSumOrderByAggregateInput;
  };

  export type Coupon_discountScalarWhereWithAggregatesInput = {
    AND?:
      | Coupon_discountScalarWhereWithAggregatesInput
      | Coupon_discountScalarWhereWithAggregatesInput[];
    OR?: Coupon_discountScalarWhereWithAggregatesInput[];
    NOT?:
      | Coupon_discountScalarWhereWithAggregatesInput
      | Coupon_discountScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"Coupon_discount"> | string;
    user_id?: StringWithAggregatesFilter<"Coupon_discount"> | string;
    discountCode?: StringWithAggregatesFilter<"Coupon_discount"> | string;
    discountMinTransaction_idr?:
      | IntWithAggregatesFilter<"Coupon_discount">
      | number;
    discountMinTransaction_usd?:
      | IntWithAggregatesFilter<"Coupon_discount">
      | number;
    discountMinTransaction_fish?:
      | IntWithAggregatesFilter<"Coupon_discount">
      | number;
    discountPercentage?: IntWithAggregatesFilter<"Coupon_discount"> | number;
    discountMaxPrice_idr?: IntWithAggregatesFilter<"Coupon_discount"> | number;
    discountMaxPrice_usd?: IntWithAggregatesFilter<"Coupon_discount"> | number;
    expirationDate?:
      | DateTimeWithAggregatesFilter<"Coupon_discount">
      | Date
      | string;
    created_date?:
      | DateTimeWithAggregatesFilter<"Coupon_discount">
      | Date
      | string;
  };

  export type EventsWhereInput = {
    AND?: EventsWhereInput | EventsWhereInput[];
    OR?: EventsWhereInput[];
    NOT?: EventsWhereInput | EventsWhereInput[];
    id?: StringFilter<"Events"> | string;
    name?: StringFilter<"Events"> | string;
    created_date?: DateTimeFilter<"Events"> | Date | string;
    Fishes?: FishesListRelationFilter;
  };

  export type EventsOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    created_date?: SortOrder;
    Fishes?: FishesOrderByRelationAggregateInput;
  };

  export type EventsWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: EventsWhereInput | EventsWhereInput[];
      OR?: EventsWhereInput[];
      NOT?: EventsWhereInput | EventsWhereInput[];
      name?: StringFilter<"Events"> | string;
      created_date?: DateTimeFilter<"Events"> | Date | string;
      Fishes?: FishesListRelationFilter;
    },
    "id"
  >;

  export type EventsOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    created_date?: SortOrder;
    _count?: EventsCountOrderByAggregateInput;
    _max?: EventsMaxOrderByAggregateInput;
    _min?: EventsMinOrderByAggregateInput;
  };

  export type EventsScalarWhereWithAggregatesInput = {
    AND?:
      | EventsScalarWhereWithAggregatesInput
      | EventsScalarWhereWithAggregatesInput[];
    OR?: EventsScalarWhereWithAggregatesInput[];
    NOT?:
      | EventsScalarWhereWithAggregatesInput
      | EventsScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"Events"> | string;
    name?: StringWithAggregatesFilter<"Events"> | string;
    created_date?: DateTimeWithAggregatesFilter<"Events"> | Date | string;
  };

  export type Discounted_fishWhereInput = {
    AND?: Discounted_fishWhereInput | Discounted_fishWhereInput[];
    OR?: Discounted_fishWhereInput[];
    NOT?: Discounted_fishWhereInput | Discounted_fishWhereInput[];
    id?: StringFilter<"Discounted_fish"> | string;
    fish_id?: StringFilter<"Discounted_fish"> | string;
    isDiscount?: BoolFilter<"Discounted_fish"> | boolean;
    discountPercentage?: IntFilter<"Discounted_fish"> | number;
    discountPriceIdr?: IntFilter<"Discounted_fish"> | number;
    discountPriceUsd?: IntFilter<"Discounted_fish"> | number;
    created_date?: DateTimeFilter<"Discounted_fish"> | Date | string;
    fish?: XOR<FishesRelationFilter, FishesWhereInput>;
  };

  export type Discounted_fishOrderByWithRelationInput = {
    id?: SortOrder;
    fish_id?: SortOrder;
    isDiscount?: SortOrder;
    discountPercentage?: SortOrder;
    discountPriceIdr?: SortOrder;
    discountPriceUsd?: SortOrder;
    created_date?: SortOrder;
    fish?: FishesOrderByWithRelationInput;
  };

  export type Discounted_fishWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: Discounted_fishWhereInput | Discounted_fishWhereInput[];
      OR?: Discounted_fishWhereInput[];
      NOT?: Discounted_fishWhereInput | Discounted_fishWhereInput[];
      fish_id?: StringFilter<"Discounted_fish"> | string;
      isDiscount?: BoolFilter<"Discounted_fish"> | boolean;
      discountPercentage?: IntFilter<"Discounted_fish"> | number;
      discountPriceIdr?: IntFilter<"Discounted_fish"> | number;
      discountPriceUsd?: IntFilter<"Discounted_fish"> | number;
      created_date?: DateTimeFilter<"Discounted_fish"> | Date | string;
      fish?: XOR<FishesRelationFilter, FishesWhereInput>;
    },
    "id"
  >;

  export type Discounted_fishOrderByWithAggregationInput = {
    id?: SortOrder;
    fish_id?: SortOrder;
    isDiscount?: SortOrder;
    discountPercentage?: SortOrder;
    discountPriceIdr?: SortOrder;
    discountPriceUsd?: SortOrder;
    created_date?: SortOrder;
    _count?: Discounted_fishCountOrderByAggregateInput;
    _avg?: Discounted_fishAvgOrderByAggregateInput;
    _max?: Discounted_fishMaxOrderByAggregateInput;
    _min?: Discounted_fishMinOrderByAggregateInput;
    _sum?: Discounted_fishSumOrderByAggregateInput;
  };

  export type Discounted_fishScalarWhereWithAggregatesInput = {
    AND?:
      | Discounted_fishScalarWhereWithAggregatesInput
      | Discounted_fishScalarWhereWithAggregatesInput[];
    OR?: Discounted_fishScalarWhereWithAggregatesInput[];
    NOT?:
      | Discounted_fishScalarWhereWithAggregatesInput
      | Discounted_fishScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"Discounted_fish"> | string;
    fish_id?: StringWithAggregatesFilter<"Discounted_fish"> | string;
    isDiscount?: BoolWithAggregatesFilter<"Discounted_fish"> | boolean;
    discountPercentage?: IntWithAggregatesFilter<"Discounted_fish"> | number;
    discountPriceIdr?: IntWithAggregatesFilter<"Discounted_fish"> | number;
    discountPriceUsd?: IntWithAggregatesFilter<"Discounted_fish"> | number;
    created_date?:
      | DateTimeWithAggregatesFilter<"Discounted_fish">
      | Date
      | string;
  };

  export type RolesWhereInput = {
    AND?: RolesWhereInput | RolesWhereInput[];
    OR?: RolesWhereInput[];
    NOT?: RolesWhereInput | RolesWhereInput[];
    id?: IntFilter<"Roles"> | number;
    name?: StringFilter<"Roles"> | string;
    created_date?: DateTimeFilter<"Roles"> | Date | string;
    Users?: UsersListRelationFilter;
  };

  export type RolesOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    created_date?: SortOrder;
    Users?: UsersOrderByRelationAggregateInput;
  };

  export type RolesWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      AND?: RolesWhereInput | RolesWhereInput[];
      OR?: RolesWhereInput[];
      NOT?: RolesWhereInput | RolesWhereInput[];
      name?: StringFilter<"Roles"> | string;
      created_date?: DateTimeFilter<"Roles"> | Date | string;
      Users?: UsersListRelationFilter;
    },
    "id"
  >;

  export type RolesOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    created_date?: SortOrder;
    _count?: RolesCountOrderByAggregateInput;
    _avg?: RolesAvgOrderByAggregateInput;
    _max?: RolesMaxOrderByAggregateInput;
    _min?: RolesMinOrderByAggregateInput;
    _sum?: RolesSumOrderByAggregateInput;
  };

  export type RolesScalarWhereWithAggregatesInput = {
    AND?:
      | RolesScalarWhereWithAggregatesInput
      | RolesScalarWhereWithAggregatesInput[];
    OR?: RolesScalarWhereWithAggregatesInput[];
    NOT?:
      | RolesScalarWhereWithAggregatesInput
      | RolesScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<"Roles"> | number;
    name?: StringWithAggregatesFilter<"Roles"> | string;
    created_date?: DateTimeWithAggregatesFilter<"Roles"> | Date | string;
  };

  export type UsersCreateInput = {
    id: string;
    username: string;
    password: string;
    created_date?: Date | string;
    role?: RolesCreateNestedOneWithoutUsersInput;
    Fishes?: FishesCreateNestedManyWithoutUserInput;
    Schedule_ships?: Schedule_shipsCreateNestedManyWithoutUserInput;
    Coupon_discount?: Coupon_discountCreateNestedManyWithoutUserInput;
  };

  export type UsersUncheckedCreateInput = {
    id: string;
    role_id?: number;
    username: string;
    password: string;
    created_date?: Date | string;
    Fishes?: FishesUncheckedCreateNestedManyWithoutUserInput;
    Schedule_ships?: Schedule_shipsUncheckedCreateNestedManyWithoutUserInput;
    Coupon_discount?: Coupon_discountUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UsersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    role?: RolesUpdateOneRequiredWithoutUsersNestedInput;
    Fishes?: FishesUpdateManyWithoutUserNestedInput;
    Schedule_ships?: Schedule_shipsUpdateManyWithoutUserNestedInput;
    Coupon_discount?: Coupon_discountUpdateManyWithoutUserNestedInput;
  };

  export type UsersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    role_id?: IntFieldUpdateOperationsInput | number;
    username?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    Fishes?: FishesUncheckedUpdateManyWithoutUserNestedInput;
    Schedule_ships?: Schedule_shipsUncheckedUpdateManyWithoutUserNestedInput;
    Coupon_discount?: Coupon_discountUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type UsersCreateManyInput = {
    id: string;
    role_id?: number;
    username: string;
    password: string;
    created_date?: Date | string;
  };

  export type UsersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UsersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    role_id?: IntFieldUpdateOperationsInput | number;
    username?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type FishesCreateInput = {
    id: string;
    name: string;
    price: number;
    price_usd: number;
    gender: string;
    size: string;
    images1: string;
    images2?: string | null;
    images3?: string | null;
    videoURL?: string | null;
    isAvailable: boolean;
    isEvent: boolean;
    isNewArrival: boolean;
    created_date?: Date | string;
    user: UsersCreateNestedOneWithoutFishesInput;
    type: TypesCreateNestedOneWithoutFishesInput;
    events: EventsCreateNestedOneWithoutFishesInput;
    discounted_fish?: Discounted_fishCreateNestedManyWithoutFishInput;
  };

  export type FishesUncheckedCreateInput = {
    id: string;
    user_id: string;
    type_id: string;
    event_id: string;
    name: string;
    price: number;
    price_usd: number;
    gender: string;
    size: string;
    images1: string;
    images2?: string | null;
    images3?: string | null;
    videoURL?: string | null;
    isAvailable: boolean;
    isEvent: boolean;
    isNewArrival: boolean;
    created_date?: Date | string;
    discounted_fish?: Discounted_fishUncheckedCreateNestedManyWithoutFishInput;
  };

  export type FishesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    price?: IntFieldUpdateOperationsInput | number;
    price_usd?: IntFieldUpdateOperationsInput | number;
    gender?: StringFieldUpdateOperationsInput | string;
    size?: StringFieldUpdateOperationsInput | string;
    images1?: StringFieldUpdateOperationsInput | string;
    images2?: NullableStringFieldUpdateOperationsInput | string | null;
    images3?: NullableStringFieldUpdateOperationsInput | string | null;
    videoURL?: NullableStringFieldUpdateOperationsInput | string | null;
    isAvailable?: BoolFieldUpdateOperationsInput | boolean;
    isEvent?: BoolFieldUpdateOperationsInput | boolean;
    isNewArrival?: BoolFieldUpdateOperationsInput | boolean;
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UsersUpdateOneRequiredWithoutFishesNestedInput;
    type?: TypesUpdateOneRequiredWithoutFishesNestedInput;
    events?: EventsUpdateOneRequiredWithoutFishesNestedInput;
    discounted_fish?: Discounted_fishUpdateManyWithoutFishNestedInput;
  };

  export type FishesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    type_id?: StringFieldUpdateOperationsInput | string;
    event_id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    price?: IntFieldUpdateOperationsInput | number;
    price_usd?: IntFieldUpdateOperationsInput | number;
    gender?: StringFieldUpdateOperationsInput | string;
    size?: StringFieldUpdateOperationsInput | string;
    images1?: StringFieldUpdateOperationsInput | string;
    images2?: NullableStringFieldUpdateOperationsInput | string | null;
    images3?: NullableStringFieldUpdateOperationsInput | string | null;
    videoURL?: NullableStringFieldUpdateOperationsInput | string | null;
    isAvailable?: BoolFieldUpdateOperationsInput | boolean;
    isEvent?: BoolFieldUpdateOperationsInput | boolean;
    isNewArrival?: BoolFieldUpdateOperationsInput | boolean;
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    discounted_fish?: Discounted_fishUncheckedUpdateManyWithoutFishNestedInput;
  };

  export type FishesCreateManyInput = {
    id: string;
    user_id: string;
    type_id: string;
    event_id: string;
    name: string;
    price: number;
    price_usd: number;
    gender: string;
    size: string;
    images1: string;
    images2?: string | null;
    images3?: string | null;
    videoURL?: string | null;
    isAvailable: boolean;
    isEvent: boolean;
    isNewArrival: boolean;
    created_date?: Date | string;
  };

  export type FishesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    price?: IntFieldUpdateOperationsInput | number;
    price_usd?: IntFieldUpdateOperationsInput | number;
    gender?: StringFieldUpdateOperationsInput | string;
    size?: StringFieldUpdateOperationsInput | string;
    images1?: StringFieldUpdateOperationsInput | string;
    images2?: NullableStringFieldUpdateOperationsInput | string | null;
    images3?: NullableStringFieldUpdateOperationsInput | string | null;
    videoURL?: NullableStringFieldUpdateOperationsInput | string | null;
    isAvailable?: BoolFieldUpdateOperationsInput | boolean;
    isEvent?: BoolFieldUpdateOperationsInput | boolean;
    isNewArrival?: BoolFieldUpdateOperationsInput | boolean;
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type FishesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    type_id?: StringFieldUpdateOperationsInput | string;
    event_id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    price?: IntFieldUpdateOperationsInput | number;
    price_usd?: IntFieldUpdateOperationsInput | number;
    gender?: StringFieldUpdateOperationsInput | string;
    size?: StringFieldUpdateOperationsInput | string;
    images1?: StringFieldUpdateOperationsInput | string;
    images2?: NullableStringFieldUpdateOperationsInput | string | null;
    images3?: NullableStringFieldUpdateOperationsInput | string | null;
    videoURL?: NullableStringFieldUpdateOperationsInput | string | null;
    isAvailable?: BoolFieldUpdateOperationsInput | boolean;
    isEvent?: BoolFieldUpdateOperationsInput | boolean;
    isNewArrival?: BoolFieldUpdateOperationsInput | boolean;
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type Schedule_shipsCreateInput = {
    id: string;
    scheduleName: string;
    scheduleImage: string;
    scheduleDescription?: string | null;
    created_date?: Date | string;
    user: UsersCreateNestedOneWithoutSchedule_shipsInput;
  };

  export type Schedule_shipsUncheckedCreateInput = {
    id: string;
    user_id: string;
    scheduleName: string;
    scheduleImage: string;
    scheduleDescription?: string | null;
    created_date?: Date | string;
  };

  export type Schedule_shipsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    scheduleName?: StringFieldUpdateOperationsInput | string;
    scheduleImage?: StringFieldUpdateOperationsInput | string;
    scheduleDescription?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UsersUpdateOneRequiredWithoutSchedule_shipsNestedInput;
  };

  export type Schedule_shipsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    scheduleName?: StringFieldUpdateOperationsInput | string;
    scheduleImage?: StringFieldUpdateOperationsInput | string;
    scheduleDescription?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type Schedule_shipsCreateManyInput = {
    id: string;
    user_id: string;
    scheduleName: string;
    scheduleImage: string;
    scheduleDescription?: string | null;
    created_date?: Date | string;
  };

  export type Schedule_shipsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    scheduleName?: StringFieldUpdateOperationsInput | string;
    scheduleImage?: StringFieldUpdateOperationsInput | string;
    scheduleDescription?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type Schedule_shipsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    scheduleName?: StringFieldUpdateOperationsInput | string;
    scheduleImage?: StringFieldUpdateOperationsInput | string;
    scheduleDescription?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type TypesCreateInput = {
    id: string;
    name: string;
    created_date?: Date | string;
    Fishes?: FishesCreateNestedManyWithoutTypeInput;
  };

  export type TypesUncheckedCreateInput = {
    id: string;
    name: string;
    created_date?: Date | string;
    Fishes?: FishesUncheckedCreateNestedManyWithoutTypeInput;
  };

  export type TypesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    Fishes?: FishesUpdateManyWithoutTypeNestedInput;
  };

  export type TypesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    Fishes?: FishesUncheckedUpdateManyWithoutTypeNestedInput;
  };

  export type TypesCreateManyInput = {
    id: string;
    name: string;
    created_date?: Date | string;
  };

  export type TypesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type TypesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type Coupon_discountCreateInput = {
    id: string;
    discountCode: string;
    discountMinTransaction_idr: number;
    discountMinTransaction_usd: number;
    discountMinTransaction_fish: number;
    discountPercentage: number;
    discountMaxPrice_idr: number;
    discountMaxPrice_usd: number;
    expirationDate: Date | string;
    created_date?: Date | string;
    user: UsersCreateNestedOneWithoutCoupon_discountInput;
  };

  export type Coupon_discountUncheckedCreateInput = {
    id: string;
    user_id: string;
    discountCode: string;
    discountMinTransaction_idr: number;
    discountMinTransaction_usd: number;
    discountMinTransaction_fish: number;
    discountPercentage: number;
    discountMaxPrice_idr: number;
    discountMaxPrice_usd: number;
    expirationDate: Date | string;
    created_date?: Date | string;
  };

  export type Coupon_discountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    discountCode?: StringFieldUpdateOperationsInput | string;
    discountMinTransaction_idr?: IntFieldUpdateOperationsInput | number;
    discountMinTransaction_usd?: IntFieldUpdateOperationsInput | number;
    discountMinTransaction_fish?: IntFieldUpdateOperationsInput | number;
    discountPercentage?: IntFieldUpdateOperationsInput | number;
    discountMaxPrice_idr?: IntFieldUpdateOperationsInput | number;
    discountMaxPrice_usd?: IntFieldUpdateOperationsInput | number;
    expirationDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UsersUpdateOneRequiredWithoutCoupon_discountNestedInput;
  };

  export type Coupon_discountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    discountCode?: StringFieldUpdateOperationsInput | string;
    discountMinTransaction_idr?: IntFieldUpdateOperationsInput | number;
    discountMinTransaction_usd?: IntFieldUpdateOperationsInput | number;
    discountMinTransaction_fish?: IntFieldUpdateOperationsInput | number;
    discountPercentage?: IntFieldUpdateOperationsInput | number;
    discountMaxPrice_idr?: IntFieldUpdateOperationsInput | number;
    discountMaxPrice_usd?: IntFieldUpdateOperationsInput | number;
    expirationDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type Coupon_discountCreateManyInput = {
    id: string;
    user_id: string;
    discountCode: string;
    discountMinTransaction_idr: number;
    discountMinTransaction_usd: number;
    discountMinTransaction_fish: number;
    discountPercentage: number;
    discountMaxPrice_idr: number;
    discountMaxPrice_usd: number;
    expirationDate: Date | string;
    created_date?: Date | string;
  };

  export type Coupon_discountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    discountCode?: StringFieldUpdateOperationsInput | string;
    discountMinTransaction_idr?: IntFieldUpdateOperationsInput | number;
    discountMinTransaction_usd?: IntFieldUpdateOperationsInput | number;
    discountMinTransaction_fish?: IntFieldUpdateOperationsInput | number;
    discountPercentage?: IntFieldUpdateOperationsInput | number;
    discountMaxPrice_idr?: IntFieldUpdateOperationsInput | number;
    discountMaxPrice_usd?: IntFieldUpdateOperationsInput | number;
    expirationDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type Coupon_discountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    discountCode?: StringFieldUpdateOperationsInput | string;
    discountMinTransaction_idr?: IntFieldUpdateOperationsInput | number;
    discountMinTransaction_usd?: IntFieldUpdateOperationsInput | number;
    discountMinTransaction_fish?: IntFieldUpdateOperationsInput | number;
    discountPercentage?: IntFieldUpdateOperationsInput | number;
    discountMaxPrice_idr?: IntFieldUpdateOperationsInput | number;
    discountMaxPrice_usd?: IntFieldUpdateOperationsInput | number;
    expirationDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type EventsCreateInput = {
    id: string;
    name: string;
    created_date?: Date | string;
    Fishes?: FishesCreateNestedManyWithoutEventsInput;
  };

  export type EventsUncheckedCreateInput = {
    id: string;
    name: string;
    created_date?: Date | string;
    Fishes?: FishesUncheckedCreateNestedManyWithoutEventsInput;
  };

  export type EventsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    Fishes?: FishesUpdateManyWithoutEventsNestedInput;
  };

  export type EventsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    Fishes?: FishesUncheckedUpdateManyWithoutEventsNestedInput;
  };

  export type EventsCreateManyInput = {
    id: string;
    name: string;
    created_date?: Date | string;
  };

  export type EventsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type EventsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type Discounted_fishCreateInput = {
    id: string;
    isDiscount: boolean;
    discountPercentage: number;
    discountPriceIdr: number;
    discountPriceUsd: number;
    created_date?: Date | string;
    fish: FishesCreateNestedOneWithoutDiscounted_fishInput;
  };

  export type Discounted_fishUncheckedCreateInput = {
    id: string;
    fish_id: string;
    isDiscount: boolean;
    discountPercentage: number;
    discountPriceIdr: number;
    discountPriceUsd: number;
    created_date?: Date | string;
  };

  export type Discounted_fishUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    isDiscount?: BoolFieldUpdateOperationsInput | boolean;
    discountPercentage?: IntFieldUpdateOperationsInput | number;
    discountPriceIdr?: IntFieldUpdateOperationsInput | number;
    discountPriceUsd?: IntFieldUpdateOperationsInput | number;
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    fish?: FishesUpdateOneRequiredWithoutDiscounted_fishNestedInput;
  };

  export type Discounted_fishUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    fish_id?: StringFieldUpdateOperationsInput | string;
    isDiscount?: BoolFieldUpdateOperationsInput | boolean;
    discountPercentage?: IntFieldUpdateOperationsInput | number;
    discountPriceIdr?: IntFieldUpdateOperationsInput | number;
    discountPriceUsd?: IntFieldUpdateOperationsInput | number;
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type Discounted_fishCreateManyInput = {
    id: string;
    fish_id: string;
    isDiscount: boolean;
    discountPercentage: number;
    discountPriceIdr: number;
    discountPriceUsd: number;
    created_date?: Date | string;
  };

  export type Discounted_fishUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    isDiscount?: BoolFieldUpdateOperationsInput | boolean;
    discountPercentage?: IntFieldUpdateOperationsInput | number;
    discountPriceIdr?: IntFieldUpdateOperationsInput | number;
    discountPriceUsd?: IntFieldUpdateOperationsInput | number;
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type Discounted_fishUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    fish_id?: StringFieldUpdateOperationsInput | string;
    isDiscount?: BoolFieldUpdateOperationsInput | boolean;
    discountPercentage?: IntFieldUpdateOperationsInput | number;
    discountPriceIdr?: IntFieldUpdateOperationsInput | number;
    discountPriceUsd?: IntFieldUpdateOperationsInput | number;
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type RolesCreateInput = {
    id: number;
    name: string;
    created_date?: Date | string;
    Users?: UsersCreateNestedManyWithoutRoleInput;
  };

  export type RolesUncheckedCreateInput = {
    id: number;
    name: string;
    created_date?: Date | string;
    Users?: UsersUncheckedCreateNestedManyWithoutRoleInput;
  };

  export type RolesUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    Users?: UsersUpdateManyWithoutRoleNestedInput;
  };

  export type RolesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    Users?: UsersUncheckedUpdateManyWithoutRoleNestedInput;
  };

  export type RolesCreateManyInput = {
    id: number;
    name: string;
    created_date?: Date | string;
  };

  export type RolesUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type RolesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type RolesRelationFilter = {
    is?: RolesWhereInput;
    isNot?: RolesWhereInput;
  };

  export type FishesListRelationFilter = {
    every?: FishesWhereInput;
    some?: FishesWhereInput;
    none?: FishesWhereInput;
  };

  export type Schedule_shipsListRelationFilter = {
    every?: Schedule_shipsWhereInput;
    some?: Schedule_shipsWhereInput;
    none?: Schedule_shipsWhereInput;
  };

  export type Coupon_discountListRelationFilter = {
    every?: Coupon_discountWhereInput;
    some?: Coupon_discountWhereInput;
    none?: Coupon_discountWhereInput;
  };

  export type FishesOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type Schedule_shipsOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type Coupon_discountOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type UsersCountOrderByAggregateInput = {
    id?: SortOrder;
    role_id?: SortOrder;
    username?: SortOrder;
    password?: SortOrder;
    created_date?: SortOrder;
  };

  export type UsersAvgOrderByAggregateInput = {
    role_id?: SortOrder;
  };

  export type UsersMaxOrderByAggregateInput = {
    id?: SortOrder;
    role_id?: SortOrder;
    username?: SortOrder;
    password?: SortOrder;
    created_date?: SortOrder;
  };

  export type UsersMinOrderByAggregateInput = {
    id?: SortOrder;
    role_id?: SortOrder;
    username?: SortOrder;
    password?: SortOrder;
    created_date?: SortOrder;
  };

  export type UsersSumOrderByAggregateInput = {
    role_id?: SortOrder;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolFilter<$PrismaModel> | boolean;
  };

  export type UsersRelationFilter = {
    is?: UsersWhereInput;
    isNot?: UsersWhereInput;
  };

  export type TypesRelationFilter = {
    is?: TypesWhereInput;
    isNot?: TypesWhereInput;
  };

  export type EventsRelationFilter = {
    is?: EventsWhereInput;
    isNot?: EventsWhereInput;
  };

  export type Discounted_fishListRelationFilter = {
    every?: Discounted_fishWhereInput;
    some?: Discounted_fishWhereInput;
    none?: Discounted_fishWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type Discounted_fishOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type FishesCountOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    type_id?: SortOrder;
    event_id?: SortOrder;
    name?: SortOrder;
    price?: SortOrder;
    price_usd?: SortOrder;
    gender?: SortOrder;
    size?: SortOrder;
    images1?: SortOrder;
    images2?: SortOrder;
    images3?: SortOrder;
    videoURL?: SortOrder;
    isAvailable?: SortOrder;
    isEvent?: SortOrder;
    isNewArrival?: SortOrder;
    created_date?: SortOrder;
  };

  export type FishesAvgOrderByAggregateInput = {
    price?: SortOrder;
    price_usd?: SortOrder;
  };

  export type FishesMaxOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    type_id?: SortOrder;
    event_id?: SortOrder;
    name?: SortOrder;
    price?: SortOrder;
    price_usd?: SortOrder;
    gender?: SortOrder;
    size?: SortOrder;
    images1?: SortOrder;
    images2?: SortOrder;
    images3?: SortOrder;
    videoURL?: SortOrder;
    isAvailable?: SortOrder;
    isEvent?: SortOrder;
    isNewArrival?: SortOrder;
    created_date?: SortOrder;
  };

  export type FishesMinOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    type_id?: SortOrder;
    event_id?: SortOrder;
    name?: SortOrder;
    price?: SortOrder;
    price_usd?: SortOrder;
    gender?: SortOrder;
    size?: SortOrder;
    images1?: SortOrder;
    images2?: SortOrder;
    images3?: SortOrder;
    videoURL?: SortOrder;
    isAvailable?: SortOrder;
    isEvent?: SortOrder;
    isNewArrival?: SortOrder;
    created_date?: SortOrder;
  };

  export type FishesSumOrderByAggregateInput = {
    price?: SortOrder;
    price_usd?: SortOrder;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?:
      | NestedStringNullableWithAggregatesFilter<$PrismaModel>
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedBoolFilter<$PrismaModel>;
    _max?: NestedBoolFilter<$PrismaModel>;
  };

  export type Schedule_shipsCountOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    scheduleName?: SortOrder;
    scheduleImage?: SortOrder;
    scheduleDescription?: SortOrder;
    created_date?: SortOrder;
  };

  export type Schedule_shipsMaxOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    scheduleName?: SortOrder;
    scheduleImage?: SortOrder;
    scheduleDescription?: SortOrder;
    created_date?: SortOrder;
  };

  export type Schedule_shipsMinOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    scheduleName?: SortOrder;
    scheduleImage?: SortOrder;
    scheduleDescription?: SortOrder;
    created_date?: SortOrder;
  };

  export type TypesCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    created_date?: SortOrder;
  };

  export type TypesMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    created_date?: SortOrder;
  };

  export type TypesMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    created_date?: SortOrder;
  };

  export type Coupon_discountCountOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    discountCode?: SortOrder;
    discountMinTransaction_idr?: SortOrder;
    discountMinTransaction_usd?: SortOrder;
    discountMinTransaction_fish?: SortOrder;
    discountPercentage?: SortOrder;
    discountMaxPrice_idr?: SortOrder;
    discountMaxPrice_usd?: SortOrder;
    expirationDate?: SortOrder;
    created_date?: SortOrder;
  };

  export type Coupon_discountAvgOrderByAggregateInput = {
    discountMinTransaction_idr?: SortOrder;
    discountMinTransaction_usd?: SortOrder;
    discountMinTransaction_fish?: SortOrder;
    discountPercentage?: SortOrder;
    discountMaxPrice_idr?: SortOrder;
    discountMaxPrice_usd?: SortOrder;
  };

  export type Coupon_discountMaxOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    discountCode?: SortOrder;
    discountMinTransaction_idr?: SortOrder;
    discountMinTransaction_usd?: SortOrder;
    discountMinTransaction_fish?: SortOrder;
    discountPercentage?: SortOrder;
    discountMaxPrice_idr?: SortOrder;
    discountMaxPrice_usd?: SortOrder;
    expirationDate?: SortOrder;
    created_date?: SortOrder;
  };

  export type Coupon_discountMinOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    discountCode?: SortOrder;
    discountMinTransaction_idr?: SortOrder;
    discountMinTransaction_usd?: SortOrder;
    discountMinTransaction_fish?: SortOrder;
    discountPercentage?: SortOrder;
    discountMaxPrice_idr?: SortOrder;
    discountMaxPrice_usd?: SortOrder;
    expirationDate?: SortOrder;
    created_date?: SortOrder;
  };

  export type Coupon_discountSumOrderByAggregateInput = {
    discountMinTransaction_idr?: SortOrder;
    discountMinTransaction_usd?: SortOrder;
    discountMinTransaction_fish?: SortOrder;
    discountPercentage?: SortOrder;
    discountMaxPrice_idr?: SortOrder;
    discountMaxPrice_usd?: SortOrder;
  };

  export type EventsCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    created_date?: SortOrder;
  };

  export type EventsMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    created_date?: SortOrder;
  };

  export type EventsMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    created_date?: SortOrder;
  };

  export type FishesRelationFilter = {
    is?: FishesWhereInput;
    isNot?: FishesWhereInput;
  };

  export type Discounted_fishCountOrderByAggregateInput = {
    id?: SortOrder;
    fish_id?: SortOrder;
    isDiscount?: SortOrder;
    discountPercentage?: SortOrder;
    discountPriceIdr?: SortOrder;
    discountPriceUsd?: SortOrder;
    created_date?: SortOrder;
  };

  export type Discounted_fishAvgOrderByAggregateInput = {
    discountPercentage?: SortOrder;
    discountPriceIdr?: SortOrder;
    discountPriceUsd?: SortOrder;
  };

  export type Discounted_fishMaxOrderByAggregateInput = {
    id?: SortOrder;
    fish_id?: SortOrder;
    isDiscount?: SortOrder;
    discountPercentage?: SortOrder;
    discountPriceIdr?: SortOrder;
    discountPriceUsd?: SortOrder;
    created_date?: SortOrder;
  };

  export type Discounted_fishMinOrderByAggregateInput = {
    id?: SortOrder;
    fish_id?: SortOrder;
    isDiscount?: SortOrder;
    discountPercentage?: SortOrder;
    discountPriceIdr?: SortOrder;
    discountPriceUsd?: SortOrder;
    created_date?: SortOrder;
  };

  export type Discounted_fishSumOrderByAggregateInput = {
    discountPercentage?: SortOrder;
    discountPriceIdr?: SortOrder;
    discountPriceUsd?: SortOrder;
  };

  export type UsersListRelationFilter = {
    every?: UsersWhereInput;
    some?: UsersWhereInput;
    none?: UsersWhereInput;
  };

  export type UsersOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type RolesCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    created_date?: SortOrder;
  };

  export type RolesAvgOrderByAggregateInput = {
    id?: SortOrder;
  };

  export type RolesMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    created_date?: SortOrder;
  };

  export type RolesMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    created_date?: SortOrder;
  };

  export type RolesSumOrderByAggregateInput = {
    id?: SortOrder;
  };

  export type RolesCreateNestedOneWithoutUsersInput = {
    create?: XOR<
      RolesCreateWithoutUsersInput,
      RolesUncheckedCreateWithoutUsersInput
    >;
    connectOrCreate?: RolesCreateOrConnectWithoutUsersInput;
    connect?: RolesWhereUniqueInput;
  };

  export type FishesCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<FishesCreateWithoutUserInput, FishesUncheckedCreateWithoutUserInput>
      | FishesCreateWithoutUserInput[]
      | FishesUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | FishesCreateOrConnectWithoutUserInput
      | FishesCreateOrConnectWithoutUserInput[];
    createMany?: FishesCreateManyUserInputEnvelope;
    connect?: FishesWhereUniqueInput | FishesWhereUniqueInput[];
  };

  export type Schedule_shipsCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          Schedule_shipsCreateWithoutUserInput,
          Schedule_shipsUncheckedCreateWithoutUserInput
        >
      | Schedule_shipsCreateWithoutUserInput[]
      | Schedule_shipsUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | Schedule_shipsCreateOrConnectWithoutUserInput
      | Schedule_shipsCreateOrConnectWithoutUserInput[];
    createMany?: Schedule_shipsCreateManyUserInputEnvelope;
    connect?: Schedule_shipsWhereUniqueInput | Schedule_shipsWhereUniqueInput[];
  };

  export type Coupon_discountCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          Coupon_discountCreateWithoutUserInput,
          Coupon_discountUncheckedCreateWithoutUserInput
        >
      | Coupon_discountCreateWithoutUserInput[]
      | Coupon_discountUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | Coupon_discountCreateOrConnectWithoutUserInput
      | Coupon_discountCreateOrConnectWithoutUserInput[];
    createMany?: Coupon_discountCreateManyUserInputEnvelope;
    connect?:
      | Coupon_discountWhereUniqueInput
      | Coupon_discountWhereUniqueInput[];
  };

  export type FishesUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<FishesCreateWithoutUserInput, FishesUncheckedCreateWithoutUserInput>
      | FishesCreateWithoutUserInput[]
      | FishesUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | FishesCreateOrConnectWithoutUserInput
      | FishesCreateOrConnectWithoutUserInput[];
    createMany?: FishesCreateManyUserInputEnvelope;
    connect?: FishesWhereUniqueInput | FishesWhereUniqueInput[];
  };

  export type Schedule_shipsUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          Schedule_shipsCreateWithoutUserInput,
          Schedule_shipsUncheckedCreateWithoutUserInput
        >
      | Schedule_shipsCreateWithoutUserInput[]
      | Schedule_shipsUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | Schedule_shipsCreateOrConnectWithoutUserInput
      | Schedule_shipsCreateOrConnectWithoutUserInput[];
    createMany?: Schedule_shipsCreateManyUserInputEnvelope;
    connect?: Schedule_shipsWhereUniqueInput | Schedule_shipsWhereUniqueInput[];
  };

  export type Coupon_discountUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          Coupon_discountCreateWithoutUserInput,
          Coupon_discountUncheckedCreateWithoutUserInput
        >
      | Coupon_discountCreateWithoutUserInput[]
      | Coupon_discountUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | Coupon_discountCreateOrConnectWithoutUserInput
      | Coupon_discountCreateOrConnectWithoutUserInput[];
    createMany?: Coupon_discountCreateManyUserInputEnvelope;
    connect?:
      | Coupon_discountWhereUniqueInput
      | Coupon_discountWhereUniqueInput[];
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type RolesUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<
      RolesCreateWithoutUsersInput,
      RolesUncheckedCreateWithoutUsersInput
    >;
    connectOrCreate?: RolesCreateOrConnectWithoutUsersInput;
    upsert?: RolesUpsertWithoutUsersInput;
    connect?: RolesWhereUniqueInput;
    update?: XOR<
      XOR<
        RolesUpdateToOneWithWhereWithoutUsersInput,
        RolesUpdateWithoutUsersInput
      >,
      RolesUncheckedUpdateWithoutUsersInput
    >;
  };

  export type FishesUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<FishesCreateWithoutUserInput, FishesUncheckedCreateWithoutUserInput>
      | FishesCreateWithoutUserInput[]
      | FishesUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | FishesCreateOrConnectWithoutUserInput
      | FishesCreateOrConnectWithoutUserInput[];
    upsert?:
      | FishesUpsertWithWhereUniqueWithoutUserInput
      | FishesUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: FishesCreateManyUserInputEnvelope;
    set?: FishesWhereUniqueInput | FishesWhereUniqueInput[];
    disconnect?: FishesWhereUniqueInput | FishesWhereUniqueInput[];
    delete?: FishesWhereUniqueInput | FishesWhereUniqueInput[];
    connect?: FishesWhereUniqueInput | FishesWhereUniqueInput[];
    update?:
      | FishesUpdateWithWhereUniqueWithoutUserInput
      | FishesUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | FishesUpdateManyWithWhereWithoutUserInput
      | FishesUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: FishesScalarWhereInput | FishesScalarWhereInput[];
  };

  export type Schedule_shipsUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          Schedule_shipsCreateWithoutUserInput,
          Schedule_shipsUncheckedCreateWithoutUserInput
        >
      | Schedule_shipsCreateWithoutUserInput[]
      | Schedule_shipsUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | Schedule_shipsCreateOrConnectWithoutUserInput
      | Schedule_shipsCreateOrConnectWithoutUserInput[];
    upsert?:
      | Schedule_shipsUpsertWithWhereUniqueWithoutUserInput
      | Schedule_shipsUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Schedule_shipsCreateManyUserInputEnvelope;
    set?: Schedule_shipsWhereUniqueInput | Schedule_shipsWhereUniqueInput[];
    disconnect?:
      | Schedule_shipsWhereUniqueInput
      | Schedule_shipsWhereUniqueInput[];
    delete?: Schedule_shipsWhereUniqueInput | Schedule_shipsWhereUniqueInput[];
    connect?: Schedule_shipsWhereUniqueInput | Schedule_shipsWhereUniqueInput[];
    update?:
      | Schedule_shipsUpdateWithWhereUniqueWithoutUserInput
      | Schedule_shipsUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | Schedule_shipsUpdateManyWithWhereWithoutUserInput
      | Schedule_shipsUpdateManyWithWhereWithoutUserInput[];
    deleteMany?:
      | Schedule_shipsScalarWhereInput
      | Schedule_shipsScalarWhereInput[];
  };

  export type Coupon_discountUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          Coupon_discountCreateWithoutUserInput,
          Coupon_discountUncheckedCreateWithoutUserInput
        >
      | Coupon_discountCreateWithoutUserInput[]
      | Coupon_discountUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | Coupon_discountCreateOrConnectWithoutUserInput
      | Coupon_discountCreateOrConnectWithoutUserInput[];
    upsert?:
      | Coupon_discountUpsertWithWhereUniqueWithoutUserInput
      | Coupon_discountUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Coupon_discountCreateManyUserInputEnvelope;
    set?: Coupon_discountWhereUniqueInput | Coupon_discountWhereUniqueInput[];
    disconnect?:
      | Coupon_discountWhereUniqueInput
      | Coupon_discountWhereUniqueInput[];
    delete?:
      | Coupon_discountWhereUniqueInput
      | Coupon_discountWhereUniqueInput[];
    connect?:
      | Coupon_discountWhereUniqueInput
      | Coupon_discountWhereUniqueInput[];
    update?:
      | Coupon_discountUpdateWithWhereUniqueWithoutUserInput
      | Coupon_discountUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | Coupon_discountUpdateManyWithWhereWithoutUserInput
      | Coupon_discountUpdateManyWithWhereWithoutUserInput[];
    deleteMany?:
      | Coupon_discountScalarWhereInput
      | Coupon_discountScalarWhereInput[];
  };

  export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type FishesUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<FishesCreateWithoutUserInput, FishesUncheckedCreateWithoutUserInput>
      | FishesCreateWithoutUserInput[]
      | FishesUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | FishesCreateOrConnectWithoutUserInput
      | FishesCreateOrConnectWithoutUserInput[];
    upsert?:
      | FishesUpsertWithWhereUniqueWithoutUserInput
      | FishesUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: FishesCreateManyUserInputEnvelope;
    set?: FishesWhereUniqueInput | FishesWhereUniqueInput[];
    disconnect?: FishesWhereUniqueInput | FishesWhereUniqueInput[];
    delete?: FishesWhereUniqueInput | FishesWhereUniqueInput[];
    connect?: FishesWhereUniqueInput | FishesWhereUniqueInput[];
    update?:
      | FishesUpdateWithWhereUniqueWithoutUserInput
      | FishesUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | FishesUpdateManyWithWhereWithoutUserInput
      | FishesUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: FishesScalarWhereInput | FishesScalarWhereInput[];
  };

  export type Schedule_shipsUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          Schedule_shipsCreateWithoutUserInput,
          Schedule_shipsUncheckedCreateWithoutUserInput
        >
      | Schedule_shipsCreateWithoutUserInput[]
      | Schedule_shipsUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | Schedule_shipsCreateOrConnectWithoutUserInput
      | Schedule_shipsCreateOrConnectWithoutUserInput[];
    upsert?:
      | Schedule_shipsUpsertWithWhereUniqueWithoutUserInput
      | Schedule_shipsUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Schedule_shipsCreateManyUserInputEnvelope;
    set?: Schedule_shipsWhereUniqueInput | Schedule_shipsWhereUniqueInput[];
    disconnect?:
      | Schedule_shipsWhereUniqueInput
      | Schedule_shipsWhereUniqueInput[];
    delete?: Schedule_shipsWhereUniqueInput | Schedule_shipsWhereUniqueInput[];
    connect?: Schedule_shipsWhereUniqueInput | Schedule_shipsWhereUniqueInput[];
    update?:
      | Schedule_shipsUpdateWithWhereUniqueWithoutUserInput
      | Schedule_shipsUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | Schedule_shipsUpdateManyWithWhereWithoutUserInput
      | Schedule_shipsUpdateManyWithWhereWithoutUserInput[];
    deleteMany?:
      | Schedule_shipsScalarWhereInput
      | Schedule_shipsScalarWhereInput[];
  };

  export type Coupon_discountUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          Coupon_discountCreateWithoutUserInput,
          Coupon_discountUncheckedCreateWithoutUserInput
        >
      | Coupon_discountCreateWithoutUserInput[]
      | Coupon_discountUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | Coupon_discountCreateOrConnectWithoutUserInput
      | Coupon_discountCreateOrConnectWithoutUserInput[];
    upsert?:
      | Coupon_discountUpsertWithWhereUniqueWithoutUserInput
      | Coupon_discountUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Coupon_discountCreateManyUserInputEnvelope;
    set?: Coupon_discountWhereUniqueInput | Coupon_discountWhereUniqueInput[];
    disconnect?:
      | Coupon_discountWhereUniqueInput
      | Coupon_discountWhereUniqueInput[];
    delete?:
      | Coupon_discountWhereUniqueInput
      | Coupon_discountWhereUniqueInput[];
    connect?:
      | Coupon_discountWhereUniqueInput
      | Coupon_discountWhereUniqueInput[];
    update?:
      | Coupon_discountUpdateWithWhereUniqueWithoutUserInput
      | Coupon_discountUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | Coupon_discountUpdateManyWithWhereWithoutUserInput
      | Coupon_discountUpdateManyWithWhereWithoutUserInput[];
    deleteMany?:
      | Coupon_discountScalarWhereInput
      | Coupon_discountScalarWhereInput[];
  };

  export type UsersCreateNestedOneWithoutFishesInput = {
    create?: XOR<
      UsersCreateWithoutFishesInput,
      UsersUncheckedCreateWithoutFishesInput
    >;
    connectOrCreate?: UsersCreateOrConnectWithoutFishesInput;
    connect?: UsersWhereUniqueInput;
  };

  export type TypesCreateNestedOneWithoutFishesInput = {
    create?: XOR<
      TypesCreateWithoutFishesInput,
      TypesUncheckedCreateWithoutFishesInput
    >;
    connectOrCreate?: TypesCreateOrConnectWithoutFishesInput;
    connect?: TypesWhereUniqueInput;
  };

  export type EventsCreateNestedOneWithoutFishesInput = {
    create?: XOR<
      EventsCreateWithoutFishesInput,
      EventsUncheckedCreateWithoutFishesInput
    >;
    connectOrCreate?: EventsCreateOrConnectWithoutFishesInput;
    connect?: EventsWhereUniqueInput;
  };

  export type Discounted_fishCreateNestedManyWithoutFishInput = {
    create?:
      | XOR<
          Discounted_fishCreateWithoutFishInput,
          Discounted_fishUncheckedCreateWithoutFishInput
        >
      | Discounted_fishCreateWithoutFishInput[]
      | Discounted_fishUncheckedCreateWithoutFishInput[];
    connectOrCreate?:
      | Discounted_fishCreateOrConnectWithoutFishInput
      | Discounted_fishCreateOrConnectWithoutFishInput[];
    createMany?: Discounted_fishCreateManyFishInputEnvelope;
    connect?:
      | Discounted_fishWhereUniqueInput
      | Discounted_fishWhereUniqueInput[];
  };

  export type Discounted_fishUncheckedCreateNestedManyWithoutFishInput = {
    create?:
      | XOR<
          Discounted_fishCreateWithoutFishInput,
          Discounted_fishUncheckedCreateWithoutFishInput
        >
      | Discounted_fishCreateWithoutFishInput[]
      | Discounted_fishUncheckedCreateWithoutFishInput[];
    connectOrCreate?:
      | Discounted_fishCreateOrConnectWithoutFishInput
      | Discounted_fishCreateOrConnectWithoutFishInput[];
    createMany?: Discounted_fishCreateManyFishInputEnvelope;
    connect?:
      | Discounted_fishWhereUniqueInput
      | Discounted_fishWhereUniqueInput[];
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
  };

  export type UsersUpdateOneRequiredWithoutFishesNestedInput = {
    create?: XOR<
      UsersCreateWithoutFishesInput,
      UsersUncheckedCreateWithoutFishesInput
    >;
    connectOrCreate?: UsersCreateOrConnectWithoutFishesInput;
    upsert?: UsersUpsertWithoutFishesInput;
    connect?: UsersWhereUniqueInput;
    update?: XOR<
      XOR<
        UsersUpdateToOneWithWhereWithoutFishesInput,
        UsersUpdateWithoutFishesInput
      >,
      UsersUncheckedUpdateWithoutFishesInput
    >;
  };

  export type TypesUpdateOneRequiredWithoutFishesNestedInput = {
    create?: XOR<
      TypesCreateWithoutFishesInput,
      TypesUncheckedCreateWithoutFishesInput
    >;
    connectOrCreate?: TypesCreateOrConnectWithoutFishesInput;
    upsert?: TypesUpsertWithoutFishesInput;
    connect?: TypesWhereUniqueInput;
    update?: XOR<
      XOR<
        TypesUpdateToOneWithWhereWithoutFishesInput,
        TypesUpdateWithoutFishesInput
      >,
      TypesUncheckedUpdateWithoutFishesInput
    >;
  };

  export type EventsUpdateOneRequiredWithoutFishesNestedInput = {
    create?: XOR<
      EventsCreateWithoutFishesInput,
      EventsUncheckedCreateWithoutFishesInput
    >;
    connectOrCreate?: EventsCreateOrConnectWithoutFishesInput;
    upsert?: EventsUpsertWithoutFishesInput;
    connect?: EventsWhereUniqueInput;
    update?: XOR<
      XOR<
        EventsUpdateToOneWithWhereWithoutFishesInput,
        EventsUpdateWithoutFishesInput
      >,
      EventsUncheckedUpdateWithoutFishesInput
    >;
  };

  export type Discounted_fishUpdateManyWithoutFishNestedInput = {
    create?:
      | XOR<
          Discounted_fishCreateWithoutFishInput,
          Discounted_fishUncheckedCreateWithoutFishInput
        >
      | Discounted_fishCreateWithoutFishInput[]
      | Discounted_fishUncheckedCreateWithoutFishInput[];
    connectOrCreate?:
      | Discounted_fishCreateOrConnectWithoutFishInput
      | Discounted_fishCreateOrConnectWithoutFishInput[];
    upsert?:
      | Discounted_fishUpsertWithWhereUniqueWithoutFishInput
      | Discounted_fishUpsertWithWhereUniqueWithoutFishInput[];
    createMany?: Discounted_fishCreateManyFishInputEnvelope;
    set?: Discounted_fishWhereUniqueInput | Discounted_fishWhereUniqueInput[];
    disconnect?:
      | Discounted_fishWhereUniqueInput
      | Discounted_fishWhereUniqueInput[];
    delete?:
      | Discounted_fishWhereUniqueInput
      | Discounted_fishWhereUniqueInput[];
    connect?:
      | Discounted_fishWhereUniqueInput
      | Discounted_fishWhereUniqueInput[];
    update?:
      | Discounted_fishUpdateWithWhereUniqueWithoutFishInput
      | Discounted_fishUpdateWithWhereUniqueWithoutFishInput[];
    updateMany?:
      | Discounted_fishUpdateManyWithWhereWithoutFishInput
      | Discounted_fishUpdateManyWithWhereWithoutFishInput[];
    deleteMany?:
      | Discounted_fishScalarWhereInput
      | Discounted_fishScalarWhereInput[];
  };

  export type Discounted_fishUncheckedUpdateManyWithoutFishNestedInput = {
    create?:
      | XOR<
          Discounted_fishCreateWithoutFishInput,
          Discounted_fishUncheckedCreateWithoutFishInput
        >
      | Discounted_fishCreateWithoutFishInput[]
      | Discounted_fishUncheckedCreateWithoutFishInput[];
    connectOrCreate?:
      | Discounted_fishCreateOrConnectWithoutFishInput
      | Discounted_fishCreateOrConnectWithoutFishInput[];
    upsert?:
      | Discounted_fishUpsertWithWhereUniqueWithoutFishInput
      | Discounted_fishUpsertWithWhereUniqueWithoutFishInput[];
    createMany?: Discounted_fishCreateManyFishInputEnvelope;
    set?: Discounted_fishWhereUniqueInput | Discounted_fishWhereUniqueInput[];
    disconnect?:
      | Discounted_fishWhereUniqueInput
      | Discounted_fishWhereUniqueInput[];
    delete?:
      | Discounted_fishWhereUniqueInput
      | Discounted_fishWhereUniqueInput[];
    connect?:
      | Discounted_fishWhereUniqueInput
      | Discounted_fishWhereUniqueInput[];
    update?:
      | Discounted_fishUpdateWithWhereUniqueWithoutFishInput
      | Discounted_fishUpdateWithWhereUniqueWithoutFishInput[];
    updateMany?:
      | Discounted_fishUpdateManyWithWhereWithoutFishInput
      | Discounted_fishUpdateManyWithWhereWithoutFishInput[];
    deleteMany?:
      | Discounted_fishScalarWhereInput
      | Discounted_fishScalarWhereInput[];
  };

  export type UsersCreateNestedOneWithoutSchedule_shipsInput = {
    create?: XOR<
      UsersCreateWithoutSchedule_shipsInput,
      UsersUncheckedCreateWithoutSchedule_shipsInput
    >;
    connectOrCreate?: UsersCreateOrConnectWithoutSchedule_shipsInput;
    connect?: UsersWhereUniqueInput;
  };

  export type UsersUpdateOneRequiredWithoutSchedule_shipsNestedInput = {
    create?: XOR<
      UsersCreateWithoutSchedule_shipsInput,
      UsersUncheckedCreateWithoutSchedule_shipsInput
    >;
    connectOrCreate?: UsersCreateOrConnectWithoutSchedule_shipsInput;
    upsert?: UsersUpsertWithoutSchedule_shipsInput;
    connect?: UsersWhereUniqueInput;
    update?: XOR<
      XOR<
        UsersUpdateToOneWithWhereWithoutSchedule_shipsInput,
        UsersUpdateWithoutSchedule_shipsInput
      >,
      UsersUncheckedUpdateWithoutSchedule_shipsInput
    >;
  };

  export type FishesCreateNestedManyWithoutTypeInput = {
    create?:
      | XOR<FishesCreateWithoutTypeInput, FishesUncheckedCreateWithoutTypeInput>
      | FishesCreateWithoutTypeInput[]
      | FishesUncheckedCreateWithoutTypeInput[];
    connectOrCreate?:
      | FishesCreateOrConnectWithoutTypeInput
      | FishesCreateOrConnectWithoutTypeInput[];
    createMany?: FishesCreateManyTypeInputEnvelope;
    connect?: FishesWhereUniqueInput | FishesWhereUniqueInput[];
  };

  export type FishesUncheckedCreateNestedManyWithoutTypeInput = {
    create?:
      | XOR<FishesCreateWithoutTypeInput, FishesUncheckedCreateWithoutTypeInput>
      | FishesCreateWithoutTypeInput[]
      | FishesUncheckedCreateWithoutTypeInput[];
    connectOrCreate?:
      | FishesCreateOrConnectWithoutTypeInput
      | FishesCreateOrConnectWithoutTypeInput[];
    createMany?: FishesCreateManyTypeInputEnvelope;
    connect?: FishesWhereUniqueInput | FishesWhereUniqueInput[];
  };

  export type FishesUpdateManyWithoutTypeNestedInput = {
    create?:
      | XOR<FishesCreateWithoutTypeInput, FishesUncheckedCreateWithoutTypeInput>
      | FishesCreateWithoutTypeInput[]
      | FishesUncheckedCreateWithoutTypeInput[];
    connectOrCreate?:
      | FishesCreateOrConnectWithoutTypeInput
      | FishesCreateOrConnectWithoutTypeInput[];
    upsert?:
      | FishesUpsertWithWhereUniqueWithoutTypeInput
      | FishesUpsertWithWhereUniqueWithoutTypeInput[];
    createMany?: FishesCreateManyTypeInputEnvelope;
    set?: FishesWhereUniqueInput | FishesWhereUniqueInput[];
    disconnect?: FishesWhereUniqueInput | FishesWhereUniqueInput[];
    delete?: FishesWhereUniqueInput | FishesWhereUniqueInput[];
    connect?: FishesWhereUniqueInput | FishesWhereUniqueInput[];
    update?:
      | FishesUpdateWithWhereUniqueWithoutTypeInput
      | FishesUpdateWithWhereUniqueWithoutTypeInput[];
    updateMany?:
      | FishesUpdateManyWithWhereWithoutTypeInput
      | FishesUpdateManyWithWhereWithoutTypeInput[];
    deleteMany?: FishesScalarWhereInput | FishesScalarWhereInput[];
  };

  export type FishesUncheckedUpdateManyWithoutTypeNestedInput = {
    create?:
      | XOR<FishesCreateWithoutTypeInput, FishesUncheckedCreateWithoutTypeInput>
      | FishesCreateWithoutTypeInput[]
      | FishesUncheckedCreateWithoutTypeInput[];
    connectOrCreate?:
      | FishesCreateOrConnectWithoutTypeInput
      | FishesCreateOrConnectWithoutTypeInput[];
    upsert?:
      | FishesUpsertWithWhereUniqueWithoutTypeInput
      | FishesUpsertWithWhereUniqueWithoutTypeInput[];
    createMany?: FishesCreateManyTypeInputEnvelope;
    set?: FishesWhereUniqueInput | FishesWhereUniqueInput[];
    disconnect?: FishesWhereUniqueInput | FishesWhereUniqueInput[];
    delete?: FishesWhereUniqueInput | FishesWhereUniqueInput[];
    connect?: FishesWhereUniqueInput | FishesWhereUniqueInput[];
    update?:
      | FishesUpdateWithWhereUniqueWithoutTypeInput
      | FishesUpdateWithWhereUniqueWithoutTypeInput[];
    updateMany?:
      | FishesUpdateManyWithWhereWithoutTypeInput
      | FishesUpdateManyWithWhereWithoutTypeInput[];
    deleteMany?: FishesScalarWhereInput | FishesScalarWhereInput[];
  };

  export type UsersCreateNestedOneWithoutCoupon_discountInput = {
    create?: XOR<
      UsersCreateWithoutCoupon_discountInput,
      UsersUncheckedCreateWithoutCoupon_discountInput
    >;
    connectOrCreate?: UsersCreateOrConnectWithoutCoupon_discountInput;
    connect?: UsersWhereUniqueInput;
  };

  export type UsersUpdateOneRequiredWithoutCoupon_discountNestedInput = {
    create?: XOR<
      UsersCreateWithoutCoupon_discountInput,
      UsersUncheckedCreateWithoutCoupon_discountInput
    >;
    connectOrCreate?: UsersCreateOrConnectWithoutCoupon_discountInput;
    upsert?: UsersUpsertWithoutCoupon_discountInput;
    connect?: UsersWhereUniqueInput;
    update?: XOR<
      XOR<
        UsersUpdateToOneWithWhereWithoutCoupon_discountInput,
        UsersUpdateWithoutCoupon_discountInput
      >,
      UsersUncheckedUpdateWithoutCoupon_discountInput
    >;
  };

  export type FishesCreateNestedManyWithoutEventsInput = {
    create?:
      | XOR<
          FishesCreateWithoutEventsInput,
          FishesUncheckedCreateWithoutEventsInput
        >
      | FishesCreateWithoutEventsInput[]
      | FishesUncheckedCreateWithoutEventsInput[];
    connectOrCreate?:
      | FishesCreateOrConnectWithoutEventsInput
      | FishesCreateOrConnectWithoutEventsInput[];
    createMany?: FishesCreateManyEventsInputEnvelope;
    connect?: FishesWhereUniqueInput | FishesWhereUniqueInput[];
  };

  export type FishesUncheckedCreateNestedManyWithoutEventsInput = {
    create?:
      | XOR<
          FishesCreateWithoutEventsInput,
          FishesUncheckedCreateWithoutEventsInput
        >
      | FishesCreateWithoutEventsInput[]
      | FishesUncheckedCreateWithoutEventsInput[];
    connectOrCreate?:
      | FishesCreateOrConnectWithoutEventsInput
      | FishesCreateOrConnectWithoutEventsInput[];
    createMany?: FishesCreateManyEventsInputEnvelope;
    connect?: FishesWhereUniqueInput | FishesWhereUniqueInput[];
  };

  export type FishesUpdateManyWithoutEventsNestedInput = {
    create?:
      | XOR<
          FishesCreateWithoutEventsInput,
          FishesUncheckedCreateWithoutEventsInput
        >
      | FishesCreateWithoutEventsInput[]
      | FishesUncheckedCreateWithoutEventsInput[];
    connectOrCreate?:
      | FishesCreateOrConnectWithoutEventsInput
      | FishesCreateOrConnectWithoutEventsInput[];
    upsert?:
      | FishesUpsertWithWhereUniqueWithoutEventsInput
      | FishesUpsertWithWhereUniqueWithoutEventsInput[];
    createMany?: FishesCreateManyEventsInputEnvelope;
    set?: FishesWhereUniqueInput | FishesWhereUniqueInput[];
    disconnect?: FishesWhereUniqueInput | FishesWhereUniqueInput[];
    delete?: FishesWhereUniqueInput | FishesWhereUniqueInput[];
    connect?: FishesWhereUniqueInput | FishesWhereUniqueInput[];
    update?:
      | FishesUpdateWithWhereUniqueWithoutEventsInput
      | FishesUpdateWithWhereUniqueWithoutEventsInput[];
    updateMany?:
      | FishesUpdateManyWithWhereWithoutEventsInput
      | FishesUpdateManyWithWhereWithoutEventsInput[];
    deleteMany?: FishesScalarWhereInput | FishesScalarWhereInput[];
  };

  export type FishesUncheckedUpdateManyWithoutEventsNestedInput = {
    create?:
      | XOR<
          FishesCreateWithoutEventsInput,
          FishesUncheckedCreateWithoutEventsInput
        >
      | FishesCreateWithoutEventsInput[]
      | FishesUncheckedCreateWithoutEventsInput[];
    connectOrCreate?:
      | FishesCreateOrConnectWithoutEventsInput
      | FishesCreateOrConnectWithoutEventsInput[];
    upsert?:
      | FishesUpsertWithWhereUniqueWithoutEventsInput
      | FishesUpsertWithWhereUniqueWithoutEventsInput[];
    createMany?: FishesCreateManyEventsInputEnvelope;
    set?: FishesWhereUniqueInput | FishesWhereUniqueInput[];
    disconnect?: FishesWhereUniqueInput | FishesWhereUniqueInput[];
    delete?: FishesWhereUniqueInput | FishesWhereUniqueInput[];
    connect?: FishesWhereUniqueInput | FishesWhereUniqueInput[];
    update?:
      | FishesUpdateWithWhereUniqueWithoutEventsInput
      | FishesUpdateWithWhereUniqueWithoutEventsInput[];
    updateMany?:
      | FishesUpdateManyWithWhereWithoutEventsInput
      | FishesUpdateManyWithWhereWithoutEventsInput[];
    deleteMany?: FishesScalarWhereInput | FishesScalarWhereInput[];
  };

  export type FishesCreateNestedOneWithoutDiscounted_fishInput = {
    create?: XOR<
      FishesCreateWithoutDiscounted_fishInput,
      FishesUncheckedCreateWithoutDiscounted_fishInput
    >;
    connectOrCreate?: FishesCreateOrConnectWithoutDiscounted_fishInput;
    connect?: FishesWhereUniqueInput;
  };

  export type FishesUpdateOneRequiredWithoutDiscounted_fishNestedInput = {
    create?: XOR<
      FishesCreateWithoutDiscounted_fishInput,
      FishesUncheckedCreateWithoutDiscounted_fishInput
    >;
    connectOrCreate?: FishesCreateOrConnectWithoutDiscounted_fishInput;
    upsert?: FishesUpsertWithoutDiscounted_fishInput;
    connect?: FishesWhereUniqueInput;
    update?: XOR<
      XOR<
        FishesUpdateToOneWithWhereWithoutDiscounted_fishInput,
        FishesUpdateWithoutDiscounted_fishInput
      >,
      FishesUncheckedUpdateWithoutDiscounted_fishInput
    >;
  };

  export type UsersCreateNestedManyWithoutRoleInput = {
    create?:
      | XOR<UsersCreateWithoutRoleInput, UsersUncheckedCreateWithoutRoleInput>
      | UsersCreateWithoutRoleInput[]
      | UsersUncheckedCreateWithoutRoleInput[];
    connectOrCreate?:
      | UsersCreateOrConnectWithoutRoleInput
      | UsersCreateOrConnectWithoutRoleInput[];
    createMany?: UsersCreateManyRoleInputEnvelope;
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[];
  };

  export type UsersUncheckedCreateNestedManyWithoutRoleInput = {
    create?:
      | XOR<UsersCreateWithoutRoleInput, UsersUncheckedCreateWithoutRoleInput>
      | UsersCreateWithoutRoleInput[]
      | UsersUncheckedCreateWithoutRoleInput[];
    connectOrCreate?:
      | UsersCreateOrConnectWithoutRoleInput
      | UsersCreateOrConnectWithoutRoleInput[];
    createMany?: UsersCreateManyRoleInputEnvelope;
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[];
  };

  export type UsersUpdateManyWithoutRoleNestedInput = {
    create?:
      | XOR<UsersCreateWithoutRoleInput, UsersUncheckedCreateWithoutRoleInput>
      | UsersCreateWithoutRoleInput[]
      | UsersUncheckedCreateWithoutRoleInput[];
    connectOrCreate?:
      | UsersCreateOrConnectWithoutRoleInput
      | UsersCreateOrConnectWithoutRoleInput[];
    upsert?:
      | UsersUpsertWithWhereUniqueWithoutRoleInput
      | UsersUpsertWithWhereUniqueWithoutRoleInput[];
    createMany?: UsersCreateManyRoleInputEnvelope;
    set?: UsersWhereUniqueInput | UsersWhereUniqueInput[];
    disconnect?: UsersWhereUniqueInput | UsersWhereUniqueInput[];
    delete?: UsersWhereUniqueInput | UsersWhereUniqueInput[];
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[];
    update?:
      | UsersUpdateWithWhereUniqueWithoutRoleInput
      | UsersUpdateWithWhereUniqueWithoutRoleInput[];
    updateMany?:
      | UsersUpdateManyWithWhereWithoutRoleInput
      | UsersUpdateManyWithWhereWithoutRoleInput[];
    deleteMany?: UsersScalarWhereInput | UsersScalarWhereInput[];
  };

  export type UsersUncheckedUpdateManyWithoutRoleNestedInput = {
    create?:
      | XOR<UsersCreateWithoutRoleInput, UsersUncheckedCreateWithoutRoleInput>
      | UsersCreateWithoutRoleInput[]
      | UsersUncheckedCreateWithoutRoleInput[];
    connectOrCreate?:
      | UsersCreateOrConnectWithoutRoleInput
      | UsersCreateOrConnectWithoutRoleInput[];
    upsert?:
      | UsersUpsertWithWhereUniqueWithoutRoleInput
      | UsersUpsertWithWhereUniqueWithoutRoleInput[];
    createMany?: UsersCreateManyRoleInputEnvelope;
    set?: UsersWhereUniqueInput | UsersWhereUniqueInput[];
    disconnect?: UsersWhereUniqueInput | UsersWhereUniqueInput[];
    delete?: UsersWhereUniqueInput | UsersWhereUniqueInput[];
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[];
    update?:
      | UsersUpdateWithWhereUniqueWithoutRoleInput
      | UsersUpdateWithWhereUniqueWithoutRoleInput[];
    updateMany?:
      | UsersUpdateManyWithWhereWithoutRoleInput
      | UsersUpdateManyWithWhereWithoutRoleInput[];
    deleteMany?: UsersScalarWhereInput | UsersScalarWhereInput[];
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolFilter<$PrismaModel> | boolean;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?:
      | NestedStringNullableWithAggregatesFilter<$PrismaModel>
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedBoolFilter<$PrismaModel>;
    _max?: NestedBoolFilter<$PrismaModel>;
  };

  export type RolesCreateWithoutUsersInput = {
    id: number;
    name: string;
    created_date?: Date | string;
  };

  export type RolesUncheckedCreateWithoutUsersInput = {
    id: number;
    name: string;
    created_date?: Date | string;
  };

  export type RolesCreateOrConnectWithoutUsersInput = {
    where: RolesWhereUniqueInput;
    create: XOR<
      RolesCreateWithoutUsersInput,
      RolesUncheckedCreateWithoutUsersInput
    >;
  };

  export type FishesCreateWithoutUserInput = {
    id: string;
    name: string;
    price: number;
    price_usd: number;
    gender: string;
    size: string;
    images1: string;
    images2?: string | null;
    images3?: string | null;
    videoURL?: string | null;
    isAvailable: boolean;
    isEvent: boolean;
    isNewArrival: boolean;
    created_date?: Date | string;
    type: TypesCreateNestedOneWithoutFishesInput;
    events: EventsCreateNestedOneWithoutFishesInput;
    discounted_fish?: Discounted_fishCreateNestedManyWithoutFishInput;
  };

  export type FishesUncheckedCreateWithoutUserInput = {
    id: string;
    type_id: string;
    event_id: string;
    name: string;
    price: number;
    price_usd: number;
    gender: string;
    size: string;
    images1: string;
    images2?: string | null;
    images3?: string | null;
    videoURL?: string | null;
    isAvailable: boolean;
    isEvent: boolean;
    isNewArrival: boolean;
    created_date?: Date | string;
    discounted_fish?: Discounted_fishUncheckedCreateNestedManyWithoutFishInput;
  };

  export type FishesCreateOrConnectWithoutUserInput = {
    where: FishesWhereUniqueInput;
    create: XOR<
      FishesCreateWithoutUserInput,
      FishesUncheckedCreateWithoutUserInput
    >;
  };

  export type FishesCreateManyUserInputEnvelope = {
    data: FishesCreateManyUserInput | FishesCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type Schedule_shipsCreateWithoutUserInput = {
    id: string;
    scheduleName: string;
    scheduleImage: string;
    scheduleDescription?: string | null;
    created_date?: Date | string;
  };

  export type Schedule_shipsUncheckedCreateWithoutUserInput = {
    id: string;
    scheduleName: string;
    scheduleImage: string;
    scheduleDescription?: string | null;
    created_date?: Date | string;
  };

  export type Schedule_shipsCreateOrConnectWithoutUserInput = {
    where: Schedule_shipsWhereUniqueInput;
    create: XOR<
      Schedule_shipsCreateWithoutUserInput,
      Schedule_shipsUncheckedCreateWithoutUserInput
    >;
  };

  export type Schedule_shipsCreateManyUserInputEnvelope = {
    data:
      | Schedule_shipsCreateManyUserInput
      | Schedule_shipsCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type Coupon_discountCreateWithoutUserInput = {
    id: string;
    discountCode: string;
    discountMinTransaction_idr: number;
    discountMinTransaction_usd: number;
    discountMinTransaction_fish: number;
    discountPercentage: number;
    discountMaxPrice_idr: number;
    discountMaxPrice_usd: number;
    expirationDate: Date | string;
    created_date?: Date | string;
  };

  export type Coupon_discountUncheckedCreateWithoutUserInput = {
    id: string;
    discountCode: string;
    discountMinTransaction_idr: number;
    discountMinTransaction_usd: number;
    discountMinTransaction_fish: number;
    discountPercentage: number;
    discountMaxPrice_idr: number;
    discountMaxPrice_usd: number;
    expirationDate: Date | string;
    created_date?: Date | string;
  };

  export type Coupon_discountCreateOrConnectWithoutUserInput = {
    where: Coupon_discountWhereUniqueInput;
    create: XOR<
      Coupon_discountCreateWithoutUserInput,
      Coupon_discountUncheckedCreateWithoutUserInput
    >;
  };

  export type Coupon_discountCreateManyUserInputEnvelope = {
    data:
      | Coupon_discountCreateManyUserInput
      | Coupon_discountCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type RolesUpsertWithoutUsersInput = {
    update: XOR<
      RolesUpdateWithoutUsersInput,
      RolesUncheckedUpdateWithoutUsersInput
    >;
    create: XOR<
      RolesCreateWithoutUsersInput,
      RolesUncheckedCreateWithoutUsersInput
    >;
    where?: RolesWhereInput;
  };

  export type RolesUpdateToOneWithWhereWithoutUsersInput = {
    where?: RolesWhereInput;
    data: XOR<
      RolesUpdateWithoutUsersInput,
      RolesUncheckedUpdateWithoutUsersInput
    >;
  };

  export type RolesUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type RolesUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type FishesUpsertWithWhereUniqueWithoutUserInput = {
    where: FishesWhereUniqueInput;
    update: XOR<
      FishesUpdateWithoutUserInput,
      FishesUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      FishesCreateWithoutUserInput,
      FishesUncheckedCreateWithoutUserInput
    >;
  };

  export type FishesUpdateWithWhereUniqueWithoutUserInput = {
    where: FishesWhereUniqueInput;
    data: XOR<
      FishesUpdateWithoutUserInput,
      FishesUncheckedUpdateWithoutUserInput
    >;
  };

  export type FishesUpdateManyWithWhereWithoutUserInput = {
    where: FishesScalarWhereInput;
    data: XOR<
      FishesUpdateManyMutationInput,
      FishesUncheckedUpdateManyWithoutUserInput
    >;
  };

  export type FishesScalarWhereInput = {
    AND?: FishesScalarWhereInput | FishesScalarWhereInput[];
    OR?: FishesScalarWhereInput[];
    NOT?: FishesScalarWhereInput | FishesScalarWhereInput[];
    id?: StringFilter<"Fishes"> | string;
    user_id?: StringFilter<"Fishes"> | string;
    type_id?: StringFilter<"Fishes"> | string;
    event_id?: StringFilter<"Fishes"> | string;
    name?: StringFilter<"Fishes"> | string;
    price?: IntFilter<"Fishes"> | number;
    price_usd?: IntFilter<"Fishes"> | number;
    gender?: StringFilter<"Fishes"> | string;
    size?: StringFilter<"Fishes"> | string;
    images1?: StringFilter<"Fishes"> | string;
    images2?: StringNullableFilter<"Fishes"> | string | null;
    images3?: StringNullableFilter<"Fishes"> | string | null;
    videoURL?: StringNullableFilter<"Fishes"> | string | null;
    isAvailable?: BoolFilter<"Fishes"> | boolean;
    isEvent?: BoolFilter<"Fishes"> | boolean;
    isNewArrival?: BoolFilter<"Fishes"> | boolean;
    created_date?: DateTimeFilter<"Fishes"> | Date | string;
  };

  export type Schedule_shipsUpsertWithWhereUniqueWithoutUserInput = {
    where: Schedule_shipsWhereUniqueInput;
    update: XOR<
      Schedule_shipsUpdateWithoutUserInput,
      Schedule_shipsUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      Schedule_shipsCreateWithoutUserInput,
      Schedule_shipsUncheckedCreateWithoutUserInput
    >;
  };

  export type Schedule_shipsUpdateWithWhereUniqueWithoutUserInput = {
    where: Schedule_shipsWhereUniqueInput;
    data: XOR<
      Schedule_shipsUpdateWithoutUserInput,
      Schedule_shipsUncheckedUpdateWithoutUserInput
    >;
  };

  export type Schedule_shipsUpdateManyWithWhereWithoutUserInput = {
    where: Schedule_shipsScalarWhereInput;
    data: XOR<
      Schedule_shipsUpdateManyMutationInput,
      Schedule_shipsUncheckedUpdateManyWithoutUserInput
    >;
  };

  export type Schedule_shipsScalarWhereInput = {
    AND?: Schedule_shipsScalarWhereInput | Schedule_shipsScalarWhereInput[];
    OR?: Schedule_shipsScalarWhereInput[];
    NOT?: Schedule_shipsScalarWhereInput | Schedule_shipsScalarWhereInput[];
    id?: StringFilter<"Schedule_ships"> | string;
    user_id?: StringFilter<"Schedule_ships"> | string;
    scheduleName?: StringFilter<"Schedule_ships"> | string;
    scheduleImage?: StringFilter<"Schedule_ships"> | string;
    scheduleDescription?:
      | StringNullableFilter<"Schedule_ships">
      | string
      | null;
    created_date?: DateTimeFilter<"Schedule_ships"> | Date | string;
  };

  export type Coupon_discountUpsertWithWhereUniqueWithoutUserInput = {
    where: Coupon_discountWhereUniqueInput;
    update: XOR<
      Coupon_discountUpdateWithoutUserInput,
      Coupon_discountUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      Coupon_discountCreateWithoutUserInput,
      Coupon_discountUncheckedCreateWithoutUserInput
    >;
  };

  export type Coupon_discountUpdateWithWhereUniqueWithoutUserInput = {
    where: Coupon_discountWhereUniqueInput;
    data: XOR<
      Coupon_discountUpdateWithoutUserInput,
      Coupon_discountUncheckedUpdateWithoutUserInput
    >;
  };

  export type Coupon_discountUpdateManyWithWhereWithoutUserInput = {
    where: Coupon_discountScalarWhereInput;
    data: XOR<
      Coupon_discountUpdateManyMutationInput,
      Coupon_discountUncheckedUpdateManyWithoutUserInput
    >;
  };

  export type Coupon_discountScalarWhereInput = {
    AND?: Coupon_discountScalarWhereInput | Coupon_discountScalarWhereInput[];
    OR?: Coupon_discountScalarWhereInput[];
    NOT?: Coupon_discountScalarWhereInput | Coupon_discountScalarWhereInput[];
    id?: StringFilter<"Coupon_discount"> | string;
    user_id?: StringFilter<"Coupon_discount"> | string;
    discountCode?: StringFilter<"Coupon_discount"> | string;
    discountMinTransaction_idr?: IntFilter<"Coupon_discount"> | number;
    discountMinTransaction_usd?: IntFilter<"Coupon_discount"> | number;
    discountMinTransaction_fish?: IntFilter<"Coupon_discount"> | number;
    discountPercentage?: IntFilter<"Coupon_discount"> | number;
    discountMaxPrice_idr?: IntFilter<"Coupon_discount"> | number;
    discountMaxPrice_usd?: IntFilter<"Coupon_discount"> | number;
    expirationDate?: DateTimeFilter<"Coupon_discount"> | Date | string;
    created_date?: DateTimeFilter<"Coupon_discount"> | Date | string;
  };

  export type UsersCreateWithoutFishesInput = {
    id: string;
    username: string;
    password: string;
    created_date?: Date | string;
    role?: RolesCreateNestedOneWithoutUsersInput;
    Schedule_ships?: Schedule_shipsCreateNestedManyWithoutUserInput;
    Coupon_discount?: Coupon_discountCreateNestedManyWithoutUserInput;
  };

  export type UsersUncheckedCreateWithoutFishesInput = {
    id: string;
    role_id?: number;
    username: string;
    password: string;
    created_date?: Date | string;
    Schedule_ships?: Schedule_shipsUncheckedCreateNestedManyWithoutUserInput;
    Coupon_discount?: Coupon_discountUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UsersCreateOrConnectWithoutFishesInput = {
    where: UsersWhereUniqueInput;
    create: XOR<
      UsersCreateWithoutFishesInput,
      UsersUncheckedCreateWithoutFishesInput
    >;
  };

  export type TypesCreateWithoutFishesInput = {
    id: string;
    name: string;
    created_date?: Date | string;
  };

  export type TypesUncheckedCreateWithoutFishesInput = {
    id: string;
    name: string;
    created_date?: Date | string;
  };

  export type TypesCreateOrConnectWithoutFishesInput = {
    where: TypesWhereUniqueInput;
    create: XOR<
      TypesCreateWithoutFishesInput,
      TypesUncheckedCreateWithoutFishesInput
    >;
  };

  export type EventsCreateWithoutFishesInput = {
    id: string;
    name: string;
    created_date?: Date | string;
  };

  export type EventsUncheckedCreateWithoutFishesInput = {
    id: string;
    name: string;
    created_date?: Date | string;
  };

  export type EventsCreateOrConnectWithoutFishesInput = {
    where: EventsWhereUniqueInput;
    create: XOR<
      EventsCreateWithoutFishesInput,
      EventsUncheckedCreateWithoutFishesInput
    >;
  };

  export type Discounted_fishCreateWithoutFishInput = {
    id: string;
    isDiscount: boolean;
    discountPercentage: number;
    discountPriceIdr: number;
    discountPriceUsd: number;
    created_date?: Date | string;
  };

  export type Discounted_fishUncheckedCreateWithoutFishInput = {
    id: string;
    isDiscount: boolean;
    discountPercentage: number;
    discountPriceIdr: number;
    discountPriceUsd: number;
    created_date?: Date | string;
  };

  export type Discounted_fishCreateOrConnectWithoutFishInput = {
    where: Discounted_fishWhereUniqueInput;
    create: XOR<
      Discounted_fishCreateWithoutFishInput,
      Discounted_fishUncheckedCreateWithoutFishInput
    >;
  };

  export type Discounted_fishCreateManyFishInputEnvelope = {
    data:
      | Discounted_fishCreateManyFishInput
      | Discounted_fishCreateManyFishInput[];
    skipDuplicates?: boolean;
  };

  export type UsersUpsertWithoutFishesInput = {
    update: XOR<
      UsersUpdateWithoutFishesInput,
      UsersUncheckedUpdateWithoutFishesInput
    >;
    create: XOR<
      UsersCreateWithoutFishesInput,
      UsersUncheckedCreateWithoutFishesInput
    >;
    where?: UsersWhereInput;
  };

  export type UsersUpdateToOneWithWhereWithoutFishesInput = {
    where?: UsersWhereInput;
    data: XOR<
      UsersUpdateWithoutFishesInput,
      UsersUncheckedUpdateWithoutFishesInput
    >;
  };

  export type UsersUpdateWithoutFishesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    role?: RolesUpdateOneRequiredWithoutUsersNestedInput;
    Schedule_ships?: Schedule_shipsUpdateManyWithoutUserNestedInput;
    Coupon_discount?: Coupon_discountUpdateManyWithoutUserNestedInput;
  };

  export type UsersUncheckedUpdateWithoutFishesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    role_id?: IntFieldUpdateOperationsInput | number;
    username?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    Schedule_ships?: Schedule_shipsUncheckedUpdateManyWithoutUserNestedInput;
    Coupon_discount?: Coupon_discountUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type TypesUpsertWithoutFishesInput = {
    update: XOR<
      TypesUpdateWithoutFishesInput,
      TypesUncheckedUpdateWithoutFishesInput
    >;
    create: XOR<
      TypesCreateWithoutFishesInput,
      TypesUncheckedCreateWithoutFishesInput
    >;
    where?: TypesWhereInput;
  };

  export type TypesUpdateToOneWithWhereWithoutFishesInput = {
    where?: TypesWhereInput;
    data: XOR<
      TypesUpdateWithoutFishesInput,
      TypesUncheckedUpdateWithoutFishesInput
    >;
  };

  export type TypesUpdateWithoutFishesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type TypesUncheckedUpdateWithoutFishesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type EventsUpsertWithoutFishesInput = {
    update: XOR<
      EventsUpdateWithoutFishesInput,
      EventsUncheckedUpdateWithoutFishesInput
    >;
    create: XOR<
      EventsCreateWithoutFishesInput,
      EventsUncheckedCreateWithoutFishesInput
    >;
    where?: EventsWhereInput;
  };

  export type EventsUpdateToOneWithWhereWithoutFishesInput = {
    where?: EventsWhereInput;
    data: XOR<
      EventsUpdateWithoutFishesInput,
      EventsUncheckedUpdateWithoutFishesInput
    >;
  };

  export type EventsUpdateWithoutFishesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type EventsUncheckedUpdateWithoutFishesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type Discounted_fishUpsertWithWhereUniqueWithoutFishInput = {
    where: Discounted_fishWhereUniqueInput;
    update: XOR<
      Discounted_fishUpdateWithoutFishInput,
      Discounted_fishUncheckedUpdateWithoutFishInput
    >;
    create: XOR<
      Discounted_fishCreateWithoutFishInput,
      Discounted_fishUncheckedCreateWithoutFishInput
    >;
  };

  export type Discounted_fishUpdateWithWhereUniqueWithoutFishInput = {
    where: Discounted_fishWhereUniqueInput;
    data: XOR<
      Discounted_fishUpdateWithoutFishInput,
      Discounted_fishUncheckedUpdateWithoutFishInput
    >;
  };

  export type Discounted_fishUpdateManyWithWhereWithoutFishInput = {
    where: Discounted_fishScalarWhereInput;
    data: XOR<
      Discounted_fishUpdateManyMutationInput,
      Discounted_fishUncheckedUpdateManyWithoutFishInput
    >;
  };

  export type Discounted_fishScalarWhereInput = {
    AND?: Discounted_fishScalarWhereInput | Discounted_fishScalarWhereInput[];
    OR?: Discounted_fishScalarWhereInput[];
    NOT?: Discounted_fishScalarWhereInput | Discounted_fishScalarWhereInput[];
    id?: StringFilter<"Discounted_fish"> | string;
    fish_id?: StringFilter<"Discounted_fish"> | string;
    isDiscount?: BoolFilter<"Discounted_fish"> | boolean;
    discountPercentage?: IntFilter<"Discounted_fish"> | number;
    discountPriceIdr?: IntFilter<"Discounted_fish"> | number;
    discountPriceUsd?: IntFilter<"Discounted_fish"> | number;
    created_date?: DateTimeFilter<"Discounted_fish"> | Date | string;
  };

  export type UsersCreateWithoutSchedule_shipsInput = {
    id: string;
    username: string;
    password: string;
    created_date?: Date | string;
    role?: RolesCreateNestedOneWithoutUsersInput;
    Fishes?: FishesCreateNestedManyWithoutUserInput;
    Coupon_discount?: Coupon_discountCreateNestedManyWithoutUserInput;
  };

  export type UsersUncheckedCreateWithoutSchedule_shipsInput = {
    id: string;
    role_id?: number;
    username: string;
    password: string;
    created_date?: Date | string;
    Fishes?: FishesUncheckedCreateNestedManyWithoutUserInput;
    Coupon_discount?: Coupon_discountUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UsersCreateOrConnectWithoutSchedule_shipsInput = {
    where: UsersWhereUniqueInput;
    create: XOR<
      UsersCreateWithoutSchedule_shipsInput,
      UsersUncheckedCreateWithoutSchedule_shipsInput
    >;
  };

  export type UsersUpsertWithoutSchedule_shipsInput = {
    update: XOR<
      UsersUpdateWithoutSchedule_shipsInput,
      UsersUncheckedUpdateWithoutSchedule_shipsInput
    >;
    create: XOR<
      UsersCreateWithoutSchedule_shipsInput,
      UsersUncheckedCreateWithoutSchedule_shipsInput
    >;
    where?: UsersWhereInput;
  };

  export type UsersUpdateToOneWithWhereWithoutSchedule_shipsInput = {
    where?: UsersWhereInput;
    data: XOR<
      UsersUpdateWithoutSchedule_shipsInput,
      UsersUncheckedUpdateWithoutSchedule_shipsInput
    >;
  };

  export type UsersUpdateWithoutSchedule_shipsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    role?: RolesUpdateOneRequiredWithoutUsersNestedInput;
    Fishes?: FishesUpdateManyWithoutUserNestedInput;
    Coupon_discount?: Coupon_discountUpdateManyWithoutUserNestedInput;
  };

  export type UsersUncheckedUpdateWithoutSchedule_shipsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    role_id?: IntFieldUpdateOperationsInput | number;
    username?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    Fishes?: FishesUncheckedUpdateManyWithoutUserNestedInput;
    Coupon_discount?: Coupon_discountUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type FishesCreateWithoutTypeInput = {
    id: string;
    name: string;
    price: number;
    price_usd: number;
    gender: string;
    size: string;
    images1: string;
    images2?: string | null;
    images3?: string | null;
    videoURL?: string | null;
    isAvailable: boolean;
    isEvent: boolean;
    isNewArrival: boolean;
    created_date?: Date | string;
    user: UsersCreateNestedOneWithoutFishesInput;
    events: EventsCreateNestedOneWithoutFishesInput;
    discounted_fish?: Discounted_fishCreateNestedManyWithoutFishInput;
  };

  export type FishesUncheckedCreateWithoutTypeInput = {
    id: string;
    user_id: string;
    event_id: string;
    name: string;
    price: number;
    price_usd: number;
    gender: string;
    size: string;
    images1: string;
    images2?: string | null;
    images3?: string | null;
    videoURL?: string | null;
    isAvailable: boolean;
    isEvent: boolean;
    isNewArrival: boolean;
    created_date?: Date | string;
    discounted_fish?: Discounted_fishUncheckedCreateNestedManyWithoutFishInput;
  };

  export type FishesCreateOrConnectWithoutTypeInput = {
    where: FishesWhereUniqueInput;
    create: XOR<
      FishesCreateWithoutTypeInput,
      FishesUncheckedCreateWithoutTypeInput
    >;
  };

  export type FishesCreateManyTypeInputEnvelope = {
    data: FishesCreateManyTypeInput | FishesCreateManyTypeInput[];
    skipDuplicates?: boolean;
  };

  export type FishesUpsertWithWhereUniqueWithoutTypeInput = {
    where: FishesWhereUniqueInput;
    update: XOR<
      FishesUpdateWithoutTypeInput,
      FishesUncheckedUpdateWithoutTypeInput
    >;
    create: XOR<
      FishesCreateWithoutTypeInput,
      FishesUncheckedCreateWithoutTypeInput
    >;
  };

  export type FishesUpdateWithWhereUniqueWithoutTypeInput = {
    where: FishesWhereUniqueInput;
    data: XOR<
      FishesUpdateWithoutTypeInput,
      FishesUncheckedUpdateWithoutTypeInput
    >;
  };

  export type FishesUpdateManyWithWhereWithoutTypeInput = {
    where: FishesScalarWhereInput;
    data: XOR<
      FishesUpdateManyMutationInput,
      FishesUncheckedUpdateManyWithoutTypeInput
    >;
  };

  export type UsersCreateWithoutCoupon_discountInput = {
    id: string;
    username: string;
    password: string;
    created_date?: Date | string;
    role?: RolesCreateNestedOneWithoutUsersInput;
    Fishes?: FishesCreateNestedManyWithoutUserInput;
    Schedule_ships?: Schedule_shipsCreateNestedManyWithoutUserInput;
  };

  export type UsersUncheckedCreateWithoutCoupon_discountInput = {
    id: string;
    role_id?: number;
    username: string;
    password: string;
    created_date?: Date | string;
    Fishes?: FishesUncheckedCreateNestedManyWithoutUserInput;
    Schedule_ships?: Schedule_shipsUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UsersCreateOrConnectWithoutCoupon_discountInput = {
    where: UsersWhereUniqueInput;
    create: XOR<
      UsersCreateWithoutCoupon_discountInput,
      UsersUncheckedCreateWithoutCoupon_discountInput
    >;
  };

  export type UsersUpsertWithoutCoupon_discountInput = {
    update: XOR<
      UsersUpdateWithoutCoupon_discountInput,
      UsersUncheckedUpdateWithoutCoupon_discountInput
    >;
    create: XOR<
      UsersCreateWithoutCoupon_discountInput,
      UsersUncheckedCreateWithoutCoupon_discountInput
    >;
    where?: UsersWhereInput;
  };

  export type UsersUpdateToOneWithWhereWithoutCoupon_discountInput = {
    where?: UsersWhereInput;
    data: XOR<
      UsersUpdateWithoutCoupon_discountInput,
      UsersUncheckedUpdateWithoutCoupon_discountInput
    >;
  };

  export type UsersUpdateWithoutCoupon_discountInput = {
    id?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    role?: RolesUpdateOneRequiredWithoutUsersNestedInput;
    Fishes?: FishesUpdateManyWithoutUserNestedInput;
    Schedule_ships?: Schedule_shipsUpdateManyWithoutUserNestedInput;
  };

  export type UsersUncheckedUpdateWithoutCoupon_discountInput = {
    id?: StringFieldUpdateOperationsInput | string;
    role_id?: IntFieldUpdateOperationsInput | number;
    username?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    Fishes?: FishesUncheckedUpdateManyWithoutUserNestedInput;
    Schedule_ships?: Schedule_shipsUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type FishesCreateWithoutEventsInput = {
    id: string;
    name: string;
    price: number;
    price_usd: number;
    gender: string;
    size: string;
    images1: string;
    images2?: string | null;
    images3?: string | null;
    videoURL?: string | null;
    isAvailable: boolean;
    isEvent: boolean;
    isNewArrival: boolean;
    created_date?: Date | string;
    user: UsersCreateNestedOneWithoutFishesInput;
    type: TypesCreateNestedOneWithoutFishesInput;
    discounted_fish?: Discounted_fishCreateNestedManyWithoutFishInput;
  };

  export type FishesUncheckedCreateWithoutEventsInput = {
    id: string;
    user_id: string;
    type_id: string;
    name: string;
    price: number;
    price_usd: number;
    gender: string;
    size: string;
    images1: string;
    images2?: string | null;
    images3?: string | null;
    videoURL?: string | null;
    isAvailable: boolean;
    isEvent: boolean;
    isNewArrival: boolean;
    created_date?: Date | string;
    discounted_fish?: Discounted_fishUncheckedCreateNestedManyWithoutFishInput;
  };

  export type FishesCreateOrConnectWithoutEventsInput = {
    where: FishesWhereUniqueInput;
    create: XOR<
      FishesCreateWithoutEventsInput,
      FishesUncheckedCreateWithoutEventsInput
    >;
  };

  export type FishesCreateManyEventsInputEnvelope = {
    data: FishesCreateManyEventsInput | FishesCreateManyEventsInput[];
    skipDuplicates?: boolean;
  };

  export type FishesUpsertWithWhereUniqueWithoutEventsInput = {
    where: FishesWhereUniqueInput;
    update: XOR<
      FishesUpdateWithoutEventsInput,
      FishesUncheckedUpdateWithoutEventsInput
    >;
    create: XOR<
      FishesCreateWithoutEventsInput,
      FishesUncheckedCreateWithoutEventsInput
    >;
  };

  export type FishesUpdateWithWhereUniqueWithoutEventsInput = {
    where: FishesWhereUniqueInput;
    data: XOR<
      FishesUpdateWithoutEventsInput,
      FishesUncheckedUpdateWithoutEventsInput
    >;
  };

  export type FishesUpdateManyWithWhereWithoutEventsInput = {
    where: FishesScalarWhereInput;
    data: XOR<
      FishesUpdateManyMutationInput,
      FishesUncheckedUpdateManyWithoutEventsInput
    >;
  };

  export type FishesCreateWithoutDiscounted_fishInput = {
    id: string;
    name: string;
    price: number;
    price_usd: number;
    gender: string;
    size: string;
    images1: string;
    images2?: string | null;
    images3?: string | null;
    videoURL?: string | null;
    isAvailable: boolean;
    isEvent: boolean;
    isNewArrival: boolean;
    created_date?: Date | string;
    user: UsersCreateNestedOneWithoutFishesInput;
    type: TypesCreateNestedOneWithoutFishesInput;
    events: EventsCreateNestedOneWithoutFishesInput;
  };

  export type FishesUncheckedCreateWithoutDiscounted_fishInput = {
    id: string;
    user_id: string;
    type_id: string;
    event_id: string;
    name: string;
    price: number;
    price_usd: number;
    gender: string;
    size: string;
    images1: string;
    images2?: string | null;
    images3?: string | null;
    videoURL?: string | null;
    isAvailable: boolean;
    isEvent: boolean;
    isNewArrival: boolean;
    created_date?: Date | string;
  };

  export type FishesCreateOrConnectWithoutDiscounted_fishInput = {
    where: FishesWhereUniqueInput;
    create: XOR<
      FishesCreateWithoutDiscounted_fishInput,
      FishesUncheckedCreateWithoutDiscounted_fishInput
    >;
  };

  export type FishesUpsertWithoutDiscounted_fishInput = {
    update: XOR<
      FishesUpdateWithoutDiscounted_fishInput,
      FishesUncheckedUpdateWithoutDiscounted_fishInput
    >;
    create: XOR<
      FishesCreateWithoutDiscounted_fishInput,
      FishesUncheckedCreateWithoutDiscounted_fishInput
    >;
    where?: FishesWhereInput;
  };

  export type FishesUpdateToOneWithWhereWithoutDiscounted_fishInput = {
    where?: FishesWhereInput;
    data: XOR<
      FishesUpdateWithoutDiscounted_fishInput,
      FishesUncheckedUpdateWithoutDiscounted_fishInput
    >;
  };

  export type FishesUpdateWithoutDiscounted_fishInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    price?: IntFieldUpdateOperationsInput | number;
    price_usd?: IntFieldUpdateOperationsInput | number;
    gender?: StringFieldUpdateOperationsInput | string;
    size?: StringFieldUpdateOperationsInput | string;
    images1?: StringFieldUpdateOperationsInput | string;
    images2?: NullableStringFieldUpdateOperationsInput | string | null;
    images3?: NullableStringFieldUpdateOperationsInput | string | null;
    videoURL?: NullableStringFieldUpdateOperationsInput | string | null;
    isAvailable?: BoolFieldUpdateOperationsInput | boolean;
    isEvent?: BoolFieldUpdateOperationsInput | boolean;
    isNewArrival?: BoolFieldUpdateOperationsInput | boolean;
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UsersUpdateOneRequiredWithoutFishesNestedInput;
    type?: TypesUpdateOneRequiredWithoutFishesNestedInput;
    events?: EventsUpdateOneRequiredWithoutFishesNestedInput;
  };

  export type FishesUncheckedUpdateWithoutDiscounted_fishInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    type_id?: StringFieldUpdateOperationsInput | string;
    event_id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    price?: IntFieldUpdateOperationsInput | number;
    price_usd?: IntFieldUpdateOperationsInput | number;
    gender?: StringFieldUpdateOperationsInput | string;
    size?: StringFieldUpdateOperationsInput | string;
    images1?: StringFieldUpdateOperationsInput | string;
    images2?: NullableStringFieldUpdateOperationsInput | string | null;
    images3?: NullableStringFieldUpdateOperationsInput | string | null;
    videoURL?: NullableStringFieldUpdateOperationsInput | string | null;
    isAvailable?: BoolFieldUpdateOperationsInput | boolean;
    isEvent?: BoolFieldUpdateOperationsInput | boolean;
    isNewArrival?: BoolFieldUpdateOperationsInput | boolean;
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UsersCreateWithoutRoleInput = {
    id: string;
    username: string;
    password: string;
    created_date?: Date | string;
    Fishes?: FishesCreateNestedManyWithoutUserInput;
    Schedule_ships?: Schedule_shipsCreateNestedManyWithoutUserInput;
    Coupon_discount?: Coupon_discountCreateNestedManyWithoutUserInput;
  };

  export type UsersUncheckedCreateWithoutRoleInput = {
    id: string;
    username: string;
    password: string;
    created_date?: Date | string;
    Fishes?: FishesUncheckedCreateNestedManyWithoutUserInput;
    Schedule_ships?: Schedule_shipsUncheckedCreateNestedManyWithoutUserInput;
    Coupon_discount?: Coupon_discountUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UsersCreateOrConnectWithoutRoleInput = {
    where: UsersWhereUniqueInput;
    create: XOR<
      UsersCreateWithoutRoleInput,
      UsersUncheckedCreateWithoutRoleInput
    >;
  };

  export type UsersCreateManyRoleInputEnvelope = {
    data: UsersCreateManyRoleInput | UsersCreateManyRoleInput[];
    skipDuplicates?: boolean;
  };

  export type UsersUpsertWithWhereUniqueWithoutRoleInput = {
    where: UsersWhereUniqueInput;
    update: XOR<
      UsersUpdateWithoutRoleInput,
      UsersUncheckedUpdateWithoutRoleInput
    >;
    create: XOR<
      UsersCreateWithoutRoleInput,
      UsersUncheckedCreateWithoutRoleInput
    >;
  };

  export type UsersUpdateWithWhereUniqueWithoutRoleInput = {
    where: UsersWhereUniqueInput;
    data: XOR<
      UsersUpdateWithoutRoleInput,
      UsersUncheckedUpdateWithoutRoleInput
    >;
  };

  export type UsersUpdateManyWithWhereWithoutRoleInput = {
    where: UsersScalarWhereInput;
    data: XOR<
      UsersUpdateManyMutationInput,
      UsersUncheckedUpdateManyWithoutRoleInput
    >;
  };

  export type UsersScalarWhereInput = {
    AND?: UsersScalarWhereInput | UsersScalarWhereInput[];
    OR?: UsersScalarWhereInput[];
    NOT?: UsersScalarWhereInput | UsersScalarWhereInput[];
    id?: StringFilter<"Users"> | string;
    role_id?: IntFilter<"Users"> | number;
    username?: StringFilter<"Users"> | string;
    password?: StringFilter<"Users"> | string;
    created_date?: DateTimeFilter<"Users"> | Date | string;
  };

  export type FishesCreateManyUserInput = {
    id: string;
    type_id: string;
    event_id: string;
    name: string;
    price: number;
    price_usd: number;
    gender: string;
    size: string;
    images1: string;
    images2?: string | null;
    images3?: string | null;
    videoURL?: string | null;
    isAvailable: boolean;
    isEvent: boolean;
    isNewArrival: boolean;
    created_date?: Date | string;
  };

  export type Schedule_shipsCreateManyUserInput = {
    id: string;
    scheduleName: string;
    scheduleImage: string;
    scheduleDescription?: string | null;
    created_date?: Date | string;
  };

  export type Coupon_discountCreateManyUserInput = {
    id: string;
    discountCode: string;
    discountMinTransaction_idr: number;
    discountMinTransaction_usd: number;
    discountMinTransaction_fish: number;
    discountPercentage: number;
    discountMaxPrice_idr: number;
    discountMaxPrice_usd: number;
    expirationDate: Date | string;
    created_date?: Date | string;
  };

  export type FishesUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    price?: IntFieldUpdateOperationsInput | number;
    price_usd?: IntFieldUpdateOperationsInput | number;
    gender?: StringFieldUpdateOperationsInput | string;
    size?: StringFieldUpdateOperationsInput | string;
    images1?: StringFieldUpdateOperationsInput | string;
    images2?: NullableStringFieldUpdateOperationsInput | string | null;
    images3?: NullableStringFieldUpdateOperationsInput | string | null;
    videoURL?: NullableStringFieldUpdateOperationsInput | string | null;
    isAvailable?: BoolFieldUpdateOperationsInput | boolean;
    isEvent?: BoolFieldUpdateOperationsInput | boolean;
    isNewArrival?: BoolFieldUpdateOperationsInput | boolean;
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    type?: TypesUpdateOneRequiredWithoutFishesNestedInput;
    events?: EventsUpdateOneRequiredWithoutFishesNestedInput;
    discounted_fish?: Discounted_fishUpdateManyWithoutFishNestedInput;
  };

  export type FishesUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    type_id?: StringFieldUpdateOperationsInput | string;
    event_id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    price?: IntFieldUpdateOperationsInput | number;
    price_usd?: IntFieldUpdateOperationsInput | number;
    gender?: StringFieldUpdateOperationsInput | string;
    size?: StringFieldUpdateOperationsInput | string;
    images1?: StringFieldUpdateOperationsInput | string;
    images2?: NullableStringFieldUpdateOperationsInput | string | null;
    images3?: NullableStringFieldUpdateOperationsInput | string | null;
    videoURL?: NullableStringFieldUpdateOperationsInput | string | null;
    isAvailable?: BoolFieldUpdateOperationsInput | boolean;
    isEvent?: BoolFieldUpdateOperationsInput | boolean;
    isNewArrival?: BoolFieldUpdateOperationsInput | boolean;
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    discounted_fish?: Discounted_fishUncheckedUpdateManyWithoutFishNestedInput;
  };

  export type FishesUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    type_id?: StringFieldUpdateOperationsInput | string;
    event_id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    price?: IntFieldUpdateOperationsInput | number;
    price_usd?: IntFieldUpdateOperationsInput | number;
    gender?: StringFieldUpdateOperationsInput | string;
    size?: StringFieldUpdateOperationsInput | string;
    images1?: StringFieldUpdateOperationsInput | string;
    images2?: NullableStringFieldUpdateOperationsInput | string | null;
    images3?: NullableStringFieldUpdateOperationsInput | string | null;
    videoURL?: NullableStringFieldUpdateOperationsInput | string | null;
    isAvailable?: BoolFieldUpdateOperationsInput | boolean;
    isEvent?: BoolFieldUpdateOperationsInput | boolean;
    isNewArrival?: BoolFieldUpdateOperationsInput | boolean;
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type Schedule_shipsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    scheduleName?: StringFieldUpdateOperationsInput | string;
    scheduleImage?: StringFieldUpdateOperationsInput | string;
    scheduleDescription?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type Schedule_shipsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    scheduleName?: StringFieldUpdateOperationsInput | string;
    scheduleImage?: StringFieldUpdateOperationsInput | string;
    scheduleDescription?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type Schedule_shipsUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    scheduleName?: StringFieldUpdateOperationsInput | string;
    scheduleImage?: StringFieldUpdateOperationsInput | string;
    scheduleDescription?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type Coupon_discountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    discountCode?: StringFieldUpdateOperationsInput | string;
    discountMinTransaction_idr?: IntFieldUpdateOperationsInput | number;
    discountMinTransaction_usd?: IntFieldUpdateOperationsInput | number;
    discountMinTransaction_fish?: IntFieldUpdateOperationsInput | number;
    discountPercentage?: IntFieldUpdateOperationsInput | number;
    discountMaxPrice_idr?: IntFieldUpdateOperationsInput | number;
    discountMaxPrice_usd?: IntFieldUpdateOperationsInput | number;
    expirationDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type Coupon_discountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    discountCode?: StringFieldUpdateOperationsInput | string;
    discountMinTransaction_idr?: IntFieldUpdateOperationsInput | number;
    discountMinTransaction_usd?: IntFieldUpdateOperationsInput | number;
    discountMinTransaction_fish?: IntFieldUpdateOperationsInput | number;
    discountPercentage?: IntFieldUpdateOperationsInput | number;
    discountMaxPrice_idr?: IntFieldUpdateOperationsInput | number;
    discountMaxPrice_usd?: IntFieldUpdateOperationsInput | number;
    expirationDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type Coupon_discountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    discountCode?: StringFieldUpdateOperationsInput | string;
    discountMinTransaction_idr?: IntFieldUpdateOperationsInput | number;
    discountMinTransaction_usd?: IntFieldUpdateOperationsInput | number;
    discountMinTransaction_fish?: IntFieldUpdateOperationsInput | number;
    discountPercentage?: IntFieldUpdateOperationsInput | number;
    discountMaxPrice_idr?: IntFieldUpdateOperationsInput | number;
    discountMaxPrice_usd?: IntFieldUpdateOperationsInput | number;
    expirationDate?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type Discounted_fishCreateManyFishInput = {
    id: string;
    isDiscount: boolean;
    discountPercentage: number;
    discountPriceIdr: number;
    discountPriceUsd: number;
    created_date?: Date | string;
  };

  export type Discounted_fishUpdateWithoutFishInput = {
    id?: StringFieldUpdateOperationsInput | string;
    isDiscount?: BoolFieldUpdateOperationsInput | boolean;
    discountPercentage?: IntFieldUpdateOperationsInput | number;
    discountPriceIdr?: IntFieldUpdateOperationsInput | number;
    discountPriceUsd?: IntFieldUpdateOperationsInput | number;
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type Discounted_fishUncheckedUpdateWithoutFishInput = {
    id?: StringFieldUpdateOperationsInput | string;
    isDiscount?: BoolFieldUpdateOperationsInput | boolean;
    discountPercentage?: IntFieldUpdateOperationsInput | number;
    discountPriceIdr?: IntFieldUpdateOperationsInput | number;
    discountPriceUsd?: IntFieldUpdateOperationsInput | number;
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type Discounted_fishUncheckedUpdateManyWithoutFishInput = {
    id?: StringFieldUpdateOperationsInput | string;
    isDiscount?: BoolFieldUpdateOperationsInput | boolean;
    discountPercentage?: IntFieldUpdateOperationsInput | number;
    discountPriceIdr?: IntFieldUpdateOperationsInput | number;
    discountPriceUsd?: IntFieldUpdateOperationsInput | number;
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type FishesCreateManyTypeInput = {
    id: string;
    user_id: string;
    event_id: string;
    name: string;
    price: number;
    price_usd: number;
    gender: string;
    size: string;
    images1: string;
    images2?: string | null;
    images3?: string | null;
    videoURL?: string | null;
    isAvailable: boolean;
    isEvent: boolean;
    isNewArrival: boolean;
    created_date?: Date | string;
  };

  export type FishesUpdateWithoutTypeInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    price?: IntFieldUpdateOperationsInput | number;
    price_usd?: IntFieldUpdateOperationsInput | number;
    gender?: StringFieldUpdateOperationsInput | string;
    size?: StringFieldUpdateOperationsInput | string;
    images1?: StringFieldUpdateOperationsInput | string;
    images2?: NullableStringFieldUpdateOperationsInput | string | null;
    images3?: NullableStringFieldUpdateOperationsInput | string | null;
    videoURL?: NullableStringFieldUpdateOperationsInput | string | null;
    isAvailable?: BoolFieldUpdateOperationsInput | boolean;
    isEvent?: BoolFieldUpdateOperationsInput | boolean;
    isNewArrival?: BoolFieldUpdateOperationsInput | boolean;
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UsersUpdateOneRequiredWithoutFishesNestedInput;
    events?: EventsUpdateOneRequiredWithoutFishesNestedInput;
    discounted_fish?: Discounted_fishUpdateManyWithoutFishNestedInput;
  };

  export type FishesUncheckedUpdateWithoutTypeInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    event_id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    price?: IntFieldUpdateOperationsInput | number;
    price_usd?: IntFieldUpdateOperationsInput | number;
    gender?: StringFieldUpdateOperationsInput | string;
    size?: StringFieldUpdateOperationsInput | string;
    images1?: StringFieldUpdateOperationsInput | string;
    images2?: NullableStringFieldUpdateOperationsInput | string | null;
    images3?: NullableStringFieldUpdateOperationsInput | string | null;
    videoURL?: NullableStringFieldUpdateOperationsInput | string | null;
    isAvailable?: BoolFieldUpdateOperationsInput | boolean;
    isEvent?: BoolFieldUpdateOperationsInput | boolean;
    isNewArrival?: BoolFieldUpdateOperationsInput | boolean;
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    discounted_fish?: Discounted_fishUncheckedUpdateManyWithoutFishNestedInput;
  };

  export type FishesUncheckedUpdateManyWithoutTypeInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    event_id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    price?: IntFieldUpdateOperationsInput | number;
    price_usd?: IntFieldUpdateOperationsInput | number;
    gender?: StringFieldUpdateOperationsInput | string;
    size?: StringFieldUpdateOperationsInput | string;
    images1?: StringFieldUpdateOperationsInput | string;
    images2?: NullableStringFieldUpdateOperationsInput | string | null;
    images3?: NullableStringFieldUpdateOperationsInput | string | null;
    videoURL?: NullableStringFieldUpdateOperationsInput | string | null;
    isAvailable?: BoolFieldUpdateOperationsInput | boolean;
    isEvent?: BoolFieldUpdateOperationsInput | boolean;
    isNewArrival?: BoolFieldUpdateOperationsInput | boolean;
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type FishesCreateManyEventsInput = {
    id: string;
    user_id: string;
    type_id: string;
    name: string;
    price: number;
    price_usd: number;
    gender: string;
    size: string;
    images1: string;
    images2?: string | null;
    images3?: string | null;
    videoURL?: string | null;
    isAvailable: boolean;
    isEvent: boolean;
    isNewArrival: boolean;
    created_date?: Date | string;
  };

  export type FishesUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    price?: IntFieldUpdateOperationsInput | number;
    price_usd?: IntFieldUpdateOperationsInput | number;
    gender?: StringFieldUpdateOperationsInput | string;
    size?: StringFieldUpdateOperationsInput | string;
    images1?: StringFieldUpdateOperationsInput | string;
    images2?: NullableStringFieldUpdateOperationsInput | string | null;
    images3?: NullableStringFieldUpdateOperationsInput | string | null;
    videoURL?: NullableStringFieldUpdateOperationsInput | string | null;
    isAvailable?: BoolFieldUpdateOperationsInput | boolean;
    isEvent?: BoolFieldUpdateOperationsInput | boolean;
    isNewArrival?: BoolFieldUpdateOperationsInput | boolean;
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UsersUpdateOneRequiredWithoutFishesNestedInput;
    type?: TypesUpdateOneRequiredWithoutFishesNestedInput;
    discounted_fish?: Discounted_fishUpdateManyWithoutFishNestedInput;
  };

  export type FishesUncheckedUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    type_id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    price?: IntFieldUpdateOperationsInput | number;
    price_usd?: IntFieldUpdateOperationsInput | number;
    gender?: StringFieldUpdateOperationsInput | string;
    size?: StringFieldUpdateOperationsInput | string;
    images1?: StringFieldUpdateOperationsInput | string;
    images2?: NullableStringFieldUpdateOperationsInput | string | null;
    images3?: NullableStringFieldUpdateOperationsInput | string | null;
    videoURL?: NullableStringFieldUpdateOperationsInput | string | null;
    isAvailable?: BoolFieldUpdateOperationsInput | boolean;
    isEvent?: BoolFieldUpdateOperationsInput | boolean;
    isNewArrival?: BoolFieldUpdateOperationsInput | boolean;
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    discounted_fish?: Discounted_fishUncheckedUpdateManyWithoutFishNestedInput;
  };

  export type FishesUncheckedUpdateManyWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    type_id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    price?: IntFieldUpdateOperationsInput | number;
    price_usd?: IntFieldUpdateOperationsInput | number;
    gender?: StringFieldUpdateOperationsInput | string;
    size?: StringFieldUpdateOperationsInput | string;
    images1?: StringFieldUpdateOperationsInput | string;
    images2?: NullableStringFieldUpdateOperationsInput | string | null;
    images3?: NullableStringFieldUpdateOperationsInput | string | null;
    videoURL?: NullableStringFieldUpdateOperationsInput | string | null;
    isAvailable?: BoolFieldUpdateOperationsInput | boolean;
    isEvent?: BoolFieldUpdateOperationsInput | boolean;
    isNewArrival?: BoolFieldUpdateOperationsInput | boolean;
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UsersCreateManyRoleInput = {
    id: string;
    username: string;
    password: string;
    created_date?: Date | string;
  };

  export type UsersUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    Fishes?: FishesUpdateManyWithoutUserNestedInput;
    Schedule_ships?: Schedule_shipsUpdateManyWithoutUserNestedInput;
    Coupon_discount?: Coupon_discountUpdateManyWithoutUserNestedInput;
  };

  export type UsersUncheckedUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    Fishes?: FishesUncheckedUpdateManyWithoutUserNestedInput;
    Schedule_ships?: Schedule_shipsUncheckedUpdateManyWithoutUserNestedInput;
    Coupon_discount?: Coupon_discountUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type UsersUncheckedUpdateManyWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    created_date?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  /**
   * Aliases for legacy arg types
   */
  /**
   * @deprecated Use UsersCountOutputTypeDefaultArgs instead
   */
  export type UsersCountOutputTypeArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = UsersCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use FishesCountOutputTypeDefaultArgs instead
   */
  export type FishesCountOutputTypeArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = FishesCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use TypesCountOutputTypeDefaultArgs instead
   */
  export type TypesCountOutputTypeArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = TypesCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use EventsCountOutputTypeDefaultArgs instead
   */
  export type EventsCountOutputTypeArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = EventsCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use RolesCountOutputTypeDefaultArgs instead
   */
  export type RolesCountOutputTypeArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = RolesCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use UsersDefaultArgs instead
   */
  export type UsersArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = UsersDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use FishesDefaultArgs instead
   */
  export type FishesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = FishesDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use Schedule_shipsDefaultArgs instead
   */
  export type Schedule_shipsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = Schedule_shipsDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use TypesDefaultArgs instead
   */
  export type TypesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = TypesDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use Coupon_discountDefaultArgs instead
   */
  export type Coupon_discountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = Coupon_discountDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use EventsDefaultArgs instead
   */
  export type EventsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = EventsDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use Discounted_fishDefaultArgs instead
   */
  export type Discounted_fishArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = Discounted_fishDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use RolesDefaultArgs instead
   */
  export type RolesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = RolesDefaultArgs<ExtArgs>;

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
