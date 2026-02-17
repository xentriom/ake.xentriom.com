import { server } from "fumadocs-mdx/runtime/server";
import * as __fd_glob_7 from "../content/docs/(commands)/about.mdx?collection=docs";
import { default as __fd_glob_1 } from "../content/docs/(commands)/meta.json?collection=docs";
import * as __fd_glob_8 from "../content/docs/(guides)/faq.mdx?collection=docs";
import { default as __fd_glob_2 } from "../content/docs/(guides)/meta.json?collection=docs";
import { default as __fd_glob_3 } from "../content/docs/(information)/meta.json?collection=docs";
import * as __fd_glob_9 from "../content/docs/(information)/privacy-policy.mdx?collection=docs";
// @ts-nocheck
import * as __fd_glob_10 from "../content/docs/(information)/terms-of-service.mdx?collection=docs";
import * as __fd_glob_4 from "../content/docs/changelog.mdx?collection=docs";
import * as __fd_glob_5 from "../content/docs/index.mdx?collection=docs";
import { default as __fd_glob_0 } from "../content/docs/meta.json?collection=docs";
import * as __fd_glob_6 from "../content/docs/what-is-endvoyant.mdx?collection=docs";
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
    "changelog.mdx": __fd_glob_4,
    "index.mdx": __fd_glob_5,
    "what-is-endvoyant.mdx": __fd_glob_6,
    "(commands)/about.mdx": __fd_glob_7,
    "(guides)/faq.mdx": __fd_glob_8,
    "(information)/privacy-policy.mdx": __fd_glob_9,
    "(information)/terms-of-service.mdx": __fd_glob_10,
  },
);
