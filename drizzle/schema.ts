import { sql } from "drizzle-orm";
import {
  pgTable,
  foreignKey,
  uuid,
  text,
  timestamp,
  boolean,
  unique,
  bigint,
  jsonb,
} from "drizzle-orm/pg-core";

export const efCodes = pgTable(
  "ef_codes",
  {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    id: bigint({ mode: "number" }).primaryKey().generatedByDefaultAsIdentity({
      name: "ef_codes_id_seq",
      startWith: 1,
      increment: 1,
      minValue: 1,
      maxValue: 9223372036854775807,
      cache: 1,
    }),
    code: text().notNull(),
    rewards: text().array(),
    notes: text().array(),
  },
  (table) => [unique("ef_codes_code_key").on(table.code)],
);
