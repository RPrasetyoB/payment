
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  detectRuntime,
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.10.2
 * Query Engine version: 5a9203d0590c951969e85a7d07215503f4672eb9
 */
Prisma.prismaVersion = {
  client: "5.10.2",
  engine: "5a9203d0590c951969e85a7d07215503f4672eb9"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  throw new Error(`Extensions.getExtensionContext is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  throw new Error(`Extensions.defineExtension is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UsersScalarFieldEnum = {
  id: 'id',
  role_id: 'role_id',
  username: 'username',
  password: 'password',
  created_date: 'created_date'
};

exports.Prisma.FishesScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  type_id: 'type_id',
  event_id: 'event_id',
  name: 'name',
  price: 'price',
  price_usd: 'price_usd',
  gender: 'gender',
  size: 'size',
  images1: 'images1',
  images2: 'images2',
  images3: 'images3',
  videoURL: 'videoURL',
  isAvailable: 'isAvailable',
  isEvent: 'isEvent',
  isNewArrival: 'isNewArrival',
  created_date: 'created_date'
};

exports.Prisma.Schedule_shipsScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  scheduleName: 'scheduleName',
  scheduleImage: 'scheduleImage',
  scheduleDescription: 'scheduleDescription',
  created_date: 'created_date'
};

exports.Prisma.TypesScalarFieldEnum = {
  id: 'id',
  name: 'name',
  created_date: 'created_date'
};

exports.Prisma.Coupon_discountScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  discountCode: 'discountCode',
  discountMinTransaction_idr: 'discountMinTransaction_idr',
  discountMinTransaction_usd: 'discountMinTransaction_usd',
  discountMinTransaction_fish: 'discountMinTransaction_fish',
  discountPercentage: 'discountPercentage',
  discountMaxPrice_idr: 'discountMaxPrice_idr',
  discountMaxPrice_usd: 'discountMaxPrice_usd',
  expirationDate: 'expirationDate',
  created_date: 'created_date'
};

exports.Prisma.EventsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  created_date: 'created_date'
};

exports.Prisma.Discounted_fishScalarFieldEnum = {
  id: 'id',
  fish_id: 'fish_id',
  isDiscount: 'isDiscount',
  discountPercentage: 'discountPercentage',
  discountPriceIdr: 'discountPriceIdr',
  discountPriceUsd: 'discountPriceUsd',
  created_date: 'created_date'
};

exports.Prisma.RolesScalarFieldEnum = {
  id: 'id',
  name: 'name',
  created_date: 'created_date'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  Users: 'Users',
  Fishes: 'Fishes',
  Schedule_ships: 'Schedule_ships',
  Types: 'Types',
  Coupon_discount: 'Coupon_discount',
  Events: 'Events',
  Discounted_fish: 'Discounted_fish',
  Roles: 'Roles'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        const runtime = detectRuntime()
        const edgeRuntimeName = {
          'workerd': 'Cloudflare Workers',
          'deno': 'Deno and Deno Deploy',
          'netlify': 'Netlify Edge Functions',
          'edge-light': 'Vercel Edge Functions or Edge Middleware',
        }[runtime]

        let message = 'PrismaClient is unable to run in '
        if (edgeRuntimeName !== undefined) {
          message += edgeRuntimeName + '. As an alternative, try Accelerate: https://pris.ly/d/accelerate.'
        } else {
          message += 'this browser environment, or has been bundled for the browser (running in `' + runtime + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
