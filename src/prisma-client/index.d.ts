
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
 * Model VaultType
 * 
 */
export type VaultType = {
  Id: number
  Name: string
  IsDeleted: boolean
}

/**
 * Model VaultValues
 * 
 */
export type VaultValues = {
  Id: number
  Name: string
  Value: string
  VaultTypeId: number
  DateOfValue: Date
  IsDeleted: boolean
}

/**
 * Model Jobs
 * 
 */
export type Jobs = {
  Id: number
  Name: string
  ExecuterClass: string
  ExecuteCronTime: string
  IsDeleted: boolean
  IsActive: boolean
  IsRunningNow: boolean
}

/**
 * Model JobParams
 * 
 */
export type JobParams = {
  Id: number
  Name: string
  Value: string
  IsDeleted: boolean
  JobId: number
}

/**
 * Model JobLogs
 * 
 */
export type JobLogs = {
  Id: number
  JobId: number
  ExecuteTime: Date
  IsError: boolean
  Error: string
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more VaultTypes
 * const vaultTypes = await prisma.vaultType.findMany()
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
   * // Fetch zero or more VaultTypes
   * const vaultTypes = await prisma.vaultType.findMany()
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

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
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>;

      /**
   * `prisma.vaultType`: Exposes CRUD operations for the **VaultType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VaultTypes
    * const vaultTypes = await prisma.vaultType.findMany()
    * ```
    */
  get vaultType(): Prisma.VaultTypeDelegate<GlobalReject>;

  /**
   * `prisma.vaultValues`: Exposes CRUD operations for the **VaultValues** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VaultValues
    * const vaultValues = await prisma.vaultValues.findMany()
    * ```
    */
  get vaultValues(): Prisma.VaultValuesDelegate<GlobalReject>;

  /**
   * `prisma.jobs`: Exposes CRUD operations for the **Jobs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Jobs
    * const jobs = await prisma.jobs.findMany()
    * ```
    */
  get jobs(): Prisma.JobsDelegate<GlobalReject>;

  /**
   * `prisma.jobParams`: Exposes CRUD operations for the **JobParams** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more JobParams
    * const jobParams = await prisma.jobParams.findMany()
    * ```
    */
  get jobParams(): Prisma.JobParamsDelegate<GlobalReject>;

  /**
   * `prisma.jobLogs`: Exposes CRUD operations for the **JobLogs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more JobLogs
    * const jobLogs = await prisma.jobLogs.findMany()
    * ```
    */
  get jobLogs(): Prisma.JobLogsDelegate<GlobalReject>;
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
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket


  /**
   * Prisma Client JS version: 4.6.1
   * Query Engine version: 694eea289a8462c80264df36757e4fdc129b1b32
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

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

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


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

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
    VaultType: 'VaultType',
    VaultValues: 'VaultValues',
    Jobs: 'Jobs',
    JobParams: 'JobParams',
    JobLogs: 'JobLogs'
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
   * These options are being passed into the middleware as "params"
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
   * Count Type VaultTypeCountOutputType
   */


  export type VaultTypeCountOutputType = {
    Values: number
  }

  export type VaultTypeCountOutputTypeSelect = {
    Values?: boolean
  }

  export type VaultTypeCountOutputTypeGetPayload<S extends boolean | null | undefined | VaultTypeCountOutputTypeArgs, U = keyof S> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? VaultTypeCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (VaultTypeCountOutputTypeArgs)
    ? VaultTypeCountOutputType 
    : S extends { select: any } & (VaultTypeCountOutputTypeArgs)
      ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof VaultTypeCountOutputType ? VaultTypeCountOutputType[P] : never
  } 
      : VaultTypeCountOutputType




  // Custom InputTypes

  /**
   * VaultTypeCountOutputType without action
   */
  export type VaultTypeCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the VaultTypeCountOutputType
     * 
    **/
    select?: VaultTypeCountOutputTypeSelect | null
  }



  /**
   * Count Type JobsCountOutputType
   */


  export type JobsCountOutputType = {
    Params: number
    Logs: number
  }

  export type JobsCountOutputTypeSelect = {
    Params?: boolean
    Logs?: boolean
  }

  export type JobsCountOutputTypeGetPayload<S extends boolean | null | undefined | JobsCountOutputTypeArgs, U = keyof S> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? JobsCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (JobsCountOutputTypeArgs)
    ? JobsCountOutputType 
    : S extends { select: any } & (JobsCountOutputTypeArgs)
      ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof JobsCountOutputType ? JobsCountOutputType[P] : never
  } 
      : JobsCountOutputType




  // Custom InputTypes

  /**
   * JobsCountOutputType without action
   */
  export type JobsCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the JobsCountOutputType
     * 
    **/
    select?: JobsCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model VaultType
   */


  export type AggregateVaultType = {
    _count: VaultTypeCountAggregateOutputType | null
    _avg: VaultTypeAvgAggregateOutputType | null
    _sum: VaultTypeSumAggregateOutputType | null
    _min: VaultTypeMinAggregateOutputType | null
    _max: VaultTypeMaxAggregateOutputType | null
  }

  export type VaultTypeAvgAggregateOutputType = {
    Id: number | null
  }

  export type VaultTypeSumAggregateOutputType = {
    Id: number | null
  }

  export type VaultTypeMinAggregateOutputType = {
    Id: number | null
    Name: string | null
    IsDeleted: boolean | null
  }

  export type VaultTypeMaxAggregateOutputType = {
    Id: number | null
    Name: string | null
    IsDeleted: boolean | null
  }

  export type VaultTypeCountAggregateOutputType = {
    Id: number
    Name: number
    IsDeleted: number
    _all: number
  }


  export type VaultTypeAvgAggregateInputType = {
    Id?: true
  }

  export type VaultTypeSumAggregateInputType = {
    Id?: true
  }

  export type VaultTypeMinAggregateInputType = {
    Id?: true
    Name?: true
    IsDeleted?: true
  }

  export type VaultTypeMaxAggregateInputType = {
    Id?: true
    Name?: true
    IsDeleted?: true
  }

  export type VaultTypeCountAggregateInputType = {
    Id?: true
    Name?: true
    IsDeleted?: true
    _all?: true
  }

  export type VaultTypeAggregateArgs = {
    /**
     * Filter which VaultType to aggregate.
     * 
    **/
    where?: VaultTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VaultTypes to fetch.
     * 
    **/
    orderBy?: Enumerable<VaultTypeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: VaultTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VaultTypes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VaultTypes.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VaultTypes
    **/
    _count?: true | VaultTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VaultTypeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VaultTypeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VaultTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VaultTypeMaxAggregateInputType
  }

  export type GetVaultTypeAggregateType<T extends VaultTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateVaultType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVaultType[P]>
      : GetScalarType<T[P], AggregateVaultType[P]>
  }




  export type VaultTypeGroupByArgs = {
    where?: VaultTypeWhereInput
    orderBy?: Enumerable<VaultTypeOrderByWithAggregationInput>
    by: Array<VaultTypeScalarFieldEnum>
    having?: VaultTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VaultTypeCountAggregateInputType | true
    _avg?: VaultTypeAvgAggregateInputType
    _sum?: VaultTypeSumAggregateInputType
    _min?: VaultTypeMinAggregateInputType
    _max?: VaultTypeMaxAggregateInputType
  }


  export type VaultTypeGroupByOutputType = {
    Id: number
    Name: string
    IsDeleted: boolean
    _count: VaultTypeCountAggregateOutputType | null
    _avg: VaultTypeAvgAggregateOutputType | null
    _sum: VaultTypeSumAggregateOutputType | null
    _min: VaultTypeMinAggregateOutputType | null
    _max: VaultTypeMaxAggregateOutputType | null
  }

  type GetVaultTypeGroupByPayload<T extends VaultTypeGroupByArgs> = PrismaPromise<
    Array<
      PickArray<VaultTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VaultTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VaultTypeGroupByOutputType[P]>
            : GetScalarType<T[P], VaultTypeGroupByOutputType[P]>
        }
      >
    >


  export type VaultTypeSelect = {
    Id?: boolean
    Name?: boolean
    IsDeleted?: boolean
    Values?: boolean | VaultValuesFindManyArgs
    _count?: boolean | VaultTypeCountOutputTypeArgs
  }


  export type VaultTypeInclude = {
    Values?: boolean | VaultValuesFindManyArgs
    _count?: boolean | VaultTypeCountOutputTypeArgs
  } 

  export type VaultTypeGetPayload<S extends boolean | null | undefined | VaultTypeArgs, U = keyof S> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? VaultType :
    S extends undefined ? never :
    S extends { include: any } & (VaultTypeArgs | VaultTypeFindManyArgs)
    ? VaultType  & {
    [P in TrueKeys<S['include']>]:
        P extends 'Values' ? Array < VaultValuesGetPayload<Exclude<S['include'], undefined | null>[P]>>  :
        P extends '_count' ? VaultTypeCountOutputTypeGetPayload<Exclude<S['include'], undefined | null>[P]> :  never
  } 
    : S extends { select: any } & (VaultTypeArgs | VaultTypeFindManyArgs)
      ? {
    [P in TrueKeys<S['select']>]:
        P extends 'Values' ? Array < VaultValuesGetPayload<Exclude<S['select'], undefined | null>[P]>>  :
        P extends '_count' ? VaultTypeCountOutputTypeGetPayload<Exclude<S['select'], undefined | null>[P]> :  P extends keyof VaultType ? VaultType[P] : never
  } 
      : VaultType


  type VaultTypeCountArgs = Merge<
    Omit<VaultTypeFindManyArgs, 'select' | 'include'> & {
      select?: VaultTypeCountAggregateInputType | true
    }
  >

  export interface VaultTypeDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one VaultType that matches the filter.
     * @param {VaultTypeFindUniqueArgs} args - Arguments to find a VaultType
     * @example
     * // Get one VaultType
     * const vaultType = await prisma.vaultType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends VaultTypeFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, VaultTypeFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'VaultType'> extends True ? Prisma__VaultTypeClient<VaultTypeGetPayload<T>> : Prisma__VaultTypeClient<VaultTypeGetPayload<T> | null, null>

    /**
     * Find the first VaultType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VaultTypeFindFirstArgs} args - Arguments to find a VaultType
     * @example
     * // Get one VaultType
     * const vaultType = await prisma.vaultType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends VaultTypeFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, VaultTypeFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'VaultType'> extends True ? Prisma__VaultTypeClient<VaultTypeGetPayload<T>> : Prisma__VaultTypeClient<VaultTypeGetPayload<T> | null, null>

    /**
     * Find zero or more VaultTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VaultTypeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VaultTypes
     * const vaultTypes = await prisma.vaultType.findMany()
     * 
     * // Get first 10 VaultTypes
     * const vaultTypes = await prisma.vaultType.findMany({ take: 10 })
     * 
     * // Only select the `Id`
     * const vaultTypeWithIdOnly = await prisma.vaultType.findMany({ select: { Id: true } })
     * 
    **/
    findMany<T extends VaultTypeFindManyArgs>(
      args?: SelectSubset<T, VaultTypeFindManyArgs>
    ): PrismaPromise<Array<VaultTypeGetPayload<T>>>

    /**
     * Create a VaultType.
     * @param {VaultTypeCreateArgs} args - Arguments to create a VaultType.
     * @example
     * // Create one VaultType
     * const VaultType = await prisma.vaultType.create({
     *   data: {
     *     // ... data to create a VaultType
     *   }
     * })
     * 
    **/
    create<T extends VaultTypeCreateArgs>(
      args: SelectSubset<T, VaultTypeCreateArgs>
    ): Prisma__VaultTypeClient<VaultTypeGetPayload<T>>

    /**
     * Delete a VaultType.
     * @param {VaultTypeDeleteArgs} args - Arguments to delete one VaultType.
     * @example
     * // Delete one VaultType
     * const VaultType = await prisma.vaultType.delete({
     *   where: {
     *     // ... filter to delete one VaultType
     *   }
     * })
     * 
    **/
    delete<T extends VaultTypeDeleteArgs>(
      args: SelectSubset<T, VaultTypeDeleteArgs>
    ): Prisma__VaultTypeClient<VaultTypeGetPayload<T>>

    /**
     * Update one VaultType.
     * @param {VaultTypeUpdateArgs} args - Arguments to update one VaultType.
     * @example
     * // Update one VaultType
     * const vaultType = await prisma.vaultType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends VaultTypeUpdateArgs>(
      args: SelectSubset<T, VaultTypeUpdateArgs>
    ): Prisma__VaultTypeClient<VaultTypeGetPayload<T>>

    /**
     * Delete zero or more VaultTypes.
     * @param {VaultTypeDeleteManyArgs} args - Arguments to filter VaultTypes to delete.
     * @example
     * // Delete a few VaultTypes
     * const { count } = await prisma.vaultType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends VaultTypeDeleteManyArgs>(
      args?: SelectSubset<T, VaultTypeDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more VaultTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VaultTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VaultTypes
     * const vaultType = await prisma.vaultType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends VaultTypeUpdateManyArgs>(
      args: SelectSubset<T, VaultTypeUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one VaultType.
     * @param {VaultTypeUpsertArgs} args - Arguments to update or create a VaultType.
     * @example
     * // Update or create a VaultType
     * const vaultType = await prisma.vaultType.upsert({
     *   create: {
     *     // ... data to create a VaultType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VaultType we want to update
     *   }
     * })
    **/
    upsert<T extends VaultTypeUpsertArgs>(
      args: SelectSubset<T, VaultTypeUpsertArgs>
    ): Prisma__VaultTypeClient<VaultTypeGetPayload<T>>

    /**
     * Find one VaultType that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {VaultTypeFindUniqueOrThrowArgs} args - Arguments to find a VaultType
     * @example
     * // Get one VaultType
     * const vaultType = await prisma.vaultType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends VaultTypeFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, VaultTypeFindUniqueOrThrowArgs>
    ): Prisma__VaultTypeClient<VaultTypeGetPayload<T>>

    /**
     * Find the first VaultType that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VaultTypeFindFirstOrThrowArgs} args - Arguments to find a VaultType
     * @example
     * // Get one VaultType
     * const vaultType = await prisma.vaultType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends VaultTypeFindFirstOrThrowArgs>(
      args?: SelectSubset<T, VaultTypeFindFirstOrThrowArgs>
    ): Prisma__VaultTypeClient<VaultTypeGetPayload<T>>

    /**
     * Count the number of VaultTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VaultTypeCountArgs} args - Arguments to filter VaultTypes to count.
     * @example
     * // Count the number of VaultTypes
     * const count = await prisma.vaultType.count({
     *   where: {
     *     // ... the filter for the VaultTypes we want to count
     *   }
     * })
    **/
    count<T extends VaultTypeCountArgs>(
      args?: Subset<T, VaultTypeCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VaultTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VaultType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VaultTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VaultTypeAggregateArgs>(args: Subset<T, VaultTypeAggregateArgs>): PrismaPromise<GetVaultTypeAggregateType<T>>

    /**
     * Group by VaultType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VaultTypeGroupByArgs} args - Group by arguments.
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
      T extends VaultTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VaultTypeGroupByArgs['orderBy'] }
        : { orderBy?: VaultTypeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VaultTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVaultTypeGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for VaultType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__VaultTypeClient<T, Null = never> implements PrismaPromise<T> {
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

    Values<T extends VaultValuesFindManyArgs= {}>(args?: Subset<T, VaultValuesFindManyArgs>): PrismaPromise<Array<VaultValuesGetPayload<T>>| Null>;

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
   * VaultType base type for findUnique actions
   */
  export type VaultTypeFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the VaultType
     * 
    **/
    select?: VaultTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: VaultTypeInclude | null
    /**
     * Filter, which VaultType to fetch.
     * 
    **/
    where: VaultTypeWhereUniqueInput
  }

  /**
   * VaultType: findUnique
   */
  export interface VaultTypeFindUniqueArgs extends VaultTypeFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * VaultType base type for findFirst actions
   */
  export type VaultTypeFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the VaultType
     * 
    **/
    select?: VaultTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: VaultTypeInclude | null
    /**
     * Filter, which VaultType to fetch.
     * 
    **/
    where?: VaultTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VaultTypes to fetch.
     * 
    **/
    orderBy?: Enumerable<VaultTypeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VaultTypes.
     * 
    **/
    cursor?: VaultTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VaultTypes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VaultTypes.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VaultTypes.
     * 
    **/
    distinct?: Enumerable<VaultTypeScalarFieldEnum>
  }

  /**
   * VaultType: findFirst
   */
  export interface VaultTypeFindFirstArgs extends VaultTypeFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * VaultType findMany
   */
  export type VaultTypeFindManyArgs = {
    /**
     * Select specific fields to fetch from the VaultType
     * 
    **/
    select?: VaultTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: VaultTypeInclude | null
    /**
     * Filter, which VaultTypes to fetch.
     * 
    **/
    where?: VaultTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VaultTypes to fetch.
     * 
    **/
    orderBy?: Enumerable<VaultTypeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VaultTypes.
     * 
    **/
    cursor?: VaultTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VaultTypes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VaultTypes.
     * 
    **/
    skip?: number
    distinct?: Enumerable<VaultTypeScalarFieldEnum>
  }


  /**
   * VaultType create
   */
  export type VaultTypeCreateArgs = {
    /**
     * Select specific fields to fetch from the VaultType
     * 
    **/
    select?: VaultTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: VaultTypeInclude | null
    /**
     * The data needed to create a VaultType.
     * 
    **/
    data: XOR<VaultTypeCreateInput, VaultTypeUncheckedCreateInput>
  }


  /**
   * VaultType update
   */
  export type VaultTypeUpdateArgs = {
    /**
     * Select specific fields to fetch from the VaultType
     * 
    **/
    select?: VaultTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: VaultTypeInclude | null
    /**
     * The data needed to update a VaultType.
     * 
    **/
    data: XOR<VaultTypeUpdateInput, VaultTypeUncheckedUpdateInput>
    /**
     * Choose, which VaultType to update.
     * 
    **/
    where: VaultTypeWhereUniqueInput
  }


  /**
   * VaultType updateMany
   */
  export type VaultTypeUpdateManyArgs = {
    /**
     * The data used to update VaultTypes.
     * 
    **/
    data: XOR<VaultTypeUpdateManyMutationInput, VaultTypeUncheckedUpdateManyInput>
    /**
     * Filter which VaultTypes to update
     * 
    **/
    where?: VaultTypeWhereInput
  }


  /**
   * VaultType upsert
   */
  export type VaultTypeUpsertArgs = {
    /**
     * Select specific fields to fetch from the VaultType
     * 
    **/
    select?: VaultTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: VaultTypeInclude | null
    /**
     * The filter to search for the VaultType to update in case it exists.
     * 
    **/
    where: VaultTypeWhereUniqueInput
    /**
     * In case the VaultType found by the `where` argument doesn't exist, create a new VaultType with this data.
     * 
    **/
    create: XOR<VaultTypeCreateInput, VaultTypeUncheckedCreateInput>
    /**
     * In case the VaultType was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<VaultTypeUpdateInput, VaultTypeUncheckedUpdateInput>
  }


  /**
   * VaultType delete
   */
  export type VaultTypeDeleteArgs = {
    /**
     * Select specific fields to fetch from the VaultType
     * 
    **/
    select?: VaultTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: VaultTypeInclude | null
    /**
     * Filter which VaultType to delete.
     * 
    **/
    where: VaultTypeWhereUniqueInput
  }


  /**
   * VaultType deleteMany
   */
  export type VaultTypeDeleteManyArgs = {
    /**
     * Filter which VaultTypes to delete
     * 
    **/
    where?: VaultTypeWhereInput
  }


  /**
   * VaultType: findUniqueOrThrow
   */
  export type VaultTypeFindUniqueOrThrowArgs = VaultTypeFindUniqueArgsBase
      

  /**
   * VaultType: findFirstOrThrow
   */
  export type VaultTypeFindFirstOrThrowArgs = VaultTypeFindFirstArgsBase
      

  /**
   * VaultType without action
   */
  export type VaultTypeArgs = {
    /**
     * Select specific fields to fetch from the VaultType
     * 
    **/
    select?: VaultTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: VaultTypeInclude | null
  }



  /**
   * Model VaultValues
   */


  export type AggregateVaultValues = {
    _count: VaultValuesCountAggregateOutputType | null
    _avg: VaultValuesAvgAggregateOutputType | null
    _sum: VaultValuesSumAggregateOutputType | null
    _min: VaultValuesMinAggregateOutputType | null
    _max: VaultValuesMaxAggregateOutputType | null
  }

  export type VaultValuesAvgAggregateOutputType = {
    Id: number | null
    VaultTypeId: number | null
  }

  export type VaultValuesSumAggregateOutputType = {
    Id: number | null
    VaultTypeId: number | null
  }

  export type VaultValuesMinAggregateOutputType = {
    Id: number | null
    Name: string | null
    Value: string | null
    VaultTypeId: number | null
    DateOfValue: Date | null
    IsDeleted: boolean | null
  }

  export type VaultValuesMaxAggregateOutputType = {
    Id: number | null
    Name: string | null
    Value: string | null
    VaultTypeId: number | null
    DateOfValue: Date | null
    IsDeleted: boolean | null
  }

  export type VaultValuesCountAggregateOutputType = {
    Id: number
    Name: number
    Value: number
    VaultTypeId: number
    DateOfValue: number
    IsDeleted: number
    _all: number
  }


  export type VaultValuesAvgAggregateInputType = {
    Id?: true
    VaultTypeId?: true
  }

  export type VaultValuesSumAggregateInputType = {
    Id?: true
    VaultTypeId?: true
  }

  export type VaultValuesMinAggregateInputType = {
    Id?: true
    Name?: true
    Value?: true
    VaultTypeId?: true
    DateOfValue?: true
    IsDeleted?: true
  }

  export type VaultValuesMaxAggregateInputType = {
    Id?: true
    Name?: true
    Value?: true
    VaultTypeId?: true
    DateOfValue?: true
    IsDeleted?: true
  }

  export type VaultValuesCountAggregateInputType = {
    Id?: true
    Name?: true
    Value?: true
    VaultTypeId?: true
    DateOfValue?: true
    IsDeleted?: true
    _all?: true
  }

  export type VaultValuesAggregateArgs = {
    /**
     * Filter which VaultValues to aggregate.
     * 
    **/
    where?: VaultValuesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VaultValues to fetch.
     * 
    **/
    orderBy?: Enumerable<VaultValuesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: VaultValuesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VaultValues from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VaultValues.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VaultValues
    **/
    _count?: true | VaultValuesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VaultValuesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VaultValuesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VaultValuesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VaultValuesMaxAggregateInputType
  }

  export type GetVaultValuesAggregateType<T extends VaultValuesAggregateArgs> = {
        [P in keyof T & keyof AggregateVaultValues]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVaultValues[P]>
      : GetScalarType<T[P], AggregateVaultValues[P]>
  }




  export type VaultValuesGroupByArgs = {
    where?: VaultValuesWhereInput
    orderBy?: Enumerable<VaultValuesOrderByWithAggregationInput>
    by: Array<VaultValuesScalarFieldEnum>
    having?: VaultValuesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VaultValuesCountAggregateInputType | true
    _avg?: VaultValuesAvgAggregateInputType
    _sum?: VaultValuesSumAggregateInputType
    _min?: VaultValuesMinAggregateInputType
    _max?: VaultValuesMaxAggregateInputType
  }


  export type VaultValuesGroupByOutputType = {
    Id: number
    Name: string
    Value: string
    VaultTypeId: number
    DateOfValue: Date
    IsDeleted: boolean
    _count: VaultValuesCountAggregateOutputType | null
    _avg: VaultValuesAvgAggregateOutputType | null
    _sum: VaultValuesSumAggregateOutputType | null
    _min: VaultValuesMinAggregateOutputType | null
    _max: VaultValuesMaxAggregateOutputType | null
  }

  type GetVaultValuesGroupByPayload<T extends VaultValuesGroupByArgs> = PrismaPromise<
    Array<
      PickArray<VaultValuesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VaultValuesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VaultValuesGroupByOutputType[P]>
            : GetScalarType<T[P], VaultValuesGroupByOutputType[P]>
        }
      >
    >


  export type VaultValuesSelect = {
    Id?: boolean
    Name?: boolean
    Value?: boolean
    Type?: boolean | VaultTypeArgs
    VaultTypeId?: boolean
    DateOfValue?: boolean
    IsDeleted?: boolean
  }


  export type VaultValuesInclude = {
    Type?: boolean | VaultTypeArgs
  } 

  export type VaultValuesGetPayload<S extends boolean | null | undefined | VaultValuesArgs, U = keyof S> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? VaultValues :
    S extends undefined ? never :
    S extends { include: any } & (VaultValuesArgs | VaultValuesFindManyArgs)
    ? VaultValues  & {
    [P in TrueKeys<S['include']>]:
        P extends 'Type' ? VaultTypeGetPayload<Exclude<S['include'], undefined | null>[P]> :  never
  } 
    : S extends { select: any } & (VaultValuesArgs | VaultValuesFindManyArgs)
      ? {
    [P in TrueKeys<S['select']>]:
        P extends 'Type' ? VaultTypeGetPayload<Exclude<S['select'], undefined | null>[P]> :  P extends keyof VaultValues ? VaultValues[P] : never
  } 
      : VaultValues


  type VaultValuesCountArgs = Merge<
    Omit<VaultValuesFindManyArgs, 'select' | 'include'> & {
      select?: VaultValuesCountAggregateInputType | true
    }
  >

  export interface VaultValuesDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one VaultValues that matches the filter.
     * @param {VaultValuesFindUniqueArgs} args - Arguments to find a VaultValues
     * @example
     * // Get one VaultValues
     * const vaultValues = await prisma.vaultValues.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends VaultValuesFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, VaultValuesFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'VaultValues'> extends True ? Prisma__VaultValuesClient<VaultValuesGetPayload<T>> : Prisma__VaultValuesClient<VaultValuesGetPayload<T> | null, null>

    /**
     * Find the first VaultValues that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VaultValuesFindFirstArgs} args - Arguments to find a VaultValues
     * @example
     * // Get one VaultValues
     * const vaultValues = await prisma.vaultValues.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends VaultValuesFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, VaultValuesFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'VaultValues'> extends True ? Prisma__VaultValuesClient<VaultValuesGetPayload<T>> : Prisma__VaultValuesClient<VaultValuesGetPayload<T> | null, null>

    /**
     * Find zero or more VaultValues that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VaultValuesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VaultValues
     * const vaultValues = await prisma.vaultValues.findMany()
     * 
     * // Get first 10 VaultValues
     * const vaultValues = await prisma.vaultValues.findMany({ take: 10 })
     * 
     * // Only select the `Id`
     * const vaultValuesWithIdOnly = await prisma.vaultValues.findMany({ select: { Id: true } })
     * 
    **/
    findMany<T extends VaultValuesFindManyArgs>(
      args?: SelectSubset<T, VaultValuesFindManyArgs>
    ): PrismaPromise<Array<VaultValuesGetPayload<T>>>

    /**
     * Create a VaultValues.
     * @param {VaultValuesCreateArgs} args - Arguments to create a VaultValues.
     * @example
     * // Create one VaultValues
     * const VaultValues = await prisma.vaultValues.create({
     *   data: {
     *     // ... data to create a VaultValues
     *   }
     * })
     * 
    **/
    create<T extends VaultValuesCreateArgs>(
      args: SelectSubset<T, VaultValuesCreateArgs>
    ): Prisma__VaultValuesClient<VaultValuesGetPayload<T>>

    /**
     * Delete a VaultValues.
     * @param {VaultValuesDeleteArgs} args - Arguments to delete one VaultValues.
     * @example
     * // Delete one VaultValues
     * const VaultValues = await prisma.vaultValues.delete({
     *   where: {
     *     // ... filter to delete one VaultValues
     *   }
     * })
     * 
    **/
    delete<T extends VaultValuesDeleteArgs>(
      args: SelectSubset<T, VaultValuesDeleteArgs>
    ): Prisma__VaultValuesClient<VaultValuesGetPayload<T>>

    /**
     * Update one VaultValues.
     * @param {VaultValuesUpdateArgs} args - Arguments to update one VaultValues.
     * @example
     * // Update one VaultValues
     * const vaultValues = await prisma.vaultValues.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends VaultValuesUpdateArgs>(
      args: SelectSubset<T, VaultValuesUpdateArgs>
    ): Prisma__VaultValuesClient<VaultValuesGetPayload<T>>

    /**
     * Delete zero or more VaultValues.
     * @param {VaultValuesDeleteManyArgs} args - Arguments to filter VaultValues to delete.
     * @example
     * // Delete a few VaultValues
     * const { count } = await prisma.vaultValues.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends VaultValuesDeleteManyArgs>(
      args?: SelectSubset<T, VaultValuesDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more VaultValues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VaultValuesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VaultValues
     * const vaultValues = await prisma.vaultValues.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends VaultValuesUpdateManyArgs>(
      args: SelectSubset<T, VaultValuesUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one VaultValues.
     * @param {VaultValuesUpsertArgs} args - Arguments to update or create a VaultValues.
     * @example
     * // Update or create a VaultValues
     * const vaultValues = await prisma.vaultValues.upsert({
     *   create: {
     *     // ... data to create a VaultValues
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VaultValues we want to update
     *   }
     * })
    **/
    upsert<T extends VaultValuesUpsertArgs>(
      args: SelectSubset<T, VaultValuesUpsertArgs>
    ): Prisma__VaultValuesClient<VaultValuesGetPayload<T>>

    /**
     * Find one VaultValues that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {VaultValuesFindUniqueOrThrowArgs} args - Arguments to find a VaultValues
     * @example
     * // Get one VaultValues
     * const vaultValues = await prisma.vaultValues.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends VaultValuesFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, VaultValuesFindUniqueOrThrowArgs>
    ): Prisma__VaultValuesClient<VaultValuesGetPayload<T>>

    /**
     * Find the first VaultValues that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VaultValuesFindFirstOrThrowArgs} args - Arguments to find a VaultValues
     * @example
     * // Get one VaultValues
     * const vaultValues = await prisma.vaultValues.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends VaultValuesFindFirstOrThrowArgs>(
      args?: SelectSubset<T, VaultValuesFindFirstOrThrowArgs>
    ): Prisma__VaultValuesClient<VaultValuesGetPayload<T>>

    /**
     * Count the number of VaultValues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VaultValuesCountArgs} args - Arguments to filter VaultValues to count.
     * @example
     * // Count the number of VaultValues
     * const count = await prisma.vaultValues.count({
     *   where: {
     *     // ... the filter for the VaultValues we want to count
     *   }
     * })
    **/
    count<T extends VaultValuesCountArgs>(
      args?: Subset<T, VaultValuesCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VaultValuesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VaultValues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VaultValuesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VaultValuesAggregateArgs>(args: Subset<T, VaultValuesAggregateArgs>): PrismaPromise<GetVaultValuesAggregateType<T>>

    /**
     * Group by VaultValues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VaultValuesGroupByArgs} args - Group by arguments.
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
      T extends VaultValuesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VaultValuesGroupByArgs['orderBy'] }
        : { orderBy?: VaultValuesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VaultValuesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVaultValuesGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for VaultValues.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__VaultValuesClient<T, Null = never> implements PrismaPromise<T> {
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

    Type<T extends VaultTypeArgs= {}>(args?: Subset<T, VaultTypeArgs>): Prisma__VaultTypeClient<VaultTypeGetPayload<T> | Null>;

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
   * VaultValues base type for findUnique actions
   */
  export type VaultValuesFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the VaultValues
     * 
    **/
    select?: VaultValuesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: VaultValuesInclude | null
    /**
     * Filter, which VaultValues to fetch.
     * 
    **/
    where: VaultValuesWhereUniqueInput
  }

  /**
   * VaultValues: findUnique
   */
  export interface VaultValuesFindUniqueArgs extends VaultValuesFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * VaultValues base type for findFirst actions
   */
  export type VaultValuesFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the VaultValues
     * 
    **/
    select?: VaultValuesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: VaultValuesInclude | null
    /**
     * Filter, which VaultValues to fetch.
     * 
    **/
    where?: VaultValuesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VaultValues to fetch.
     * 
    **/
    orderBy?: Enumerable<VaultValuesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VaultValues.
     * 
    **/
    cursor?: VaultValuesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VaultValues from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VaultValues.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VaultValues.
     * 
    **/
    distinct?: Enumerable<VaultValuesScalarFieldEnum>
  }

  /**
   * VaultValues: findFirst
   */
  export interface VaultValuesFindFirstArgs extends VaultValuesFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * VaultValues findMany
   */
  export type VaultValuesFindManyArgs = {
    /**
     * Select specific fields to fetch from the VaultValues
     * 
    **/
    select?: VaultValuesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: VaultValuesInclude | null
    /**
     * Filter, which VaultValues to fetch.
     * 
    **/
    where?: VaultValuesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VaultValues to fetch.
     * 
    **/
    orderBy?: Enumerable<VaultValuesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VaultValues.
     * 
    **/
    cursor?: VaultValuesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VaultValues from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VaultValues.
     * 
    **/
    skip?: number
    distinct?: Enumerable<VaultValuesScalarFieldEnum>
  }


  /**
   * VaultValues create
   */
  export type VaultValuesCreateArgs = {
    /**
     * Select specific fields to fetch from the VaultValues
     * 
    **/
    select?: VaultValuesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: VaultValuesInclude | null
    /**
     * The data needed to create a VaultValues.
     * 
    **/
    data: XOR<VaultValuesCreateInput, VaultValuesUncheckedCreateInput>
  }


  /**
   * VaultValues update
   */
  export type VaultValuesUpdateArgs = {
    /**
     * Select specific fields to fetch from the VaultValues
     * 
    **/
    select?: VaultValuesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: VaultValuesInclude | null
    /**
     * The data needed to update a VaultValues.
     * 
    **/
    data: XOR<VaultValuesUpdateInput, VaultValuesUncheckedUpdateInput>
    /**
     * Choose, which VaultValues to update.
     * 
    **/
    where: VaultValuesWhereUniqueInput
  }


  /**
   * VaultValues updateMany
   */
  export type VaultValuesUpdateManyArgs = {
    /**
     * The data used to update VaultValues.
     * 
    **/
    data: XOR<VaultValuesUpdateManyMutationInput, VaultValuesUncheckedUpdateManyInput>
    /**
     * Filter which VaultValues to update
     * 
    **/
    where?: VaultValuesWhereInput
  }


  /**
   * VaultValues upsert
   */
  export type VaultValuesUpsertArgs = {
    /**
     * Select specific fields to fetch from the VaultValues
     * 
    **/
    select?: VaultValuesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: VaultValuesInclude | null
    /**
     * The filter to search for the VaultValues to update in case it exists.
     * 
    **/
    where: VaultValuesWhereUniqueInput
    /**
     * In case the VaultValues found by the `where` argument doesn't exist, create a new VaultValues with this data.
     * 
    **/
    create: XOR<VaultValuesCreateInput, VaultValuesUncheckedCreateInput>
    /**
     * In case the VaultValues was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<VaultValuesUpdateInput, VaultValuesUncheckedUpdateInput>
  }


  /**
   * VaultValues delete
   */
  export type VaultValuesDeleteArgs = {
    /**
     * Select specific fields to fetch from the VaultValues
     * 
    **/
    select?: VaultValuesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: VaultValuesInclude | null
    /**
     * Filter which VaultValues to delete.
     * 
    **/
    where: VaultValuesWhereUniqueInput
  }


  /**
   * VaultValues deleteMany
   */
  export type VaultValuesDeleteManyArgs = {
    /**
     * Filter which VaultValues to delete
     * 
    **/
    where?: VaultValuesWhereInput
  }


  /**
   * VaultValues: findUniqueOrThrow
   */
  export type VaultValuesFindUniqueOrThrowArgs = VaultValuesFindUniqueArgsBase
      

  /**
   * VaultValues: findFirstOrThrow
   */
  export type VaultValuesFindFirstOrThrowArgs = VaultValuesFindFirstArgsBase
      

  /**
   * VaultValues without action
   */
  export type VaultValuesArgs = {
    /**
     * Select specific fields to fetch from the VaultValues
     * 
    **/
    select?: VaultValuesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: VaultValuesInclude | null
  }



  /**
   * Model Jobs
   */


  export type AggregateJobs = {
    _count: JobsCountAggregateOutputType | null
    _avg: JobsAvgAggregateOutputType | null
    _sum: JobsSumAggregateOutputType | null
    _min: JobsMinAggregateOutputType | null
    _max: JobsMaxAggregateOutputType | null
  }

  export type JobsAvgAggregateOutputType = {
    Id: number | null
  }

  export type JobsSumAggregateOutputType = {
    Id: number | null
  }

  export type JobsMinAggregateOutputType = {
    Id: number | null
    Name: string | null
    ExecuterClass: string | null
    ExecuteCronTime: string | null
    IsDeleted: boolean | null
    IsActive: boolean | null
    IsRunningNow: boolean | null
  }

  export type JobsMaxAggregateOutputType = {
    Id: number | null
    Name: string | null
    ExecuterClass: string | null
    ExecuteCronTime: string | null
    IsDeleted: boolean | null
    IsActive: boolean | null
    IsRunningNow: boolean | null
  }

  export type JobsCountAggregateOutputType = {
    Id: number
    Name: number
    ExecuterClass: number
    ExecuteCronTime: number
    IsDeleted: number
    IsActive: number
    IsRunningNow: number
    _all: number
  }


  export type JobsAvgAggregateInputType = {
    Id?: true
  }

  export type JobsSumAggregateInputType = {
    Id?: true
  }

  export type JobsMinAggregateInputType = {
    Id?: true
    Name?: true
    ExecuterClass?: true
    ExecuteCronTime?: true
    IsDeleted?: true
    IsActive?: true
    IsRunningNow?: true
  }

  export type JobsMaxAggregateInputType = {
    Id?: true
    Name?: true
    ExecuterClass?: true
    ExecuteCronTime?: true
    IsDeleted?: true
    IsActive?: true
    IsRunningNow?: true
  }

  export type JobsCountAggregateInputType = {
    Id?: true
    Name?: true
    ExecuterClass?: true
    ExecuteCronTime?: true
    IsDeleted?: true
    IsActive?: true
    IsRunningNow?: true
    _all?: true
  }

  export type JobsAggregateArgs = {
    /**
     * Filter which Jobs to aggregate.
     * 
    **/
    where?: JobsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jobs to fetch.
     * 
    **/
    orderBy?: Enumerable<JobsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: JobsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jobs from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jobs.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Jobs
    **/
    _count?: true | JobsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JobsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JobsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JobsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JobsMaxAggregateInputType
  }

  export type GetJobsAggregateType<T extends JobsAggregateArgs> = {
        [P in keyof T & keyof AggregateJobs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJobs[P]>
      : GetScalarType<T[P], AggregateJobs[P]>
  }




  export type JobsGroupByArgs = {
    where?: JobsWhereInput
    orderBy?: Enumerable<JobsOrderByWithAggregationInput>
    by: Array<JobsScalarFieldEnum>
    having?: JobsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JobsCountAggregateInputType | true
    _avg?: JobsAvgAggregateInputType
    _sum?: JobsSumAggregateInputType
    _min?: JobsMinAggregateInputType
    _max?: JobsMaxAggregateInputType
  }


  export type JobsGroupByOutputType = {
    Id: number
    Name: string
    ExecuterClass: string
    ExecuteCronTime: string
    IsDeleted: boolean
    IsActive: boolean
    IsRunningNow: boolean
    _count: JobsCountAggregateOutputType | null
    _avg: JobsAvgAggregateOutputType | null
    _sum: JobsSumAggregateOutputType | null
    _min: JobsMinAggregateOutputType | null
    _max: JobsMaxAggregateOutputType | null
  }

  type GetJobsGroupByPayload<T extends JobsGroupByArgs> = PrismaPromise<
    Array<
      PickArray<JobsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JobsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JobsGroupByOutputType[P]>
            : GetScalarType<T[P], JobsGroupByOutputType[P]>
        }
      >
    >


  export type JobsSelect = {
    Id?: boolean
    Name?: boolean
    ExecuterClass?: boolean
    ExecuteCronTime?: boolean
    IsDeleted?: boolean
    IsActive?: boolean
    IsRunningNow?: boolean
    Params?: boolean | JobParamsFindManyArgs
    Logs?: boolean | JobLogsFindManyArgs
    _count?: boolean | JobsCountOutputTypeArgs
  }


  export type JobsInclude = {
    Params?: boolean | JobParamsFindManyArgs
    Logs?: boolean | JobLogsFindManyArgs
    _count?: boolean | JobsCountOutputTypeArgs
  } 

  export type JobsGetPayload<S extends boolean | null | undefined | JobsArgs, U = keyof S> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Jobs :
    S extends undefined ? never :
    S extends { include: any } & (JobsArgs | JobsFindManyArgs)
    ? Jobs  & {
    [P in TrueKeys<S['include']>]:
        P extends 'Params' ? Array < JobParamsGetPayload<Exclude<S['include'], undefined | null>[P]>>  :
        P extends 'Logs' ? Array < JobLogsGetPayload<Exclude<S['include'], undefined | null>[P]>>  :
        P extends '_count' ? JobsCountOutputTypeGetPayload<Exclude<S['include'], undefined | null>[P]> :  never
  } 
    : S extends { select: any } & (JobsArgs | JobsFindManyArgs)
      ? {
    [P in TrueKeys<S['select']>]:
        P extends 'Params' ? Array < JobParamsGetPayload<Exclude<S['select'], undefined | null>[P]>>  :
        P extends 'Logs' ? Array < JobLogsGetPayload<Exclude<S['select'], undefined | null>[P]>>  :
        P extends '_count' ? JobsCountOutputTypeGetPayload<Exclude<S['select'], undefined | null>[P]> :  P extends keyof Jobs ? Jobs[P] : never
  } 
      : Jobs


  type JobsCountArgs = Merge<
    Omit<JobsFindManyArgs, 'select' | 'include'> & {
      select?: JobsCountAggregateInputType | true
    }
  >

  export interface JobsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Jobs that matches the filter.
     * @param {JobsFindUniqueArgs} args - Arguments to find a Jobs
     * @example
     * // Get one Jobs
     * const jobs = await prisma.jobs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends JobsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, JobsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Jobs'> extends True ? Prisma__JobsClient<JobsGetPayload<T>> : Prisma__JobsClient<JobsGetPayload<T> | null, null>

    /**
     * Find the first Jobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobsFindFirstArgs} args - Arguments to find a Jobs
     * @example
     * // Get one Jobs
     * const jobs = await prisma.jobs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends JobsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, JobsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Jobs'> extends True ? Prisma__JobsClient<JobsGetPayload<T>> : Prisma__JobsClient<JobsGetPayload<T> | null, null>

    /**
     * Find zero or more Jobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Jobs
     * const jobs = await prisma.jobs.findMany()
     * 
     * // Get first 10 Jobs
     * const jobs = await prisma.jobs.findMany({ take: 10 })
     * 
     * // Only select the `Id`
     * const jobsWithIdOnly = await prisma.jobs.findMany({ select: { Id: true } })
     * 
    **/
    findMany<T extends JobsFindManyArgs>(
      args?: SelectSubset<T, JobsFindManyArgs>
    ): PrismaPromise<Array<JobsGetPayload<T>>>

    /**
     * Create a Jobs.
     * @param {JobsCreateArgs} args - Arguments to create a Jobs.
     * @example
     * // Create one Jobs
     * const Jobs = await prisma.jobs.create({
     *   data: {
     *     // ... data to create a Jobs
     *   }
     * })
     * 
    **/
    create<T extends JobsCreateArgs>(
      args: SelectSubset<T, JobsCreateArgs>
    ): Prisma__JobsClient<JobsGetPayload<T>>

    /**
     * Delete a Jobs.
     * @param {JobsDeleteArgs} args - Arguments to delete one Jobs.
     * @example
     * // Delete one Jobs
     * const Jobs = await prisma.jobs.delete({
     *   where: {
     *     // ... filter to delete one Jobs
     *   }
     * })
     * 
    **/
    delete<T extends JobsDeleteArgs>(
      args: SelectSubset<T, JobsDeleteArgs>
    ): Prisma__JobsClient<JobsGetPayload<T>>

    /**
     * Update one Jobs.
     * @param {JobsUpdateArgs} args - Arguments to update one Jobs.
     * @example
     * // Update one Jobs
     * const jobs = await prisma.jobs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends JobsUpdateArgs>(
      args: SelectSubset<T, JobsUpdateArgs>
    ): Prisma__JobsClient<JobsGetPayload<T>>

    /**
     * Delete zero or more Jobs.
     * @param {JobsDeleteManyArgs} args - Arguments to filter Jobs to delete.
     * @example
     * // Delete a few Jobs
     * const { count } = await prisma.jobs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends JobsDeleteManyArgs>(
      args?: SelectSubset<T, JobsDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Jobs
     * const jobs = await prisma.jobs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends JobsUpdateManyArgs>(
      args: SelectSubset<T, JobsUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Jobs.
     * @param {JobsUpsertArgs} args - Arguments to update or create a Jobs.
     * @example
     * // Update or create a Jobs
     * const jobs = await prisma.jobs.upsert({
     *   create: {
     *     // ... data to create a Jobs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Jobs we want to update
     *   }
     * })
    **/
    upsert<T extends JobsUpsertArgs>(
      args: SelectSubset<T, JobsUpsertArgs>
    ): Prisma__JobsClient<JobsGetPayload<T>>

    /**
     * Find one Jobs that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {JobsFindUniqueOrThrowArgs} args - Arguments to find a Jobs
     * @example
     * // Get one Jobs
     * const jobs = await prisma.jobs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends JobsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, JobsFindUniqueOrThrowArgs>
    ): Prisma__JobsClient<JobsGetPayload<T>>

    /**
     * Find the first Jobs that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobsFindFirstOrThrowArgs} args - Arguments to find a Jobs
     * @example
     * // Get one Jobs
     * const jobs = await prisma.jobs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends JobsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, JobsFindFirstOrThrowArgs>
    ): Prisma__JobsClient<JobsGetPayload<T>>

    /**
     * Count the number of Jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobsCountArgs} args - Arguments to filter Jobs to count.
     * @example
     * // Count the number of Jobs
     * const count = await prisma.jobs.count({
     *   where: {
     *     // ... the filter for the Jobs we want to count
     *   }
     * })
    **/
    count<T extends JobsCountArgs>(
      args?: Subset<T, JobsCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JobsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends JobsAggregateArgs>(args: Subset<T, JobsAggregateArgs>): PrismaPromise<GetJobsAggregateType<T>>

    /**
     * Group by Jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobsGroupByArgs} args - Group by arguments.
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
      T extends JobsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JobsGroupByArgs['orderBy'] }
        : { orderBy?: JobsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, JobsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJobsGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Jobs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__JobsClient<T, Null = never> implements PrismaPromise<T> {
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

    Params<T extends JobParamsFindManyArgs= {}>(args?: Subset<T, JobParamsFindManyArgs>): PrismaPromise<Array<JobParamsGetPayload<T>>| Null>;

    Logs<T extends JobLogsFindManyArgs= {}>(args?: Subset<T, JobLogsFindManyArgs>): PrismaPromise<Array<JobLogsGetPayload<T>>| Null>;

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
   * Jobs base type for findUnique actions
   */
  export type JobsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Jobs
     * 
    **/
    select?: JobsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: JobsInclude | null
    /**
     * Filter, which Jobs to fetch.
     * 
    **/
    where: JobsWhereUniqueInput
  }

  /**
   * Jobs: findUnique
   */
  export interface JobsFindUniqueArgs extends JobsFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Jobs base type for findFirst actions
   */
  export type JobsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Jobs
     * 
    **/
    select?: JobsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: JobsInclude | null
    /**
     * Filter, which Jobs to fetch.
     * 
    **/
    where?: JobsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jobs to fetch.
     * 
    **/
    orderBy?: Enumerable<JobsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Jobs.
     * 
    **/
    cursor?: JobsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jobs from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jobs.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Jobs.
     * 
    **/
    distinct?: Enumerable<JobsScalarFieldEnum>
  }

  /**
   * Jobs: findFirst
   */
  export interface JobsFindFirstArgs extends JobsFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Jobs findMany
   */
  export type JobsFindManyArgs = {
    /**
     * Select specific fields to fetch from the Jobs
     * 
    **/
    select?: JobsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: JobsInclude | null
    /**
     * Filter, which Jobs to fetch.
     * 
    **/
    where?: JobsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jobs to fetch.
     * 
    **/
    orderBy?: Enumerable<JobsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Jobs.
     * 
    **/
    cursor?: JobsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jobs from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jobs.
     * 
    **/
    skip?: number
    distinct?: Enumerable<JobsScalarFieldEnum>
  }


  /**
   * Jobs create
   */
  export type JobsCreateArgs = {
    /**
     * Select specific fields to fetch from the Jobs
     * 
    **/
    select?: JobsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: JobsInclude | null
    /**
     * The data needed to create a Jobs.
     * 
    **/
    data: XOR<JobsCreateInput, JobsUncheckedCreateInput>
  }


  /**
   * Jobs update
   */
  export type JobsUpdateArgs = {
    /**
     * Select specific fields to fetch from the Jobs
     * 
    **/
    select?: JobsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: JobsInclude | null
    /**
     * The data needed to update a Jobs.
     * 
    **/
    data: XOR<JobsUpdateInput, JobsUncheckedUpdateInput>
    /**
     * Choose, which Jobs to update.
     * 
    **/
    where: JobsWhereUniqueInput
  }


  /**
   * Jobs updateMany
   */
  export type JobsUpdateManyArgs = {
    /**
     * The data used to update Jobs.
     * 
    **/
    data: XOR<JobsUpdateManyMutationInput, JobsUncheckedUpdateManyInput>
    /**
     * Filter which Jobs to update
     * 
    **/
    where?: JobsWhereInput
  }


  /**
   * Jobs upsert
   */
  export type JobsUpsertArgs = {
    /**
     * Select specific fields to fetch from the Jobs
     * 
    **/
    select?: JobsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: JobsInclude | null
    /**
     * The filter to search for the Jobs to update in case it exists.
     * 
    **/
    where: JobsWhereUniqueInput
    /**
     * In case the Jobs found by the `where` argument doesn't exist, create a new Jobs with this data.
     * 
    **/
    create: XOR<JobsCreateInput, JobsUncheckedCreateInput>
    /**
     * In case the Jobs was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<JobsUpdateInput, JobsUncheckedUpdateInput>
  }


  /**
   * Jobs delete
   */
  export type JobsDeleteArgs = {
    /**
     * Select specific fields to fetch from the Jobs
     * 
    **/
    select?: JobsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: JobsInclude | null
    /**
     * Filter which Jobs to delete.
     * 
    **/
    where: JobsWhereUniqueInput
  }


  /**
   * Jobs deleteMany
   */
  export type JobsDeleteManyArgs = {
    /**
     * Filter which Jobs to delete
     * 
    **/
    where?: JobsWhereInput
  }


  /**
   * Jobs: findUniqueOrThrow
   */
  export type JobsFindUniqueOrThrowArgs = JobsFindUniqueArgsBase
      

  /**
   * Jobs: findFirstOrThrow
   */
  export type JobsFindFirstOrThrowArgs = JobsFindFirstArgsBase
      

  /**
   * Jobs without action
   */
  export type JobsArgs = {
    /**
     * Select specific fields to fetch from the Jobs
     * 
    **/
    select?: JobsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: JobsInclude | null
  }



  /**
   * Model JobParams
   */


  export type AggregateJobParams = {
    _count: JobParamsCountAggregateOutputType | null
    _avg: JobParamsAvgAggregateOutputType | null
    _sum: JobParamsSumAggregateOutputType | null
    _min: JobParamsMinAggregateOutputType | null
    _max: JobParamsMaxAggregateOutputType | null
  }

  export type JobParamsAvgAggregateOutputType = {
    Id: number | null
    JobId: number | null
  }

  export type JobParamsSumAggregateOutputType = {
    Id: number | null
    JobId: number | null
  }

  export type JobParamsMinAggregateOutputType = {
    Id: number | null
    Name: string | null
    Value: string | null
    IsDeleted: boolean | null
    JobId: number | null
  }

  export type JobParamsMaxAggregateOutputType = {
    Id: number | null
    Name: string | null
    Value: string | null
    IsDeleted: boolean | null
    JobId: number | null
  }

  export type JobParamsCountAggregateOutputType = {
    Id: number
    Name: number
    Value: number
    IsDeleted: number
    JobId: number
    _all: number
  }


  export type JobParamsAvgAggregateInputType = {
    Id?: true
    JobId?: true
  }

  export type JobParamsSumAggregateInputType = {
    Id?: true
    JobId?: true
  }

  export type JobParamsMinAggregateInputType = {
    Id?: true
    Name?: true
    Value?: true
    IsDeleted?: true
    JobId?: true
  }

  export type JobParamsMaxAggregateInputType = {
    Id?: true
    Name?: true
    Value?: true
    IsDeleted?: true
    JobId?: true
  }

  export type JobParamsCountAggregateInputType = {
    Id?: true
    Name?: true
    Value?: true
    IsDeleted?: true
    JobId?: true
    _all?: true
  }

  export type JobParamsAggregateArgs = {
    /**
     * Filter which JobParams to aggregate.
     * 
    **/
    where?: JobParamsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobParams to fetch.
     * 
    **/
    orderBy?: Enumerable<JobParamsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: JobParamsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobParams from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobParams.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned JobParams
    **/
    _count?: true | JobParamsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JobParamsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JobParamsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JobParamsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JobParamsMaxAggregateInputType
  }

  export type GetJobParamsAggregateType<T extends JobParamsAggregateArgs> = {
        [P in keyof T & keyof AggregateJobParams]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJobParams[P]>
      : GetScalarType<T[P], AggregateJobParams[P]>
  }




  export type JobParamsGroupByArgs = {
    where?: JobParamsWhereInput
    orderBy?: Enumerable<JobParamsOrderByWithAggregationInput>
    by: Array<JobParamsScalarFieldEnum>
    having?: JobParamsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JobParamsCountAggregateInputType | true
    _avg?: JobParamsAvgAggregateInputType
    _sum?: JobParamsSumAggregateInputType
    _min?: JobParamsMinAggregateInputType
    _max?: JobParamsMaxAggregateInputType
  }


  export type JobParamsGroupByOutputType = {
    Id: number
    Name: string
    Value: string
    IsDeleted: boolean
    JobId: number
    _count: JobParamsCountAggregateOutputType | null
    _avg: JobParamsAvgAggregateOutputType | null
    _sum: JobParamsSumAggregateOutputType | null
    _min: JobParamsMinAggregateOutputType | null
    _max: JobParamsMaxAggregateOutputType | null
  }

  type GetJobParamsGroupByPayload<T extends JobParamsGroupByArgs> = PrismaPromise<
    Array<
      PickArray<JobParamsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JobParamsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JobParamsGroupByOutputType[P]>
            : GetScalarType<T[P], JobParamsGroupByOutputType[P]>
        }
      >
    >


  export type JobParamsSelect = {
    Id?: boolean
    Name?: boolean
    Value?: boolean
    IsDeleted?: boolean
    Job?: boolean | JobsArgs
    JobId?: boolean
  }


  export type JobParamsInclude = {
    Job?: boolean | JobsArgs
  } 

  export type JobParamsGetPayload<S extends boolean | null | undefined | JobParamsArgs, U = keyof S> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? JobParams :
    S extends undefined ? never :
    S extends { include: any } & (JobParamsArgs | JobParamsFindManyArgs)
    ? JobParams  & {
    [P in TrueKeys<S['include']>]:
        P extends 'Job' ? JobsGetPayload<Exclude<S['include'], undefined | null>[P]> :  never
  } 
    : S extends { select: any } & (JobParamsArgs | JobParamsFindManyArgs)
      ? {
    [P in TrueKeys<S['select']>]:
        P extends 'Job' ? JobsGetPayload<Exclude<S['select'], undefined | null>[P]> :  P extends keyof JobParams ? JobParams[P] : never
  } 
      : JobParams


  type JobParamsCountArgs = Merge<
    Omit<JobParamsFindManyArgs, 'select' | 'include'> & {
      select?: JobParamsCountAggregateInputType | true
    }
  >

  export interface JobParamsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one JobParams that matches the filter.
     * @param {JobParamsFindUniqueArgs} args - Arguments to find a JobParams
     * @example
     * // Get one JobParams
     * const jobParams = await prisma.jobParams.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends JobParamsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, JobParamsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'JobParams'> extends True ? Prisma__JobParamsClient<JobParamsGetPayload<T>> : Prisma__JobParamsClient<JobParamsGetPayload<T> | null, null>

    /**
     * Find the first JobParams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobParamsFindFirstArgs} args - Arguments to find a JobParams
     * @example
     * // Get one JobParams
     * const jobParams = await prisma.jobParams.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends JobParamsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, JobParamsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'JobParams'> extends True ? Prisma__JobParamsClient<JobParamsGetPayload<T>> : Prisma__JobParamsClient<JobParamsGetPayload<T> | null, null>

    /**
     * Find zero or more JobParams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobParamsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all JobParams
     * const jobParams = await prisma.jobParams.findMany()
     * 
     * // Get first 10 JobParams
     * const jobParams = await prisma.jobParams.findMany({ take: 10 })
     * 
     * // Only select the `Id`
     * const jobParamsWithIdOnly = await prisma.jobParams.findMany({ select: { Id: true } })
     * 
    **/
    findMany<T extends JobParamsFindManyArgs>(
      args?: SelectSubset<T, JobParamsFindManyArgs>
    ): PrismaPromise<Array<JobParamsGetPayload<T>>>

    /**
     * Create a JobParams.
     * @param {JobParamsCreateArgs} args - Arguments to create a JobParams.
     * @example
     * // Create one JobParams
     * const JobParams = await prisma.jobParams.create({
     *   data: {
     *     // ... data to create a JobParams
     *   }
     * })
     * 
    **/
    create<T extends JobParamsCreateArgs>(
      args: SelectSubset<T, JobParamsCreateArgs>
    ): Prisma__JobParamsClient<JobParamsGetPayload<T>>

    /**
     * Delete a JobParams.
     * @param {JobParamsDeleteArgs} args - Arguments to delete one JobParams.
     * @example
     * // Delete one JobParams
     * const JobParams = await prisma.jobParams.delete({
     *   where: {
     *     // ... filter to delete one JobParams
     *   }
     * })
     * 
    **/
    delete<T extends JobParamsDeleteArgs>(
      args: SelectSubset<T, JobParamsDeleteArgs>
    ): Prisma__JobParamsClient<JobParamsGetPayload<T>>

    /**
     * Update one JobParams.
     * @param {JobParamsUpdateArgs} args - Arguments to update one JobParams.
     * @example
     * // Update one JobParams
     * const jobParams = await prisma.jobParams.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends JobParamsUpdateArgs>(
      args: SelectSubset<T, JobParamsUpdateArgs>
    ): Prisma__JobParamsClient<JobParamsGetPayload<T>>

    /**
     * Delete zero or more JobParams.
     * @param {JobParamsDeleteManyArgs} args - Arguments to filter JobParams to delete.
     * @example
     * // Delete a few JobParams
     * const { count } = await prisma.jobParams.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends JobParamsDeleteManyArgs>(
      args?: SelectSubset<T, JobParamsDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more JobParams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobParamsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many JobParams
     * const jobParams = await prisma.jobParams.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends JobParamsUpdateManyArgs>(
      args: SelectSubset<T, JobParamsUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one JobParams.
     * @param {JobParamsUpsertArgs} args - Arguments to update or create a JobParams.
     * @example
     * // Update or create a JobParams
     * const jobParams = await prisma.jobParams.upsert({
     *   create: {
     *     // ... data to create a JobParams
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the JobParams we want to update
     *   }
     * })
    **/
    upsert<T extends JobParamsUpsertArgs>(
      args: SelectSubset<T, JobParamsUpsertArgs>
    ): Prisma__JobParamsClient<JobParamsGetPayload<T>>

    /**
     * Find one JobParams that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {JobParamsFindUniqueOrThrowArgs} args - Arguments to find a JobParams
     * @example
     * // Get one JobParams
     * const jobParams = await prisma.jobParams.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends JobParamsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, JobParamsFindUniqueOrThrowArgs>
    ): Prisma__JobParamsClient<JobParamsGetPayload<T>>

    /**
     * Find the first JobParams that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobParamsFindFirstOrThrowArgs} args - Arguments to find a JobParams
     * @example
     * // Get one JobParams
     * const jobParams = await prisma.jobParams.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends JobParamsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, JobParamsFindFirstOrThrowArgs>
    ): Prisma__JobParamsClient<JobParamsGetPayload<T>>

    /**
     * Count the number of JobParams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobParamsCountArgs} args - Arguments to filter JobParams to count.
     * @example
     * // Count the number of JobParams
     * const count = await prisma.jobParams.count({
     *   where: {
     *     // ... the filter for the JobParams we want to count
     *   }
     * })
    **/
    count<T extends JobParamsCountArgs>(
      args?: Subset<T, JobParamsCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JobParamsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a JobParams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobParamsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends JobParamsAggregateArgs>(args: Subset<T, JobParamsAggregateArgs>): PrismaPromise<GetJobParamsAggregateType<T>>

    /**
     * Group by JobParams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobParamsGroupByArgs} args - Group by arguments.
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
      T extends JobParamsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JobParamsGroupByArgs['orderBy'] }
        : { orderBy?: JobParamsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, JobParamsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJobParamsGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for JobParams.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__JobParamsClient<T, Null = never> implements PrismaPromise<T> {
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

    Job<T extends JobsArgs= {}>(args?: Subset<T, JobsArgs>): Prisma__JobsClient<JobsGetPayload<T> | Null>;

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
   * JobParams base type for findUnique actions
   */
  export type JobParamsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the JobParams
     * 
    **/
    select?: JobParamsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: JobParamsInclude | null
    /**
     * Filter, which JobParams to fetch.
     * 
    **/
    where: JobParamsWhereUniqueInput
  }

  /**
   * JobParams: findUnique
   */
  export interface JobParamsFindUniqueArgs extends JobParamsFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * JobParams base type for findFirst actions
   */
  export type JobParamsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the JobParams
     * 
    **/
    select?: JobParamsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: JobParamsInclude | null
    /**
     * Filter, which JobParams to fetch.
     * 
    **/
    where?: JobParamsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobParams to fetch.
     * 
    **/
    orderBy?: Enumerable<JobParamsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JobParams.
     * 
    **/
    cursor?: JobParamsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobParams from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobParams.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobParams.
     * 
    **/
    distinct?: Enumerable<JobParamsScalarFieldEnum>
  }

  /**
   * JobParams: findFirst
   */
  export interface JobParamsFindFirstArgs extends JobParamsFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * JobParams findMany
   */
  export type JobParamsFindManyArgs = {
    /**
     * Select specific fields to fetch from the JobParams
     * 
    **/
    select?: JobParamsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: JobParamsInclude | null
    /**
     * Filter, which JobParams to fetch.
     * 
    **/
    where?: JobParamsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobParams to fetch.
     * 
    **/
    orderBy?: Enumerable<JobParamsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing JobParams.
     * 
    **/
    cursor?: JobParamsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobParams from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobParams.
     * 
    **/
    skip?: number
    distinct?: Enumerable<JobParamsScalarFieldEnum>
  }


  /**
   * JobParams create
   */
  export type JobParamsCreateArgs = {
    /**
     * Select specific fields to fetch from the JobParams
     * 
    **/
    select?: JobParamsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: JobParamsInclude | null
    /**
     * The data needed to create a JobParams.
     * 
    **/
    data: XOR<JobParamsCreateInput, JobParamsUncheckedCreateInput>
  }


  /**
   * JobParams update
   */
  export type JobParamsUpdateArgs = {
    /**
     * Select specific fields to fetch from the JobParams
     * 
    **/
    select?: JobParamsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: JobParamsInclude | null
    /**
     * The data needed to update a JobParams.
     * 
    **/
    data: XOR<JobParamsUpdateInput, JobParamsUncheckedUpdateInput>
    /**
     * Choose, which JobParams to update.
     * 
    **/
    where: JobParamsWhereUniqueInput
  }


  /**
   * JobParams updateMany
   */
  export type JobParamsUpdateManyArgs = {
    /**
     * The data used to update JobParams.
     * 
    **/
    data: XOR<JobParamsUpdateManyMutationInput, JobParamsUncheckedUpdateManyInput>
    /**
     * Filter which JobParams to update
     * 
    **/
    where?: JobParamsWhereInput
  }


  /**
   * JobParams upsert
   */
  export type JobParamsUpsertArgs = {
    /**
     * Select specific fields to fetch from the JobParams
     * 
    **/
    select?: JobParamsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: JobParamsInclude | null
    /**
     * The filter to search for the JobParams to update in case it exists.
     * 
    **/
    where: JobParamsWhereUniqueInput
    /**
     * In case the JobParams found by the `where` argument doesn't exist, create a new JobParams with this data.
     * 
    **/
    create: XOR<JobParamsCreateInput, JobParamsUncheckedCreateInput>
    /**
     * In case the JobParams was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<JobParamsUpdateInput, JobParamsUncheckedUpdateInput>
  }


  /**
   * JobParams delete
   */
  export type JobParamsDeleteArgs = {
    /**
     * Select specific fields to fetch from the JobParams
     * 
    **/
    select?: JobParamsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: JobParamsInclude | null
    /**
     * Filter which JobParams to delete.
     * 
    **/
    where: JobParamsWhereUniqueInput
  }


  /**
   * JobParams deleteMany
   */
  export type JobParamsDeleteManyArgs = {
    /**
     * Filter which JobParams to delete
     * 
    **/
    where?: JobParamsWhereInput
  }


  /**
   * JobParams: findUniqueOrThrow
   */
  export type JobParamsFindUniqueOrThrowArgs = JobParamsFindUniqueArgsBase
      

  /**
   * JobParams: findFirstOrThrow
   */
  export type JobParamsFindFirstOrThrowArgs = JobParamsFindFirstArgsBase
      

  /**
   * JobParams without action
   */
  export type JobParamsArgs = {
    /**
     * Select specific fields to fetch from the JobParams
     * 
    **/
    select?: JobParamsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: JobParamsInclude | null
  }



  /**
   * Model JobLogs
   */


  export type AggregateJobLogs = {
    _count: JobLogsCountAggregateOutputType | null
    _avg: JobLogsAvgAggregateOutputType | null
    _sum: JobLogsSumAggregateOutputType | null
    _min: JobLogsMinAggregateOutputType | null
    _max: JobLogsMaxAggregateOutputType | null
  }

  export type JobLogsAvgAggregateOutputType = {
    Id: number | null
    JobId: number | null
  }

  export type JobLogsSumAggregateOutputType = {
    Id: number | null
    JobId: number | null
  }

  export type JobLogsMinAggregateOutputType = {
    Id: number | null
    JobId: number | null
    ExecuteTime: Date | null
    IsError: boolean | null
    Error: string | null
  }

  export type JobLogsMaxAggregateOutputType = {
    Id: number | null
    JobId: number | null
    ExecuteTime: Date | null
    IsError: boolean | null
    Error: string | null
  }

  export type JobLogsCountAggregateOutputType = {
    Id: number
    JobId: number
    ExecuteTime: number
    IsError: number
    Error: number
    _all: number
  }


  export type JobLogsAvgAggregateInputType = {
    Id?: true
    JobId?: true
  }

  export type JobLogsSumAggregateInputType = {
    Id?: true
    JobId?: true
  }

  export type JobLogsMinAggregateInputType = {
    Id?: true
    JobId?: true
    ExecuteTime?: true
    IsError?: true
    Error?: true
  }

  export type JobLogsMaxAggregateInputType = {
    Id?: true
    JobId?: true
    ExecuteTime?: true
    IsError?: true
    Error?: true
  }

  export type JobLogsCountAggregateInputType = {
    Id?: true
    JobId?: true
    ExecuteTime?: true
    IsError?: true
    Error?: true
    _all?: true
  }

  export type JobLogsAggregateArgs = {
    /**
     * Filter which JobLogs to aggregate.
     * 
    **/
    where?: JobLogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobLogs to fetch.
     * 
    **/
    orderBy?: Enumerable<JobLogsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: JobLogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobLogs from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobLogs.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned JobLogs
    **/
    _count?: true | JobLogsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JobLogsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JobLogsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JobLogsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JobLogsMaxAggregateInputType
  }

  export type GetJobLogsAggregateType<T extends JobLogsAggregateArgs> = {
        [P in keyof T & keyof AggregateJobLogs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJobLogs[P]>
      : GetScalarType<T[P], AggregateJobLogs[P]>
  }




  export type JobLogsGroupByArgs = {
    where?: JobLogsWhereInput
    orderBy?: Enumerable<JobLogsOrderByWithAggregationInput>
    by: Array<JobLogsScalarFieldEnum>
    having?: JobLogsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JobLogsCountAggregateInputType | true
    _avg?: JobLogsAvgAggregateInputType
    _sum?: JobLogsSumAggregateInputType
    _min?: JobLogsMinAggregateInputType
    _max?: JobLogsMaxAggregateInputType
  }


  export type JobLogsGroupByOutputType = {
    Id: number
    JobId: number
    ExecuteTime: Date
    IsError: boolean
    Error: string
    _count: JobLogsCountAggregateOutputType | null
    _avg: JobLogsAvgAggregateOutputType | null
    _sum: JobLogsSumAggregateOutputType | null
    _min: JobLogsMinAggregateOutputType | null
    _max: JobLogsMaxAggregateOutputType | null
  }

  type GetJobLogsGroupByPayload<T extends JobLogsGroupByArgs> = PrismaPromise<
    Array<
      PickArray<JobLogsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JobLogsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JobLogsGroupByOutputType[P]>
            : GetScalarType<T[P], JobLogsGroupByOutputType[P]>
        }
      >
    >


  export type JobLogsSelect = {
    Id?: boolean
    Job?: boolean | JobsArgs
    JobId?: boolean
    ExecuteTime?: boolean
    IsError?: boolean
    Error?: boolean
  }


  export type JobLogsInclude = {
    Job?: boolean | JobsArgs
  } 

  export type JobLogsGetPayload<S extends boolean | null | undefined | JobLogsArgs, U = keyof S> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? JobLogs :
    S extends undefined ? never :
    S extends { include: any } & (JobLogsArgs | JobLogsFindManyArgs)
    ? JobLogs  & {
    [P in TrueKeys<S['include']>]:
        P extends 'Job' ? JobsGetPayload<Exclude<S['include'], undefined | null>[P]> :  never
  } 
    : S extends { select: any } & (JobLogsArgs | JobLogsFindManyArgs)
      ? {
    [P in TrueKeys<S['select']>]:
        P extends 'Job' ? JobsGetPayload<Exclude<S['select'], undefined | null>[P]> :  P extends keyof JobLogs ? JobLogs[P] : never
  } 
      : JobLogs


  type JobLogsCountArgs = Merge<
    Omit<JobLogsFindManyArgs, 'select' | 'include'> & {
      select?: JobLogsCountAggregateInputType | true
    }
  >

  export interface JobLogsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one JobLogs that matches the filter.
     * @param {JobLogsFindUniqueArgs} args - Arguments to find a JobLogs
     * @example
     * // Get one JobLogs
     * const jobLogs = await prisma.jobLogs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends JobLogsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, JobLogsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'JobLogs'> extends True ? Prisma__JobLogsClient<JobLogsGetPayload<T>> : Prisma__JobLogsClient<JobLogsGetPayload<T> | null, null>

    /**
     * Find the first JobLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobLogsFindFirstArgs} args - Arguments to find a JobLogs
     * @example
     * // Get one JobLogs
     * const jobLogs = await prisma.jobLogs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends JobLogsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, JobLogsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'JobLogs'> extends True ? Prisma__JobLogsClient<JobLogsGetPayload<T>> : Prisma__JobLogsClient<JobLogsGetPayload<T> | null, null>

    /**
     * Find zero or more JobLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobLogsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all JobLogs
     * const jobLogs = await prisma.jobLogs.findMany()
     * 
     * // Get first 10 JobLogs
     * const jobLogs = await prisma.jobLogs.findMany({ take: 10 })
     * 
     * // Only select the `Id`
     * const jobLogsWithIdOnly = await prisma.jobLogs.findMany({ select: { Id: true } })
     * 
    **/
    findMany<T extends JobLogsFindManyArgs>(
      args?: SelectSubset<T, JobLogsFindManyArgs>
    ): PrismaPromise<Array<JobLogsGetPayload<T>>>

    /**
     * Create a JobLogs.
     * @param {JobLogsCreateArgs} args - Arguments to create a JobLogs.
     * @example
     * // Create one JobLogs
     * const JobLogs = await prisma.jobLogs.create({
     *   data: {
     *     // ... data to create a JobLogs
     *   }
     * })
     * 
    **/
    create<T extends JobLogsCreateArgs>(
      args: SelectSubset<T, JobLogsCreateArgs>
    ): Prisma__JobLogsClient<JobLogsGetPayload<T>>

    /**
     * Delete a JobLogs.
     * @param {JobLogsDeleteArgs} args - Arguments to delete one JobLogs.
     * @example
     * // Delete one JobLogs
     * const JobLogs = await prisma.jobLogs.delete({
     *   where: {
     *     // ... filter to delete one JobLogs
     *   }
     * })
     * 
    **/
    delete<T extends JobLogsDeleteArgs>(
      args: SelectSubset<T, JobLogsDeleteArgs>
    ): Prisma__JobLogsClient<JobLogsGetPayload<T>>

    /**
     * Update one JobLogs.
     * @param {JobLogsUpdateArgs} args - Arguments to update one JobLogs.
     * @example
     * // Update one JobLogs
     * const jobLogs = await prisma.jobLogs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends JobLogsUpdateArgs>(
      args: SelectSubset<T, JobLogsUpdateArgs>
    ): Prisma__JobLogsClient<JobLogsGetPayload<T>>

    /**
     * Delete zero or more JobLogs.
     * @param {JobLogsDeleteManyArgs} args - Arguments to filter JobLogs to delete.
     * @example
     * // Delete a few JobLogs
     * const { count } = await prisma.jobLogs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends JobLogsDeleteManyArgs>(
      args?: SelectSubset<T, JobLogsDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more JobLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobLogsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many JobLogs
     * const jobLogs = await prisma.jobLogs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends JobLogsUpdateManyArgs>(
      args: SelectSubset<T, JobLogsUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one JobLogs.
     * @param {JobLogsUpsertArgs} args - Arguments to update or create a JobLogs.
     * @example
     * // Update or create a JobLogs
     * const jobLogs = await prisma.jobLogs.upsert({
     *   create: {
     *     // ... data to create a JobLogs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the JobLogs we want to update
     *   }
     * })
    **/
    upsert<T extends JobLogsUpsertArgs>(
      args: SelectSubset<T, JobLogsUpsertArgs>
    ): Prisma__JobLogsClient<JobLogsGetPayload<T>>

    /**
     * Find one JobLogs that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {JobLogsFindUniqueOrThrowArgs} args - Arguments to find a JobLogs
     * @example
     * // Get one JobLogs
     * const jobLogs = await prisma.jobLogs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends JobLogsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, JobLogsFindUniqueOrThrowArgs>
    ): Prisma__JobLogsClient<JobLogsGetPayload<T>>

    /**
     * Find the first JobLogs that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobLogsFindFirstOrThrowArgs} args - Arguments to find a JobLogs
     * @example
     * // Get one JobLogs
     * const jobLogs = await prisma.jobLogs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends JobLogsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, JobLogsFindFirstOrThrowArgs>
    ): Prisma__JobLogsClient<JobLogsGetPayload<T>>

    /**
     * Count the number of JobLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobLogsCountArgs} args - Arguments to filter JobLogs to count.
     * @example
     * // Count the number of JobLogs
     * const count = await prisma.jobLogs.count({
     *   where: {
     *     // ... the filter for the JobLogs we want to count
     *   }
     * })
    **/
    count<T extends JobLogsCountArgs>(
      args?: Subset<T, JobLogsCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JobLogsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a JobLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobLogsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends JobLogsAggregateArgs>(args: Subset<T, JobLogsAggregateArgs>): PrismaPromise<GetJobLogsAggregateType<T>>

    /**
     * Group by JobLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobLogsGroupByArgs} args - Group by arguments.
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
      T extends JobLogsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JobLogsGroupByArgs['orderBy'] }
        : { orderBy?: JobLogsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, JobLogsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJobLogsGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for JobLogs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__JobLogsClient<T, Null = never> implements PrismaPromise<T> {
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

    Job<T extends JobsArgs= {}>(args?: Subset<T, JobsArgs>): Prisma__JobsClient<JobsGetPayload<T> | Null>;

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
   * JobLogs base type for findUnique actions
   */
  export type JobLogsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the JobLogs
     * 
    **/
    select?: JobLogsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: JobLogsInclude | null
    /**
     * Filter, which JobLogs to fetch.
     * 
    **/
    where: JobLogsWhereUniqueInput
  }

  /**
   * JobLogs: findUnique
   */
  export interface JobLogsFindUniqueArgs extends JobLogsFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * JobLogs base type for findFirst actions
   */
  export type JobLogsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the JobLogs
     * 
    **/
    select?: JobLogsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: JobLogsInclude | null
    /**
     * Filter, which JobLogs to fetch.
     * 
    **/
    where?: JobLogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobLogs to fetch.
     * 
    **/
    orderBy?: Enumerable<JobLogsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JobLogs.
     * 
    **/
    cursor?: JobLogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobLogs from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobLogs.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobLogs.
     * 
    **/
    distinct?: Enumerable<JobLogsScalarFieldEnum>
  }

  /**
   * JobLogs: findFirst
   */
  export interface JobLogsFindFirstArgs extends JobLogsFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * JobLogs findMany
   */
  export type JobLogsFindManyArgs = {
    /**
     * Select specific fields to fetch from the JobLogs
     * 
    **/
    select?: JobLogsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: JobLogsInclude | null
    /**
     * Filter, which JobLogs to fetch.
     * 
    **/
    where?: JobLogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobLogs to fetch.
     * 
    **/
    orderBy?: Enumerable<JobLogsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing JobLogs.
     * 
    **/
    cursor?: JobLogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobLogs from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobLogs.
     * 
    **/
    skip?: number
    distinct?: Enumerable<JobLogsScalarFieldEnum>
  }


  /**
   * JobLogs create
   */
  export type JobLogsCreateArgs = {
    /**
     * Select specific fields to fetch from the JobLogs
     * 
    **/
    select?: JobLogsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: JobLogsInclude | null
    /**
     * The data needed to create a JobLogs.
     * 
    **/
    data: XOR<JobLogsCreateInput, JobLogsUncheckedCreateInput>
  }


  /**
   * JobLogs update
   */
  export type JobLogsUpdateArgs = {
    /**
     * Select specific fields to fetch from the JobLogs
     * 
    **/
    select?: JobLogsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: JobLogsInclude | null
    /**
     * The data needed to update a JobLogs.
     * 
    **/
    data: XOR<JobLogsUpdateInput, JobLogsUncheckedUpdateInput>
    /**
     * Choose, which JobLogs to update.
     * 
    **/
    where: JobLogsWhereUniqueInput
  }


  /**
   * JobLogs updateMany
   */
  export type JobLogsUpdateManyArgs = {
    /**
     * The data used to update JobLogs.
     * 
    **/
    data: XOR<JobLogsUpdateManyMutationInput, JobLogsUncheckedUpdateManyInput>
    /**
     * Filter which JobLogs to update
     * 
    **/
    where?: JobLogsWhereInput
  }


  /**
   * JobLogs upsert
   */
  export type JobLogsUpsertArgs = {
    /**
     * Select specific fields to fetch from the JobLogs
     * 
    **/
    select?: JobLogsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: JobLogsInclude | null
    /**
     * The filter to search for the JobLogs to update in case it exists.
     * 
    **/
    where: JobLogsWhereUniqueInput
    /**
     * In case the JobLogs found by the `where` argument doesn't exist, create a new JobLogs with this data.
     * 
    **/
    create: XOR<JobLogsCreateInput, JobLogsUncheckedCreateInput>
    /**
     * In case the JobLogs was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<JobLogsUpdateInput, JobLogsUncheckedUpdateInput>
  }


  /**
   * JobLogs delete
   */
  export type JobLogsDeleteArgs = {
    /**
     * Select specific fields to fetch from the JobLogs
     * 
    **/
    select?: JobLogsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: JobLogsInclude | null
    /**
     * Filter which JobLogs to delete.
     * 
    **/
    where: JobLogsWhereUniqueInput
  }


  /**
   * JobLogs deleteMany
   */
  export type JobLogsDeleteManyArgs = {
    /**
     * Filter which JobLogs to delete
     * 
    **/
    where?: JobLogsWhereInput
  }


  /**
   * JobLogs: findUniqueOrThrow
   */
  export type JobLogsFindUniqueOrThrowArgs = JobLogsFindUniqueArgsBase
      

  /**
   * JobLogs: findFirstOrThrow
   */
  export type JobLogsFindFirstOrThrowArgs = JobLogsFindFirstArgsBase
      

  /**
   * JobLogs without action
   */
  export type JobLogsArgs = {
    /**
     * Select specific fields to fetch from the JobLogs
     * 
    **/
    select?: JobLogsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: JobLogsInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const JobLogsScalarFieldEnum: {
    Id: 'Id',
    JobId: 'JobId',
    ExecuteTime: 'ExecuteTime',
    IsError: 'IsError',
    Error: 'Error'
  };

  export type JobLogsScalarFieldEnum = (typeof JobLogsScalarFieldEnum)[keyof typeof JobLogsScalarFieldEnum]


  export const JobParamsScalarFieldEnum: {
    Id: 'Id',
    Name: 'Name',
    Value: 'Value',
    IsDeleted: 'IsDeleted',
    JobId: 'JobId'
  };

  export type JobParamsScalarFieldEnum = (typeof JobParamsScalarFieldEnum)[keyof typeof JobParamsScalarFieldEnum]


  export const JobsScalarFieldEnum: {
    Id: 'Id',
    Name: 'Name',
    ExecuterClass: 'ExecuterClass',
    ExecuteCronTime: 'ExecuteCronTime',
    IsDeleted: 'IsDeleted',
    IsActive: 'IsActive',
    IsRunningNow: 'IsRunningNow'
  };

  export type JobsScalarFieldEnum = (typeof JobsScalarFieldEnum)[keyof typeof JobsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const VaultTypeScalarFieldEnum: {
    Id: 'Id',
    Name: 'Name',
    IsDeleted: 'IsDeleted'
  };

  export type VaultTypeScalarFieldEnum = (typeof VaultTypeScalarFieldEnum)[keyof typeof VaultTypeScalarFieldEnum]


  export const VaultValuesScalarFieldEnum: {
    Id: 'Id',
    Name: 'Name',
    Value: 'Value',
    VaultTypeId: 'VaultTypeId',
    DateOfValue: 'DateOfValue',
    IsDeleted: 'IsDeleted'
  };

  export type VaultValuesScalarFieldEnum = (typeof VaultValuesScalarFieldEnum)[keyof typeof VaultValuesScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type VaultTypeWhereInput = {
    AND?: Enumerable<VaultTypeWhereInput>
    OR?: Enumerable<VaultTypeWhereInput>
    NOT?: Enumerable<VaultTypeWhereInput>
    Id?: IntFilter | number
    Name?: StringFilter | string
    IsDeleted?: BoolFilter | boolean
    Values?: VaultValuesListRelationFilter
  }

  export type VaultTypeOrderByWithRelationInput = {
    Id?: SortOrder
    Name?: SortOrder
    IsDeleted?: SortOrder
    Values?: VaultValuesOrderByRelationAggregateInput
  }

  export type VaultTypeWhereUniqueInput = {
    Id?: number
  }

  export type VaultTypeOrderByWithAggregationInput = {
    Id?: SortOrder
    Name?: SortOrder
    IsDeleted?: SortOrder
    _count?: VaultTypeCountOrderByAggregateInput
    _avg?: VaultTypeAvgOrderByAggregateInput
    _max?: VaultTypeMaxOrderByAggregateInput
    _min?: VaultTypeMinOrderByAggregateInput
    _sum?: VaultTypeSumOrderByAggregateInput
  }

  export type VaultTypeScalarWhereWithAggregatesInput = {
    AND?: Enumerable<VaultTypeScalarWhereWithAggregatesInput>
    OR?: Enumerable<VaultTypeScalarWhereWithAggregatesInput>
    NOT?: Enumerable<VaultTypeScalarWhereWithAggregatesInput>
    Id?: IntWithAggregatesFilter | number
    Name?: StringWithAggregatesFilter | string
    IsDeleted?: BoolWithAggregatesFilter | boolean
  }

  export type VaultValuesWhereInput = {
    AND?: Enumerable<VaultValuesWhereInput>
    OR?: Enumerable<VaultValuesWhereInput>
    NOT?: Enumerable<VaultValuesWhereInput>
    Id?: IntFilter | number
    Name?: StringFilter | string
    Value?: StringFilter | string
    Type?: XOR<VaultTypeRelationFilter, VaultTypeWhereInput>
    VaultTypeId?: IntFilter | number
    DateOfValue?: DateTimeFilter | Date | string
    IsDeleted?: BoolFilter | boolean
  }

  export type VaultValuesOrderByWithRelationInput = {
    Id?: SortOrder
    Name?: SortOrder
    Value?: SortOrder
    Type?: VaultTypeOrderByWithRelationInput
    VaultTypeId?: SortOrder
    DateOfValue?: SortOrder
    IsDeleted?: SortOrder
  }

  export type VaultValuesWhereUniqueInput = {
    Id?: number
  }

  export type VaultValuesOrderByWithAggregationInput = {
    Id?: SortOrder
    Name?: SortOrder
    Value?: SortOrder
    VaultTypeId?: SortOrder
    DateOfValue?: SortOrder
    IsDeleted?: SortOrder
    _count?: VaultValuesCountOrderByAggregateInput
    _avg?: VaultValuesAvgOrderByAggregateInput
    _max?: VaultValuesMaxOrderByAggregateInput
    _min?: VaultValuesMinOrderByAggregateInput
    _sum?: VaultValuesSumOrderByAggregateInput
  }

  export type VaultValuesScalarWhereWithAggregatesInput = {
    AND?: Enumerable<VaultValuesScalarWhereWithAggregatesInput>
    OR?: Enumerable<VaultValuesScalarWhereWithAggregatesInput>
    NOT?: Enumerable<VaultValuesScalarWhereWithAggregatesInput>
    Id?: IntWithAggregatesFilter | number
    Name?: StringWithAggregatesFilter | string
    Value?: StringWithAggregatesFilter | string
    VaultTypeId?: IntWithAggregatesFilter | number
    DateOfValue?: DateTimeWithAggregatesFilter | Date | string
    IsDeleted?: BoolWithAggregatesFilter | boolean
  }

  export type JobsWhereInput = {
    AND?: Enumerable<JobsWhereInput>
    OR?: Enumerable<JobsWhereInput>
    NOT?: Enumerable<JobsWhereInput>
    Id?: IntFilter | number
    Name?: StringFilter | string
    ExecuterClass?: StringFilter | string
    ExecuteCronTime?: StringFilter | string
    IsDeleted?: BoolFilter | boolean
    IsActive?: BoolFilter | boolean
    IsRunningNow?: BoolFilter | boolean
    Params?: JobParamsListRelationFilter
    Logs?: JobLogsListRelationFilter
  }

  export type JobsOrderByWithRelationInput = {
    Id?: SortOrder
    Name?: SortOrder
    ExecuterClass?: SortOrder
    ExecuteCronTime?: SortOrder
    IsDeleted?: SortOrder
    IsActive?: SortOrder
    IsRunningNow?: SortOrder
    Params?: JobParamsOrderByRelationAggregateInput
    Logs?: JobLogsOrderByRelationAggregateInput
  }

  export type JobsWhereUniqueInput = {
    Id?: number
  }

  export type JobsOrderByWithAggregationInput = {
    Id?: SortOrder
    Name?: SortOrder
    ExecuterClass?: SortOrder
    ExecuteCronTime?: SortOrder
    IsDeleted?: SortOrder
    IsActive?: SortOrder
    IsRunningNow?: SortOrder
    _count?: JobsCountOrderByAggregateInput
    _avg?: JobsAvgOrderByAggregateInput
    _max?: JobsMaxOrderByAggregateInput
    _min?: JobsMinOrderByAggregateInput
    _sum?: JobsSumOrderByAggregateInput
  }

  export type JobsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<JobsScalarWhereWithAggregatesInput>
    OR?: Enumerable<JobsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<JobsScalarWhereWithAggregatesInput>
    Id?: IntWithAggregatesFilter | number
    Name?: StringWithAggregatesFilter | string
    ExecuterClass?: StringWithAggregatesFilter | string
    ExecuteCronTime?: StringWithAggregatesFilter | string
    IsDeleted?: BoolWithAggregatesFilter | boolean
    IsActive?: BoolWithAggregatesFilter | boolean
    IsRunningNow?: BoolWithAggregatesFilter | boolean
  }

  export type JobParamsWhereInput = {
    AND?: Enumerable<JobParamsWhereInput>
    OR?: Enumerable<JobParamsWhereInput>
    NOT?: Enumerable<JobParamsWhereInput>
    Id?: IntFilter | number
    Name?: StringFilter | string
    Value?: StringFilter | string
    IsDeleted?: BoolFilter | boolean
    Job?: XOR<JobsRelationFilter, JobsWhereInput>
    JobId?: IntFilter | number
  }

  export type JobParamsOrderByWithRelationInput = {
    Id?: SortOrder
    Name?: SortOrder
    Value?: SortOrder
    IsDeleted?: SortOrder
    Job?: JobsOrderByWithRelationInput
    JobId?: SortOrder
  }

  export type JobParamsWhereUniqueInput = {
    Id?: number
  }

  export type JobParamsOrderByWithAggregationInput = {
    Id?: SortOrder
    Name?: SortOrder
    Value?: SortOrder
    IsDeleted?: SortOrder
    JobId?: SortOrder
    _count?: JobParamsCountOrderByAggregateInput
    _avg?: JobParamsAvgOrderByAggregateInput
    _max?: JobParamsMaxOrderByAggregateInput
    _min?: JobParamsMinOrderByAggregateInput
    _sum?: JobParamsSumOrderByAggregateInput
  }

  export type JobParamsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<JobParamsScalarWhereWithAggregatesInput>
    OR?: Enumerable<JobParamsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<JobParamsScalarWhereWithAggregatesInput>
    Id?: IntWithAggregatesFilter | number
    Name?: StringWithAggregatesFilter | string
    Value?: StringWithAggregatesFilter | string
    IsDeleted?: BoolWithAggregatesFilter | boolean
    JobId?: IntWithAggregatesFilter | number
  }

  export type JobLogsWhereInput = {
    AND?: Enumerable<JobLogsWhereInput>
    OR?: Enumerable<JobLogsWhereInput>
    NOT?: Enumerable<JobLogsWhereInput>
    Id?: IntFilter | number
    Job?: XOR<JobsRelationFilter, JobsWhereInput>
    JobId?: IntFilter | number
    ExecuteTime?: DateTimeFilter | Date | string
    IsError?: BoolFilter | boolean
    Error?: StringFilter | string
  }

  export type JobLogsOrderByWithRelationInput = {
    Id?: SortOrder
    Job?: JobsOrderByWithRelationInput
    JobId?: SortOrder
    ExecuteTime?: SortOrder
    IsError?: SortOrder
    Error?: SortOrder
  }

  export type JobLogsWhereUniqueInput = {
    Id?: number
  }

  export type JobLogsOrderByWithAggregationInput = {
    Id?: SortOrder
    JobId?: SortOrder
    ExecuteTime?: SortOrder
    IsError?: SortOrder
    Error?: SortOrder
    _count?: JobLogsCountOrderByAggregateInput
    _avg?: JobLogsAvgOrderByAggregateInput
    _max?: JobLogsMaxOrderByAggregateInput
    _min?: JobLogsMinOrderByAggregateInput
    _sum?: JobLogsSumOrderByAggregateInput
  }

  export type JobLogsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<JobLogsScalarWhereWithAggregatesInput>
    OR?: Enumerable<JobLogsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<JobLogsScalarWhereWithAggregatesInput>
    Id?: IntWithAggregatesFilter | number
    JobId?: IntWithAggregatesFilter | number
    ExecuteTime?: DateTimeWithAggregatesFilter | Date | string
    IsError?: BoolWithAggregatesFilter | boolean
    Error?: StringWithAggregatesFilter | string
  }

  export type VaultTypeCreateInput = {
    Name: string
    IsDeleted?: boolean
    Values?: VaultValuesCreateNestedManyWithoutTypeInput
  }

  export type VaultTypeUncheckedCreateInput = {
    Id?: number
    Name: string
    IsDeleted?: boolean
    Values?: VaultValuesUncheckedCreateNestedManyWithoutTypeInput
  }

  export type VaultTypeUpdateInput = {
    Name?: StringFieldUpdateOperationsInput | string
    IsDeleted?: BoolFieldUpdateOperationsInput | boolean
    Values?: VaultValuesUpdateManyWithoutTypeNestedInput
  }

  export type VaultTypeUncheckedUpdateInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    IsDeleted?: BoolFieldUpdateOperationsInput | boolean
    Values?: VaultValuesUncheckedUpdateManyWithoutTypeNestedInput
  }

  export type VaultTypeUpdateManyMutationInput = {
    Name?: StringFieldUpdateOperationsInput | string
    IsDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type VaultTypeUncheckedUpdateManyInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    IsDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type VaultValuesCreateInput = {
    Name: string
    Value: string
    Type: VaultTypeCreateNestedOneWithoutValuesInput
    DateOfValue: Date | string
    IsDeleted?: boolean
  }

  export type VaultValuesUncheckedCreateInput = {
    Id?: number
    Name: string
    Value: string
    VaultTypeId: number
    DateOfValue: Date | string
    IsDeleted?: boolean
  }

  export type VaultValuesUpdateInput = {
    Name?: StringFieldUpdateOperationsInput | string
    Value?: StringFieldUpdateOperationsInput | string
    Type?: VaultTypeUpdateOneRequiredWithoutValuesNestedInput
    DateOfValue?: DateTimeFieldUpdateOperationsInput | Date | string
    IsDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type VaultValuesUncheckedUpdateInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Value?: StringFieldUpdateOperationsInput | string
    VaultTypeId?: IntFieldUpdateOperationsInput | number
    DateOfValue?: DateTimeFieldUpdateOperationsInput | Date | string
    IsDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type VaultValuesUpdateManyMutationInput = {
    Name?: StringFieldUpdateOperationsInput | string
    Value?: StringFieldUpdateOperationsInput | string
    DateOfValue?: DateTimeFieldUpdateOperationsInput | Date | string
    IsDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type VaultValuesUncheckedUpdateManyInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Value?: StringFieldUpdateOperationsInput | string
    VaultTypeId?: IntFieldUpdateOperationsInput | number
    DateOfValue?: DateTimeFieldUpdateOperationsInput | Date | string
    IsDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type JobsCreateInput = {
    Name: string
    ExecuterClass: string
    ExecuteCronTime: string
    IsDeleted?: boolean
    IsActive?: boolean
    IsRunningNow?: boolean
    Params?: JobParamsCreateNestedManyWithoutJobInput
    Logs?: JobLogsCreateNestedManyWithoutJobInput
  }

  export type JobsUncheckedCreateInput = {
    Id?: number
    Name: string
    ExecuterClass: string
    ExecuteCronTime: string
    IsDeleted?: boolean
    IsActive?: boolean
    IsRunningNow?: boolean
    Params?: JobParamsUncheckedCreateNestedManyWithoutJobInput
    Logs?: JobLogsUncheckedCreateNestedManyWithoutJobInput
  }

  export type JobsUpdateInput = {
    Name?: StringFieldUpdateOperationsInput | string
    ExecuterClass?: StringFieldUpdateOperationsInput | string
    ExecuteCronTime?: StringFieldUpdateOperationsInput | string
    IsDeleted?: BoolFieldUpdateOperationsInput | boolean
    IsActive?: BoolFieldUpdateOperationsInput | boolean
    IsRunningNow?: BoolFieldUpdateOperationsInput | boolean
    Params?: JobParamsUpdateManyWithoutJobNestedInput
    Logs?: JobLogsUpdateManyWithoutJobNestedInput
  }

  export type JobsUncheckedUpdateInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    ExecuterClass?: StringFieldUpdateOperationsInput | string
    ExecuteCronTime?: StringFieldUpdateOperationsInput | string
    IsDeleted?: BoolFieldUpdateOperationsInput | boolean
    IsActive?: BoolFieldUpdateOperationsInput | boolean
    IsRunningNow?: BoolFieldUpdateOperationsInput | boolean
    Params?: JobParamsUncheckedUpdateManyWithoutJobNestedInput
    Logs?: JobLogsUncheckedUpdateManyWithoutJobNestedInput
  }

  export type JobsUpdateManyMutationInput = {
    Name?: StringFieldUpdateOperationsInput | string
    ExecuterClass?: StringFieldUpdateOperationsInput | string
    ExecuteCronTime?: StringFieldUpdateOperationsInput | string
    IsDeleted?: BoolFieldUpdateOperationsInput | boolean
    IsActive?: BoolFieldUpdateOperationsInput | boolean
    IsRunningNow?: BoolFieldUpdateOperationsInput | boolean
  }

  export type JobsUncheckedUpdateManyInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    ExecuterClass?: StringFieldUpdateOperationsInput | string
    ExecuteCronTime?: StringFieldUpdateOperationsInput | string
    IsDeleted?: BoolFieldUpdateOperationsInput | boolean
    IsActive?: BoolFieldUpdateOperationsInput | boolean
    IsRunningNow?: BoolFieldUpdateOperationsInput | boolean
  }

  export type JobParamsCreateInput = {
    Name: string
    Value: string
    IsDeleted?: boolean
    Job: JobsCreateNestedOneWithoutParamsInput
  }

  export type JobParamsUncheckedCreateInput = {
    Id?: number
    Name: string
    Value: string
    IsDeleted?: boolean
    JobId: number
  }

  export type JobParamsUpdateInput = {
    Name?: StringFieldUpdateOperationsInput | string
    Value?: StringFieldUpdateOperationsInput | string
    IsDeleted?: BoolFieldUpdateOperationsInput | boolean
    Job?: JobsUpdateOneRequiredWithoutParamsNestedInput
  }

  export type JobParamsUncheckedUpdateInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Value?: StringFieldUpdateOperationsInput | string
    IsDeleted?: BoolFieldUpdateOperationsInput | boolean
    JobId?: IntFieldUpdateOperationsInput | number
  }

  export type JobParamsUpdateManyMutationInput = {
    Name?: StringFieldUpdateOperationsInput | string
    Value?: StringFieldUpdateOperationsInput | string
    IsDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type JobParamsUncheckedUpdateManyInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Value?: StringFieldUpdateOperationsInput | string
    IsDeleted?: BoolFieldUpdateOperationsInput | boolean
    JobId?: IntFieldUpdateOperationsInput | number
  }

  export type JobLogsCreateInput = {
    Job: JobsCreateNestedOneWithoutLogsInput
    ExecuteTime: Date | string
    IsError: boolean
    Error: string
  }

  export type JobLogsUncheckedCreateInput = {
    Id?: number
    JobId: number
    ExecuteTime: Date | string
    IsError: boolean
    Error: string
  }

  export type JobLogsUpdateInput = {
    Job?: JobsUpdateOneRequiredWithoutLogsNestedInput
    ExecuteTime?: DateTimeFieldUpdateOperationsInput | Date | string
    IsError?: BoolFieldUpdateOperationsInput | boolean
    Error?: StringFieldUpdateOperationsInput | string
  }

  export type JobLogsUncheckedUpdateInput = {
    Id?: IntFieldUpdateOperationsInput | number
    JobId?: IntFieldUpdateOperationsInput | number
    ExecuteTime?: DateTimeFieldUpdateOperationsInput | Date | string
    IsError?: BoolFieldUpdateOperationsInput | boolean
    Error?: StringFieldUpdateOperationsInput | string
  }

  export type JobLogsUpdateManyMutationInput = {
    ExecuteTime?: DateTimeFieldUpdateOperationsInput | Date | string
    IsError?: BoolFieldUpdateOperationsInput | boolean
    Error?: StringFieldUpdateOperationsInput | string
  }

  export type JobLogsUncheckedUpdateManyInput = {
    Id?: IntFieldUpdateOperationsInput | number
    JobId?: IntFieldUpdateOperationsInput | number
    ExecuteTime?: DateTimeFieldUpdateOperationsInput | Date | string
    IsError?: BoolFieldUpdateOperationsInput | boolean
    Error?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
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
    not?: NestedStringFilter | string
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type VaultValuesListRelationFilter = {
    every?: VaultValuesWhereInput
    some?: VaultValuesWhereInput
    none?: VaultValuesWhereInput
  }

  export type VaultValuesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VaultTypeCountOrderByAggregateInput = {
    Id?: SortOrder
    Name?: SortOrder
    IsDeleted?: SortOrder
  }

  export type VaultTypeAvgOrderByAggregateInput = {
    Id?: SortOrder
  }

  export type VaultTypeMaxOrderByAggregateInput = {
    Id?: SortOrder
    Name?: SortOrder
    IsDeleted?: SortOrder
  }

  export type VaultTypeMinOrderByAggregateInput = {
    Id?: SortOrder
    Name?: SortOrder
    IsDeleted?: SortOrder
  }

  export type VaultTypeSumOrderByAggregateInput = {
    Id?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
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
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type VaultTypeRelationFilter = {
    is?: VaultTypeWhereInput
    isNot?: VaultTypeWhereInput
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

  export type VaultValuesCountOrderByAggregateInput = {
    Id?: SortOrder
    Name?: SortOrder
    Value?: SortOrder
    VaultTypeId?: SortOrder
    DateOfValue?: SortOrder
    IsDeleted?: SortOrder
  }

  export type VaultValuesAvgOrderByAggregateInput = {
    Id?: SortOrder
    VaultTypeId?: SortOrder
  }

  export type VaultValuesMaxOrderByAggregateInput = {
    Id?: SortOrder
    Name?: SortOrder
    Value?: SortOrder
    VaultTypeId?: SortOrder
    DateOfValue?: SortOrder
    IsDeleted?: SortOrder
  }

  export type VaultValuesMinOrderByAggregateInput = {
    Id?: SortOrder
    Name?: SortOrder
    Value?: SortOrder
    VaultTypeId?: SortOrder
    DateOfValue?: SortOrder
    IsDeleted?: SortOrder
  }

  export type VaultValuesSumOrderByAggregateInput = {
    Id?: SortOrder
    VaultTypeId?: SortOrder
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

  export type JobParamsListRelationFilter = {
    every?: JobParamsWhereInput
    some?: JobParamsWhereInput
    none?: JobParamsWhereInput
  }

  export type JobLogsListRelationFilter = {
    every?: JobLogsWhereInput
    some?: JobLogsWhereInput
    none?: JobLogsWhereInput
  }

  export type JobParamsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type JobLogsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type JobsCountOrderByAggregateInput = {
    Id?: SortOrder
    Name?: SortOrder
    ExecuterClass?: SortOrder
    ExecuteCronTime?: SortOrder
    IsDeleted?: SortOrder
    IsActive?: SortOrder
    IsRunningNow?: SortOrder
  }

  export type JobsAvgOrderByAggregateInput = {
    Id?: SortOrder
  }

  export type JobsMaxOrderByAggregateInput = {
    Id?: SortOrder
    Name?: SortOrder
    ExecuterClass?: SortOrder
    ExecuteCronTime?: SortOrder
    IsDeleted?: SortOrder
    IsActive?: SortOrder
    IsRunningNow?: SortOrder
  }

  export type JobsMinOrderByAggregateInput = {
    Id?: SortOrder
    Name?: SortOrder
    ExecuterClass?: SortOrder
    ExecuteCronTime?: SortOrder
    IsDeleted?: SortOrder
    IsActive?: SortOrder
    IsRunningNow?: SortOrder
  }

  export type JobsSumOrderByAggregateInput = {
    Id?: SortOrder
  }

  export type JobsRelationFilter = {
    is?: JobsWhereInput
    isNot?: JobsWhereInput
  }

  export type JobParamsCountOrderByAggregateInput = {
    Id?: SortOrder
    Name?: SortOrder
    Value?: SortOrder
    IsDeleted?: SortOrder
    JobId?: SortOrder
  }

  export type JobParamsAvgOrderByAggregateInput = {
    Id?: SortOrder
    JobId?: SortOrder
  }

  export type JobParamsMaxOrderByAggregateInput = {
    Id?: SortOrder
    Name?: SortOrder
    Value?: SortOrder
    IsDeleted?: SortOrder
    JobId?: SortOrder
  }

  export type JobParamsMinOrderByAggregateInput = {
    Id?: SortOrder
    Name?: SortOrder
    Value?: SortOrder
    IsDeleted?: SortOrder
    JobId?: SortOrder
  }

  export type JobParamsSumOrderByAggregateInput = {
    Id?: SortOrder
    JobId?: SortOrder
  }

  export type JobLogsCountOrderByAggregateInput = {
    Id?: SortOrder
    JobId?: SortOrder
    ExecuteTime?: SortOrder
    IsError?: SortOrder
    Error?: SortOrder
  }

  export type JobLogsAvgOrderByAggregateInput = {
    Id?: SortOrder
    JobId?: SortOrder
  }

  export type JobLogsMaxOrderByAggregateInput = {
    Id?: SortOrder
    JobId?: SortOrder
    ExecuteTime?: SortOrder
    IsError?: SortOrder
    Error?: SortOrder
  }

  export type JobLogsMinOrderByAggregateInput = {
    Id?: SortOrder
    JobId?: SortOrder
    ExecuteTime?: SortOrder
    IsError?: SortOrder
    Error?: SortOrder
  }

  export type JobLogsSumOrderByAggregateInput = {
    Id?: SortOrder
    JobId?: SortOrder
  }

  export type VaultValuesCreateNestedManyWithoutTypeInput = {
    create?: XOR<Enumerable<VaultValuesCreateWithoutTypeInput>, Enumerable<VaultValuesUncheckedCreateWithoutTypeInput>>
    connectOrCreate?: Enumerable<VaultValuesCreateOrConnectWithoutTypeInput>
    connect?: Enumerable<VaultValuesWhereUniqueInput>
  }

  export type VaultValuesUncheckedCreateNestedManyWithoutTypeInput = {
    create?: XOR<Enumerable<VaultValuesCreateWithoutTypeInput>, Enumerable<VaultValuesUncheckedCreateWithoutTypeInput>>
    connectOrCreate?: Enumerable<VaultValuesCreateOrConnectWithoutTypeInput>
    connect?: Enumerable<VaultValuesWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type VaultValuesUpdateManyWithoutTypeNestedInput = {
    create?: XOR<Enumerable<VaultValuesCreateWithoutTypeInput>, Enumerable<VaultValuesUncheckedCreateWithoutTypeInput>>
    connectOrCreate?: Enumerable<VaultValuesCreateOrConnectWithoutTypeInput>
    upsert?: Enumerable<VaultValuesUpsertWithWhereUniqueWithoutTypeInput>
    set?: Enumerable<VaultValuesWhereUniqueInput>
    disconnect?: Enumerable<VaultValuesWhereUniqueInput>
    delete?: Enumerable<VaultValuesWhereUniqueInput>
    connect?: Enumerable<VaultValuesWhereUniqueInput>
    update?: Enumerable<VaultValuesUpdateWithWhereUniqueWithoutTypeInput>
    updateMany?: Enumerable<VaultValuesUpdateManyWithWhereWithoutTypeInput>
    deleteMany?: Enumerable<VaultValuesScalarWhereInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type VaultValuesUncheckedUpdateManyWithoutTypeNestedInput = {
    create?: XOR<Enumerable<VaultValuesCreateWithoutTypeInput>, Enumerable<VaultValuesUncheckedCreateWithoutTypeInput>>
    connectOrCreate?: Enumerable<VaultValuesCreateOrConnectWithoutTypeInput>
    upsert?: Enumerable<VaultValuesUpsertWithWhereUniqueWithoutTypeInput>
    set?: Enumerable<VaultValuesWhereUniqueInput>
    disconnect?: Enumerable<VaultValuesWhereUniqueInput>
    delete?: Enumerable<VaultValuesWhereUniqueInput>
    connect?: Enumerable<VaultValuesWhereUniqueInput>
    update?: Enumerable<VaultValuesUpdateWithWhereUniqueWithoutTypeInput>
    updateMany?: Enumerable<VaultValuesUpdateManyWithWhereWithoutTypeInput>
    deleteMany?: Enumerable<VaultValuesScalarWhereInput>
  }

  export type VaultTypeCreateNestedOneWithoutValuesInput = {
    create?: XOR<VaultTypeCreateWithoutValuesInput, VaultTypeUncheckedCreateWithoutValuesInput>
    connectOrCreate?: VaultTypeCreateOrConnectWithoutValuesInput
    connect?: VaultTypeWhereUniqueInput
  }

  export type VaultTypeUpdateOneRequiredWithoutValuesNestedInput = {
    create?: XOR<VaultTypeCreateWithoutValuesInput, VaultTypeUncheckedCreateWithoutValuesInput>
    connectOrCreate?: VaultTypeCreateOrConnectWithoutValuesInput
    upsert?: VaultTypeUpsertWithoutValuesInput
    connect?: VaultTypeWhereUniqueInput
    update?: XOR<VaultTypeUpdateWithoutValuesInput, VaultTypeUncheckedUpdateWithoutValuesInput>
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type JobParamsCreateNestedManyWithoutJobInput = {
    create?: XOR<Enumerable<JobParamsCreateWithoutJobInput>, Enumerable<JobParamsUncheckedCreateWithoutJobInput>>
    connectOrCreate?: Enumerable<JobParamsCreateOrConnectWithoutJobInput>
    connect?: Enumerable<JobParamsWhereUniqueInput>
  }

  export type JobLogsCreateNestedManyWithoutJobInput = {
    create?: XOR<Enumerable<JobLogsCreateWithoutJobInput>, Enumerable<JobLogsUncheckedCreateWithoutJobInput>>
    connectOrCreate?: Enumerable<JobLogsCreateOrConnectWithoutJobInput>
    connect?: Enumerable<JobLogsWhereUniqueInput>
  }

  export type JobParamsUncheckedCreateNestedManyWithoutJobInput = {
    create?: XOR<Enumerable<JobParamsCreateWithoutJobInput>, Enumerable<JobParamsUncheckedCreateWithoutJobInput>>
    connectOrCreate?: Enumerable<JobParamsCreateOrConnectWithoutJobInput>
    connect?: Enumerable<JobParamsWhereUniqueInput>
  }

  export type JobLogsUncheckedCreateNestedManyWithoutJobInput = {
    create?: XOR<Enumerable<JobLogsCreateWithoutJobInput>, Enumerable<JobLogsUncheckedCreateWithoutJobInput>>
    connectOrCreate?: Enumerable<JobLogsCreateOrConnectWithoutJobInput>
    connect?: Enumerable<JobLogsWhereUniqueInput>
  }

  export type JobParamsUpdateManyWithoutJobNestedInput = {
    create?: XOR<Enumerable<JobParamsCreateWithoutJobInput>, Enumerable<JobParamsUncheckedCreateWithoutJobInput>>
    connectOrCreate?: Enumerable<JobParamsCreateOrConnectWithoutJobInput>
    upsert?: Enumerable<JobParamsUpsertWithWhereUniqueWithoutJobInput>
    set?: Enumerable<JobParamsWhereUniqueInput>
    disconnect?: Enumerable<JobParamsWhereUniqueInput>
    delete?: Enumerable<JobParamsWhereUniqueInput>
    connect?: Enumerable<JobParamsWhereUniqueInput>
    update?: Enumerable<JobParamsUpdateWithWhereUniqueWithoutJobInput>
    updateMany?: Enumerable<JobParamsUpdateManyWithWhereWithoutJobInput>
    deleteMany?: Enumerable<JobParamsScalarWhereInput>
  }

  export type JobLogsUpdateManyWithoutJobNestedInput = {
    create?: XOR<Enumerable<JobLogsCreateWithoutJobInput>, Enumerable<JobLogsUncheckedCreateWithoutJobInput>>
    connectOrCreate?: Enumerable<JobLogsCreateOrConnectWithoutJobInput>
    upsert?: Enumerable<JobLogsUpsertWithWhereUniqueWithoutJobInput>
    set?: Enumerable<JobLogsWhereUniqueInput>
    disconnect?: Enumerable<JobLogsWhereUniqueInput>
    delete?: Enumerable<JobLogsWhereUniqueInput>
    connect?: Enumerable<JobLogsWhereUniqueInput>
    update?: Enumerable<JobLogsUpdateWithWhereUniqueWithoutJobInput>
    updateMany?: Enumerable<JobLogsUpdateManyWithWhereWithoutJobInput>
    deleteMany?: Enumerable<JobLogsScalarWhereInput>
  }

  export type JobParamsUncheckedUpdateManyWithoutJobNestedInput = {
    create?: XOR<Enumerable<JobParamsCreateWithoutJobInput>, Enumerable<JobParamsUncheckedCreateWithoutJobInput>>
    connectOrCreate?: Enumerable<JobParamsCreateOrConnectWithoutJobInput>
    upsert?: Enumerable<JobParamsUpsertWithWhereUniqueWithoutJobInput>
    set?: Enumerable<JobParamsWhereUniqueInput>
    disconnect?: Enumerable<JobParamsWhereUniqueInput>
    delete?: Enumerable<JobParamsWhereUniqueInput>
    connect?: Enumerable<JobParamsWhereUniqueInput>
    update?: Enumerable<JobParamsUpdateWithWhereUniqueWithoutJobInput>
    updateMany?: Enumerable<JobParamsUpdateManyWithWhereWithoutJobInput>
    deleteMany?: Enumerable<JobParamsScalarWhereInput>
  }

  export type JobLogsUncheckedUpdateManyWithoutJobNestedInput = {
    create?: XOR<Enumerable<JobLogsCreateWithoutJobInput>, Enumerable<JobLogsUncheckedCreateWithoutJobInput>>
    connectOrCreate?: Enumerable<JobLogsCreateOrConnectWithoutJobInput>
    upsert?: Enumerable<JobLogsUpsertWithWhereUniqueWithoutJobInput>
    set?: Enumerable<JobLogsWhereUniqueInput>
    disconnect?: Enumerable<JobLogsWhereUniqueInput>
    delete?: Enumerable<JobLogsWhereUniqueInput>
    connect?: Enumerable<JobLogsWhereUniqueInput>
    update?: Enumerable<JobLogsUpdateWithWhereUniqueWithoutJobInput>
    updateMany?: Enumerable<JobLogsUpdateManyWithWhereWithoutJobInput>
    deleteMany?: Enumerable<JobLogsScalarWhereInput>
  }

  export type JobsCreateNestedOneWithoutParamsInput = {
    create?: XOR<JobsCreateWithoutParamsInput, JobsUncheckedCreateWithoutParamsInput>
    connectOrCreate?: JobsCreateOrConnectWithoutParamsInput
    connect?: JobsWhereUniqueInput
  }

  export type JobsUpdateOneRequiredWithoutParamsNestedInput = {
    create?: XOR<JobsCreateWithoutParamsInput, JobsUncheckedCreateWithoutParamsInput>
    connectOrCreate?: JobsCreateOrConnectWithoutParamsInput
    upsert?: JobsUpsertWithoutParamsInput
    connect?: JobsWhereUniqueInput
    update?: XOR<JobsUpdateWithoutParamsInput, JobsUncheckedUpdateWithoutParamsInput>
  }

  export type JobsCreateNestedOneWithoutLogsInput = {
    create?: XOR<JobsCreateWithoutLogsInput, JobsUncheckedCreateWithoutLogsInput>
    connectOrCreate?: JobsCreateOrConnectWithoutLogsInput
    connect?: JobsWhereUniqueInput
  }

  export type JobsUpdateOneRequiredWithoutLogsNestedInput = {
    create?: XOR<JobsCreateWithoutLogsInput, JobsUncheckedCreateWithoutLogsInput>
    connectOrCreate?: JobsCreateOrConnectWithoutLogsInput
    upsert?: JobsUpsertWithoutLogsInput
    connect?: JobsWhereUniqueInput
    update?: XOR<JobsUpdateWithoutLogsInput, JobsUncheckedUpdateWithoutLogsInput>
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

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
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

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
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

  export type VaultValuesCreateWithoutTypeInput = {
    Name: string
    Value: string
    DateOfValue: Date | string
    IsDeleted?: boolean
  }

  export type VaultValuesUncheckedCreateWithoutTypeInput = {
    Id?: number
    Name: string
    Value: string
    DateOfValue: Date | string
    IsDeleted?: boolean
  }

  export type VaultValuesCreateOrConnectWithoutTypeInput = {
    where: VaultValuesWhereUniqueInput
    create: XOR<VaultValuesCreateWithoutTypeInput, VaultValuesUncheckedCreateWithoutTypeInput>
  }

  export type VaultValuesUpsertWithWhereUniqueWithoutTypeInput = {
    where: VaultValuesWhereUniqueInput
    update: XOR<VaultValuesUpdateWithoutTypeInput, VaultValuesUncheckedUpdateWithoutTypeInput>
    create: XOR<VaultValuesCreateWithoutTypeInput, VaultValuesUncheckedCreateWithoutTypeInput>
  }

  export type VaultValuesUpdateWithWhereUniqueWithoutTypeInput = {
    where: VaultValuesWhereUniqueInput
    data: XOR<VaultValuesUpdateWithoutTypeInput, VaultValuesUncheckedUpdateWithoutTypeInput>
  }

  export type VaultValuesUpdateManyWithWhereWithoutTypeInput = {
    where: VaultValuesScalarWhereInput
    data: XOR<VaultValuesUpdateManyMutationInput, VaultValuesUncheckedUpdateManyWithoutValuesInput>
  }

  export type VaultValuesScalarWhereInput = {
    AND?: Enumerable<VaultValuesScalarWhereInput>
    OR?: Enumerable<VaultValuesScalarWhereInput>
    NOT?: Enumerable<VaultValuesScalarWhereInput>
    Id?: IntFilter | number
    Name?: StringFilter | string
    Value?: StringFilter | string
    VaultTypeId?: IntFilter | number
    DateOfValue?: DateTimeFilter | Date | string
    IsDeleted?: BoolFilter | boolean
  }

  export type VaultTypeCreateWithoutValuesInput = {
    Name: string
    IsDeleted?: boolean
  }

  export type VaultTypeUncheckedCreateWithoutValuesInput = {
    Id?: number
    Name: string
    IsDeleted?: boolean
  }

  export type VaultTypeCreateOrConnectWithoutValuesInput = {
    where: VaultTypeWhereUniqueInput
    create: XOR<VaultTypeCreateWithoutValuesInput, VaultTypeUncheckedCreateWithoutValuesInput>
  }

  export type VaultTypeUpsertWithoutValuesInput = {
    update: XOR<VaultTypeUpdateWithoutValuesInput, VaultTypeUncheckedUpdateWithoutValuesInput>
    create: XOR<VaultTypeCreateWithoutValuesInput, VaultTypeUncheckedCreateWithoutValuesInput>
  }

  export type VaultTypeUpdateWithoutValuesInput = {
    Name?: StringFieldUpdateOperationsInput | string
    IsDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type VaultTypeUncheckedUpdateWithoutValuesInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    IsDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type JobParamsCreateWithoutJobInput = {
    Name: string
    Value: string
    IsDeleted?: boolean
  }

  export type JobParamsUncheckedCreateWithoutJobInput = {
    Id?: number
    Name: string
    Value: string
    IsDeleted?: boolean
  }

  export type JobParamsCreateOrConnectWithoutJobInput = {
    where: JobParamsWhereUniqueInput
    create: XOR<JobParamsCreateWithoutJobInput, JobParamsUncheckedCreateWithoutJobInput>
  }

  export type JobLogsCreateWithoutJobInput = {
    ExecuteTime: Date | string
    IsError: boolean
    Error: string
  }

  export type JobLogsUncheckedCreateWithoutJobInput = {
    Id?: number
    ExecuteTime: Date | string
    IsError: boolean
    Error: string
  }

  export type JobLogsCreateOrConnectWithoutJobInput = {
    where: JobLogsWhereUniqueInput
    create: XOR<JobLogsCreateWithoutJobInput, JobLogsUncheckedCreateWithoutJobInput>
  }

  export type JobParamsUpsertWithWhereUniqueWithoutJobInput = {
    where: JobParamsWhereUniqueInput
    update: XOR<JobParamsUpdateWithoutJobInput, JobParamsUncheckedUpdateWithoutJobInput>
    create: XOR<JobParamsCreateWithoutJobInput, JobParamsUncheckedCreateWithoutJobInput>
  }

  export type JobParamsUpdateWithWhereUniqueWithoutJobInput = {
    where: JobParamsWhereUniqueInput
    data: XOR<JobParamsUpdateWithoutJobInput, JobParamsUncheckedUpdateWithoutJobInput>
  }

  export type JobParamsUpdateManyWithWhereWithoutJobInput = {
    where: JobParamsScalarWhereInput
    data: XOR<JobParamsUpdateManyMutationInput, JobParamsUncheckedUpdateManyWithoutParamsInput>
  }

  export type JobParamsScalarWhereInput = {
    AND?: Enumerable<JobParamsScalarWhereInput>
    OR?: Enumerable<JobParamsScalarWhereInput>
    NOT?: Enumerable<JobParamsScalarWhereInput>
    Id?: IntFilter | number
    Name?: StringFilter | string
    Value?: StringFilter | string
    IsDeleted?: BoolFilter | boolean
    JobId?: IntFilter | number
  }

  export type JobLogsUpsertWithWhereUniqueWithoutJobInput = {
    where: JobLogsWhereUniqueInput
    update: XOR<JobLogsUpdateWithoutJobInput, JobLogsUncheckedUpdateWithoutJobInput>
    create: XOR<JobLogsCreateWithoutJobInput, JobLogsUncheckedCreateWithoutJobInput>
  }

  export type JobLogsUpdateWithWhereUniqueWithoutJobInput = {
    where: JobLogsWhereUniqueInput
    data: XOR<JobLogsUpdateWithoutJobInput, JobLogsUncheckedUpdateWithoutJobInput>
  }

  export type JobLogsUpdateManyWithWhereWithoutJobInput = {
    where: JobLogsScalarWhereInput
    data: XOR<JobLogsUpdateManyMutationInput, JobLogsUncheckedUpdateManyWithoutLogsInput>
  }

  export type JobLogsScalarWhereInput = {
    AND?: Enumerable<JobLogsScalarWhereInput>
    OR?: Enumerable<JobLogsScalarWhereInput>
    NOT?: Enumerable<JobLogsScalarWhereInput>
    Id?: IntFilter | number
    JobId?: IntFilter | number
    ExecuteTime?: DateTimeFilter | Date | string
    IsError?: BoolFilter | boolean
    Error?: StringFilter | string
  }

  export type JobsCreateWithoutParamsInput = {
    Name: string
    ExecuterClass: string
    ExecuteCronTime: string
    IsDeleted?: boolean
    IsActive?: boolean
    IsRunningNow?: boolean
    Logs?: JobLogsCreateNestedManyWithoutJobInput
  }

  export type JobsUncheckedCreateWithoutParamsInput = {
    Id?: number
    Name: string
    ExecuterClass: string
    ExecuteCronTime: string
    IsDeleted?: boolean
    IsActive?: boolean
    IsRunningNow?: boolean
    Logs?: JobLogsUncheckedCreateNestedManyWithoutJobInput
  }

  export type JobsCreateOrConnectWithoutParamsInput = {
    where: JobsWhereUniqueInput
    create: XOR<JobsCreateWithoutParamsInput, JobsUncheckedCreateWithoutParamsInput>
  }

  export type JobsUpsertWithoutParamsInput = {
    update: XOR<JobsUpdateWithoutParamsInput, JobsUncheckedUpdateWithoutParamsInput>
    create: XOR<JobsCreateWithoutParamsInput, JobsUncheckedCreateWithoutParamsInput>
  }

  export type JobsUpdateWithoutParamsInput = {
    Name?: StringFieldUpdateOperationsInput | string
    ExecuterClass?: StringFieldUpdateOperationsInput | string
    ExecuteCronTime?: StringFieldUpdateOperationsInput | string
    IsDeleted?: BoolFieldUpdateOperationsInput | boolean
    IsActive?: BoolFieldUpdateOperationsInput | boolean
    IsRunningNow?: BoolFieldUpdateOperationsInput | boolean
    Logs?: JobLogsUpdateManyWithoutJobNestedInput
  }

  export type JobsUncheckedUpdateWithoutParamsInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    ExecuterClass?: StringFieldUpdateOperationsInput | string
    ExecuteCronTime?: StringFieldUpdateOperationsInput | string
    IsDeleted?: BoolFieldUpdateOperationsInput | boolean
    IsActive?: BoolFieldUpdateOperationsInput | boolean
    IsRunningNow?: BoolFieldUpdateOperationsInput | boolean
    Logs?: JobLogsUncheckedUpdateManyWithoutJobNestedInput
  }

  export type JobsCreateWithoutLogsInput = {
    Name: string
    ExecuterClass: string
    ExecuteCronTime: string
    IsDeleted?: boolean
    IsActive?: boolean
    IsRunningNow?: boolean
    Params?: JobParamsCreateNestedManyWithoutJobInput
  }

  export type JobsUncheckedCreateWithoutLogsInput = {
    Id?: number
    Name: string
    ExecuterClass: string
    ExecuteCronTime: string
    IsDeleted?: boolean
    IsActive?: boolean
    IsRunningNow?: boolean
    Params?: JobParamsUncheckedCreateNestedManyWithoutJobInput
  }

  export type JobsCreateOrConnectWithoutLogsInput = {
    where: JobsWhereUniqueInput
    create: XOR<JobsCreateWithoutLogsInput, JobsUncheckedCreateWithoutLogsInput>
  }

  export type JobsUpsertWithoutLogsInput = {
    update: XOR<JobsUpdateWithoutLogsInput, JobsUncheckedUpdateWithoutLogsInput>
    create: XOR<JobsCreateWithoutLogsInput, JobsUncheckedCreateWithoutLogsInput>
  }

  export type JobsUpdateWithoutLogsInput = {
    Name?: StringFieldUpdateOperationsInput | string
    ExecuterClass?: StringFieldUpdateOperationsInput | string
    ExecuteCronTime?: StringFieldUpdateOperationsInput | string
    IsDeleted?: BoolFieldUpdateOperationsInput | boolean
    IsActive?: BoolFieldUpdateOperationsInput | boolean
    IsRunningNow?: BoolFieldUpdateOperationsInput | boolean
    Params?: JobParamsUpdateManyWithoutJobNestedInput
  }

  export type JobsUncheckedUpdateWithoutLogsInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    ExecuterClass?: StringFieldUpdateOperationsInput | string
    ExecuteCronTime?: StringFieldUpdateOperationsInput | string
    IsDeleted?: BoolFieldUpdateOperationsInput | boolean
    IsActive?: BoolFieldUpdateOperationsInput | boolean
    IsRunningNow?: BoolFieldUpdateOperationsInput | boolean
    Params?: JobParamsUncheckedUpdateManyWithoutJobNestedInput
  }

  export type VaultValuesUpdateWithoutTypeInput = {
    Name?: StringFieldUpdateOperationsInput | string
    Value?: StringFieldUpdateOperationsInput | string
    DateOfValue?: DateTimeFieldUpdateOperationsInput | Date | string
    IsDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type VaultValuesUncheckedUpdateWithoutTypeInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Value?: StringFieldUpdateOperationsInput | string
    DateOfValue?: DateTimeFieldUpdateOperationsInput | Date | string
    IsDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type VaultValuesUncheckedUpdateManyWithoutValuesInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Value?: StringFieldUpdateOperationsInput | string
    DateOfValue?: DateTimeFieldUpdateOperationsInput | Date | string
    IsDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type JobParamsUpdateWithoutJobInput = {
    Name?: StringFieldUpdateOperationsInput | string
    Value?: StringFieldUpdateOperationsInput | string
    IsDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type JobParamsUncheckedUpdateWithoutJobInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Value?: StringFieldUpdateOperationsInput | string
    IsDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type JobParamsUncheckedUpdateManyWithoutParamsInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Value?: StringFieldUpdateOperationsInput | string
    IsDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type JobLogsUpdateWithoutJobInput = {
    ExecuteTime?: DateTimeFieldUpdateOperationsInput | Date | string
    IsError?: BoolFieldUpdateOperationsInput | boolean
    Error?: StringFieldUpdateOperationsInput | string
  }

  export type JobLogsUncheckedUpdateWithoutJobInput = {
    Id?: IntFieldUpdateOperationsInput | number
    ExecuteTime?: DateTimeFieldUpdateOperationsInput | Date | string
    IsError?: BoolFieldUpdateOperationsInput | boolean
    Error?: StringFieldUpdateOperationsInput | string
  }

  export type JobLogsUncheckedUpdateManyWithoutLogsInput = {
    Id?: IntFieldUpdateOperationsInput | number
    ExecuteTime?: DateTimeFieldUpdateOperationsInput | Date | string
    IsError?: BoolFieldUpdateOperationsInput | boolean
    Error?: StringFieldUpdateOperationsInput | string
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