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
    "available-commands.mdx": () =>
      import("../content/docs/available-commands.mdx?collection=docs"),
    "changelog.mdx": () => import("../content/docs/changelog.mdx?collection=docs"),
    "index.mdx": () => import("../content/docs/index.mdx?collection=docs"),
    "what-is-endvoyant.mdx": () => import("../content/docs/what-is-endvoyant.mdx?collection=docs"),
    "(guides)/faq.mdx": () => import("../content/docs/(guides)/faq.mdx?collection=docs"),
    "(guides)/getting-skport-cookies.mdx": () =>
      import("../content/docs/(guides)/getting-skport-cookies.mdx?collection=docs"),
    "(guides)/inviting-the-bot.mdx": () =>
      import("../content/docs/(guides)/inviting-the-bot.mdx?collection=docs"),
    "(information)/privacy-policy.mdx": () =>
      import("../content/docs/(information)/privacy-policy.mdx?collection=docs"),
    "(information)/terms-of-service.mdx": () =>
      import("../content/docs/(information)/terms-of-service.mdx?collection=docs"),
    "(commands)/about.mdx": () => import("../content/docs/(commands)/about.mdx?collection=docs"),
    "(commands)/add.mdx": () => import("../content/docs/(commands)/add.mdx?collection=docs"),
    "(commands)/attendance.mdx": () =>
      import("../content/docs/(commands)/attendance.mdx?collection=docs"),
    "(commands)/characters.mdx": () =>
      import("../content/docs/(commands)/characters.mdx?collection=docs"),
    "(commands)/data.mdx": () => import("../content/docs/(commands)/data.mdx?collection=docs"),
    "(commands)/development.mdx": () =>
      import("../content/docs/(commands)/development.mdx?collection=docs"),
    "(commands)/enka.mdx": () => import("../content/docs/(commands)/enka.mdx?collection=docs"),
    "(commands)/events.mdx": () => import("../content/docs/(commands)/events.mdx?collection=docs"),
    "(commands)/exploration.mdx": () =>
      import("../content/docs/(commands)/exploration.mdx?collection=docs"),
    "(commands)/profile.mdx": () =>
      import("../content/docs/(commands)/profile.mdx?collection=docs"),
    "(commands)/redeem.mdx": () => import("../content/docs/(commands)/redeem.mdx?collection=docs"),
    "(commands)/settings.mdx": () =>
      import("../content/docs/(commands)/settings.mdx?collection=docs"),
    "(commands)/survey.mdx": () => import("../content/docs/(commands)/survey.mdx?collection=docs"),
  }),
};
export default browserCollections;
