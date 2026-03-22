import { server } from "fumadocs-mdx/runtime/server";
import * as __fd_glob_13 from "../content/docs/(commands)/about.mdx?collection=docs";
import * as __fd_glob_14 from "../content/docs/(commands)/add.mdx?collection=docs";
import * as __fd_glob_15 from "../content/docs/(commands)/attendance.mdx?collection=docs";
import * as __fd_glob_16 from "../content/docs/(commands)/characters.mdx?collection=docs";
import * as __fd_glob_17 from "../content/docs/(commands)/data.mdx?collection=docs";
import * as __fd_glob_18 from "../content/docs/(commands)/development.mdx?collection=docs";
import * as __fd_glob_19 from "../content/docs/(commands)/enka.mdx?collection=docs";
import * as __fd_glob_20 from "../content/docs/(commands)/events.mdx?collection=docs";
import * as __fd_glob_21 from "../content/docs/(commands)/exploration.mdx?collection=docs";
import { default as __fd_glob_1 } from "../content/docs/(commands)/meta.json?collection=docs";
import * as __fd_glob_22 from "../content/docs/(commands)/profile.mdx?collection=docs";
import * as __fd_glob_23 from "../content/docs/(commands)/redeem.mdx?collection=docs";
import * as __fd_glob_24 from "../content/docs/(commands)/settings.mdx?collection=docs";
// @ts-nocheck
import * as __fd_glob_25 from "../content/docs/(commands)/survey.mdx?collection=docs";
import * as __fd_glob_8 from "../content/docs/(guides)/faq.mdx?collection=docs";
import * as __fd_glob_9 from "../content/docs/(guides)/getting-skport-cookies.mdx?collection=docs";
import * as __fd_glob_10 from "../content/docs/(guides)/inviting-the-bot.mdx?collection=docs";
import { default as __fd_glob_2 } from "../content/docs/(guides)/meta.json?collection=docs";
import { default as __fd_glob_3 } from "../content/docs/(information)/meta.json?collection=docs";
import * as __fd_glob_11 from "../content/docs/(information)/privacy-policy.mdx?collection=docs";
import * as __fd_glob_12 from "../content/docs/(information)/terms-of-service.mdx?collection=docs";
import * as __fd_glob_4 from "../content/docs/available-commands.mdx?collection=docs";
import * as __fd_glob_5 from "../content/docs/changelog.mdx?collection=docs";
import * as __fd_glob_6 from "../content/docs/index.mdx?collection=docs";
import { default as __fd_glob_0 } from "../content/docs/meta.json?collection=docs";
import * as __fd_glob_7 from "../content/docs/what-is-endvoyant.mdx?collection=docs";
import type * as Config from "../source.config";

const create = server<
  typeof Config,
  import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
    DocData: {};
  } & {
    DocData: {
      docs: {
        /**
         * Last modified date of document file, obtained from version control.
         *
         */
        lastModified?: Date;
      };
    };
  }
>({ doc: { passthroughs: ["extractedReferences", "lastModified"] } });

export const docs = await create.docs(
  "docs",
  "content/docs",
  {
    "meta.json": __fd_glob_0,
    "(commands)/meta.json": __fd_glob_1,
    "(guides)/meta.json": __fd_glob_2,
    "(information)/meta.json": __fd_glob_3,
  },
  {
    "available-commands.mdx": __fd_glob_4,
    "changelog.mdx": __fd_glob_5,
    "index.mdx": __fd_glob_6,
    "what-is-endvoyant.mdx": __fd_glob_7,
    "(guides)/faq.mdx": __fd_glob_8,
    "(guides)/getting-skport-cookies.mdx": __fd_glob_9,
    "(guides)/inviting-the-bot.mdx": __fd_glob_10,
    "(information)/privacy-policy.mdx": __fd_glob_11,
    "(information)/terms-of-service.mdx": __fd_glob_12,
    "(commands)/about.mdx": __fd_glob_13,
    "(commands)/add.mdx": __fd_glob_14,
    "(commands)/attendance.mdx": __fd_glob_15,
    "(commands)/characters.mdx": __fd_glob_16,
    "(commands)/data.mdx": __fd_glob_17,
    "(commands)/development.mdx": __fd_glob_18,
    "(commands)/enka.mdx": __fd_glob_19,
    "(commands)/events.mdx": __fd_glob_20,
    "(commands)/exploration.mdx": __fd_glob_21,
    "(commands)/profile.mdx": __fd_glob_22,
    "(commands)/redeem.mdx": __fd_glob_23,
    "(commands)/settings.mdx": __fd_glob_24,
    "(commands)/survey.mdx": __fd_glob_25,
  },
);
