
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model User
 * 
 */
export type User = {
  id: string
  active: string
  avatar: string
  name: string
  password: string
  permissions: string[]
  phone: string
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Tag
 * 
 */
export type Tag = {
  id: string
  title: string
}

/**
 * Model Topic
 * 
 */
export type Topic = {
  id: string
  title: string
  content: string
  image: string | null
  createdAt: Date
  updatedAt: Date
  userid: string
}

/**
 * Model TopicTag
 * 
 */
export type TopicTag = {
  id: string
  tagId: string
  topicId: string
  createdAt: Date
  updatedAt: Date
}

/**
 * Model LineUser
 * 
 */
export type LineUser = {
  id: string
  callback: string
  category: string[]
  url: string
  type: string
  createdAt: Date
  updatedAt: Date
}

/**
 * Model LineUserArticle
 * 
 */
export type LineUserArticle = {
  id: string
  url: string
  type: string
  createdAt: Date
  updatedAt: Date
  authorId: string
}

/**
 * Model Birthday
 * 
 */
export type Birthday = {
  id: string
  name: string
  url: string
  createdAt: Date
  updatedAt: Date
}

/**
 * Model BirthdayGift
 * 
 */
export type BirthdayGift = {
  id: string
  img: string
  p: string
  createdAt: Date
  updatedAt: Date
  userId: string | null
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

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
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>;


  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): PrismaPromise<Prisma.JsonObject>;

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<GlobalReject>;

  /**
   * `prisma.tag`: Exposes CRUD operations for the **Tag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tags
    * const tags = await prisma.tag.findMany()
    * ```
    */
  get tag(): Prisma.TagDelegate<GlobalReject>;

  /**
   * `prisma.topic`: Exposes CRUD operations for the **Topic** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Topics
    * const topics = await prisma.topic.findMany()
    * ```
    */
  get topic(): Prisma.TopicDelegate<GlobalReject>;

  /**
   * `prisma.topicTag`: Exposes CRUD operations for the **TopicTag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TopicTags
    * const topicTags = await prisma.topicTag.findMany()
    * ```
    */
  get topicTag(): Prisma.TopicTagDelegate<GlobalReject>;

  /**
   * `prisma.lineUser`: Exposes CRUD operations for the **LineUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LineUsers
    * const lineUsers = await prisma.lineUser.findMany()
    * ```
    */
  get lineUser(): Prisma.LineUserDelegate<GlobalReject>;

  /**
   * `prisma.lineUserArticle`: Exposes CRUD operations for the **LineUserArticle** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LineUserArticles
    * const lineUserArticles = await prisma.lineUserArticle.findMany()
    * ```
    */
  get lineUserArticle(): Prisma.LineUserArticleDelegate<GlobalReject>;

  /**
   * `prisma.birthday`: Exposes CRUD operations for the **Birthday** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Birthdays
    * const birthdays = await prisma.birthday.findMany()
    * ```
    */
  get birthday(): Prisma.BirthdayDelegate<GlobalReject>;

  /**
   * `prisma.birthdayGift`: Exposes CRUD operations for the **BirthdayGift** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BirthdayGifts
    * const birthdayGifts = await prisma.birthdayGift.findMany()
    * ```
    */
  get birthdayGift(): Prisma.BirthdayGiftDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export import Metrics = runtime.Metrics
  export import Metric = runtime.Metric
  export import MetricHistogram = runtime.MetricHistogram
  export import MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
   * Prisma Client JS version: 4.3.1
   * Query Engine version: c875e43600dfe042452e0b868f7a48b817b9640b
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

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
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

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
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

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
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


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
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export import FieldRef = runtime.FieldRef

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    User: 'User',
    Tag: 'Tag',
    Topic: 'Topic',
    TopicTag: 'TopicTag',
    LineUser: 'LineUser',
    LineUserArticle: 'LineUserArticle',
    Birthday: 'Birthday',
    BirthdayGift: 'BirthdayGift'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed in to the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */


  export type UserCountOutputType = {
    Topic: number
  }

  export type UserCountOutputTypeSelect = {
    Topic?: boolean
  }

  export type UserCountOutputTypeGetPayload<
    S extends boolean | null | undefined | UserCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? UserCountOutputType
    : S extends undefined
    ? never
    : S extends UserCountOutputTypeArgs
    ?'include' extends U
    ? UserCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof UserCountOutputType ? UserCountOutputType[P] : never
  } 
    : UserCountOutputType
  : UserCountOutputType




  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     * 
    **/
    select?: UserCountOutputTypeSelect | null
  }



  /**
   * Count Type TagCountOutputType
   */


  export type TagCountOutputType = {
    TopicTag: number
  }

  export type TagCountOutputTypeSelect = {
    TopicTag?: boolean
  }

  export type TagCountOutputTypeGetPayload<
    S extends boolean | null | undefined | TagCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? TagCountOutputType
    : S extends undefined
    ? never
    : S extends TagCountOutputTypeArgs
    ?'include' extends U
    ? TagCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof TagCountOutputType ? TagCountOutputType[P] : never
  } 
    : TagCountOutputType
  : TagCountOutputType




  // Custom InputTypes

  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the TagCountOutputType
     * 
    **/
    select?: TagCountOutputTypeSelect | null
  }



  /**
   * Count Type TopicCountOutputType
   */


  export type TopicCountOutputType = {
    TopicTag: number
  }

  export type TopicCountOutputTypeSelect = {
    TopicTag?: boolean
  }

  export type TopicCountOutputTypeGetPayload<
    S extends boolean | null | undefined | TopicCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? TopicCountOutputType
    : S extends undefined
    ? never
    : S extends TopicCountOutputTypeArgs
    ?'include' extends U
    ? TopicCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof TopicCountOutputType ? TopicCountOutputType[P] : never
  } 
    : TopicCountOutputType
  : TopicCountOutputType




  // Custom InputTypes

  /**
   * TopicCountOutputType without action
   */
  export type TopicCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the TopicCountOutputType
     * 
    **/
    select?: TopicCountOutputTypeSelect | null
  }



  /**
   * Count Type LineUserCountOutputType
   */


  export type LineUserCountOutputType = {
    Article: number
  }

  export type LineUserCountOutputTypeSelect = {
    Article?: boolean
  }

  export type LineUserCountOutputTypeGetPayload<
    S extends boolean | null | undefined | LineUserCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? LineUserCountOutputType
    : S extends undefined
    ? never
    : S extends LineUserCountOutputTypeArgs
    ?'include' extends U
    ? LineUserCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof LineUserCountOutputType ? LineUserCountOutputType[P] : never
  } 
    : LineUserCountOutputType
  : LineUserCountOutputType




  // Custom InputTypes

  /**
   * LineUserCountOutputType without action
   */
  export type LineUserCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the LineUserCountOutputType
     * 
    **/
    select?: LineUserCountOutputTypeSelect | null
  }



  /**
   * Count Type BirthdayCountOutputType
   */


  export type BirthdayCountOutputType = {
    gift: number
  }

  export type BirthdayCountOutputTypeSelect = {
    gift?: boolean
  }

  export type BirthdayCountOutputTypeGetPayload<
    S extends boolean | null | undefined | BirthdayCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? BirthdayCountOutputType
    : S extends undefined
    ? never
    : S extends BirthdayCountOutputTypeArgs
    ?'include' extends U
    ? BirthdayCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof BirthdayCountOutputType ? BirthdayCountOutputType[P] : never
  } 
    : BirthdayCountOutputType
  : BirthdayCountOutputType




  // Custom InputTypes

  /**
   * BirthdayCountOutputType without action
   */
  export type BirthdayCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the BirthdayCountOutputType
     * 
    **/
    select?: BirthdayCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model User
   */


  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    active: string | null
    avatar: string | null
    name: string | null
    password: string | null
    phone: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    active: string | null
    avatar: string | null
    name: string | null
    password: string | null
    phone: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    active: number
    avatar: number
    name: number
    password: number
    permissions: number
    phone: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    active?: true
    avatar?: true
    name?: true
    password?: true
    phone?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    active?: true
    avatar?: true
    name?: true
    password?: true
    phone?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    active?: true
    avatar?: true
    name?: true
    password?: true
    permissions?: true
    phone?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs = {
    /**
     * Filter which User to aggregate.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs = {
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithAggregationInput>
    by: Array<UserScalarFieldEnum>
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }


  export type UserGroupByOutputType = {
    id: string
    active: string
    avatar: string
    name: string
    password: string
    permissions: string[]
    phone: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = PrismaPromise<
    Array<
      PickArray<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect = {
    id?: boolean
    active?: boolean
    avatar?: boolean
    name?: boolean
    password?: boolean
    permissions?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Topic?: boolean | TopicFindManyArgs
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type UserInclude = {
    Topic?: boolean | TopicFindManyArgs
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type UserGetPayload<
    S extends boolean | null | undefined | UserArgs,
    U = keyof S
      > = S extends true
        ? User
    : S extends undefined
    ? never
    : S extends UserArgs | UserFindManyArgs
    ?'include' extends U
    ? User  & {
    [P in TrueKeys<S['include']>]:
        P extends 'Topic' ? Array < TopicGetPayload<Exclude<S['include'], undefined | null>[P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<Exclude<S['include'], undefined | null>[P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'Topic' ? Array < TopicGetPayload<Exclude<S['select'], undefined | null>[P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<Exclude<S['select'], undefined | null>[P]> :  P extends keyof User ? User[P] : never
  } 
    : User
  : User


  type UserCountArgs = Merge<
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }
  >

  export interface UserDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User'> extends True ? CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>> : CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User'> extends True ? CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>> : CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<User>>, PrismaPromise<Array<UserGetPayload<T>>>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Find zero or more Users that matches the filter.
     * @param {UserFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const user = await prisma.user.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: UserFindRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a User.
     * @param {UserAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const user = await prisma.user.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: UserAggregateRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Find one User that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Find the first User that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
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
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    Topic<T extends TopicFindManyArgs = {}>(args?: Subset<T, TopicFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Topic>>, PrismaPromise<Array<TopicGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * User base type for findUnique actions
   */
  export type UserFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     * 
    **/
    where: UserWhereUniqueInput
  }

  /**
   * User: findUnique
   */
  export interface UserFindUniqueArgs extends UserFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User base type for findFirst actions
   */
  export type UserFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     * 
    **/
    distinct?: Enumerable<UserScalarFieldEnum>
  }

  /**
   * User: findFirst
   */
  export interface UserFindFirstArgs extends UserFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findMany
   */
  export type UserFindManyArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which Users to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User create
   */
  export type UserCreateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to create a User.
     * 
    **/
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs = {
    /**
     * The data used to create many Users.
     * 
    **/
    data: Enumerable<UserCreateManyInput>
  }


  /**
   * User update
   */
  export type UserUpdateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to update a User.
     * 
    **/
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs = {
    /**
     * The data used to update Users.
     * 
    **/
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     * 
    **/
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The filter to search for the User to update in case it exists.
     * 
    **/
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     * 
    **/
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter which User to delete.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs = {
    /**
     * Filter which Users to delete
     * 
    **/
    where?: UserWhereInput
  }


  /**
   * User findRaw
   */
  export type UserFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     * 
    **/
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * User aggregateRaw
   */
  export type UserAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     * 
    **/
    pipeline?: Array<InputJsonValue>
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * User: findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs = UserFindUniqueArgsBase
      

  /**
   * User: findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs = UserFindFirstArgsBase
      

  /**
   * User without action
   */
  export type UserArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
  }



  /**
   * Model Tag
   */


  export type AggregateTag = {
    _count: TagCountAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  export type TagMinAggregateOutputType = {
    id: string | null
    title: string | null
  }

  export type TagMaxAggregateOutputType = {
    id: string | null
    title: string | null
  }

  export type TagCountAggregateOutputType = {
    id: number
    title: number
    _all: number
  }


  export type TagMinAggregateInputType = {
    id?: true
    title?: true
  }

  export type TagMaxAggregateInputType = {
    id?: true
    title?: true
  }

  export type TagCountAggregateInputType = {
    id?: true
    title?: true
    _all?: true
  }

  export type TagAggregateArgs = {
    /**
     * Filter which Tag to aggregate.
     * 
    **/
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     * 
    **/
    orderBy?: Enumerable<TagOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tags
    **/
    _count?: true | TagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TagMaxAggregateInputType
  }

  export type GetTagAggregateType<T extends TagAggregateArgs> = {
        [P in keyof T & keyof AggregateTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTag[P]>
      : GetScalarType<T[P], AggregateTag[P]>
  }




  export type TagGroupByArgs = {
    where?: TagWhereInput
    orderBy?: Enumerable<TagOrderByWithAggregationInput>
    by: Array<TagScalarFieldEnum>
    having?: TagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TagCountAggregateInputType | true
    _min?: TagMinAggregateInputType
    _max?: TagMaxAggregateInputType
  }


  export type TagGroupByOutputType = {
    id: string
    title: string
    _count: TagCountAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  type GetTagGroupByPayload<T extends TagGroupByArgs> = PrismaPromise<
    Array<
      PickArray<TagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TagGroupByOutputType[P]>
            : GetScalarType<T[P], TagGroupByOutputType[P]>
        }
      >
    >


  export type TagSelect = {
    id?: boolean
    title?: boolean
    TopicTag?: boolean | TopicTagFindManyArgs
    _count?: boolean | TagCountOutputTypeArgs
  }

  export type TagInclude = {
    TopicTag?: boolean | TopicTagFindManyArgs
    _count?: boolean | TagCountOutputTypeArgs
  }

  export type TagGetPayload<
    S extends boolean | null | undefined | TagArgs,
    U = keyof S
      > = S extends true
        ? Tag
    : S extends undefined
    ? never
    : S extends TagArgs | TagFindManyArgs
    ?'include' extends U
    ? Tag  & {
    [P in TrueKeys<S['include']>]:
        P extends 'TopicTag' ? Array < TopicTagGetPayload<Exclude<S['include'], undefined | null>[P]>>  :
        P extends '_count' ? TagCountOutputTypeGetPayload<Exclude<S['include'], undefined | null>[P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'TopicTag' ? Array < TopicTagGetPayload<Exclude<S['select'], undefined | null>[P]>>  :
        P extends '_count' ? TagCountOutputTypeGetPayload<Exclude<S['select'], undefined | null>[P]> :  P extends keyof Tag ? Tag[P] : never
  } 
    : Tag
  : Tag


  type TagCountArgs = Merge<
    Omit<TagFindManyArgs, 'select' | 'include'> & {
      select?: TagCountAggregateInputType | true
    }
  >

  export interface TagDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Tag that matches the filter.
     * @param {TagFindUniqueArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TagFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, TagFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Tag'> extends True ? CheckSelect<T, Prisma__TagClient<Tag>, Prisma__TagClient<TagGetPayload<T>>> : CheckSelect<T, Prisma__TagClient<Tag | null >, Prisma__TagClient<TagGetPayload<T> | null >>

    /**
     * Find the first Tag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TagFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, TagFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Tag'> extends True ? CheckSelect<T, Prisma__TagClient<Tag>, Prisma__TagClient<TagGetPayload<T>>> : CheckSelect<T, Prisma__TagClient<Tag | null >, Prisma__TagClient<TagGetPayload<T> | null >>

    /**
     * Find zero or more Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tags
     * const tags = await prisma.tag.findMany()
     * 
     * // Get first 10 Tags
     * const tags = await prisma.tag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tagWithIdOnly = await prisma.tag.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TagFindManyArgs>(
      args?: SelectSubset<T, TagFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Tag>>, PrismaPromise<Array<TagGetPayload<T>>>>

    /**
     * Create a Tag.
     * @param {TagCreateArgs} args - Arguments to create a Tag.
     * @example
     * // Create one Tag
     * const Tag = await prisma.tag.create({
     *   data: {
     *     // ... data to create a Tag
     *   }
     * })
     * 
    **/
    create<T extends TagCreateArgs>(
      args: SelectSubset<T, TagCreateArgs>
    ): CheckSelect<T, Prisma__TagClient<Tag>, Prisma__TagClient<TagGetPayload<T>>>

    /**
     * Create many Tags.
     *     @param {TagCreateManyArgs} args - Arguments to create many Tags.
     *     @example
     *     // Create many Tags
     *     const tag = await prisma.tag.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TagCreateManyArgs>(
      args?: SelectSubset<T, TagCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Tag.
     * @param {TagDeleteArgs} args - Arguments to delete one Tag.
     * @example
     * // Delete one Tag
     * const Tag = await prisma.tag.delete({
     *   where: {
     *     // ... filter to delete one Tag
     *   }
     * })
     * 
    **/
    delete<T extends TagDeleteArgs>(
      args: SelectSubset<T, TagDeleteArgs>
    ): CheckSelect<T, Prisma__TagClient<Tag>, Prisma__TagClient<TagGetPayload<T>>>

    /**
     * Update one Tag.
     * @param {TagUpdateArgs} args - Arguments to update one Tag.
     * @example
     * // Update one Tag
     * const tag = await prisma.tag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TagUpdateArgs>(
      args: SelectSubset<T, TagUpdateArgs>
    ): CheckSelect<T, Prisma__TagClient<Tag>, Prisma__TagClient<TagGetPayload<T>>>

    /**
     * Delete zero or more Tags.
     * @param {TagDeleteManyArgs} args - Arguments to filter Tags to delete.
     * @example
     * // Delete a few Tags
     * const { count } = await prisma.tag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TagDeleteManyArgs>(
      args?: SelectSubset<T, TagDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TagUpdateManyArgs>(
      args: SelectSubset<T, TagUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Tag.
     * @param {TagUpsertArgs} args - Arguments to update or create a Tag.
     * @example
     * // Update or create a Tag
     * const tag = await prisma.tag.upsert({
     *   create: {
     *     // ... data to create a Tag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tag we want to update
     *   }
     * })
    **/
    upsert<T extends TagUpsertArgs>(
      args: SelectSubset<T, TagUpsertArgs>
    ): CheckSelect<T, Prisma__TagClient<Tag>, Prisma__TagClient<TagGetPayload<T>>>

    /**
     * Find zero or more Tags that matches the filter.
     * @param {TagFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const tag = await prisma.tag.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: TagFindRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Tag.
     * @param {TagAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const tag = await prisma.tag.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: TagAggregateRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Find one Tag that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {TagFindUniqueOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TagFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, TagFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__TagClient<Tag>, Prisma__TagClient<TagGetPayload<T>>>

    /**
     * Find the first Tag that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TagFindFirstOrThrowArgs>(
      args?: SelectSubset<T, TagFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__TagClient<Tag>, Prisma__TagClient<TagGetPayload<T>>>

    /**
     * Count the number of Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagCountArgs} args - Arguments to filter Tags to count.
     * @example
     * // Count the number of Tags
     * const count = await prisma.tag.count({
     *   where: {
     *     // ... the filter for the Tags we want to count
     *   }
     * })
    **/
    count<T extends TagCountArgs>(
      args?: Subset<T, TagCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TagAggregateArgs>(args: Subset<T, TagAggregateArgs>): PrismaPromise<GetTagAggregateType<T>>

    /**
     * Group by Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagGroupByArgs} args - Group by arguments.
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
      T extends TagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TagGroupByArgs['orderBy'] }
        : { orderBy?: TagGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
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
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTagGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Tag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__TagClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    TopicTag<T extends TopicTagFindManyArgs = {}>(args?: Subset<T, TopicTagFindManyArgs>): CheckSelect<T, PrismaPromise<Array<TopicTag>>, PrismaPromise<Array<TopicTagGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Tag base type for findUnique actions
   */
  export type TagFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Tag
     * 
    **/
    select?: TagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TagInclude | null
    /**
     * Filter, which Tag to fetch.
     * 
    **/
    where: TagWhereUniqueInput
  }

  /**
   * Tag: findUnique
   */
  export interface TagFindUniqueArgs extends TagFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Tag base type for findFirst actions
   */
  export type TagFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Tag
     * 
    **/
    select?: TagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TagInclude | null
    /**
     * Filter, which Tag to fetch.
     * 
    **/
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     * 
    **/
    orderBy?: Enumerable<TagOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     * 
    **/
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     * 
    **/
    distinct?: Enumerable<TagScalarFieldEnum>
  }

  /**
   * Tag: findFirst
   */
  export interface TagFindFirstArgs extends TagFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Tag findMany
   */
  export type TagFindManyArgs = {
    /**
     * Select specific fields to fetch from the Tag
     * 
    **/
    select?: TagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TagInclude | null
    /**
     * Filter, which Tags to fetch.
     * 
    **/
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     * 
    **/
    orderBy?: Enumerable<TagOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tags.
     * 
    **/
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     * 
    **/
    skip?: number
    distinct?: Enumerable<TagScalarFieldEnum>
  }


  /**
   * Tag create
   */
  export type TagCreateArgs = {
    /**
     * Select specific fields to fetch from the Tag
     * 
    **/
    select?: TagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TagInclude | null
    /**
     * The data needed to create a Tag.
     * 
    **/
    data: XOR<TagCreateInput, TagUncheckedCreateInput>
  }


  /**
   * Tag createMany
   */
  export type TagCreateManyArgs = {
    /**
     * The data used to create many Tags.
     * 
    **/
    data: Enumerable<TagCreateManyInput>
  }


  /**
   * Tag update
   */
  export type TagUpdateArgs = {
    /**
     * Select specific fields to fetch from the Tag
     * 
    **/
    select?: TagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TagInclude | null
    /**
     * The data needed to update a Tag.
     * 
    **/
    data: XOR<TagUpdateInput, TagUncheckedUpdateInput>
    /**
     * Choose, which Tag to update.
     * 
    **/
    where: TagWhereUniqueInput
  }


  /**
   * Tag updateMany
   */
  export type TagUpdateManyArgs = {
    /**
     * The data used to update Tags.
     * 
    **/
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     * 
    **/
    where?: TagWhereInput
  }


  /**
   * Tag upsert
   */
  export type TagUpsertArgs = {
    /**
     * Select specific fields to fetch from the Tag
     * 
    **/
    select?: TagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TagInclude | null
    /**
     * The filter to search for the Tag to update in case it exists.
     * 
    **/
    where: TagWhereUniqueInput
    /**
     * In case the Tag found by the `where` argument doesn't exist, create a new Tag with this data.
     * 
    **/
    create: XOR<TagCreateInput, TagUncheckedCreateInput>
    /**
     * In case the Tag was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<TagUpdateInput, TagUncheckedUpdateInput>
  }


  /**
   * Tag delete
   */
  export type TagDeleteArgs = {
    /**
     * Select specific fields to fetch from the Tag
     * 
    **/
    select?: TagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TagInclude | null
    /**
     * Filter which Tag to delete.
     * 
    **/
    where: TagWhereUniqueInput
  }


  /**
   * Tag deleteMany
   */
  export type TagDeleteManyArgs = {
    /**
     * Filter which Tags to delete
     * 
    **/
    where?: TagWhereInput
  }


  /**
   * Tag findRaw
   */
  export type TagFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     * 
    **/
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * Tag aggregateRaw
   */
  export type TagAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     * 
    **/
    pipeline?: Array<InputJsonValue>
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * Tag: findUniqueOrThrow
   */
  export type TagFindUniqueOrThrowArgs = TagFindUniqueArgsBase
      

  /**
   * Tag: findFirstOrThrow
   */
  export type TagFindFirstOrThrowArgs = TagFindFirstArgsBase
      

  /**
   * Tag without action
   */
  export type TagArgs = {
    /**
     * Select specific fields to fetch from the Tag
     * 
    **/
    select?: TagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TagInclude | null
  }



  /**
   * Model Topic
   */


  export type AggregateTopic = {
    _count: TopicCountAggregateOutputType | null
    _min: TopicMinAggregateOutputType | null
    _max: TopicMaxAggregateOutputType | null
  }

  export type TopicMinAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userid: string | null
  }

  export type TopicMaxAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userid: string | null
  }

  export type TopicCountAggregateOutputType = {
    id: number
    title: number
    content: number
    image: number
    createdAt: number
    updatedAt: number
    userid: number
    _all: number
  }


  export type TopicMinAggregateInputType = {
    id?: true
    title?: true
    content?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    userid?: true
  }

  export type TopicMaxAggregateInputType = {
    id?: true
    title?: true
    content?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    userid?: true
  }

  export type TopicCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    userid?: true
    _all?: true
  }

  export type TopicAggregateArgs = {
    /**
     * Filter which Topic to aggregate.
     * 
    **/
    where?: TopicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Topics to fetch.
     * 
    **/
    orderBy?: Enumerable<TopicOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: TopicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Topics from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Topics.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Topics
    **/
    _count?: true | TopicCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TopicMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TopicMaxAggregateInputType
  }

  export type GetTopicAggregateType<T extends TopicAggregateArgs> = {
        [P in keyof T & keyof AggregateTopic]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTopic[P]>
      : GetScalarType<T[P], AggregateTopic[P]>
  }




  export type TopicGroupByArgs = {
    where?: TopicWhereInput
    orderBy?: Enumerable<TopicOrderByWithAggregationInput>
    by: Array<TopicScalarFieldEnum>
    having?: TopicScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TopicCountAggregateInputType | true
    _min?: TopicMinAggregateInputType
    _max?: TopicMaxAggregateInputType
  }


  export type TopicGroupByOutputType = {
    id: string
    title: string
    content: string
    image: string | null
    createdAt: Date
    updatedAt: Date
    userid: string
    _count: TopicCountAggregateOutputType | null
    _min: TopicMinAggregateOutputType | null
    _max: TopicMaxAggregateOutputType | null
  }

  type GetTopicGroupByPayload<T extends TopicGroupByArgs> = PrismaPromise<
    Array<
      PickArray<TopicGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TopicGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TopicGroupByOutputType[P]>
            : GetScalarType<T[P], TopicGroupByOutputType[P]>
        }
      >
    >


  export type TopicSelect = {
    id?: boolean
    title?: boolean
    content?: boolean
    TopicTag?: boolean | TopicTagFindManyArgs
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserArgs
    userid?: boolean
    _count?: boolean | TopicCountOutputTypeArgs
  }

  export type TopicInclude = {
    TopicTag?: boolean | TopicTagFindManyArgs
    user?: boolean | UserArgs
    _count?: boolean | TopicCountOutputTypeArgs
  }

  export type TopicGetPayload<
    S extends boolean | null | undefined | TopicArgs,
    U = keyof S
      > = S extends true
        ? Topic
    : S extends undefined
    ? never
    : S extends TopicArgs | TopicFindManyArgs
    ?'include' extends U
    ? Topic  & {
    [P in TrueKeys<S['include']>]:
        P extends 'TopicTag' ? Array < TopicTagGetPayload<Exclude<S['include'], undefined | null>[P]>>  :
        P extends 'user' ? UserGetPayload<Exclude<S['include'], undefined | null>[P]> | null :
        P extends '_count' ? TopicCountOutputTypeGetPayload<Exclude<S['include'], undefined | null>[P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'TopicTag' ? Array < TopicTagGetPayload<Exclude<S['select'], undefined | null>[P]>>  :
        P extends 'user' ? UserGetPayload<Exclude<S['select'], undefined | null>[P]> | null :
        P extends '_count' ? TopicCountOutputTypeGetPayload<Exclude<S['select'], undefined | null>[P]> :  P extends keyof Topic ? Topic[P] : never
  } 
    : Topic
  : Topic


  type TopicCountArgs = Merge<
    Omit<TopicFindManyArgs, 'select' | 'include'> & {
      select?: TopicCountAggregateInputType | true
    }
  >

  export interface TopicDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Topic that matches the filter.
     * @param {TopicFindUniqueArgs} args - Arguments to find a Topic
     * @example
     * // Get one Topic
     * const topic = await prisma.topic.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TopicFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, TopicFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Topic'> extends True ? CheckSelect<T, Prisma__TopicClient<Topic>, Prisma__TopicClient<TopicGetPayload<T>>> : CheckSelect<T, Prisma__TopicClient<Topic | null >, Prisma__TopicClient<TopicGetPayload<T> | null >>

    /**
     * Find the first Topic that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicFindFirstArgs} args - Arguments to find a Topic
     * @example
     * // Get one Topic
     * const topic = await prisma.topic.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TopicFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, TopicFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Topic'> extends True ? CheckSelect<T, Prisma__TopicClient<Topic>, Prisma__TopicClient<TopicGetPayload<T>>> : CheckSelect<T, Prisma__TopicClient<Topic | null >, Prisma__TopicClient<TopicGetPayload<T> | null >>

    /**
     * Find zero or more Topics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Topics
     * const topics = await prisma.topic.findMany()
     * 
     * // Get first 10 Topics
     * const topics = await prisma.topic.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const topicWithIdOnly = await prisma.topic.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TopicFindManyArgs>(
      args?: SelectSubset<T, TopicFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Topic>>, PrismaPromise<Array<TopicGetPayload<T>>>>

    /**
     * Create a Topic.
     * @param {TopicCreateArgs} args - Arguments to create a Topic.
     * @example
     * // Create one Topic
     * const Topic = await prisma.topic.create({
     *   data: {
     *     // ... data to create a Topic
     *   }
     * })
     * 
    **/
    create<T extends TopicCreateArgs>(
      args: SelectSubset<T, TopicCreateArgs>
    ): CheckSelect<T, Prisma__TopicClient<Topic>, Prisma__TopicClient<TopicGetPayload<T>>>

    /**
     * Create many Topics.
     *     @param {TopicCreateManyArgs} args - Arguments to create many Topics.
     *     @example
     *     // Create many Topics
     *     const topic = await prisma.topic.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TopicCreateManyArgs>(
      args?: SelectSubset<T, TopicCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Topic.
     * @param {TopicDeleteArgs} args - Arguments to delete one Topic.
     * @example
     * // Delete one Topic
     * const Topic = await prisma.topic.delete({
     *   where: {
     *     // ... filter to delete one Topic
     *   }
     * })
     * 
    **/
    delete<T extends TopicDeleteArgs>(
      args: SelectSubset<T, TopicDeleteArgs>
    ): CheckSelect<T, Prisma__TopicClient<Topic>, Prisma__TopicClient<TopicGetPayload<T>>>

    /**
     * Update one Topic.
     * @param {TopicUpdateArgs} args - Arguments to update one Topic.
     * @example
     * // Update one Topic
     * const topic = await prisma.topic.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TopicUpdateArgs>(
      args: SelectSubset<T, TopicUpdateArgs>
    ): CheckSelect<T, Prisma__TopicClient<Topic>, Prisma__TopicClient<TopicGetPayload<T>>>

    /**
     * Delete zero or more Topics.
     * @param {TopicDeleteManyArgs} args - Arguments to filter Topics to delete.
     * @example
     * // Delete a few Topics
     * const { count } = await prisma.topic.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TopicDeleteManyArgs>(
      args?: SelectSubset<T, TopicDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Topics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Topics
     * const topic = await prisma.topic.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TopicUpdateManyArgs>(
      args: SelectSubset<T, TopicUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Topic.
     * @param {TopicUpsertArgs} args - Arguments to update or create a Topic.
     * @example
     * // Update or create a Topic
     * const topic = await prisma.topic.upsert({
     *   create: {
     *     // ... data to create a Topic
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Topic we want to update
     *   }
     * })
    **/
    upsert<T extends TopicUpsertArgs>(
      args: SelectSubset<T, TopicUpsertArgs>
    ): CheckSelect<T, Prisma__TopicClient<Topic>, Prisma__TopicClient<TopicGetPayload<T>>>

    /**
     * Find zero or more Topics that matches the filter.
     * @param {TopicFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const topic = await prisma.topic.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: TopicFindRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Topic.
     * @param {TopicAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const topic = await prisma.topic.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: TopicAggregateRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Find one Topic that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {TopicFindUniqueOrThrowArgs} args - Arguments to find a Topic
     * @example
     * // Get one Topic
     * const topic = await prisma.topic.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TopicFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, TopicFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__TopicClient<Topic>, Prisma__TopicClient<TopicGetPayload<T>>>

    /**
     * Find the first Topic that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicFindFirstOrThrowArgs} args - Arguments to find a Topic
     * @example
     * // Get one Topic
     * const topic = await prisma.topic.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TopicFindFirstOrThrowArgs>(
      args?: SelectSubset<T, TopicFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__TopicClient<Topic>, Prisma__TopicClient<TopicGetPayload<T>>>

    /**
     * Count the number of Topics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicCountArgs} args - Arguments to filter Topics to count.
     * @example
     * // Count the number of Topics
     * const count = await prisma.topic.count({
     *   where: {
     *     // ... the filter for the Topics we want to count
     *   }
     * })
    **/
    count<T extends TopicCountArgs>(
      args?: Subset<T, TopicCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TopicCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Topic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TopicAggregateArgs>(args: Subset<T, TopicAggregateArgs>): PrismaPromise<GetTopicAggregateType<T>>

    /**
     * Group by Topic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicGroupByArgs} args - Group by arguments.
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
      T extends TopicGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TopicGroupByArgs['orderBy'] }
        : { orderBy?: TopicGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
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
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TopicGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTopicGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Topic.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__TopicClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    TopicTag<T extends TopicTagFindManyArgs = {}>(args?: Subset<T, TopicTagFindManyArgs>): CheckSelect<T, PrismaPromise<Array<TopicTag>>, PrismaPromise<Array<TopicTagGetPayload<T>>>>;

    user<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Topic base type for findUnique actions
   */
  export type TopicFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Topic
     * 
    **/
    select?: TopicSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TopicInclude | null
    /**
     * Filter, which Topic to fetch.
     * 
    **/
    where: TopicWhereUniqueInput
  }

  /**
   * Topic: findUnique
   */
  export interface TopicFindUniqueArgs extends TopicFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Topic base type for findFirst actions
   */
  export type TopicFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Topic
     * 
    **/
    select?: TopicSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TopicInclude | null
    /**
     * Filter, which Topic to fetch.
     * 
    **/
    where?: TopicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Topics to fetch.
     * 
    **/
    orderBy?: Enumerable<TopicOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Topics.
     * 
    **/
    cursor?: TopicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Topics from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Topics.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Topics.
     * 
    **/
    distinct?: Enumerable<TopicScalarFieldEnum>
  }

  /**
   * Topic: findFirst
   */
  export interface TopicFindFirstArgs extends TopicFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Topic findMany
   */
  export type TopicFindManyArgs = {
    /**
     * Select specific fields to fetch from the Topic
     * 
    **/
    select?: TopicSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TopicInclude | null
    /**
     * Filter, which Topics to fetch.
     * 
    **/
    where?: TopicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Topics to fetch.
     * 
    **/
    orderBy?: Enumerable<TopicOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Topics.
     * 
    **/
    cursor?: TopicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Topics from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Topics.
     * 
    **/
    skip?: number
    distinct?: Enumerable<TopicScalarFieldEnum>
  }


  /**
   * Topic create
   */
  export type TopicCreateArgs = {
    /**
     * Select specific fields to fetch from the Topic
     * 
    **/
    select?: TopicSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TopicInclude | null
    /**
     * The data needed to create a Topic.
     * 
    **/
    data: XOR<TopicCreateInput, TopicUncheckedCreateInput>
  }


  /**
   * Topic createMany
   */
  export type TopicCreateManyArgs = {
    /**
     * The data used to create many Topics.
     * 
    **/
    data: Enumerable<TopicCreateManyInput>
  }


  /**
   * Topic update
   */
  export type TopicUpdateArgs = {
    /**
     * Select specific fields to fetch from the Topic
     * 
    **/
    select?: TopicSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TopicInclude | null
    /**
     * The data needed to update a Topic.
     * 
    **/
    data: XOR<TopicUpdateInput, TopicUncheckedUpdateInput>
    /**
     * Choose, which Topic to update.
     * 
    **/
    where: TopicWhereUniqueInput
  }


  /**
   * Topic updateMany
   */
  export type TopicUpdateManyArgs = {
    /**
     * The data used to update Topics.
     * 
    **/
    data: XOR<TopicUpdateManyMutationInput, TopicUncheckedUpdateManyInput>
    /**
     * Filter which Topics to update
     * 
    **/
    where?: TopicWhereInput
  }


  /**
   * Topic upsert
   */
  export type TopicUpsertArgs = {
    /**
     * Select specific fields to fetch from the Topic
     * 
    **/
    select?: TopicSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TopicInclude | null
    /**
     * The filter to search for the Topic to update in case it exists.
     * 
    **/
    where: TopicWhereUniqueInput
    /**
     * In case the Topic found by the `where` argument doesn't exist, create a new Topic with this data.
     * 
    **/
    create: XOR<TopicCreateInput, TopicUncheckedCreateInput>
    /**
     * In case the Topic was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<TopicUpdateInput, TopicUncheckedUpdateInput>
  }


  /**
   * Topic delete
   */
  export type TopicDeleteArgs = {
    /**
     * Select specific fields to fetch from the Topic
     * 
    **/
    select?: TopicSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TopicInclude | null
    /**
     * Filter which Topic to delete.
     * 
    **/
    where: TopicWhereUniqueInput
  }


  /**
   * Topic deleteMany
   */
  export type TopicDeleteManyArgs = {
    /**
     * Filter which Topics to delete
     * 
    **/
    where?: TopicWhereInput
  }


  /**
   * Topic findRaw
   */
  export type TopicFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     * 
    **/
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * Topic aggregateRaw
   */
  export type TopicAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     * 
    **/
    pipeline?: Array<InputJsonValue>
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * Topic: findUniqueOrThrow
   */
  export type TopicFindUniqueOrThrowArgs = TopicFindUniqueArgsBase
      

  /**
   * Topic: findFirstOrThrow
   */
  export type TopicFindFirstOrThrowArgs = TopicFindFirstArgsBase
      

  /**
   * Topic without action
   */
  export type TopicArgs = {
    /**
     * Select specific fields to fetch from the Topic
     * 
    **/
    select?: TopicSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TopicInclude | null
  }



  /**
   * Model TopicTag
   */


  export type AggregateTopicTag = {
    _count: TopicTagCountAggregateOutputType | null
    _min: TopicTagMinAggregateOutputType | null
    _max: TopicTagMaxAggregateOutputType | null
  }

  export type TopicTagMinAggregateOutputType = {
    id: string | null
    tagId: string | null
    topicId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TopicTagMaxAggregateOutputType = {
    id: string | null
    tagId: string | null
    topicId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TopicTagCountAggregateOutputType = {
    id: number
    tagId: number
    topicId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TopicTagMinAggregateInputType = {
    id?: true
    tagId?: true
    topicId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TopicTagMaxAggregateInputType = {
    id?: true
    tagId?: true
    topicId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TopicTagCountAggregateInputType = {
    id?: true
    tagId?: true
    topicId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TopicTagAggregateArgs = {
    /**
     * Filter which TopicTag to aggregate.
     * 
    **/
    where?: TopicTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TopicTags to fetch.
     * 
    **/
    orderBy?: Enumerable<TopicTagOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: TopicTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TopicTags from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TopicTags.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TopicTags
    **/
    _count?: true | TopicTagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TopicTagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TopicTagMaxAggregateInputType
  }

  export type GetTopicTagAggregateType<T extends TopicTagAggregateArgs> = {
        [P in keyof T & keyof AggregateTopicTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTopicTag[P]>
      : GetScalarType<T[P], AggregateTopicTag[P]>
  }




  export type TopicTagGroupByArgs = {
    where?: TopicTagWhereInput
    orderBy?: Enumerable<TopicTagOrderByWithAggregationInput>
    by: Array<TopicTagScalarFieldEnum>
    having?: TopicTagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TopicTagCountAggregateInputType | true
    _min?: TopicTagMinAggregateInputType
    _max?: TopicTagMaxAggregateInputType
  }


  export type TopicTagGroupByOutputType = {
    id: string
    tagId: string
    topicId: string
    createdAt: Date
    updatedAt: Date
    _count: TopicTagCountAggregateOutputType | null
    _min: TopicTagMinAggregateOutputType | null
    _max: TopicTagMaxAggregateOutputType | null
  }

  type GetTopicTagGroupByPayload<T extends TopicTagGroupByArgs> = PrismaPromise<
    Array<
      PickArray<TopicTagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TopicTagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TopicTagGroupByOutputType[P]>
            : GetScalarType<T[P], TopicTagGroupByOutputType[P]>
        }
      >
    >


  export type TopicTagSelect = {
    id?: boolean
    tag?: boolean | TagArgs
    tagId?: boolean
    topic?: boolean | TopicArgs
    topicId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TopicTagInclude = {
    tag?: boolean | TagArgs
    topic?: boolean | TopicArgs
  }

  export type TopicTagGetPayload<
    S extends boolean | null | undefined | TopicTagArgs,
    U = keyof S
      > = S extends true
        ? TopicTag
    : S extends undefined
    ? never
    : S extends TopicTagArgs | TopicTagFindManyArgs
    ?'include' extends U
    ? TopicTag  & {
    [P in TrueKeys<S['include']>]:
        P extends 'tag' ? TagGetPayload<Exclude<S['include'], undefined | null>[P]> :
        P extends 'topic' ? TopicGetPayload<Exclude<S['include'], undefined | null>[P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'tag' ? TagGetPayload<Exclude<S['select'], undefined | null>[P]> :
        P extends 'topic' ? TopicGetPayload<Exclude<S['select'], undefined | null>[P]> :  P extends keyof TopicTag ? TopicTag[P] : never
  } 
    : TopicTag
  : TopicTag


  type TopicTagCountArgs = Merge<
    Omit<TopicTagFindManyArgs, 'select' | 'include'> & {
      select?: TopicTagCountAggregateInputType | true
    }
  >

  export interface TopicTagDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one TopicTag that matches the filter.
     * @param {TopicTagFindUniqueArgs} args - Arguments to find a TopicTag
     * @example
     * // Get one TopicTag
     * const topicTag = await prisma.topicTag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TopicTagFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, TopicTagFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'TopicTag'> extends True ? CheckSelect<T, Prisma__TopicTagClient<TopicTag>, Prisma__TopicTagClient<TopicTagGetPayload<T>>> : CheckSelect<T, Prisma__TopicTagClient<TopicTag | null >, Prisma__TopicTagClient<TopicTagGetPayload<T> | null >>

    /**
     * Find the first TopicTag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicTagFindFirstArgs} args - Arguments to find a TopicTag
     * @example
     * // Get one TopicTag
     * const topicTag = await prisma.topicTag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TopicTagFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, TopicTagFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'TopicTag'> extends True ? CheckSelect<T, Prisma__TopicTagClient<TopicTag>, Prisma__TopicTagClient<TopicTagGetPayload<T>>> : CheckSelect<T, Prisma__TopicTagClient<TopicTag | null >, Prisma__TopicTagClient<TopicTagGetPayload<T> | null >>

    /**
     * Find zero or more TopicTags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicTagFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TopicTags
     * const topicTags = await prisma.topicTag.findMany()
     * 
     * // Get first 10 TopicTags
     * const topicTags = await prisma.topicTag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const topicTagWithIdOnly = await prisma.topicTag.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TopicTagFindManyArgs>(
      args?: SelectSubset<T, TopicTagFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<TopicTag>>, PrismaPromise<Array<TopicTagGetPayload<T>>>>

    /**
     * Create a TopicTag.
     * @param {TopicTagCreateArgs} args - Arguments to create a TopicTag.
     * @example
     * // Create one TopicTag
     * const TopicTag = await prisma.topicTag.create({
     *   data: {
     *     // ... data to create a TopicTag
     *   }
     * })
     * 
    **/
    create<T extends TopicTagCreateArgs>(
      args: SelectSubset<T, TopicTagCreateArgs>
    ): CheckSelect<T, Prisma__TopicTagClient<TopicTag>, Prisma__TopicTagClient<TopicTagGetPayload<T>>>

    /**
     * Create many TopicTags.
     *     @param {TopicTagCreateManyArgs} args - Arguments to create many TopicTags.
     *     @example
     *     // Create many TopicTags
     *     const topicTag = await prisma.topicTag.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TopicTagCreateManyArgs>(
      args?: SelectSubset<T, TopicTagCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a TopicTag.
     * @param {TopicTagDeleteArgs} args - Arguments to delete one TopicTag.
     * @example
     * // Delete one TopicTag
     * const TopicTag = await prisma.topicTag.delete({
     *   where: {
     *     // ... filter to delete one TopicTag
     *   }
     * })
     * 
    **/
    delete<T extends TopicTagDeleteArgs>(
      args: SelectSubset<T, TopicTagDeleteArgs>
    ): CheckSelect<T, Prisma__TopicTagClient<TopicTag>, Prisma__TopicTagClient<TopicTagGetPayload<T>>>

    /**
     * Update one TopicTag.
     * @param {TopicTagUpdateArgs} args - Arguments to update one TopicTag.
     * @example
     * // Update one TopicTag
     * const topicTag = await prisma.topicTag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TopicTagUpdateArgs>(
      args: SelectSubset<T, TopicTagUpdateArgs>
    ): CheckSelect<T, Prisma__TopicTagClient<TopicTag>, Prisma__TopicTagClient<TopicTagGetPayload<T>>>

    /**
     * Delete zero or more TopicTags.
     * @param {TopicTagDeleteManyArgs} args - Arguments to filter TopicTags to delete.
     * @example
     * // Delete a few TopicTags
     * const { count } = await prisma.topicTag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TopicTagDeleteManyArgs>(
      args?: SelectSubset<T, TopicTagDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more TopicTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicTagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TopicTags
     * const topicTag = await prisma.topicTag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TopicTagUpdateManyArgs>(
      args: SelectSubset<T, TopicTagUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one TopicTag.
     * @param {TopicTagUpsertArgs} args - Arguments to update or create a TopicTag.
     * @example
     * // Update or create a TopicTag
     * const topicTag = await prisma.topicTag.upsert({
     *   create: {
     *     // ... data to create a TopicTag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TopicTag we want to update
     *   }
     * })
    **/
    upsert<T extends TopicTagUpsertArgs>(
      args: SelectSubset<T, TopicTagUpsertArgs>
    ): CheckSelect<T, Prisma__TopicTagClient<TopicTag>, Prisma__TopicTagClient<TopicTagGetPayload<T>>>

    /**
     * Find zero or more TopicTags that matches the filter.
     * @param {TopicTagFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const topicTag = await prisma.topicTag.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: TopicTagFindRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a TopicTag.
     * @param {TopicTagAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const topicTag = await prisma.topicTag.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: TopicTagAggregateRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Find one TopicTag that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {TopicTagFindUniqueOrThrowArgs} args - Arguments to find a TopicTag
     * @example
     * // Get one TopicTag
     * const topicTag = await prisma.topicTag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TopicTagFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, TopicTagFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__TopicTagClient<TopicTag>, Prisma__TopicTagClient<TopicTagGetPayload<T>>>

    /**
     * Find the first TopicTag that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicTagFindFirstOrThrowArgs} args - Arguments to find a TopicTag
     * @example
     * // Get one TopicTag
     * const topicTag = await prisma.topicTag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TopicTagFindFirstOrThrowArgs>(
      args?: SelectSubset<T, TopicTagFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__TopicTagClient<TopicTag>, Prisma__TopicTagClient<TopicTagGetPayload<T>>>

    /**
     * Count the number of TopicTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicTagCountArgs} args - Arguments to filter TopicTags to count.
     * @example
     * // Count the number of TopicTags
     * const count = await prisma.topicTag.count({
     *   where: {
     *     // ... the filter for the TopicTags we want to count
     *   }
     * })
    **/
    count<T extends TopicTagCountArgs>(
      args?: Subset<T, TopicTagCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TopicTagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TopicTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicTagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TopicTagAggregateArgs>(args: Subset<T, TopicTagAggregateArgs>): PrismaPromise<GetTopicTagAggregateType<T>>

    /**
     * Group by TopicTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicTagGroupByArgs} args - Group by arguments.
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
      T extends TopicTagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TopicTagGroupByArgs['orderBy'] }
        : { orderBy?: TopicTagGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
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
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TopicTagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTopicTagGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for TopicTag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__TopicTagClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    tag<T extends TagArgs = {}>(args?: Subset<T, TagArgs>): CheckSelect<T, Prisma__TagClient<Tag | null >, Prisma__TagClient<TagGetPayload<T> | null >>;

    topic<T extends TopicArgs = {}>(args?: Subset<T, TopicArgs>): CheckSelect<T, Prisma__TopicClient<Topic | null >, Prisma__TopicClient<TopicGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * TopicTag base type for findUnique actions
   */
  export type TopicTagFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the TopicTag
     * 
    **/
    select?: TopicTagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TopicTagInclude | null
    /**
     * Filter, which TopicTag to fetch.
     * 
    **/
    where: TopicTagWhereUniqueInput
  }

  /**
   * TopicTag: findUnique
   */
  export interface TopicTagFindUniqueArgs extends TopicTagFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * TopicTag base type for findFirst actions
   */
  export type TopicTagFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the TopicTag
     * 
    **/
    select?: TopicTagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TopicTagInclude | null
    /**
     * Filter, which TopicTag to fetch.
     * 
    **/
    where?: TopicTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TopicTags to fetch.
     * 
    **/
    orderBy?: Enumerable<TopicTagOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TopicTags.
     * 
    **/
    cursor?: TopicTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TopicTags from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TopicTags.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TopicTags.
     * 
    **/
    distinct?: Enumerable<TopicTagScalarFieldEnum>
  }

  /**
   * TopicTag: findFirst
   */
  export interface TopicTagFindFirstArgs extends TopicTagFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * TopicTag findMany
   */
  export type TopicTagFindManyArgs = {
    /**
     * Select specific fields to fetch from the TopicTag
     * 
    **/
    select?: TopicTagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TopicTagInclude | null
    /**
     * Filter, which TopicTags to fetch.
     * 
    **/
    where?: TopicTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TopicTags to fetch.
     * 
    **/
    orderBy?: Enumerable<TopicTagOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TopicTags.
     * 
    **/
    cursor?: TopicTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TopicTags from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TopicTags.
     * 
    **/
    skip?: number
    distinct?: Enumerable<TopicTagScalarFieldEnum>
  }


  /**
   * TopicTag create
   */
  export type TopicTagCreateArgs = {
    /**
     * Select specific fields to fetch from the TopicTag
     * 
    **/
    select?: TopicTagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TopicTagInclude | null
    /**
     * The data needed to create a TopicTag.
     * 
    **/
    data: XOR<TopicTagCreateInput, TopicTagUncheckedCreateInput>
  }


  /**
   * TopicTag createMany
   */
  export type TopicTagCreateManyArgs = {
    /**
     * The data used to create many TopicTags.
     * 
    **/
    data: Enumerable<TopicTagCreateManyInput>
  }


  /**
   * TopicTag update
   */
  export type TopicTagUpdateArgs = {
    /**
     * Select specific fields to fetch from the TopicTag
     * 
    **/
    select?: TopicTagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TopicTagInclude | null
    /**
     * The data needed to update a TopicTag.
     * 
    **/
    data: XOR<TopicTagUpdateInput, TopicTagUncheckedUpdateInput>
    /**
     * Choose, which TopicTag to update.
     * 
    **/
    where: TopicTagWhereUniqueInput
  }


  /**
   * TopicTag updateMany
   */
  export type TopicTagUpdateManyArgs = {
    /**
     * The data used to update TopicTags.
     * 
    **/
    data: XOR<TopicTagUpdateManyMutationInput, TopicTagUncheckedUpdateManyInput>
    /**
     * Filter which TopicTags to update
     * 
    **/
    where?: TopicTagWhereInput
  }


  /**
   * TopicTag upsert
   */
  export type TopicTagUpsertArgs = {
    /**
     * Select specific fields to fetch from the TopicTag
     * 
    **/
    select?: TopicTagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TopicTagInclude | null
    /**
     * The filter to search for the TopicTag to update in case it exists.
     * 
    **/
    where: TopicTagWhereUniqueInput
    /**
     * In case the TopicTag found by the `where` argument doesn't exist, create a new TopicTag with this data.
     * 
    **/
    create: XOR<TopicTagCreateInput, TopicTagUncheckedCreateInput>
    /**
     * In case the TopicTag was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<TopicTagUpdateInput, TopicTagUncheckedUpdateInput>
  }


  /**
   * TopicTag delete
   */
  export type TopicTagDeleteArgs = {
    /**
     * Select specific fields to fetch from the TopicTag
     * 
    **/
    select?: TopicTagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TopicTagInclude | null
    /**
     * Filter which TopicTag to delete.
     * 
    **/
    where: TopicTagWhereUniqueInput
  }


  /**
   * TopicTag deleteMany
   */
  export type TopicTagDeleteManyArgs = {
    /**
     * Filter which TopicTags to delete
     * 
    **/
    where?: TopicTagWhereInput
  }


  /**
   * TopicTag findRaw
   */
  export type TopicTagFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     * 
    **/
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * TopicTag aggregateRaw
   */
  export type TopicTagAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     * 
    **/
    pipeline?: Array<InputJsonValue>
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * TopicTag: findUniqueOrThrow
   */
  export type TopicTagFindUniqueOrThrowArgs = TopicTagFindUniqueArgsBase
      

  /**
   * TopicTag: findFirstOrThrow
   */
  export type TopicTagFindFirstOrThrowArgs = TopicTagFindFirstArgsBase
      

  /**
   * TopicTag without action
   */
  export type TopicTagArgs = {
    /**
     * Select specific fields to fetch from the TopicTag
     * 
    **/
    select?: TopicTagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TopicTagInclude | null
  }



  /**
   * Model LineUser
   */


  export type AggregateLineUser = {
    _count: LineUserCountAggregateOutputType | null
    _min: LineUserMinAggregateOutputType | null
    _max: LineUserMaxAggregateOutputType | null
  }

  export type LineUserMinAggregateOutputType = {
    id: string | null
    callback: string | null
    url: string | null
    type: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LineUserMaxAggregateOutputType = {
    id: string | null
    callback: string | null
    url: string | null
    type: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LineUserCountAggregateOutputType = {
    id: number
    callback: number
    category: number
    url: number
    type: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LineUserMinAggregateInputType = {
    id?: true
    callback?: true
    url?: true
    type?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LineUserMaxAggregateInputType = {
    id?: true
    callback?: true
    url?: true
    type?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LineUserCountAggregateInputType = {
    id?: true
    callback?: true
    category?: true
    url?: true
    type?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LineUserAggregateArgs = {
    /**
     * Filter which LineUser to aggregate.
     * 
    **/
    where?: LineUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LineUsers to fetch.
     * 
    **/
    orderBy?: Enumerable<LineUserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: LineUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LineUsers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LineUsers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LineUsers
    **/
    _count?: true | LineUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LineUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LineUserMaxAggregateInputType
  }

  export type GetLineUserAggregateType<T extends LineUserAggregateArgs> = {
        [P in keyof T & keyof AggregateLineUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLineUser[P]>
      : GetScalarType<T[P], AggregateLineUser[P]>
  }




  export type LineUserGroupByArgs = {
    where?: LineUserWhereInput
    orderBy?: Enumerable<LineUserOrderByWithAggregationInput>
    by: Array<LineUserScalarFieldEnum>
    having?: LineUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LineUserCountAggregateInputType | true
    _min?: LineUserMinAggregateInputType
    _max?: LineUserMaxAggregateInputType
  }


  export type LineUserGroupByOutputType = {
    id: string
    callback: string
    category: string[]
    url: string
    type: string
    createdAt: Date
    updatedAt: Date
    _count: LineUserCountAggregateOutputType | null
    _min: LineUserMinAggregateOutputType | null
    _max: LineUserMaxAggregateOutputType | null
  }

  type GetLineUserGroupByPayload<T extends LineUserGroupByArgs> = PrismaPromise<
    Array<
      PickArray<LineUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LineUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LineUserGroupByOutputType[P]>
            : GetScalarType<T[P], LineUserGroupByOutputType[P]>
        }
      >
    >


  export type LineUserSelect = {
    id?: boolean
    callback?: boolean
    category?: boolean
    url?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Article?: boolean | LineUserArticleFindManyArgs
    _count?: boolean | LineUserCountOutputTypeArgs
  }

  export type LineUserInclude = {
    Article?: boolean | LineUserArticleFindManyArgs
    _count?: boolean | LineUserCountOutputTypeArgs
  }

  export type LineUserGetPayload<
    S extends boolean | null | undefined | LineUserArgs,
    U = keyof S
      > = S extends true
        ? LineUser
    : S extends undefined
    ? never
    : S extends LineUserArgs | LineUserFindManyArgs
    ?'include' extends U
    ? LineUser  & {
    [P in TrueKeys<S['include']>]:
        P extends 'Article' ? Array < LineUserArticleGetPayload<Exclude<S['include'], undefined | null>[P]>>  :
        P extends '_count' ? LineUserCountOutputTypeGetPayload<Exclude<S['include'], undefined | null>[P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'Article' ? Array < LineUserArticleGetPayload<Exclude<S['select'], undefined | null>[P]>>  :
        P extends '_count' ? LineUserCountOutputTypeGetPayload<Exclude<S['select'], undefined | null>[P]> :  P extends keyof LineUser ? LineUser[P] : never
  } 
    : LineUser
  : LineUser


  type LineUserCountArgs = Merge<
    Omit<LineUserFindManyArgs, 'select' | 'include'> & {
      select?: LineUserCountAggregateInputType | true
    }
  >

  export interface LineUserDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one LineUser that matches the filter.
     * @param {LineUserFindUniqueArgs} args - Arguments to find a LineUser
     * @example
     * // Get one LineUser
     * const lineUser = await prisma.lineUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends LineUserFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, LineUserFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'LineUser'> extends True ? CheckSelect<T, Prisma__LineUserClient<LineUser>, Prisma__LineUserClient<LineUserGetPayload<T>>> : CheckSelect<T, Prisma__LineUserClient<LineUser | null >, Prisma__LineUserClient<LineUserGetPayload<T> | null >>

    /**
     * Find the first LineUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LineUserFindFirstArgs} args - Arguments to find a LineUser
     * @example
     * // Get one LineUser
     * const lineUser = await prisma.lineUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends LineUserFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, LineUserFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'LineUser'> extends True ? CheckSelect<T, Prisma__LineUserClient<LineUser>, Prisma__LineUserClient<LineUserGetPayload<T>>> : CheckSelect<T, Prisma__LineUserClient<LineUser | null >, Prisma__LineUserClient<LineUserGetPayload<T> | null >>

    /**
     * Find zero or more LineUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LineUserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LineUsers
     * const lineUsers = await prisma.lineUser.findMany()
     * 
     * // Get first 10 LineUsers
     * const lineUsers = await prisma.lineUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lineUserWithIdOnly = await prisma.lineUser.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends LineUserFindManyArgs>(
      args?: SelectSubset<T, LineUserFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<LineUser>>, PrismaPromise<Array<LineUserGetPayload<T>>>>

    /**
     * Create a LineUser.
     * @param {LineUserCreateArgs} args - Arguments to create a LineUser.
     * @example
     * // Create one LineUser
     * const LineUser = await prisma.lineUser.create({
     *   data: {
     *     // ... data to create a LineUser
     *   }
     * })
     * 
    **/
    create<T extends LineUserCreateArgs>(
      args: SelectSubset<T, LineUserCreateArgs>
    ): CheckSelect<T, Prisma__LineUserClient<LineUser>, Prisma__LineUserClient<LineUserGetPayload<T>>>

    /**
     * Create many LineUsers.
     *     @param {LineUserCreateManyArgs} args - Arguments to create many LineUsers.
     *     @example
     *     // Create many LineUsers
     *     const lineUser = await prisma.lineUser.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends LineUserCreateManyArgs>(
      args?: SelectSubset<T, LineUserCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a LineUser.
     * @param {LineUserDeleteArgs} args - Arguments to delete one LineUser.
     * @example
     * // Delete one LineUser
     * const LineUser = await prisma.lineUser.delete({
     *   where: {
     *     // ... filter to delete one LineUser
     *   }
     * })
     * 
    **/
    delete<T extends LineUserDeleteArgs>(
      args: SelectSubset<T, LineUserDeleteArgs>
    ): CheckSelect<T, Prisma__LineUserClient<LineUser>, Prisma__LineUserClient<LineUserGetPayload<T>>>

    /**
     * Update one LineUser.
     * @param {LineUserUpdateArgs} args - Arguments to update one LineUser.
     * @example
     * // Update one LineUser
     * const lineUser = await prisma.lineUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends LineUserUpdateArgs>(
      args: SelectSubset<T, LineUserUpdateArgs>
    ): CheckSelect<T, Prisma__LineUserClient<LineUser>, Prisma__LineUserClient<LineUserGetPayload<T>>>

    /**
     * Delete zero or more LineUsers.
     * @param {LineUserDeleteManyArgs} args - Arguments to filter LineUsers to delete.
     * @example
     * // Delete a few LineUsers
     * const { count } = await prisma.lineUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends LineUserDeleteManyArgs>(
      args?: SelectSubset<T, LineUserDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more LineUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LineUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LineUsers
     * const lineUser = await prisma.lineUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends LineUserUpdateManyArgs>(
      args: SelectSubset<T, LineUserUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one LineUser.
     * @param {LineUserUpsertArgs} args - Arguments to update or create a LineUser.
     * @example
     * // Update or create a LineUser
     * const lineUser = await prisma.lineUser.upsert({
     *   create: {
     *     // ... data to create a LineUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LineUser we want to update
     *   }
     * })
    **/
    upsert<T extends LineUserUpsertArgs>(
      args: SelectSubset<T, LineUserUpsertArgs>
    ): CheckSelect<T, Prisma__LineUserClient<LineUser>, Prisma__LineUserClient<LineUserGetPayload<T>>>

    /**
     * Find zero or more LineUsers that matches the filter.
     * @param {LineUserFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const lineUser = await prisma.lineUser.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: LineUserFindRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a LineUser.
     * @param {LineUserAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const lineUser = await prisma.lineUser.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: LineUserAggregateRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Find one LineUser that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {LineUserFindUniqueOrThrowArgs} args - Arguments to find a LineUser
     * @example
     * // Get one LineUser
     * const lineUser = await prisma.lineUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends LineUserFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, LineUserFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__LineUserClient<LineUser>, Prisma__LineUserClient<LineUserGetPayload<T>>>

    /**
     * Find the first LineUser that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LineUserFindFirstOrThrowArgs} args - Arguments to find a LineUser
     * @example
     * // Get one LineUser
     * const lineUser = await prisma.lineUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends LineUserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, LineUserFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__LineUserClient<LineUser>, Prisma__LineUserClient<LineUserGetPayload<T>>>

    /**
     * Count the number of LineUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LineUserCountArgs} args - Arguments to filter LineUsers to count.
     * @example
     * // Count the number of LineUsers
     * const count = await prisma.lineUser.count({
     *   where: {
     *     // ... the filter for the LineUsers we want to count
     *   }
     * })
    **/
    count<T extends LineUserCountArgs>(
      args?: Subset<T, LineUserCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LineUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LineUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LineUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LineUserAggregateArgs>(args: Subset<T, LineUserAggregateArgs>): PrismaPromise<GetLineUserAggregateType<T>>

    /**
     * Group by LineUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LineUserGroupByArgs} args - Group by arguments.
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
      T extends LineUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LineUserGroupByArgs['orderBy'] }
        : { orderBy?: LineUserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
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
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LineUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLineUserGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for LineUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__LineUserClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    Article<T extends LineUserArticleFindManyArgs = {}>(args?: Subset<T, LineUserArticleFindManyArgs>): CheckSelect<T, PrismaPromise<Array<LineUserArticle>>, PrismaPromise<Array<LineUserArticleGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * LineUser base type for findUnique actions
   */
  export type LineUserFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the LineUser
     * 
    **/
    select?: LineUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LineUserInclude | null
    /**
     * Filter, which LineUser to fetch.
     * 
    **/
    where: LineUserWhereUniqueInput
  }

  /**
   * LineUser: findUnique
   */
  export interface LineUserFindUniqueArgs extends LineUserFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * LineUser base type for findFirst actions
   */
  export type LineUserFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the LineUser
     * 
    **/
    select?: LineUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LineUserInclude | null
    /**
     * Filter, which LineUser to fetch.
     * 
    **/
    where?: LineUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LineUsers to fetch.
     * 
    **/
    orderBy?: Enumerable<LineUserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LineUsers.
     * 
    **/
    cursor?: LineUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LineUsers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LineUsers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LineUsers.
     * 
    **/
    distinct?: Enumerable<LineUserScalarFieldEnum>
  }

  /**
   * LineUser: findFirst
   */
  export interface LineUserFindFirstArgs extends LineUserFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * LineUser findMany
   */
  export type LineUserFindManyArgs = {
    /**
     * Select specific fields to fetch from the LineUser
     * 
    **/
    select?: LineUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LineUserInclude | null
    /**
     * Filter, which LineUsers to fetch.
     * 
    **/
    where?: LineUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LineUsers to fetch.
     * 
    **/
    orderBy?: Enumerable<LineUserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LineUsers.
     * 
    **/
    cursor?: LineUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LineUsers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LineUsers.
     * 
    **/
    skip?: number
    distinct?: Enumerable<LineUserScalarFieldEnum>
  }


  /**
   * LineUser create
   */
  export type LineUserCreateArgs = {
    /**
     * Select specific fields to fetch from the LineUser
     * 
    **/
    select?: LineUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LineUserInclude | null
    /**
     * The data needed to create a LineUser.
     * 
    **/
    data: XOR<LineUserCreateInput, LineUserUncheckedCreateInput>
  }


  /**
   * LineUser createMany
   */
  export type LineUserCreateManyArgs = {
    /**
     * The data used to create many LineUsers.
     * 
    **/
    data: Enumerable<LineUserCreateManyInput>
  }


  /**
   * LineUser update
   */
  export type LineUserUpdateArgs = {
    /**
     * Select specific fields to fetch from the LineUser
     * 
    **/
    select?: LineUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LineUserInclude | null
    /**
     * The data needed to update a LineUser.
     * 
    **/
    data: XOR<LineUserUpdateInput, LineUserUncheckedUpdateInput>
    /**
     * Choose, which LineUser to update.
     * 
    **/
    where: LineUserWhereUniqueInput
  }


  /**
   * LineUser updateMany
   */
  export type LineUserUpdateManyArgs = {
    /**
     * The data used to update LineUsers.
     * 
    **/
    data: XOR<LineUserUpdateManyMutationInput, LineUserUncheckedUpdateManyInput>
    /**
     * Filter which LineUsers to update
     * 
    **/
    where?: LineUserWhereInput
  }


  /**
   * LineUser upsert
   */
  export type LineUserUpsertArgs = {
    /**
     * Select specific fields to fetch from the LineUser
     * 
    **/
    select?: LineUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LineUserInclude | null
    /**
     * The filter to search for the LineUser to update in case it exists.
     * 
    **/
    where: LineUserWhereUniqueInput
    /**
     * In case the LineUser found by the `where` argument doesn't exist, create a new LineUser with this data.
     * 
    **/
    create: XOR<LineUserCreateInput, LineUserUncheckedCreateInput>
    /**
     * In case the LineUser was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<LineUserUpdateInput, LineUserUncheckedUpdateInput>
  }


  /**
   * LineUser delete
   */
  export type LineUserDeleteArgs = {
    /**
     * Select specific fields to fetch from the LineUser
     * 
    **/
    select?: LineUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LineUserInclude | null
    /**
     * Filter which LineUser to delete.
     * 
    **/
    where: LineUserWhereUniqueInput
  }


  /**
   * LineUser deleteMany
   */
  export type LineUserDeleteManyArgs = {
    /**
     * Filter which LineUsers to delete
     * 
    **/
    where?: LineUserWhereInput
  }


  /**
   * LineUser findRaw
   */
  export type LineUserFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     * 
    **/
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * LineUser aggregateRaw
   */
  export type LineUserAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     * 
    **/
    pipeline?: Array<InputJsonValue>
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * LineUser: findUniqueOrThrow
   */
  export type LineUserFindUniqueOrThrowArgs = LineUserFindUniqueArgsBase
      

  /**
   * LineUser: findFirstOrThrow
   */
  export type LineUserFindFirstOrThrowArgs = LineUserFindFirstArgsBase
      

  /**
   * LineUser without action
   */
  export type LineUserArgs = {
    /**
     * Select specific fields to fetch from the LineUser
     * 
    **/
    select?: LineUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LineUserInclude | null
  }



  /**
   * Model LineUserArticle
   */


  export type AggregateLineUserArticle = {
    _count: LineUserArticleCountAggregateOutputType | null
    _min: LineUserArticleMinAggregateOutputType | null
    _max: LineUserArticleMaxAggregateOutputType | null
  }

  export type LineUserArticleMinAggregateOutputType = {
    id: string | null
    url: string | null
    type: string | null
    createdAt: Date | null
    updatedAt: Date | null
    authorId: string | null
  }

  export type LineUserArticleMaxAggregateOutputType = {
    id: string | null
    url: string | null
    type: string | null
    createdAt: Date | null
    updatedAt: Date | null
    authorId: string | null
  }

  export type LineUserArticleCountAggregateOutputType = {
    id: number
    url: number
    type: number
    createdAt: number
    updatedAt: number
    authorId: number
    _all: number
  }


  export type LineUserArticleMinAggregateInputType = {
    id?: true
    url?: true
    type?: true
    createdAt?: true
    updatedAt?: true
    authorId?: true
  }

  export type LineUserArticleMaxAggregateInputType = {
    id?: true
    url?: true
    type?: true
    createdAt?: true
    updatedAt?: true
    authorId?: true
  }

  export type LineUserArticleCountAggregateInputType = {
    id?: true
    url?: true
    type?: true
    createdAt?: true
    updatedAt?: true
    authorId?: true
    _all?: true
  }

  export type LineUserArticleAggregateArgs = {
    /**
     * Filter which LineUserArticle to aggregate.
     * 
    **/
    where?: LineUserArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LineUserArticles to fetch.
     * 
    **/
    orderBy?: Enumerable<LineUserArticleOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: LineUserArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LineUserArticles from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LineUserArticles.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LineUserArticles
    **/
    _count?: true | LineUserArticleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LineUserArticleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LineUserArticleMaxAggregateInputType
  }

  export type GetLineUserArticleAggregateType<T extends LineUserArticleAggregateArgs> = {
        [P in keyof T & keyof AggregateLineUserArticle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLineUserArticle[P]>
      : GetScalarType<T[P], AggregateLineUserArticle[P]>
  }




  export type LineUserArticleGroupByArgs = {
    where?: LineUserArticleWhereInput
    orderBy?: Enumerable<LineUserArticleOrderByWithAggregationInput>
    by: Array<LineUserArticleScalarFieldEnum>
    having?: LineUserArticleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LineUserArticleCountAggregateInputType | true
    _min?: LineUserArticleMinAggregateInputType
    _max?: LineUserArticleMaxAggregateInputType
  }


  export type LineUserArticleGroupByOutputType = {
    id: string
    url: string
    type: string
    createdAt: Date
    updatedAt: Date
    authorId: string
    _count: LineUserArticleCountAggregateOutputType | null
    _min: LineUserArticleMinAggregateOutputType | null
    _max: LineUserArticleMaxAggregateOutputType | null
  }

  type GetLineUserArticleGroupByPayload<T extends LineUserArticleGroupByArgs> = PrismaPromise<
    Array<
      PickArray<LineUserArticleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LineUserArticleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LineUserArticleGroupByOutputType[P]>
            : GetScalarType<T[P], LineUserArticleGroupByOutputType[P]>
        }
      >
    >


  export type LineUserArticleSelect = {
    id?: boolean
    url?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    author?: boolean | LineUserArgs
    authorId?: boolean
  }

  export type LineUserArticleInclude = {
    author?: boolean | LineUserArgs
  }

  export type LineUserArticleGetPayload<
    S extends boolean | null | undefined | LineUserArticleArgs,
    U = keyof S
      > = S extends true
        ? LineUserArticle
    : S extends undefined
    ? never
    : S extends LineUserArticleArgs | LineUserArticleFindManyArgs
    ?'include' extends U
    ? LineUserArticle  & {
    [P in TrueKeys<S['include']>]:
        P extends 'author' ? LineUserGetPayload<Exclude<S['include'], undefined | null>[P]> | null :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'author' ? LineUserGetPayload<Exclude<S['select'], undefined | null>[P]> | null :  P extends keyof LineUserArticle ? LineUserArticle[P] : never
  } 
    : LineUserArticle
  : LineUserArticle


  type LineUserArticleCountArgs = Merge<
    Omit<LineUserArticleFindManyArgs, 'select' | 'include'> & {
      select?: LineUserArticleCountAggregateInputType | true
    }
  >

  export interface LineUserArticleDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one LineUserArticle that matches the filter.
     * @param {LineUserArticleFindUniqueArgs} args - Arguments to find a LineUserArticle
     * @example
     * // Get one LineUserArticle
     * const lineUserArticle = await prisma.lineUserArticle.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends LineUserArticleFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, LineUserArticleFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'LineUserArticle'> extends True ? CheckSelect<T, Prisma__LineUserArticleClient<LineUserArticle>, Prisma__LineUserArticleClient<LineUserArticleGetPayload<T>>> : CheckSelect<T, Prisma__LineUserArticleClient<LineUserArticle | null >, Prisma__LineUserArticleClient<LineUserArticleGetPayload<T> | null >>

    /**
     * Find the first LineUserArticle that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LineUserArticleFindFirstArgs} args - Arguments to find a LineUserArticle
     * @example
     * // Get one LineUserArticle
     * const lineUserArticle = await prisma.lineUserArticle.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends LineUserArticleFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, LineUserArticleFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'LineUserArticle'> extends True ? CheckSelect<T, Prisma__LineUserArticleClient<LineUserArticle>, Prisma__LineUserArticleClient<LineUserArticleGetPayload<T>>> : CheckSelect<T, Prisma__LineUserArticleClient<LineUserArticle | null >, Prisma__LineUserArticleClient<LineUserArticleGetPayload<T> | null >>

    /**
     * Find zero or more LineUserArticles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LineUserArticleFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LineUserArticles
     * const lineUserArticles = await prisma.lineUserArticle.findMany()
     * 
     * // Get first 10 LineUserArticles
     * const lineUserArticles = await prisma.lineUserArticle.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lineUserArticleWithIdOnly = await prisma.lineUserArticle.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends LineUserArticleFindManyArgs>(
      args?: SelectSubset<T, LineUserArticleFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<LineUserArticle>>, PrismaPromise<Array<LineUserArticleGetPayload<T>>>>

    /**
     * Create a LineUserArticle.
     * @param {LineUserArticleCreateArgs} args - Arguments to create a LineUserArticle.
     * @example
     * // Create one LineUserArticle
     * const LineUserArticle = await prisma.lineUserArticle.create({
     *   data: {
     *     // ... data to create a LineUserArticle
     *   }
     * })
     * 
    **/
    create<T extends LineUserArticleCreateArgs>(
      args: SelectSubset<T, LineUserArticleCreateArgs>
    ): CheckSelect<T, Prisma__LineUserArticleClient<LineUserArticle>, Prisma__LineUserArticleClient<LineUserArticleGetPayload<T>>>

    /**
     * Create many LineUserArticles.
     *     @param {LineUserArticleCreateManyArgs} args - Arguments to create many LineUserArticles.
     *     @example
     *     // Create many LineUserArticles
     *     const lineUserArticle = await prisma.lineUserArticle.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends LineUserArticleCreateManyArgs>(
      args?: SelectSubset<T, LineUserArticleCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a LineUserArticle.
     * @param {LineUserArticleDeleteArgs} args - Arguments to delete one LineUserArticle.
     * @example
     * // Delete one LineUserArticle
     * const LineUserArticle = await prisma.lineUserArticle.delete({
     *   where: {
     *     // ... filter to delete one LineUserArticle
     *   }
     * })
     * 
    **/
    delete<T extends LineUserArticleDeleteArgs>(
      args: SelectSubset<T, LineUserArticleDeleteArgs>
    ): CheckSelect<T, Prisma__LineUserArticleClient<LineUserArticle>, Prisma__LineUserArticleClient<LineUserArticleGetPayload<T>>>

    /**
     * Update one LineUserArticle.
     * @param {LineUserArticleUpdateArgs} args - Arguments to update one LineUserArticle.
     * @example
     * // Update one LineUserArticle
     * const lineUserArticle = await prisma.lineUserArticle.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends LineUserArticleUpdateArgs>(
      args: SelectSubset<T, LineUserArticleUpdateArgs>
    ): CheckSelect<T, Prisma__LineUserArticleClient<LineUserArticle>, Prisma__LineUserArticleClient<LineUserArticleGetPayload<T>>>

    /**
     * Delete zero or more LineUserArticles.
     * @param {LineUserArticleDeleteManyArgs} args - Arguments to filter LineUserArticles to delete.
     * @example
     * // Delete a few LineUserArticles
     * const { count } = await prisma.lineUserArticle.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends LineUserArticleDeleteManyArgs>(
      args?: SelectSubset<T, LineUserArticleDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more LineUserArticles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LineUserArticleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LineUserArticles
     * const lineUserArticle = await prisma.lineUserArticle.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends LineUserArticleUpdateManyArgs>(
      args: SelectSubset<T, LineUserArticleUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one LineUserArticle.
     * @param {LineUserArticleUpsertArgs} args - Arguments to update or create a LineUserArticle.
     * @example
     * // Update or create a LineUserArticle
     * const lineUserArticle = await prisma.lineUserArticle.upsert({
     *   create: {
     *     // ... data to create a LineUserArticle
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LineUserArticle we want to update
     *   }
     * })
    **/
    upsert<T extends LineUserArticleUpsertArgs>(
      args: SelectSubset<T, LineUserArticleUpsertArgs>
    ): CheckSelect<T, Prisma__LineUserArticleClient<LineUserArticle>, Prisma__LineUserArticleClient<LineUserArticleGetPayload<T>>>

    /**
     * Find zero or more LineUserArticles that matches the filter.
     * @param {LineUserArticleFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const lineUserArticle = await prisma.lineUserArticle.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: LineUserArticleFindRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a LineUserArticle.
     * @param {LineUserArticleAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const lineUserArticle = await prisma.lineUserArticle.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: LineUserArticleAggregateRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Find one LineUserArticle that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {LineUserArticleFindUniqueOrThrowArgs} args - Arguments to find a LineUserArticle
     * @example
     * // Get one LineUserArticle
     * const lineUserArticle = await prisma.lineUserArticle.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends LineUserArticleFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, LineUserArticleFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__LineUserArticleClient<LineUserArticle>, Prisma__LineUserArticleClient<LineUserArticleGetPayload<T>>>

    /**
     * Find the first LineUserArticle that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LineUserArticleFindFirstOrThrowArgs} args - Arguments to find a LineUserArticle
     * @example
     * // Get one LineUserArticle
     * const lineUserArticle = await prisma.lineUserArticle.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends LineUserArticleFindFirstOrThrowArgs>(
      args?: SelectSubset<T, LineUserArticleFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__LineUserArticleClient<LineUserArticle>, Prisma__LineUserArticleClient<LineUserArticleGetPayload<T>>>

    /**
     * Count the number of LineUserArticles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LineUserArticleCountArgs} args - Arguments to filter LineUserArticles to count.
     * @example
     * // Count the number of LineUserArticles
     * const count = await prisma.lineUserArticle.count({
     *   where: {
     *     // ... the filter for the LineUserArticles we want to count
     *   }
     * })
    **/
    count<T extends LineUserArticleCountArgs>(
      args?: Subset<T, LineUserArticleCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LineUserArticleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LineUserArticle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LineUserArticleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LineUserArticleAggregateArgs>(args: Subset<T, LineUserArticleAggregateArgs>): PrismaPromise<GetLineUserArticleAggregateType<T>>

    /**
     * Group by LineUserArticle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LineUserArticleGroupByArgs} args - Group by arguments.
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
      T extends LineUserArticleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LineUserArticleGroupByArgs['orderBy'] }
        : { orderBy?: LineUserArticleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
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
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LineUserArticleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLineUserArticleGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for LineUserArticle.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__LineUserArticleClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    author<T extends LineUserArgs = {}>(args?: Subset<T, LineUserArgs>): CheckSelect<T, Prisma__LineUserClient<LineUser | null >, Prisma__LineUserClient<LineUserGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * LineUserArticle base type for findUnique actions
   */
  export type LineUserArticleFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the LineUserArticle
     * 
    **/
    select?: LineUserArticleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LineUserArticleInclude | null
    /**
     * Filter, which LineUserArticle to fetch.
     * 
    **/
    where: LineUserArticleWhereUniqueInput
  }

  /**
   * LineUserArticle: findUnique
   */
  export interface LineUserArticleFindUniqueArgs extends LineUserArticleFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * LineUserArticle base type for findFirst actions
   */
  export type LineUserArticleFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the LineUserArticle
     * 
    **/
    select?: LineUserArticleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LineUserArticleInclude | null
    /**
     * Filter, which LineUserArticle to fetch.
     * 
    **/
    where?: LineUserArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LineUserArticles to fetch.
     * 
    **/
    orderBy?: Enumerable<LineUserArticleOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LineUserArticles.
     * 
    **/
    cursor?: LineUserArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LineUserArticles from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LineUserArticles.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LineUserArticles.
     * 
    **/
    distinct?: Enumerable<LineUserArticleScalarFieldEnum>
  }

  /**
   * LineUserArticle: findFirst
   */
  export interface LineUserArticleFindFirstArgs extends LineUserArticleFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * LineUserArticle findMany
   */
  export type LineUserArticleFindManyArgs = {
    /**
     * Select specific fields to fetch from the LineUserArticle
     * 
    **/
    select?: LineUserArticleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LineUserArticleInclude | null
    /**
     * Filter, which LineUserArticles to fetch.
     * 
    **/
    where?: LineUserArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LineUserArticles to fetch.
     * 
    **/
    orderBy?: Enumerable<LineUserArticleOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LineUserArticles.
     * 
    **/
    cursor?: LineUserArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LineUserArticles from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LineUserArticles.
     * 
    **/
    skip?: number
    distinct?: Enumerable<LineUserArticleScalarFieldEnum>
  }


  /**
   * LineUserArticle create
   */
  export type LineUserArticleCreateArgs = {
    /**
     * Select specific fields to fetch from the LineUserArticle
     * 
    **/
    select?: LineUserArticleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LineUserArticleInclude | null
    /**
     * The data needed to create a LineUserArticle.
     * 
    **/
    data: XOR<LineUserArticleCreateInput, LineUserArticleUncheckedCreateInput>
  }


  /**
   * LineUserArticle createMany
   */
  export type LineUserArticleCreateManyArgs = {
    /**
     * The data used to create many LineUserArticles.
     * 
    **/
    data: Enumerable<LineUserArticleCreateManyInput>
  }


  /**
   * LineUserArticle update
   */
  export type LineUserArticleUpdateArgs = {
    /**
     * Select specific fields to fetch from the LineUserArticle
     * 
    **/
    select?: LineUserArticleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LineUserArticleInclude | null
    /**
     * The data needed to update a LineUserArticle.
     * 
    **/
    data: XOR<LineUserArticleUpdateInput, LineUserArticleUncheckedUpdateInput>
    /**
     * Choose, which LineUserArticle to update.
     * 
    **/
    where: LineUserArticleWhereUniqueInput
  }


  /**
   * LineUserArticle updateMany
   */
  export type LineUserArticleUpdateManyArgs = {
    /**
     * The data used to update LineUserArticles.
     * 
    **/
    data: XOR<LineUserArticleUpdateManyMutationInput, LineUserArticleUncheckedUpdateManyInput>
    /**
     * Filter which LineUserArticles to update
     * 
    **/
    where?: LineUserArticleWhereInput
  }


  /**
   * LineUserArticle upsert
   */
  export type LineUserArticleUpsertArgs = {
    /**
     * Select specific fields to fetch from the LineUserArticle
     * 
    **/
    select?: LineUserArticleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LineUserArticleInclude | null
    /**
     * The filter to search for the LineUserArticle to update in case it exists.
     * 
    **/
    where: LineUserArticleWhereUniqueInput
    /**
     * In case the LineUserArticle found by the `where` argument doesn't exist, create a new LineUserArticle with this data.
     * 
    **/
    create: XOR<LineUserArticleCreateInput, LineUserArticleUncheckedCreateInput>
    /**
     * In case the LineUserArticle was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<LineUserArticleUpdateInput, LineUserArticleUncheckedUpdateInput>
  }


  /**
   * LineUserArticle delete
   */
  export type LineUserArticleDeleteArgs = {
    /**
     * Select specific fields to fetch from the LineUserArticle
     * 
    **/
    select?: LineUserArticleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LineUserArticleInclude | null
    /**
     * Filter which LineUserArticle to delete.
     * 
    **/
    where: LineUserArticleWhereUniqueInput
  }


  /**
   * LineUserArticle deleteMany
   */
  export type LineUserArticleDeleteManyArgs = {
    /**
     * Filter which LineUserArticles to delete
     * 
    **/
    where?: LineUserArticleWhereInput
  }


  /**
   * LineUserArticle findRaw
   */
  export type LineUserArticleFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     * 
    **/
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * LineUserArticle aggregateRaw
   */
  export type LineUserArticleAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     * 
    **/
    pipeline?: Array<InputJsonValue>
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * LineUserArticle: findUniqueOrThrow
   */
  export type LineUserArticleFindUniqueOrThrowArgs = LineUserArticleFindUniqueArgsBase
      

  /**
   * LineUserArticle: findFirstOrThrow
   */
  export type LineUserArticleFindFirstOrThrowArgs = LineUserArticleFindFirstArgsBase
      

  /**
   * LineUserArticle without action
   */
  export type LineUserArticleArgs = {
    /**
     * Select specific fields to fetch from the LineUserArticle
     * 
    **/
    select?: LineUserArticleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LineUserArticleInclude | null
  }



  /**
   * Model Birthday
   */


  export type AggregateBirthday = {
    _count: BirthdayCountAggregateOutputType | null
    _min: BirthdayMinAggregateOutputType | null
    _max: BirthdayMaxAggregateOutputType | null
  }

  export type BirthdayMinAggregateOutputType = {
    id: string | null
    name: string | null
    url: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BirthdayMaxAggregateOutputType = {
    id: string | null
    name: string | null
    url: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BirthdayCountAggregateOutputType = {
    id: number
    name: number
    url: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BirthdayMinAggregateInputType = {
    id?: true
    name?: true
    url?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BirthdayMaxAggregateInputType = {
    id?: true
    name?: true
    url?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BirthdayCountAggregateInputType = {
    id?: true
    name?: true
    url?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BirthdayAggregateArgs = {
    /**
     * Filter which Birthday to aggregate.
     * 
    **/
    where?: BirthdayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Birthdays to fetch.
     * 
    **/
    orderBy?: Enumerable<BirthdayOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: BirthdayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Birthdays from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Birthdays.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Birthdays
    **/
    _count?: true | BirthdayCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BirthdayMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BirthdayMaxAggregateInputType
  }

  export type GetBirthdayAggregateType<T extends BirthdayAggregateArgs> = {
        [P in keyof T & keyof AggregateBirthday]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBirthday[P]>
      : GetScalarType<T[P], AggregateBirthday[P]>
  }




  export type BirthdayGroupByArgs = {
    where?: BirthdayWhereInput
    orderBy?: Enumerable<BirthdayOrderByWithAggregationInput>
    by: Array<BirthdayScalarFieldEnum>
    having?: BirthdayScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BirthdayCountAggregateInputType | true
    _min?: BirthdayMinAggregateInputType
    _max?: BirthdayMaxAggregateInputType
  }


  export type BirthdayGroupByOutputType = {
    id: string
    name: string
    url: string
    createdAt: Date
    updatedAt: Date
    _count: BirthdayCountAggregateOutputType | null
    _min: BirthdayMinAggregateOutputType | null
    _max: BirthdayMaxAggregateOutputType | null
  }

  type GetBirthdayGroupByPayload<T extends BirthdayGroupByArgs> = PrismaPromise<
    Array<
      PickArray<BirthdayGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BirthdayGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BirthdayGroupByOutputType[P]>
            : GetScalarType<T[P], BirthdayGroupByOutputType[P]>
        }
      >
    >


  export type BirthdaySelect = {
    id?: boolean
    name?: boolean
    url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    gift?: boolean | BirthdayGiftFindManyArgs
    _count?: boolean | BirthdayCountOutputTypeArgs
  }

  export type BirthdayInclude = {
    gift?: boolean | BirthdayGiftFindManyArgs
    _count?: boolean | BirthdayCountOutputTypeArgs
  }

  export type BirthdayGetPayload<
    S extends boolean | null | undefined | BirthdayArgs,
    U = keyof S
      > = S extends true
        ? Birthday
    : S extends undefined
    ? never
    : S extends BirthdayArgs | BirthdayFindManyArgs
    ?'include' extends U
    ? Birthday  & {
    [P in TrueKeys<S['include']>]:
        P extends 'gift' ? Array < BirthdayGiftGetPayload<Exclude<S['include'], undefined | null>[P]>>  :
        P extends '_count' ? BirthdayCountOutputTypeGetPayload<Exclude<S['include'], undefined | null>[P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'gift' ? Array < BirthdayGiftGetPayload<Exclude<S['select'], undefined | null>[P]>>  :
        P extends '_count' ? BirthdayCountOutputTypeGetPayload<Exclude<S['select'], undefined | null>[P]> :  P extends keyof Birthday ? Birthday[P] : never
  } 
    : Birthday
  : Birthday


  type BirthdayCountArgs = Merge<
    Omit<BirthdayFindManyArgs, 'select' | 'include'> & {
      select?: BirthdayCountAggregateInputType | true
    }
  >

  export interface BirthdayDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Birthday that matches the filter.
     * @param {BirthdayFindUniqueArgs} args - Arguments to find a Birthday
     * @example
     * // Get one Birthday
     * const birthday = await prisma.birthday.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BirthdayFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, BirthdayFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Birthday'> extends True ? CheckSelect<T, Prisma__BirthdayClient<Birthday>, Prisma__BirthdayClient<BirthdayGetPayload<T>>> : CheckSelect<T, Prisma__BirthdayClient<Birthday | null >, Prisma__BirthdayClient<BirthdayGetPayload<T> | null >>

    /**
     * Find the first Birthday that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BirthdayFindFirstArgs} args - Arguments to find a Birthday
     * @example
     * // Get one Birthday
     * const birthday = await prisma.birthday.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BirthdayFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, BirthdayFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Birthday'> extends True ? CheckSelect<T, Prisma__BirthdayClient<Birthday>, Prisma__BirthdayClient<BirthdayGetPayload<T>>> : CheckSelect<T, Prisma__BirthdayClient<Birthday | null >, Prisma__BirthdayClient<BirthdayGetPayload<T> | null >>

    /**
     * Find zero or more Birthdays that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BirthdayFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Birthdays
     * const birthdays = await prisma.birthday.findMany()
     * 
     * // Get first 10 Birthdays
     * const birthdays = await prisma.birthday.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const birthdayWithIdOnly = await prisma.birthday.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends BirthdayFindManyArgs>(
      args?: SelectSubset<T, BirthdayFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Birthday>>, PrismaPromise<Array<BirthdayGetPayload<T>>>>

    /**
     * Create a Birthday.
     * @param {BirthdayCreateArgs} args - Arguments to create a Birthday.
     * @example
     * // Create one Birthday
     * const Birthday = await prisma.birthday.create({
     *   data: {
     *     // ... data to create a Birthday
     *   }
     * })
     * 
    **/
    create<T extends BirthdayCreateArgs>(
      args: SelectSubset<T, BirthdayCreateArgs>
    ): CheckSelect<T, Prisma__BirthdayClient<Birthday>, Prisma__BirthdayClient<BirthdayGetPayload<T>>>

    /**
     * Create many Birthdays.
     *     @param {BirthdayCreateManyArgs} args - Arguments to create many Birthdays.
     *     @example
     *     // Create many Birthdays
     *     const birthday = await prisma.birthday.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends BirthdayCreateManyArgs>(
      args?: SelectSubset<T, BirthdayCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Birthday.
     * @param {BirthdayDeleteArgs} args - Arguments to delete one Birthday.
     * @example
     * // Delete one Birthday
     * const Birthday = await prisma.birthday.delete({
     *   where: {
     *     // ... filter to delete one Birthday
     *   }
     * })
     * 
    **/
    delete<T extends BirthdayDeleteArgs>(
      args: SelectSubset<T, BirthdayDeleteArgs>
    ): CheckSelect<T, Prisma__BirthdayClient<Birthday>, Prisma__BirthdayClient<BirthdayGetPayload<T>>>

    /**
     * Update one Birthday.
     * @param {BirthdayUpdateArgs} args - Arguments to update one Birthday.
     * @example
     * // Update one Birthday
     * const birthday = await prisma.birthday.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BirthdayUpdateArgs>(
      args: SelectSubset<T, BirthdayUpdateArgs>
    ): CheckSelect<T, Prisma__BirthdayClient<Birthday>, Prisma__BirthdayClient<BirthdayGetPayload<T>>>

    /**
     * Delete zero or more Birthdays.
     * @param {BirthdayDeleteManyArgs} args - Arguments to filter Birthdays to delete.
     * @example
     * // Delete a few Birthdays
     * const { count } = await prisma.birthday.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BirthdayDeleteManyArgs>(
      args?: SelectSubset<T, BirthdayDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Birthdays.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BirthdayUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Birthdays
     * const birthday = await prisma.birthday.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BirthdayUpdateManyArgs>(
      args: SelectSubset<T, BirthdayUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Birthday.
     * @param {BirthdayUpsertArgs} args - Arguments to update or create a Birthday.
     * @example
     * // Update or create a Birthday
     * const birthday = await prisma.birthday.upsert({
     *   create: {
     *     // ... data to create a Birthday
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Birthday we want to update
     *   }
     * })
    **/
    upsert<T extends BirthdayUpsertArgs>(
      args: SelectSubset<T, BirthdayUpsertArgs>
    ): CheckSelect<T, Prisma__BirthdayClient<Birthday>, Prisma__BirthdayClient<BirthdayGetPayload<T>>>

    /**
     * Find zero or more Birthdays that matches the filter.
     * @param {BirthdayFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const birthday = await prisma.birthday.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: BirthdayFindRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Birthday.
     * @param {BirthdayAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const birthday = await prisma.birthday.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: BirthdayAggregateRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Find one Birthday that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {BirthdayFindUniqueOrThrowArgs} args - Arguments to find a Birthday
     * @example
     * // Get one Birthday
     * const birthday = await prisma.birthday.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BirthdayFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, BirthdayFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__BirthdayClient<Birthday>, Prisma__BirthdayClient<BirthdayGetPayload<T>>>

    /**
     * Find the first Birthday that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BirthdayFindFirstOrThrowArgs} args - Arguments to find a Birthday
     * @example
     * // Get one Birthday
     * const birthday = await prisma.birthday.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BirthdayFindFirstOrThrowArgs>(
      args?: SelectSubset<T, BirthdayFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__BirthdayClient<Birthday>, Prisma__BirthdayClient<BirthdayGetPayload<T>>>

    /**
     * Count the number of Birthdays.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BirthdayCountArgs} args - Arguments to filter Birthdays to count.
     * @example
     * // Count the number of Birthdays
     * const count = await prisma.birthday.count({
     *   where: {
     *     // ... the filter for the Birthdays we want to count
     *   }
     * })
    **/
    count<T extends BirthdayCountArgs>(
      args?: Subset<T, BirthdayCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BirthdayCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Birthday.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BirthdayAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BirthdayAggregateArgs>(args: Subset<T, BirthdayAggregateArgs>): PrismaPromise<GetBirthdayAggregateType<T>>

    /**
     * Group by Birthday.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BirthdayGroupByArgs} args - Group by arguments.
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
      T extends BirthdayGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BirthdayGroupByArgs['orderBy'] }
        : { orderBy?: BirthdayGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
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
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BirthdayGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBirthdayGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Birthday.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__BirthdayClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    gift<T extends BirthdayGiftFindManyArgs = {}>(args?: Subset<T, BirthdayGiftFindManyArgs>): CheckSelect<T, PrismaPromise<Array<BirthdayGift>>, PrismaPromise<Array<BirthdayGiftGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Birthday base type for findUnique actions
   */
  export type BirthdayFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Birthday
     * 
    **/
    select?: BirthdaySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BirthdayInclude | null
    /**
     * Filter, which Birthday to fetch.
     * 
    **/
    where: BirthdayWhereUniqueInput
  }

  /**
   * Birthday: findUnique
   */
  export interface BirthdayFindUniqueArgs extends BirthdayFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Birthday base type for findFirst actions
   */
  export type BirthdayFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Birthday
     * 
    **/
    select?: BirthdaySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BirthdayInclude | null
    /**
     * Filter, which Birthday to fetch.
     * 
    **/
    where?: BirthdayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Birthdays to fetch.
     * 
    **/
    orderBy?: Enumerable<BirthdayOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Birthdays.
     * 
    **/
    cursor?: BirthdayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Birthdays from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Birthdays.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Birthdays.
     * 
    **/
    distinct?: Enumerable<BirthdayScalarFieldEnum>
  }

  /**
   * Birthday: findFirst
   */
  export interface BirthdayFindFirstArgs extends BirthdayFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Birthday findMany
   */
  export type BirthdayFindManyArgs = {
    /**
     * Select specific fields to fetch from the Birthday
     * 
    **/
    select?: BirthdaySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BirthdayInclude | null
    /**
     * Filter, which Birthdays to fetch.
     * 
    **/
    where?: BirthdayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Birthdays to fetch.
     * 
    **/
    orderBy?: Enumerable<BirthdayOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Birthdays.
     * 
    **/
    cursor?: BirthdayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Birthdays from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Birthdays.
     * 
    **/
    skip?: number
    distinct?: Enumerable<BirthdayScalarFieldEnum>
  }


  /**
   * Birthday create
   */
  export type BirthdayCreateArgs = {
    /**
     * Select specific fields to fetch from the Birthday
     * 
    **/
    select?: BirthdaySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BirthdayInclude | null
    /**
     * The data needed to create a Birthday.
     * 
    **/
    data: XOR<BirthdayCreateInput, BirthdayUncheckedCreateInput>
  }


  /**
   * Birthday createMany
   */
  export type BirthdayCreateManyArgs = {
    /**
     * The data used to create many Birthdays.
     * 
    **/
    data: Enumerable<BirthdayCreateManyInput>
  }


  /**
   * Birthday update
   */
  export type BirthdayUpdateArgs = {
    /**
     * Select specific fields to fetch from the Birthday
     * 
    **/
    select?: BirthdaySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BirthdayInclude | null
    /**
     * The data needed to update a Birthday.
     * 
    **/
    data: XOR<BirthdayUpdateInput, BirthdayUncheckedUpdateInput>
    /**
     * Choose, which Birthday to update.
     * 
    **/
    where: BirthdayWhereUniqueInput
  }


  /**
   * Birthday updateMany
   */
  export type BirthdayUpdateManyArgs = {
    /**
     * The data used to update Birthdays.
     * 
    **/
    data: XOR<BirthdayUpdateManyMutationInput, BirthdayUncheckedUpdateManyInput>
    /**
     * Filter which Birthdays to update
     * 
    **/
    where?: BirthdayWhereInput
  }


  /**
   * Birthday upsert
   */
  export type BirthdayUpsertArgs = {
    /**
     * Select specific fields to fetch from the Birthday
     * 
    **/
    select?: BirthdaySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BirthdayInclude | null
    /**
     * The filter to search for the Birthday to update in case it exists.
     * 
    **/
    where: BirthdayWhereUniqueInput
    /**
     * In case the Birthday found by the `where` argument doesn't exist, create a new Birthday with this data.
     * 
    **/
    create: XOR<BirthdayCreateInput, BirthdayUncheckedCreateInput>
    /**
     * In case the Birthday was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<BirthdayUpdateInput, BirthdayUncheckedUpdateInput>
  }


  /**
   * Birthday delete
   */
  export type BirthdayDeleteArgs = {
    /**
     * Select specific fields to fetch from the Birthday
     * 
    **/
    select?: BirthdaySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BirthdayInclude | null
    /**
     * Filter which Birthday to delete.
     * 
    **/
    where: BirthdayWhereUniqueInput
  }


  /**
   * Birthday deleteMany
   */
  export type BirthdayDeleteManyArgs = {
    /**
     * Filter which Birthdays to delete
     * 
    **/
    where?: BirthdayWhereInput
  }


  /**
   * Birthday findRaw
   */
  export type BirthdayFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     * 
    **/
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * Birthday aggregateRaw
   */
  export type BirthdayAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     * 
    **/
    pipeline?: Array<InputJsonValue>
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * Birthday: findUniqueOrThrow
   */
  export type BirthdayFindUniqueOrThrowArgs = BirthdayFindUniqueArgsBase
      

  /**
   * Birthday: findFirstOrThrow
   */
  export type BirthdayFindFirstOrThrowArgs = BirthdayFindFirstArgsBase
      

  /**
   * Birthday without action
   */
  export type BirthdayArgs = {
    /**
     * Select specific fields to fetch from the Birthday
     * 
    **/
    select?: BirthdaySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BirthdayInclude | null
  }



  /**
   * Model BirthdayGift
   */


  export type AggregateBirthdayGift = {
    _count: BirthdayGiftCountAggregateOutputType | null
    _min: BirthdayGiftMinAggregateOutputType | null
    _max: BirthdayGiftMaxAggregateOutputType | null
  }

  export type BirthdayGiftMinAggregateOutputType = {
    id: string | null
    img: string | null
    p: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type BirthdayGiftMaxAggregateOutputType = {
    id: string | null
    img: string | null
    p: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type BirthdayGiftCountAggregateOutputType = {
    id: number
    img: number
    p: number
    createdAt: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type BirthdayGiftMinAggregateInputType = {
    id?: true
    img?: true
    p?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type BirthdayGiftMaxAggregateInputType = {
    id?: true
    img?: true
    p?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type BirthdayGiftCountAggregateInputType = {
    id?: true
    img?: true
    p?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    _all?: true
  }

  export type BirthdayGiftAggregateArgs = {
    /**
     * Filter which BirthdayGift to aggregate.
     * 
    **/
    where?: BirthdayGiftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BirthdayGifts to fetch.
     * 
    **/
    orderBy?: Enumerable<BirthdayGiftOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: BirthdayGiftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BirthdayGifts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BirthdayGifts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BirthdayGifts
    **/
    _count?: true | BirthdayGiftCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BirthdayGiftMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BirthdayGiftMaxAggregateInputType
  }

  export type GetBirthdayGiftAggregateType<T extends BirthdayGiftAggregateArgs> = {
        [P in keyof T & keyof AggregateBirthdayGift]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBirthdayGift[P]>
      : GetScalarType<T[P], AggregateBirthdayGift[P]>
  }




  export type BirthdayGiftGroupByArgs = {
    where?: BirthdayGiftWhereInput
    orderBy?: Enumerable<BirthdayGiftOrderByWithAggregationInput>
    by: Array<BirthdayGiftScalarFieldEnum>
    having?: BirthdayGiftScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BirthdayGiftCountAggregateInputType | true
    _min?: BirthdayGiftMinAggregateInputType
    _max?: BirthdayGiftMaxAggregateInputType
  }


  export type BirthdayGiftGroupByOutputType = {
    id: string
    img: string
    p: string
    createdAt: Date
    updatedAt: Date
    userId: string | null
    _count: BirthdayGiftCountAggregateOutputType | null
    _min: BirthdayGiftMinAggregateOutputType | null
    _max: BirthdayGiftMaxAggregateOutputType | null
  }

  type GetBirthdayGiftGroupByPayload<T extends BirthdayGiftGroupByArgs> = PrismaPromise<
    Array<
      PickArray<BirthdayGiftGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BirthdayGiftGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BirthdayGiftGroupByOutputType[P]>
            : GetScalarType<T[P], BirthdayGiftGroupByOutputType[P]>
        }
      >
    >


  export type BirthdayGiftSelect = {
    id?: boolean
    img?: boolean
    p?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | BirthdayArgs
    userId?: boolean
  }

  export type BirthdayGiftInclude = {
    user?: boolean | BirthdayArgs
  }

  export type BirthdayGiftGetPayload<
    S extends boolean | null | undefined | BirthdayGiftArgs,
    U = keyof S
      > = S extends true
        ? BirthdayGift
    : S extends undefined
    ? never
    : S extends BirthdayGiftArgs | BirthdayGiftFindManyArgs
    ?'include' extends U
    ? BirthdayGift  & {
    [P in TrueKeys<S['include']>]:
        P extends 'user' ? BirthdayGetPayload<Exclude<S['include'], undefined | null>[P]> | null :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'user' ? BirthdayGetPayload<Exclude<S['select'], undefined | null>[P]> | null :  P extends keyof BirthdayGift ? BirthdayGift[P] : never
  } 
    : BirthdayGift
  : BirthdayGift


  type BirthdayGiftCountArgs = Merge<
    Omit<BirthdayGiftFindManyArgs, 'select' | 'include'> & {
      select?: BirthdayGiftCountAggregateInputType | true
    }
  >

  export interface BirthdayGiftDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one BirthdayGift that matches the filter.
     * @param {BirthdayGiftFindUniqueArgs} args - Arguments to find a BirthdayGift
     * @example
     * // Get one BirthdayGift
     * const birthdayGift = await prisma.birthdayGift.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BirthdayGiftFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, BirthdayGiftFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'BirthdayGift'> extends True ? CheckSelect<T, Prisma__BirthdayGiftClient<BirthdayGift>, Prisma__BirthdayGiftClient<BirthdayGiftGetPayload<T>>> : CheckSelect<T, Prisma__BirthdayGiftClient<BirthdayGift | null >, Prisma__BirthdayGiftClient<BirthdayGiftGetPayload<T> | null >>

    /**
     * Find the first BirthdayGift that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BirthdayGiftFindFirstArgs} args - Arguments to find a BirthdayGift
     * @example
     * // Get one BirthdayGift
     * const birthdayGift = await prisma.birthdayGift.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BirthdayGiftFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, BirthdayGiftFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'BirthdayGift'> extends True ? CheckSelect<T, Prisma__BirthdayGiftClient<BirthdayGift>, Prisma__BirthdayGiftClient<BirthdayGiftGetPayload<T>>> : CheckSelect<T, Prisma__BirthdayGiftClient<BirthdayGift | null >, Prisma__BirthdayGiftClient<BirthdayGiftGetPayload<T> | null >>

    /**
     * Find zero or more BirthdayGifts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BirthdayGiftFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BirthdayGifts
     * const birthdayGifts = await prisma.birthdayGift.findMany()
     * 
     * // Get first 10 BirthdayGifts
     * const birthdayGifts = await prisma.birthdayGift.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const birthdayGiftWithIdOnly = await prisma.birthdayGift.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends BirthdayGiftFindManyArgs>(
      args?: SelectSubset<T, BirthdayGiftFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<BirthdayGift>>, PrismaPromise<Array<BirthdayGiftGetPayload<T>>>>

    /**
     * Create a BirthdayGift.
     * @param {BirthdayGiftCreateArgs} args - Arguments to create a BirthdayGift.
     * @example
     * // Create one BirthdayGift
     * const BirthdayGift = await prisma.birthdayGift.create({
     *   data: {
     *     // ... data to create a BirthdayGift
     *   }
     * })
     * 
    **/
    create<T extends BirthdayGiftCreateArgs>(
      args: SelectSubset<T, BirthdayGiftCreateArgs>
    ): CheckSelect<T, Prisma__BirthdayGiftClient<BirthdayGift>, Prisma__BirthdayGiftClient<BirthdayGiftGetPayload<T>>>

    /**
     * Create many BirthdayGifts.
     *     @param {BirthdayGiftCreateManyArgs} args - Arguments to create many BirthdayGifts.
     *     @example
     *     // Create many BirthdayGifts
     *     const birthdayGift = await prisma.birthdayGift.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends BirthdayGiftCreateManyArgs>(
      args?: SelectSubset<T, BirthdayGiftCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a BirthdayGift.
     * @param {BirthdayGiftDeleteArgs} args - Arguments to delete one BirthdayGift.
     * @example
     * // Delete one BirthdayGift
     * const BirthdayGift = await prisma.birthdayGift.delete({
     *   where: {
     *     // ... filter to delete one BirthdayGift
     *   }
     * })
     * 
    **/
    delete<T extends BirthdayGiftDeleteArgs>(
      args: SelectSubset<T, BirthdayGiftDeleteArgs>
    ): CheckSelect<T, Prisma__BirthdayGiftClient<BirthdayGift>, Prisma__BirthdayGiftClient<BirthdayGiftGetPayload<T>>>

    /**
     * Update one BirthdayGift.
     * @param {BirthdayGiftUpdateArgs} args - Arguments to update one BirthdayGift.
     * @example
     * // Update one BirthdayGift
     * const birthdayGift = await prisma.birthdayGift.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BirthdayGiftUpdateArgs>(
      args: SelectSubset<T, BirthdayGiftUpdateArgs>
    ): CheckSelect<T, Prisma__BirthdayGiftClient<BirthdayGift>, Prisma__BirthdayGiftClient<BirthdayGiftGetPayload<T>>>

    /**
     * Delete zero or more BirthdayGifts.
     * @param {BirthdayGiftDeleteManyArgs} args - Arguments to filter BirthdayGifts to delete.
     * @example
     * // Delete a few BirthdayGifts
     * const { count } = await prisma.birthdayGift.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BirthdayGiftDeleteManyArgs>(
      args?: SelectSubset<T, BirthdayGiftDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more BirthdayGifts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BirthdayGiftUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BirthdayGifts
     * const birthdayGift = await prisma.birthdayGift.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BirthdayGiftUpdateManyArgs>(
      args: SelectSubset<T, BirthdayGiftUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one BirthdayGift.
     * @param {BirthdayGiftUpsertArgs} args - Arguments to update or create a BirthdayGift.
     * @example
     * // Update or create a BirthdayGift
     * const birthdayGift = await prisma.birthdayGift.upsert({
     *   create: {
     *     // ... data to create a BirthdayGift
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BirthdayGift we want to update
     *   }
     * })
    **/
    upsert<T extends BirthdayGiftUpsertArgs>(
      args: SelectSubset<T, BirthdayGiftUpsertArgs>
    ): CheckSelect<T, Prisma__BirthdayGiftClient<BirthdayGift>, Prisma__BirthdayGiftClient<BirthdayGiftGetPayload<T>>>

    /**
     * Find zero or more BirthdayGifts that matches the filter.
     * @param {BirthdayGiftFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const birthdayGift = await prisma.birthdayGift.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: BirthdayGiftFindRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a BirthdayGift.
     * @param {BirthdayGiftAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const birthdayGift = await prisma.birthdayGift.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: BirthdayGiftAggregateRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Find one BirthdayGift that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {BirthdayGiftFindUniqueOrThrowArgs} args - Arguments to find a BirthdayGift
     * @example
     * // Get one BirthdayGift
     * const birthdayGift = await prisma.birthdayGift.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BirthdayGiftFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, BirthdayGiftFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__BirthdayGiftClient<BirthdayGift>, Prisma__BirthdayGiftClient<BirthdayGiftGetPayload<T>>>

    /**
     * Find the first BirthdayGift that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BirthdayGiftFindFirstOrThrowArgs} args - Arguments to find a BirthdayGift
     * @example
     * // Get one BirthdayGift
     * const birthdayGift = await prisma.birthdayGift.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BirthdayGiftFindFirstOrThrowArgs>(
      args?: SelectSubset<T, BirthdayGiftFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__BirthdayGiftClient<BirthdayGift>, Prisma__BirthdayGiftClient<BirthdayGiftGetPayload<T>>>

    /**
     * Count the number of BirthdayGifts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BirthdayGiftCountArgs} args - Arguments to filter BirthdayGifts to count.
     * @example
     * // Count the number of BirthdayGifts
     * const count = await prisma.birthdayGift.count({
     *   where: {
     *     // ... the filter for the BirthdayGifts we want to count
     *   }
     * })
    **/
    count<T extends BirthdayGiftCountArgs>(
      args?: Subset<T, BirthdayGiftCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BirthdayGiftCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BirthdayGift.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BirthdayGiftAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BirthdayGiftAggregateArgs>(args: Subset<T, BirthdayGiftAggregateArgs>): PrismaPromise<GetBirthdayGiftAggregateType<T>>

    /**
     * Group by BirthdayGift.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BirthdayGiftGroupByArgs} args - Group by arguments.
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
      T extends BirthdayGiftGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BirthdayGiftGroupByArgs['orderBy'] }
        : { orderBy?: BirthdayGiftGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
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
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BirthdayGiftGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBirthdayGiftGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for BirthdayGift.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__BirthdayGiftClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    user<T extends BirthdayArgs = {}>(args?: Subset<T, BirthdayArgs>): CheckSelect<T, Prisma__BirthdayClient<Birthday | null >, Prisma__BirthdayClient<BirthdayGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * BirthdayGift base type for findUnique actions
   */
  export type BirthdayGiftFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the BirthdayGift
     * 
    **/
    select?: BirthdayGiftSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BirthdayGiftInclude | null
    /**
     * Filter, which BirthdayGift to fetch.
     * 
    **/
    where: BirthdayGiftWhereUniqueInput
  }

  /**
   * BirthdayGift: findUnique
   */
  export interface BirthdayGiftFindUniqueArgs extends BirthdayGiftFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * BirthdayGift base type for findFirst actions
   */
  export type BirthdayGiftFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the BirthdayGift
     * 
    **/
    select?: BirthdayGiftSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BirthdayGiftInclude | null
    /**
     * Filter, which BirthdayGift to fetch.
     * 
    **/
    where?: BirthdayGiftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BirthdayGifts to fetch.
     * 
    **/
    orderBy?: Enumerable<BirthdayGiftOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BirthdayGifts.
     * 
    **/
    cursor?: BirthdayGiftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BirthdayGifts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BirthdayGifts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BirthdayGifts.
     * 
    **/
    distinct?: Enumerable<BirthdayGiftScalarFieldEnum>
  }

  /**
   * BirthdayGift: findFirst
   */
  export interface BirthdayGiftFindFirstArgs extends BirthdayGiftFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * BirthdayGift findMany
   */
  export type BirthdayGiftFindManyArgs = {
    /**
     * Select specific fields to fetch from the BirthdayGift
     * 
    **/
    select?: BirthdayGiftSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BirthdayGiftInclude | null
    /**
     * Filter, which BirthdayGifts to fetch.
     * 
    **/
    where?: BirthdayGiftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BirthdayGifts to fetch.
     * 
    **/
    orderBy?: Enumerable<BirthdayGiftOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BirthdayGifts.
     * 
    **/
    cursor?: BirthdayGiftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BirthdayGifts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BirthdayGifts.
     * 
    **/
    skip?: number
    distinct?: Enumerable<BirthdayGiftScalarFieldEnum>
  }


  /**
   * BirthdayGift create
   */
  export type BirthdayGiftCreateArgs = {
    /**
     * Select specific fields to fetch from the BirthdayGift
     * 
    **/
    select?: BirthdayGiftSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BirthdayGiftInclude | null
    /**
     * The data needed to create a BirthdayGift.
     * 
    **/
    data: XOR<BirthdayGiftCreateInput, BirthdayGiftUncheckedCreateInput>
  }


  /**
   * BirthdayGift createMany
   */
  export type BirthdayGiftCreateManyArgs = {
    /**
     * The data used to create many BirthdayGifts.
     * 
    **/
    data: Enumerable<BirthdayGiftCreateManyInput>
  }


  /**
   * BirthdayGift update
   */
  export type BirthdayGiftUpdateArgs = {
    /**
     * Select specific fields to fetch from the BirthdayGift
     * 
    **/
    select?: BirthdayGiftSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BirthdayGiftInclude | null
    /**
     * The data needed to update a BirthdayGift.
     * 
    **/
    data: XOR<BirthdayGiftUpdateInput, BirthdayGiftUncheckedUpdateInput>
    /**
     * Choose, which BirthdayGift to update.
     * 
    **/
    where: BirthdayGiftWhereUniqueInput
  }


  /**
   * BirthdayGift updateMany
   */
  export type BirthdayGiftUpdateManyArgs = {
    /**
     * The data used to update BirthdayGifts.
     * 
    **/
    data: XOR<BirthdayGiftUpdateManyMutationInput, BirthdayGiftUncheckedUpdateManyInput>
    /**
     * Filter which BirthdayGifts to update
     * 
    **/
    where?: BirthdayGiftWhereInput
  }


  /**
   * BirthdayGift upsert
   */
  export type BirthdayGiftUpsertArgs = {
    /**
     * Select specific fields to fetch from the BirthdayGift
     * 
    **/
    select?: BirthdayGiftSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BirthdayGiftInclude | null
    /**
     * The filter to search for the BirthdayGift to update in case it exists.
     * 
    **/
    where: BirthdayGiftWhereUniqueInput
    /**
     * In case the BirthdayGift found by the `where` argument doesn't exist, create a new BirthdayGift with this data.
     * 
    **/
    create: XOR<BirthdayGiftCreateInput, BirthdayGiftUncheckedCreateInput>
    /**
     * In case the BirthdayGift was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<BirthdayGiftUpdateInput, BirthdayGiftUncheckedUpdateInput>
  }


  /**
   * BirthdayGift delete
   */
  export type BirthdayGiftDeleteArgs = {
    /**
     * Select specific fields to fetch from the BirthdayGift
     * 
    **/
    select?: BirthdayGiftSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BirthdayGiftInclude | null
    /**
     * Filter which BirthdayGift to delete.
     * 
    **/
    where: BirthdayGiftWhereUniqueInput
  }


  /**
   * BirthdayGift deleteMany
   */
  export type BirthdayGiftDeleteManyArgs = {
    /**
     * Filter which BirthdayGifts to delete
     * 
    **/
    where?: BirthdayGiftWhereInput
  }


  /**
   * BirthdayGift findRaw
   */
  export type BirthdayGiftFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     * 
    **/
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * BirthdayGift aggregateRaw
   */
  export type BirthdayGiftAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     * 
    **/
    pipeline?: Array<InputJsonValue>
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * BirthdayGift: findUniqueOrThrow
   */
  export type BirthdayGiftFindUniqueOrThrowArgs = BirthdayGiftFindUniqueArgsBase
      

  /**
   * BirthdayGift: findFirstOrThrow
   */
  export type BirthdayGiftFindFirstOrThrowArgs = BirthdayGiftFindFirstArgsBase
      

  /**
   * BirthdayGift without action
   */
  export type BirthdayGiftArgs = {
    /**
     * Select specific fields to fetch from the BirthdayGift
     * 
    **/
    select?: BirthdayGiftSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BirthdayGiftInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const BirthdayGiftScalarFieldEnum: {
    id: 'id',
    img: 'img',
    p: 'p',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId'
  };

  export type BirthdayGiftScalarFieldEnum = (typeof BirthdayGiftScalarFieldEnum)[keyof typeof BirthdayGiftScalarFieldEnum]


  export const BirthdayScalarFieldEnum: {
    id: 'id',
    name: 'name',
    url: 'url',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BirthdayScalarFieldEnum = (typeof BirthdayScalarFieldEnum)[keyof typeof BirthdayScalarFieldEnum]


  export const LineUserArticleScalarFieldEnum: {
    id: 'id',
    url: 'url',
    type: 'type',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    authorId: 'authorId'
  };

  export type LineUserArticleScalarFieldEnum = (typeof LineUserArticleScalarFieldEnum)[keyof typeof LineUserArticleScalarFieldEnum]


  export const LineUserScalarFieldEnum: {
    id: 'id',
    callback: 'callback',
    category: 'category',
    url: 'url',
    type: 'type',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LineUserScalarFieldEnum = (typeof LineUserScalarFieldEnum)[keyof typeof LineUserScalarFieldEnum]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TagScalarFieldEnum: {
    id: 'id',
    title: 'title'
  };

  export type TagScalarFieldEnum = (typeof TagScalarFieldEnum)[keyof typeof TagScalarFieldEnum]


  export const TopicScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    image: 'image',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userid: 'userid'
  };

  export type TopicScalarFieldEnum = (typeof TopicScalarFieldEnum)[keyof typeof TopicScalarFieldEnum]


  export const TopicTagScalarFieldEnum: {
    id: 'id',
    tagId: 'tagId',
    topicId: 'topicId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TopicTagScalarFieldEnum = (typeof TopicTagScalarFieldEnum)[keyof typeof TopicTagScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    active: 'active',
    avatar: 'avatar',
    name: 'name',
    password: 'password',
    permissions: 'permissions',
    phone: 'phone',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    id?: StringFilter | string
    active?: StringFilter | string
    avatar?: StringFilter | string
    name?: StringFilter | string
    password?: StringFilter | string
    permissions?: StringNullableListFilter
    phone?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    Topic?: TopicListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    active?: SortOrder
    avatar?: SortOrder
    name?: SortOrder
    password?: SortOrder
    permissions?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Topic?: TopicOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = {
    id?: string
    phone?: string
  }

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    active?: SortOrder
    avatar?: SortOrder
    name?: SortOrder
    password?: SortOrder
    permissions?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    active?: StringWithAggregatesFilter | string
    avatar?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    password?: StringWithAggregatesFilter | string
    permissions?: StringNullableListFilter
    phone?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type TagWhereInput = {
    AND?: Enumerable<TagWhereInput>
    OR?: Enumerable<TagWhereInput>
    NOT?: Enumerable<TagWhereInput>
    id?: StringFilter | string
    title?: StringFilter | string
    TopicTag?: TopicTagListRelationFilter
  }

  export type TagOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    TopicTag?: TopicTagOrderByRelationAggregateInput
  }

  export type TagWhereUniqueInput = {
    id?: string
  }

  export type TagOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    _count?: TagCountOrderByAggregateInput
    _max?: TagMaxOrderByAggregateInput
    _min?: TagMinOrderByAggregateInput
  }

  export type TagScalarWhereWithAggregatesInput = {
    AND?: Enumerable<TagScalarWhereWithAggregatesInput>
    OR?: Enumerable<TagScalarWhereWithAggregatesInput>
    NOT?: Enumerable<TagScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    title?: StringWithAggregatesFilter | string
  }

  export type TopicWhereInput = {
    AND?: Enumerable<TopicWhereInput>
    OR?: Enumerable<TopicWhereInput>
    NOT?: Enumerable<TopicWhereInput>
    id?: StringFilter | string
    title?: StringFilter | string
    content?: StringFilter | string
    TopicTag?: TopicTagListRelationFilter
    image?: StringNullableFilter | string | null
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput> | null
    userid?: StringFilter | string
  }

  export type TopicOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    TopicTag?: TopicTagOrderByRelationAggregateInput
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    userid?: SortOrder
  }

  export type TopicWhereUniqueInput = {
    id?: string
  }

  export type TopicOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userid?: SortOrder
    _count?: TopicCountOrderByAggregateInput
    _max?: TopicMaxOrderByAggregateInput
    _min?: TopicMinOrderByAggregateInput
  }

  export type TopicScalarWhereWithAggregatesInput = {
    AND?: Enumerable<TopicScalarWhereWithAggregatesInput>
    OR?: Enumerable<TopicScalarWhereWithAggregatesInput>
    NOT?: Enumerable<TopicScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    title?: StringWithAggregatesFilter | string
    content?: StringWithAggregatesFilter | string
    image?: StringNullableWithAggregatesFilter | string | null
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    userid?: StringWithAggregatesFilter | string
  }

  export type TopicTagWhereInput = {
    AND?: Enumerable<TopicTagWhereInput>
    OR?: Enumerable<TopicTagWhereInput>
    NOT?: Enumerable<TopicTagWhereInput>
    id?: StringFilter | string
    tag?: XOR<TagRelationFilter, TagWhereInput>
    tagId?: StringFilter | string
    topic?: XOR<TopicRelationFilter, TopicWhereInput>
    topicId?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type TopicTagOrderByWithRelationInput = {
    id?: SortOrder
    tag?: TagOrderByWithRelationInput
    tagId?: SortOrder
    topic?: TopicOrderByWithRelationInput
    topicId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TopicTagWhereUniqueInput = {
    id?: string
  }

  export type TopicTagOrderByWithAggregationInput = {
    id?: SortOrder
    tagId?: SortOrder
    topicId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TopicTagCountOrderByAggregateInput
    _max?: TopicTagMaxOrderByAggregateInput
    _min?: TopicTagMinOrderByAggregateInput
  }

  export type TopicTagScalarWhereWithAggregatesInput = {
    AND?: Enumerable<TopicTagScalarWhereWithAggregatesInput>
    OR?: Enumerable<TopicTagScalarWhereWithAggregatesInput>
    NOT?: Enumerable<TopicTagScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    tagId?: StringWithAggregatesFilter | string
    topicId?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type LineUserWhereInput = {
    AND?: Enumerable<LineUserWhereInput>
    OR?: Enumerable<LineUserWhereInput>
    NOT?: Enumerable<LineUserWhereInput>
    id?: StringFilter | string
    callback?: StringFilter | string
    category?: StringNullableListFilter
    url?: StringFilter | string
    type?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    Article?: LineUserArticleListRelationFilter
  }

  export type LineUserOrderByWithRelationInput = {
    id?: SortOrder
    callback?: SortOrder
    category?: SortOrder
    url?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Article?: LineUserArticleOrderByRelationAggregateInput
  }

  export type LineUserWhereUniqueInput = {
    id?: string
  }

  export type LineUserOrderByWithAggregationInput = {
    id?: SortOrder
    callback?: SortOrder
    category?: SortOrder
    url?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LineUserCountOrderByAggregateInput
    _max?: LineUserMaxOrderByAggregateInput
    _min?: LineUserMinOrderByAggregateInput
  }

  export type LineUserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<LineUserScalarWhereWithAggregatesInput>
    OR?: Enumerable<LineUserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<LineUserScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    callback?: StringWithAggregatesFilter | string
    category?: StringNullableListFilter
    url?: StringWithAggregatesFilter | string
    type?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type LineUserArticleWhereInput = {
    AND?: Enumerable<LineUserArticleWhereInput>
    OR?: Enumerable<LineUserArticleWhereInput>
    NOT?: Enumerable<LineUserArticleWhereInput>
    id?: StringFilter | string
    url?: StringFilter | string
    type?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    author?: XOR<LineUserRelationFilter, LineUserWhereInput> | null
    authorId?: StringFilter | string
  }

  export type LineUserArticleOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    author?: LineUserOrderByWithRelationInput
    authorId?: SortOrder
  }

  export type LineUserArticleWhereUniqueInput = {
    id?: string
  }

  export type LineUserArticleOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    authorId?: SortOrder
    _count?: LineUserArticleCountOrderByAggregateInput
    _max?: LineUserArticleMaxOrderByAggregateInput
    _min?: LineUserArticleMinOrderByAggregateInput
  }

  export type LineUserArticleScalarWhereWithAggregatesInput = {
    AND?: Enumerable<LineUserArticleScalarWhereWithAggregatesInput>
    OR?: Enumerable<LineUserArticleScalarWhereWithAggregatesInput>
    NOT?: Enumerable<LineUserArticleScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    url?: StringWithAggregatesFilter | string
    type?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    authorId?: StringWithAggregatesFilter | string
  }

  export type BirthdayWhereInput = {
    AND?: Enumerable<BirthdayWhereInput>
    OR?: Enumerable<BirthdayWhereInput>
    NOT?: Enumerable<BirthdayWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    url?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    gift?: BirthdayGiftListRelationFilter
  }

  export type BirthdayOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    gift?: BirthdayGiftOrderByRelationAggregateInput
  }

  export type BirthdayWhereUniqueInput = {
    id?: string
  }

  export type BirthdayOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BirthdayCountOrderByAggregateInput
    _max?: BirthdayMaxOrderByAggregateInput
    _min?: BirthdayMinOrderByAggregateInput
  }

  export type BirthdayScalarWhereWithAggregatesInput = {
    AND?: Enumerable<BirthdayScalarWhereWithAggregatesInput>
    OR?: Enumerable<BirthdayScalarWhereWithAggregatesInput>
    NOT?: Enumerable<BirthdayScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    url?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type BirthdayGiftWhereInput = {
    AND?: Enumerable<BirthdayGiftWhereInput>
    OR?: Enumerable<BirthdayGiftWhereInput>
    NOT?: Enumerable<BirthdayGiftWhereInput>
    id?: StringFilter | string
    img?: StringFilter | string
    p?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    user?: XOR<BirthdayRelationFilter, BirthdayWhereInput> | null
    userId?: StringNullableFilter | string | null
  }

  export type BirthdayGiftOrderByWithRelationInput = {
    id?: SortOrder
    img?: SortOrder
    p?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: BirthdayOrderByWithRelationInput
    userId?: SortOrder
  }

  export type BirthdayGiftWhereUniqueInput = {
    id?: string
  }

  export type BirthdayGiftOrderByWithAggregationInput = {
    id?: SortOrder
    img?: SortOrder
    p?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    _count?: BirthdayGiftCountOrderByAggregateInput
    _max?: BirthdayGiftMaxOrderByAggregateInput
    _min?: BirthdayGiftMinOrderByAggregateInput
  }

  export type BirthdayGiftScalarWhereWithAggregatesInput = {
    AND?: Enumerable<BirthdayGiftScalarWhereWithAggregatesInput>
    OR?: Enumerable<BirthdayGiftScalarWhereWithAggregatesInput>
    NOT?: Enumerable<BirthdayGiftScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    img?: StringWithAggregatesFilter | string
    p?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    userId?: StringNullableWithAggregatesFilter | string | null
  }

  export type UserCreateInput = {
    id?: string
    active: string
    avatar: string
    name: string
    password: string
    permissions?: UserCreatepermissionsInput | Enumerable<string>
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Topic?: TopicCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    active: string
    avatar: string
    name: string
    password: string
    permissions?: UserCreatepermissionsInput | Enumerable<string>
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Topic?: TopicUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    active?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    permissions?: UserUpdatepermissionsInput | Enumerable<string>
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Topic?: TopicUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    active?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    permissions?: UserUpdatepermissionsInput | Enumerable<string>
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Topic?: TopicUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    active: string
    avatar: string
    name: string
    password: string
    permissions?: UserCreatepermissionsInput | Enumerable<string>
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    active?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    permissions?: UserUpdatepermissionsInput | Enumerable<string>
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    active?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    permissions?: UserUpdatepermissionsInput | Enumerable<string>
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TagCreateInput = {
    id?: string
    title: string
    TopicTag?: TopicTagCreateNestedManyWithoutTagInput
  }

  export type TagUncheckedCreateInput = {
    id?: string
    title: string
    TopicTag?: TopicTagUncheckedCreateNestedManyWithoutTagInput
  }

  export type TagUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    TopicTag?: TopicTagUpdateManyWithoutTagNestedInput
  }

  export type TagUncheckedUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    TopicTag?: TopicTagUncheckedUpdateManyWithoutTagNestedInput
  }

  export type TagCreateManyInput = {
    id?: string
    title: string
  }

  export type TagUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
  }

  export type TagUncheckedUpdateManyInput = {
    title?: StringFieldUpdateOperationsInput | string
  }

  export type TopicCreateInput = {
    id?: string
    title: string
    content: string
    TopicTag?: TopicTagCreateNestedManyWithoutTopicInput
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutTopicInput
  }

  export type TopicUncheckedCreateInput = {
    id?: string
    title: string
    content: string
    TopicTag?: TopicTagUncheckedCreateNestedManyWithoutTopicInput
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userid: string
  }

  export type TopicUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    TopicTag?: TopicTagUpdateManyWithoutTopicNestedInput
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutTopicNestedInput
  }

  export type TopicUncheckedUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    TopicTag?: TopicTagUncheckedUpdateManyWithoutTopicNestedInput
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userid?: StringFieldUpdateOperationsInput | string
  }

  export type TopicCreateManyInput = {
    id?: string
    title: string
    content: string
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userid: string
  }

  export type TopicUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TopicUncheckedUpdateManyInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userid?: StringFieldUpdateOperationsInput | string
  }

  export type TopicTagCreateInput = {
    id?: string
    tag: TagCreateNestedOneWithoutTopicTagInput
    topic: TopicCreateNestedOneWithoutTopicTagInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TopicTagUncheckedCreateInput = {
    id?: string
    tagId: string
    topicId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TopicTagUpdateInput = {
    tag?: TagUpdateOneRequiredWithoutTopicTagNestedInput
    topic?: TopicUpdateOneRequiredWithoutTopicTagNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TopicTagUncheckedUpdateInput = {
    tagId?: StringFieldUpdateOperationsInput | string
    topicId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TopicTagCreateManyInput = {
    id?: string
    tagId: string
    topicId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TopicTagUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TopicTagUncheckedUpdateManyInput = {
    tagId?: StringFieldUpdateOperationsInput | string
    topicId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LineUserCreateInput = {
    id: string
    callback: string
    category?: LineUserCreatecategoryInput | Enumerable<string>
    url: string
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Article?: LineUserArticleCreateNestedManyWithoutAuthorInput
  }

  export type LineUserUncheckedCreateInput = {
    id: string
    callback: string
    category?: LineUserCreatecategoryInput | Enumerable<string>
    url: string
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Article?: LineUserArticleUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type LineUserUpdateInput = {
    callback?: StringFieldUpdateOperationsInput | string
    category?: LineUserUpdatecategoryInput | Enumerable<string>
    url?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Article?: LineUserArticleUpdateManyWithoutAuthorNestedInput
  }

  export type LineUserUncheckedUpdateInput = {
    callback?: StringFieldUpdateOperationsInput | string
    category?: LineUserUpdatecategoryInput | Enumerable<string>
    url?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Article?: LineUserArticleUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type LineUserCreateManyInput = {
    id: string
    callback: string
    category?: LineUserCreatecategoryInput | Enumerable<string>
    url: string
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LineUserUpdateManyMutationInput = {
    callback?: StringFieldUpdateOperationsInput | string
    category?: LineUserUpdatecategoryInput | Enumerable<string>
    url?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LineUserUncheckedUpdateManyInput = {
    callback?: StringFieldUpdateOperationsInput | string
    category?: LineUserUpdatecategoryInput | Enumerable<string>
    url?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LineUserArticleCreateInput = {
    id?: string
    url: string
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
    author?: LineUserCreateNestedOneWithoutArticleInput
  }

  export type LineUserArticleUncheckedCreateInput = {
    id?: string
    url: string
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
    authorId: string
  }

  export type LineUserArticleUpdateInput = {
    url?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: LineUserUpdateOneWithoutArticleNestedInput
  }

  export type LineUserArticleUncheckedUpdateInput = {
    url?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: StringFieldUpdateOperationsInput | string
  }

  export type LineUserArticleCreateManyInput = {
    id?: string
    url: string
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
    authorId: string
  }

  export type LineUserArticleUpdateManyMutationInput = {
    url?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LineUserArticleUncheckedUpdateManyInput = {
    url?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: StringFieldUpdateOperationsInput | string
  }

  export type BirthdayCreateInput = {
    id?: string
    name: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    gift?: BirthdayGiftCreateNestedManyWithoutUserInput
  }

  export type BirthdayUncheckedCreateInput = {
    id?: string
    name: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    gift?: BirthdayGiftUncheckedCreateNestedManyWithoutUserInput
  }

  export type BirthdayUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gift?: BirthdayGiftUpdateManyWithoutUserNestedInput
  }

  export type BirthdayUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gift?: BirthdayGiftUncheckedUpdateManyWithoutUserNestedInput
  }

  export type BirthdayCreateManyInput = {
    id?: string
    name: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BirthdayUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BirthdayUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BirthdayGiftCreateInput = {
    id?: string
    img: string
    p: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: BirthdayCreateNestedOneWithoutGiftInput
  }

  export type BirthdayGiftUncheckedCreateInput = {
    id?: string
    img: string
    p: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: string | null
  }

  export type BirthdayGiftUpdateInput = {
    img?: StringFieldUpdateOperationsInput | string
    p?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: BirthdayUpdateOneWithoutGiftNestedInput
  }

  export type BirthdayGiftUncheckedUpdateInput = {
    img?: StringFieldUpdateOperationsInput | string
    p?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BirthdayGiftCreateManyInput = {
    id?: string
    img: string
    p: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: string | null
  }

  export type BirthdayGiftUpdateManyMutationInput = {
    img?: StringFieldUpdateOperationsInput | string
    p?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BirthdayGiftUncheckedUpdateManyInput = {
    img?: StringFieldUpdateOperationsInput | string
    p?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type StringNullableListFilter = {
    equals?: Enumerable<string> | null
    has?: string | null
    hasEvery?: Enumerable<string>
    hasSome?: Enumerable<string>
    isEmpty?: boolean
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type TopicListRelationFilter = {
    every?: TopicWhereInput
    some?: TopicWhereInput
    none?: TopicWhereInput
  }

  export type TopicOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    active?: SortOrder
    avatar?: SortOrder
    name?: SortOrder
    password?: SortOrder
    permissions?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    active?: SortOrder
    avatar?: SortOrder
    name?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    active?: SortOrder
    avatar?: SortOrder
    name?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type TopicTagListRelationFilter = {
    every?: TopicTagWhereInput
    some?: TopicTagWhereInput
    none?: TopicTagWhereInput
  }

  export type TopicTagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TagCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
  }

  export type TagMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
  }

  export type TagMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
    isSet?: boolean
  }

  export type UserRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type TopicCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userid?: SortOrder
  }

  export type TopicMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userid?: SortOrder
  }

  export type TopicMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userid?: SortOrder
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
    isSet?: boolean
  }

  export type TagRelationFilter = {
    is?: TagWhereInput
    isNot?: TagWhereInput
  }

  export type TopicRelationFilter = {
    is?: TopicWhereInput
    isNot?: TopicWhereInput
  }

  export type TopicTagCountOrderByAggregateInput = {
    id?: SortOrder
    tagId?: SortOrder
    topicId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TopicTagMaxOrderByAggregateInput = {
    id?: SortOrder
    tagId?: SortOrder
    topicId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TopicTagMinOrderByAggregateInput = {
    id?: SortOrder
    tagId?: SortOrder
    topicId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LineUserArticleListRelationFilter = {
    every?: LineUserArticleWhereInput
    some?: LineUserArticleWhereInput
    none?: LineUserArticleWhereInput
  }

  export type LineUserArticleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LineUserCountOrderByAggregateInput = {
    id?: SortOrder
    callback?: SortOrder
    category?: SortOrder
    url?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LineUserMaxOrderByAggregateInput = {
    id?: SortOrder
    callback?: SortOrder
    url?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LineUserMinOrderByAggregateInput = {
    id?: SortOrder
    callback?: SortOrder
    url?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LineUserRelationFilter = {
    is?: LineUserWhereInput | null
    isNot?: LineUserWhereInput | null
  }

  export type LineUserArticleCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    authorId?: SortOrder
  }

  export type LineUserArticleMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    authorId?: SortOrder
  }

  export type LineUserArticleMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    authorId?: SortOrder
  }

  export type BirthdayGiftListRelationFilter = {
    every?: BirthdayGiftWhereInput
    some?: BirthdayGiftWhereInput
    none?: BirthdayGiftWhereInput
  }

  export type BirthdayGiftOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BirthdayCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BirthdayMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BirthdayMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BirthdayRelationFilter = {
    is?: BirthdayWhereInput | null
    isNot?: BirthdayWhereInput | null
  }

  export type BirthdayGiftCountOrderByAggregateInput = {
    id?: SortOrder
    img?: SortOrder
    p?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type BirthdayGiftMaxOrderByAggregateInput = {
    id?: SortOrder
    img?: SortOrder
    p?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type BirthdayGiftMinOrderByAggregateInput = {
    id?: SortOrder
    img?: SortOrder
    p?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type UserCreatepermissionsInput = {
    set: Enumerable<string>
  }

  export type TopicCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<TopicCreateWithoutUserInput>, Enumerable<TopicUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<TopicCreateOrConnectWithoutUserInput>
    createMany?: TopicCreateManyUserInputEnvelope
    connect?: Enumerable<TopicWhereUniqueInput>
  }

  export type TopicUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<TopicCreateWithoutUserInput>, Enumerable<TopicUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<TopicCreateOrConnectWithoutUserInput>
    createMany?: TopicCreateManyUserInputEnvelope
    connect?: Enumerable<TopicWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type UserUpdatepermissionsInput = {
    set?: Enumerable<string>
    push?: string | Enumerable<string>
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TopicUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<TopicCreateWithoutUserInput>, Enumerable<TopicUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<TopicCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<TopicUpsertWithWhereUniqueWithoutUserInput>
    createMany?: TopicCreateManyUserInputEnvelope
    set?: Enumerable<TopicWhereUniqueInput>
    disconnect?: Enumerable<TopicWhereUniqueInput>
    delete?: Enumerable<TopicWhereUniqueInput>
    connect?: Enumerable<TopicWhereUniqueInput>
    update?: Enumerable<TopicUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<TopicUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<TopicScalarWhereInput>
  }

  export type TopicUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<TopicCreateWithoutUserInput>, Enumerable<TopicUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<TopicCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<TopicUpsertWithWhereUniqueWithoutUserInput>
    createMany?: TopicCreateManyUserInputEnvelope
    set?: Enumerable<TopicWhereUniqueInput>
    disconnect?: Enumerable<TopicWhereUniqueInput>
    delete?: Enumerable<TopicWhereUniqueInput>
    connect?: Enumerable<TopicWhereUniqueInput>
    update?: Enumerable<TopicUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<TopicUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<TopicScalarWhereInput>
  }

  export type TopicTagCreateNestedManyWithoutTagInput = {
    create?: XOR<Enumerable<TopicTagCreateWithoutTagInput>, Enumerable<TopicTagUncheckedCreateWithoutTagInput>>
    connectOrCreate?: Enumerable<TopicTagCreateOrConnectWithoutTagInput>
    createMany?: TopicTagCreateManyTagInputEnvelope
    connect?: Enumerable<TopicTagWhereUniqueInput>
  }

  export type TopicTagUncheckedCreateNestedManyWithoutTagInput = {
    create?: XOR<Enumerable<TopicTagCreateWithoutTagInput>, Enumerable<TopicTagUncheckedCreateWithoutTagInput>>
    connectOrCreate?: Enumerable<TopicTagCreateOrConnectWithoutTagInput>
    createMany?: TopicTagCreateManyTagInputEnvelope
    connect?: Enumerable<TopicTagWhereUniqueInput>
  }

  export type TopicTagUpdateManyWithoutTagNestedInput = {
    create?: XOR<Enumerable<TopicTagCreateWithoutTagInput>, Enumerable<TopicTagUncheckedCreateWithoutTagInput>>
    connectOrCreate?: Enumerable<TopicTagCreateOrConnectWithoutTagInput>
    upsert?: Enumerable<TopicTagUpsertWithWhereUniqueWithoutTagInput>
    createMany?: TopicTagCreateManyTagInputEnvelope
    set?: Enumerable<TopicTagWhereUniqueInput>
    disconnect?: Enumerable<TopicTagWhereUniqueInput>
    delete?: Enumerable<TopicTagWhereUniqueInput>
    connect?: Enumerable<TopicTagWhereUniqueInput>
    update?: Enumerable<TopicTagUpdateWithWhereUniqueWithoutTagInput>
    updateMany?: Enumerable<TopicTagUpdateManyWithWhereWithoutTagInput>
    deleteMany?: Enumerable<TopicTagScalarWhereInput>
  }

  export type TopicTagUncheckedUpdateManyWithoutTagNestedInput = {
    create?: XOR<Enumerable<TopicTagCreateWithoutTagInput>, Enumerable<TopicTagUncheckedCreateWithoutTagInput>>
    connectOrCreate?: Enumerable<TopicTagCreateOrConnectWithoutTagInput>
    upsert?: Enumerable<TopicTagUpsertWithWhereUniqueWithoutTagInput>
    createMany?: TopicTagCreateManyTagInputEnvelope
    set?: Enumerable<TopicTagWhereUniqueInput>
    disconnect?: Enumerable<TopicTagWhereUniqueInput>
    delete?: Enumerable<TopicTagWhereUniqueInput>
    connect?: Enumerable<TopicTagWhereUniqueInput>
    update?: Enumerable<TopicTagUpdateWithWhereUniqueWithoutTagInput>
    updateMany?: Enumerable<TopicTagUpdateManyWithWhereWithoutTagInput>
    deleteMany?: Enumerable<TopicTagScalarWhereInput>
  }

  export type TopicTagCreateNestedManyWithoutTopicInput = {
    create?: XOR<Enumerable<TopicTagCreateWithoutTopicInput>, Enumerable<TopicTagUncheckedCreateWithoutTopicInput>>
    connectOrCreate?: Enumerable<TopicTagCreateOrConnectWithoutTopicInput>
    createMany?: TopicTagCreateManyTopicInputEnvelope
    connect?: Enumerable<TopicTagWhereUniqueInput>
  }

  export type UserCreateNestedOneWithoutTopicInput = {
    create?: XOR<UserCreateWithoutTopicInput, UserUncheckedCreateWithoutTopicInput>
    connectOrCreate?: UserCreateOrConnectWithoutTopicInput
    connect?: UserWhereUniqueInput
  }

  export type TopicTagUncheckedCreateNestedManyWithoutTopicInput = {
    create?: XOR<Enumerable<TopicTagCreateWithoutTopicInput>, Enumerable<TopicTagUncheckedCreateWithoutTopicInput>>
    connectOrCreate?: Enumerable<TopicTagCreateOrConnectWithoutTopicInput>
    createMany?: TopicTagCreateManyTopicInputEnvelope
    connect?: Enumerable<TopicTagWhereUniqueInput>
  }

  export type TopicTagUpdateManyWithoutTopicNestedInput = {
    create?: XOR<Enumerable<TopicTagCreateWithoutTopicInput>, Enumerable<TopicTagUncheckedCreateWithoutTopicInput>>
    connectOrCreate?: Enumerable<TopicTagCreateOrConnectWithoutTopicInput>
    upsert?: Enumerable<TopicTagUpsertWithWhereUniqueWithoutTopicInput>
    createMany?: TopicTagCreateManyTopicInputEnvelope
    set?: Enumerable<TopicTagWhereUniqueInput>
    disconnect?: Enumerable<TopicTagWhereUniqueInput>
    delete?: Enumerable<TopicTagWhereUniqueInput>
    connect?: Enumerable<TopicTagWhereUniqueInput>
    update?: Enumerable<TopicTagUpdateWithWhereUniqueWithoutTopicInput>
    updateMany?: Enumerable<TopicTagUpdateManyWithWhereWithoutTopicInput>
    deleteMany?: Enumerable<TopicTagScalarWhereInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type UserUpdateOneWithoutTopicNestedInput = {
    create?: XOR<UserCreateWithoutTopicInput, UserUncheckedCreateWithoutTopicInput>
    connectOrCreate?: UserCreateOrConnectWithoutTopicInput
    upsert?: UserUpsertWithoutTopicInput
    disconnect?: boolean
    delete?: boolean
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutTopicInput, UserUncheckedUpdateWithoutTopicInput>
  }

  export type TopicTagUncheckedUpdateManyWithoutTopicNestedInput = {
    create?: XOR<Enumerable<TopicTagCreateWithoutTopicInput>, Enumerable<TopicTagUncheckedCreateWithoutTopicInput>>
    connectOrCreate?: Enumerable<TopicTagCreateOrConnectWithoutTopicInput>
    upsert?: Enumerable<TopicTagUpsertWithWhereUniqueWithoutTopicInput>
    createMany?: TopicTagCreateManyTopicInputEnvelope
    set?: Enumerable<TopicTagWhereUniqueInput>
    disconnect?: Enumerable<TopicTagWhereUniqueInput>
    delete?: Enumerable<TopicTagWhereUniqueInput>
    connect?: Enumerable<TopicTagWhereUniqueInput>
    update?: Enumerable<TopicTagUpdateWithWhereUniqueWithoutTopicInput>
    updateMany?: Enumerable<TopicTagUpdateManyWithWhereWithoutTopicInput>
    deleteMany?: Enumerable<TopicTagScalarWhereInput>
  }

  export type TagCreateNestedOneWithoutTopicTagInput = {
    create?: XOR<TagCreateWithoutTopicTagInput, TagUncheckedCreateWithoutTopicTagInput>
    connectOrCreate?: TagCreateOrConnectWithoutTopicTagInput
    connect?: TagWhereUniqueInput
  }

  export type TopicCreateNestedOneWithoutTopicTagInput = {
    create?: XOR<TopicCreateWithoutTopicTagInput, TopicUncheckedCreateWithoutTopicTagInput>
    connectOrCreate?: TopicCreateOrConnectWithoutTopicTagInput
    connect?: TopicWhereUniqueInput
  }

  export type TagUpdateOneRequiredWithoutTopicTagNestedInput = {
    create?: XOR<TagCreateWithoutTopicTagInput, TagUncheckedCreateWithoutTopicTagInput>
    connectOrCreate?: TagCreateOrConnectWithoutTopicTagInput
    upsert?: TagUpsertWithoutTopicTagInput
    connect?: TagWhereUniqueInput
    update?: XOR<TagUpdateWithoutTopicTagInput, TagUncheckedUpdateWithoutTopicTagInput>
  }

  export type TopicUpdateOneRequiredWithoutTopicTagNestedInput = {
    create?: XOR<TopicCreateWithoutTopicTagInput, TopicUncheckedCreateWithoutTopicTagInput>
    connectOrCreate?: TopicCreateOrConnectWithoutTopicTagInput
    upsert?: TopicUpsertWithoutTopicTagInput
    connect?: TopicWhereUniqueInput
    update?: XOR<TopicUpdateWithoutTopicTagInput, TopicUncheckedUpdateWithoutTopicTagInput>
  }

  export type LineUserCreatecategoryInput = {
    set: Enumerable<string>
  }

  export type LineUserArticleCreateNestedManyWithoutAuthorInput = {
    create?: XOR<Enumerable<LineUserArticleCreateWithoutAuthorInput>, Enumerable<LineUserArticleUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<LineUserArticleCreateOrConnectWithoutAuthorInput>
    createMany?: LineUserArticleCreateManyAuthorInputEnvelope
    connect?: Enumerable<LineUserArticleWhereUniqueInput>
  }

  export type LineUserArticleUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<Enumerable<LineUserArticleCreateWithoutAuthorInput>, Enumerable<LineUserArticleUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<LineUserArticleCreateOrConnectWithoutAuthorInput>
    createMany?: LineUserArticleCreateManyAuthorInputEnvelope
    connect?: Enumerable<LineUserArticleWhereUniqueInput>
  }

  export type LineUserUpdatecategoryInput = {
    set?: Enumerable<string>
    push?: string | Enumerable<string>
  }

  export type LineUserArticleUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<Enumerable<LineUserArticleCreateWithoutAuthorInput>, Enumerable<LineUserArticleUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<LineUserArticleCreateOrConnectWithoutAuthorInput>
    upsert?: Enumerable<LineUserArticleUpsertWithWhereUniqueWithoutAuthorInput>
    createMany?: LineUserArticleCreateManyAuthorInputEnvelope
    set?: Enumerable<LineUserArticleWhereUniqueInput>
    disconnect?: Enumerable<LineUserArticleWhereUniqueInput>
    delete?: Enumerable<LineUserArticleWhereUniqueInput>
    connect?: Enumerable<LineUserArticleWhereUniqueInput>
    update?: Enumerable<LineUserArticleUpdateWithWhereUniqueWithoutAuthorInput>
    updateMany?: Enumerable<LineUserArticleUpdateManyWithWhereWithoutAuthorInput>
    deleteMany?: Enumerable<LineUserArticleScalarWhereInput>
  }

  export type LineUserArticleUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<Enumerable<LineUserArticleCreateWithoutAuthorInput>, Enumerable<LineUserArticleUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<LineUserArticleCreateOrConnectWithoutAuthorInput>
    upsert?: Enumerable<LineUserArticleUpsertWithWhereUniqueWithoutAuthorInput>
    createMany?: LineUserArticleCreateManyAuthorInputEnvelope
    set?: Enumerable<LineUserArticleWhereUniqueInput>
    disconnect?: Enumerable<LineUserArticleWhereUniqueInput>
    delete?: Enumerable<LineUserArticleWhereUniqueInput>
    connect?: Enumerable<LineUserArticleWhereUniqueInput>
    update?: Enumerable<LineUserArticleUpdateWithWhereUniqueWithoutAuthorInput>
    updateMany?: Enumerable<LineUserArticleUpdateManyWithWhereWithoutAuthorInput>
    deleteMany?: Enumerable<LineUserArticleScalarWhereInput>
  }

  export type LineUserCreateNestedOneWithoutArticleInput = {
    create?: XOR<LineUserCreateWithoutArticleInput, LineUserUncheckedCreateWithoutArticleInput>
    connectOrCreate?: LineUserCreateOrConnectWithoutArticleInput
    connect?: LineUserWhereUniqueInput
  }

  export type LineUserUpdateOneWithoutArticleNestedInput = {
    create?: XOR<LineUserCreateWithoutArticleInput, LineUserUncheckedCreateWithoutArticleInput>
    connectOrCreate?: LineUserCreateOrConnectWithoutArticleInput
    upsert?: LineUserUpsertWithoutArticleInput
    disconnect?: boolean
    delete?: boolean
    connect?: LineUserWhereUniqueInput
    update?: XOR<LineUserUpdateWithoutArticleInput, LineUserUncheckedUpdateWithoutArticleInput>
  }

  export type BirthdayGiftCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<BirthdayGiftCreateWithoutUserInput>, Enumerable<BirthdayGiftUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<BirthdayGiftCreateOrConnectWithoutUserInput>
    createMany?: BirthdayGiftCreateManyUserInputEnvelope
    connect?: Enumerable<BirthdayGiftWhereUniqueInput>
  }

  export type BirthdayGiftUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<BirthdayGiftCreateWithoutUserInput>, Enumerable<BirthdayGiftUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<BirthdayGiftCreateOrConnectWithoutUserInput>
    createMany?: BirthdayGiftCreateManyUserInputEnvelope
    connect?: Enumerable<BirthdayGiftWhereUniqueInput>
  }

  export type BirthdayGiftUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<BirthdayGiftCreateWithoutUserInput>, Enumerable<BirthdayGiftUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<BirthdayGiftCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<BirthdayGiftUpsertWithWhereUniqueWithoutUserInput>
    createMany?: BirthdayGiftCreateManyUserInputEnvelope
    set?: Enumerable<BirthdayGiftWhereUniqueInput>
    disconnect?: Enumerable<BirthdayGiftWhereUniqueInput>
    delete?: Enumerable<BirthdayGiftWhereUniqueInput>
    connect?: Enumerable<BirthdayGiftWhereUniqueInput>
    update?: Enumerable<BirthdayGiftUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<BirthdayGiftUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<BirthdayGiftScalarWhereInput>
  }

  export type BirthdayGiftUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<BirthdayGiftCreateWithoutUserInput>, Enumerable<BirthdayGiftUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<BirthdayGiftCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<BirthdayGiftUpsertWithWhereUniqueWithoutUserInput>
    createMany?: BirthdayGiftCreateManyUserInputEnvelope
    set?: Enumerable<BirthdayGiftWhereUniqueInput>
    disconnect?: Enumerable<BirthdayGiftWhereUniqueInput>
    delete?: Enumerable<BirthdayGiftWhereUniqueInput>
    connect?: Enumerable<BirthdayGiftWhereUniqueInput>
    update?: Enumerable<BirthdayGiftUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<BirthdayGiftUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<BirthdayGiftScalarWhereInput>
  }

  export type BirthdayCreateNestedOneWithoutGiftInput = {
    create?: XOR<BirthdayCreateWithoutGiftInput, BirthdayUncheckedCreateWithoutGiftInput>
    connectOrCreate?: BirthdayCreateOrConnectWithoutGiftInput
    connect?: BirthdayWhereUniqueInput
  }

  export type BirthdayUpdateOneWithoutGiftNestedInput = {
    create?: XOR<BirthdayCreateWithoutGiftInput, BirthdayUncheckedCreateWithoutGiftInput>
    connectOrCreate?: BirthdayCreateOrConnectWithoutGiftInput
    upsert?: BirthdayUpsertWithoutGiftInput
    disconnect?: boolean
    delete?: boolean
    connect?: BirthdayWhereUniqueInput
    update?: XOR<BirthdayUpdateWithoutGiftInput, BirthdayUncheckedUpdateWithoutGiftInput>
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
    isSet?: boolean
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
    isSet?: boolean
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
    isSet?: boolean
  }

  export type TopicCreateWithoutUserInput = {
    id?: string
    title: string
    content: string
    TopicTag?: TopicTagCreateNestedManyWithoutTopicInput
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TopicUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    content: string
    TopicTag?: TopicTagUncheckedCreateNestedManyWithoutTopicInput
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TopicCreateOrConnectWithoutUserInput = {
    where: TopicWhereUniqueInput
    create: XOR<TopicCreateWithoutUserInput, TopicUncheckedCreateWithoutUserInput>
  }

  export type TopicCreateManyUserInputEnvelope = {
    data: Enumerable<TopicCreateManyUserInput>
  }

  export type TopicUpsertWithWhereUniqueWithoutUserInput = {
    where: TopicWhereUniqueInput
    update: XOR<TopicUpdateWithoutUserInput, TopicUncheckedUpdateWithoutUserInput>
    create: XOR<TopicCreateWithoutUserInput, TopicUncheckedCreateWithoutUserInput>
  }

  export type TopicUpdateWithWhereUniqueWithoutUserInput = {
    where: TopicWhereUniqueInput
    data: XOR<TopicUpdateWithoutUserInput, TopicUncheckedUpdateWithoutUserInput>
  }

  export type TopicUpdateManyWithWhereWithoutUserInput = {
    where: TopicScalarWhereInput
    data: XOR<TopicUpdateManyMutationInput, TopicUncheckedUpdateManyWithoutTopicInput>
  }

  export type TopicScalarWhereInput = {
    AND?: Enumerable<TopicScalarWhereInput>
    OR?: Enumerable<TopicScalarWhereInput>
    NOT?: Enumerable<TopicScalarWhereInput>
    id?: StringFilter | string
    title?: StringFilter | string
    content?: StringFilter | string
    image?: StringNullableFilter | string | null
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    userid?: StringFilter | string
  }

  export type TopicTagCreateWithoutTagInput = {
    id?: string
    topic: TopicCreateNestedOneWithoutTopicTagInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TopicTagUncheckedCreateWithoutTagInput = {
    id?: string
    topicId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TopicTagCreateOrConnectWithoutTagInput = {
    where: TopicTagWhereUniqueInput
    create: XOR<TopicTagCreateWithoutTagInput, TopicTagUncheckedCreateWithoutTagInput>
  }

  export type TopicTagCreateManyTagInputEnvelope = {
    data: Enumerable<TopicTagCreateManyTagInput>
  }

  export type TopicTagUpsertWithWhereUniqueWithoutTagInput = {
    where: TopicTagWhereUniqueInput
    update: XOR<TopicTagUpdateWithoutTagInput, TopicTagUncheckedUpdateWithoutTagInput>
    create: XOR<TopicTagCreateWithoutTagInput, TopicTagUncheckedCreateWithoutTagInput>
  }

  export type TopicTagUpdateWithWhereUniqueWithoutTagInput = {
    where: TopicTagWhereUniqueInput
    data: XOR<TopicTagUpdateWithoutTagInput, TopicTagUncheckedUpdateWithoutTagInput>
  }

  export type TopicTagUpdateManyWithWhereWithoutTagInput = {
    where: TopicTagScalarWhereInput
    data: XOR<TopicTagUpdateManyMutationInput, TopicTagUncheckedUpdateManyWithoutTopicTagInput>
  }

  export type TopicTagScalarWhereInput = {
    AND?: Enumerable<TopicTagScalarWhereInput>
    OR?: Enumerable<TopicTagScalarWhereInput>
    NOT?: Enumerable<TopicTagScalarWhereInput>
    id?: StringFilter | string
    tagId?: StringFilter | string
    topicId?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type TopicTagCreateWithoutTopicInput = {
    id?: string
    tag: TagCreateNestedOneWithoutTopicTagInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TopicTagUncheckedCreateWithoutTopicInput = {
    id?: string
    tagId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TopicTagCreateOrConnectWithoutTopicInput = {
    where: TopicTagWhereUniqueInput
    create: XOR<TopicTagCreateWithoutTopicInput, TopicTagUncheckedCreateWithoutTopicInput>
  }

  export type TopicTagCreateManyTopicInputEnvelope = {
    data: Enumerable<TopicTagCreateManyTopicInput>
  }

  export type UserCreateWithoutTopicInput = {
    id?: string
    active: string
    avatar: string
    name: string
    password: string
    permissions?: UserCreatepermissionsInput | Enumerable<string>
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutTopicInput = {
    id?: string
    active: string
    avatar: string
    name: string
    password: string
    permissions?: UserCreatepermissionsInput | Enumerable<string>
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutTopicInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTopicInput, UserUncheckedCreateWithoutTopicInput>
  }

  export type TopicTagUpsertWithWhereUniqueWithoutTopicInput = {
    where: TopicTagWhereUniqueInput
    update: XOR<TopicTagUpdateWithoutTopicInput, TopicTagUncheckedUpdateWithoutTopicInput>
    create: XOR<TopicTagCreateWithoutTopicInput, TopicTagUncheckedCreateWithoutTopicInput>
  }

  export type TopicTagUpdateWithWhereUniqueWithoutTopicInput = {
    where: TopicTagWhereUniqueInput
    data: XOR<TopicTagUpdateWithoutTopicInput, TopicTagUncheckedUpdateWithoutTopicInput>
  }

  export type TopicTagUpdateManyWithWhereWithoutTopicInput = {
    where: TopicTagScalarWhereInput
    data: XOR<TopicTagUpdateManyMutationInput, TopicTagUncheckedUpdateManyWithoutTopicTagInput>
  }

  export type UserUpsertWithoutTopicInput = {
    update: XOR<UserUpdateWithoutTopicInput, UserUncheckedUpdateWithoutTopicInput>
    create: XOR<UserCreateWithoutTopicInput, UserUncheckedCreateWithoutTopicInput>
  }

  export type UserUpdateWithoutTopicInput = {
    active?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    permissions?: UserUpdatepermissionsInput | Enumerable<string>
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutTopicInput = {
    active?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    permissions?: UserUpdatepermissionsInput | Enumerable<string>
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TagCreateWithoutTopicTagInput = {
    id?: string
    title: string
  }

  export type TagUncheckedCreateWithoutTopicTagInput = {
    id?: string
    title: string
  }

  export type TagCreateOrConnectWithoutTopicTagInput = {
    where: TagWhereUniqueInput
    create: XOR<TagCreateWithoutTopicTagInput, TagUncheckedCreateWithoutTopicTagInput>
  }

  export type TopicCreateWithoutTopicTagInput = {
    id?: string
    title: string
    content: string
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutTopicInput
  }

  export type TopicUncheckedCreateWithoutTopicTagInput = {
    id?: string
    title: string
    content: string
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userid: string
  }

  export type TopicCreateOrConnectWithoutTopicTagInput = {
    where: TopicWhereUniqueInput
    create: XOR<TopicCreateWithoutTopicTagInput, TopicUncheckedCreateWithoutTopicTagInput>
  }

  export type TagUpsertWithoutTopicTagInput = {
    update: XOR<TagUpdateWithoutTopicTagInput, TagUncheckedUpdateWithoutTopicTagInput>
    create: XOR<TagCreateWithoutTopicTagInput, TagUncheckedCreateWithoutTopicTagInput>
  }

  export type TagUpdateWithoutTopicTagInput = {
    title?: StringFieldUpdateOperationsInput | string
  }

  export type TagUncheckedUpdateWithoutTopicTagInput = {
    title?: StringFieldUpdateOperationsInput | string
  }

  export type TopicUpsertWithoutTopicTagInput = {
    update: XOR<TopicUpdateWithoutTopicTagInput, TopicUncheckedUpdateWithoutTopicTagInput>
    create: XOR<TopicCreateWithoutTopicTagInput, TopicUncheckedCreateWithoutTopicTagInput>
  }

  export type TopicUpdateWithoutTopicTagInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutTopicNestedInput
  }

  export type TopicUncheckedUpdateWithoutTopicTagInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userid?: StringFieldUpdateOperationsInput | string
  }

  export type LineUserArticleCreateWithoutAuthorInput = {
    id?: string
    url: string
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LineUserArticleUncheckedCreateWithoutAuthorInput = {
    id?: string
    url: string
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LineUserArticleCreateOrConnectWithoutAuthorInput = {
    where: LineUserArticleWhereUniqueInput
    create: XOR<LineUserArticleCreateWithoutAuthorInput, LineUserArticleUncheckedCreateWithoutAuthorInput>
  }

  export type LineUserArticleCreateManyAuthorInputEnvelope = {
    data: Enumerable<LineUserArticleCreateManyAuthorInput>
  }

  export type LineUserArticleUpsertWithWhereUniqueWithoutAuthorInput = {
    where: LineUserArticleWhereUniqueInput
    update: XOR<LineUserArticleUpdateWithoutAuthorInput, LineUserArticleUncheckedUpdateWithoutAuthorInput>
    create: XOR<LineUserArticleCreateWithoutAuthorInput, LineUserArticleUncheckedCreateWithoutAuthorInput>
  }

  export type LineUserArticleUpdateWithWhereUniqueWithoutAuthorInput = {
    where: LineUserArticleWhereUniqueInput
    data: XOR<LineUserArticleUpdateWithoutAuthorInput, LineUserArticleUncheckedUpdateWithoutAuthorInput>
  }

  export type LineUserArticleUpdateManyWithWhereWithoutAuthorInput = {
    where: LineUserArticleScalarWhereInput
    data: XOR<LineUserArticleUpdateManyMutationInput, LineUserArticleUncheckedUpdateManyWithoutArticleInput>
  }

  export type LineUserArticleScalarWhereInput = {
    AND?: Enumerable<LineUserArticleScalarWhereInput>
    OR?: Enumerable<LineUserArticleScalarWhereInput>
    NOT?: Enumerable<LineUserArticleScalarWhereInput>
    id?: StringFilter | string
    url?: StringFilter | string
    type?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    authorId?: StringFilter | string
  }

  export type LineUserCreateWithoutArticleInput = {
    id: string
    callback: string
    category?: LineUserCreatecategoryInput | Enumerable<string>
    url: string
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LineUserUncheckedCreateWithoutArticleInput = {
    id: string
    callback: string
    category?: LineUserCreatecategoryInput | Enumerable<string>
    url: string
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LineUserCreateOrConnectWithoutArticleInput = {
    where: LineUserWhereUniqueInput
    create: XOR<LineUserCreateWithoutArticleInput, LineUserUncheckedCreateWithoutArticleInput>
  }

  export type LineUserUpsertWithoutArticleInput = {
    update: XOR<LineUserUpdateWithoutArticleInput, LineUserUncheckedUpdateWithoutArticleInput>
    create: XOR<LineUserCreateWithoutArticleInput, LineUserUncheckedCreateWithoutArticleInput>
  }

  export type LineUserUpdateWithoutArticleInput = {
    callback?: StringFieldUpdateOperationsInput | string
    category?: LineUserUpdatecategoryInput | Enumerable<string>
    url?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LineUserUncheckedUpdateWithoutArticleInput = {
    callback?: StringFieldUpdateOperationsInput | string
    category?: LineUserUpdatecategoryInput | Enumerable<string>
    url?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BirthdayGiftCreateWithoutUserInput = {
    id?: string
    img: string
    p: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BirthdayGiftUncheckedCreateWithoutUserInput = {
    id?: string
    img: string
    p: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BirthdayGiftCreateOrConnectWithoutUserInput = {
    where: BirthdayGiftWhereUniqueInput
    create: XOR<BirthdayGiftCreateWithoutUserInput, BirthdayGiftUncheckedCreateWithoutUserInput>
  }

  export type BirthdayGiftCreateManyUserInputEnvelope = {
    data: Enumerable<BirthdayGiftCreateManyUserInput>
  }

  export type BirthdayGiftUpsertWithWhereUniqueWithoutUserInput = {
    where: BirthdayGiftWhereUniqueInput
    update: XOR<BirthdayGiftUpdateWithoutUserInput, BirthdayGiftUncheckedUpdateWithoutUserInput>
    create: XOR<BirthdayGiftCreateWithoutUserInput, BirthdayGiftUncheckedCreateWithoutUserInput>
  }

  export type BirthdayGiftUpdateWithWhereUniqueWithoutUserInput = {
    where: BirthdayGiftWhereUniqueInput
    data: XOR<BirthdayGiftUpdateWithoutUserInput, BirthdayGiftUncheckedUpdateWithoutUserInput>
  }

  export type BirthdayGiftUpdateManyWithWhereWithoutUserInput = {
    where: BirthdayGiftScalarWhereInput
    data: XOR<BirthdayGiftUpdateManyMutationInput, BirthdayGiftUncheckedUpdateManyWithoutGiftInput>
  }

  export type BirthdayGiftScalarWhereInput = {
    AND?: Enumerable<BirthdayGiftScalarWhereInput>
    OR?: Enumerable<BirthdayGiftScalarWhereInput>
    NOT?: Enumerable<BirthdayGiftScalarWhereInput>
    id?: StringFilter | string
    img?: StringFilter | string
    p?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    userId?: StringNullableFilter | string | null
  }

  export type BirthdayCreateWithoutGiftInput = {
    id?: string
    name: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BirthdayUncheckedCreateWithoutGiftInput = {
    id?: string
    name: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BirthdayCreateOrConnectWithoutGiftInput = {
    where: BirthdayWhereUniqueInput
    create: XOR<BirthdayCreateWithoutGiftInput, BirthdayUncheckedCreateWithoutGiftInput>
  }

  export type BirthdayUpsertWithoutGiftInput = {
    update: XOR<BirthdayUpdateWithoutGiftInput, BirthdayUncheckedUpdateWithoutGiftInput>
    create: XOR<BirthdayCreateWithoutGiftInput, BirthdayUncheckedCreateWithoutGiftInput>
  }

  export type BirthdayUpdateWithoutGiftInput = {
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BirthdayUncheckedUpdateWithoutGiftInput = {
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TopicCreateManyUserInput = {
    id?: string
    title: string
    content: string
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TopicUpdateWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    TopicTag?: TopicTagUpdateManyWithoutTopicNestedInput
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TopicUncheckedUpdateWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    TopicTag?: TopicTagUncheckedUpdateManyWithoutTopicNestedInput
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TopicUncheckedUpdateManyWithoutTopicInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TopicTagCreateManyTagInput = {
    id?: string
    topicId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TopicTagUpdateWithoutTagInput = {
    topic?: TopicUpdateOneRequiredWithoutTopicTagNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TopicTagUncheckedUpdateWithoutTagInput = {
    topicId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TopicTagUncheckedUpdateManyWithoutTopicTagInput = {
    topicId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TopicTagCreateManyTopicInput = {
    id?: string
    tagId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TopicTagUpdateWithoutTopicInput = {
    tag?: TagUpdateOneRequiredWithoutTopicTagNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TopicTagUncheckedUpdateWithoutTopicInput = {
    tagId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LineUserArticleCreateManyAuthorInput = {
    id?: string
    url: string
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LineUserArticleUpdateWithoutAuthorInput = {
    url?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LineUserArticleUncheckedUpdateWithoutAuthorInput = {
    url?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LineUserArticleUncheckedUpdateManyWithoutArticleInput = {
    url?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BirthdayGiftCreateManyUserInput = {
    id?: string
    img: string
    p: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BirthdayGiftUpdateWithoutUserInput = {
    img?: StringFieldUpdateOperationsInput | string
    p?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BirthdayGiftUncheckedUpdateWithoutUserInput = {
    img?: StringFieldUpdateOperationsInput | string
    p?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BirthdayGiftUncheckedUpdateManyWithoutGiftInput = {
    img?: StringFieldUpdateOperationsInput | string
    p?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}