// @ts-nocheck
import { browser } from "fumadocs-mdx/runtime/browser";
import type * as Config from "../source.config";

const create = browser<
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
>();
const browserCollections = {
  docs: create.doc("docs", {
    "changelog.mdx": () => import("../content/docs/changelog.mdx?collection=docs"),
    "index.mdx": () => import("../content/docs/index.mdx?collection=docs"),
    "what-is-endvoyant.mdx": () => import("../content/docs/what-is-endvoyant.mdx?collection=docs"),
    "(commands)/about.mdx": () => import("../content/docs/(commands)/about.mdx?collection=docs"),
    "(guides)/faq.mdx": () => import("../content/docs/(guides)/faq.mdx?collection=docs"),
    "(information)/privacy-policy.mdx": () =>
      import("../content/docs/(information)/privacy-policy.mdx?collection=docs"),
    "(information)/terms-of-service.mdx": () =>
      import("../content/docs/(information)/terms-of-service.mdx?collection=docs"),
  }),
};
export default browserCollections;
