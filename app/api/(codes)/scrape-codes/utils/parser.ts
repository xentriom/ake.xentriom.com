import * as cheerio from "cheerio";

export interface Code {
  code: string;
  rewards: string[];
  notes: string[];
}

export const prydwenParser = (html: string): Code[] => {
  const $ = cheerio.load(html);
  const codes = $("div.codes > div.box.centered")
    .map((i, el) => {
      const code = $(el).find("p.code").text().trim();
      return { code, rewards: [], notes: [] };
    })
    .get();

  return codes;
};

export const gamesradarParser = (html: string): Code[] => {
  const $ = cheerio.load(html);

  const articleBody = $("div#article-body").first();
  if (!articleBody.length) {
    return [];
  }

  const lis = articleBody.find("ul li").toArray();

  const codes = lis
    .map((li) => {
      const li$ = $(li);
      const strong = li$.find("strong").first();

      if (!strong.length) return null;

      const strongText = strong.text().trim();
      if (!strongText || strongText !== strongText.toUpperCase()) {
        return null;
      }

      const code = strongText.split(/[\/\-_ ]+/)[0].trim();

      const fullText = li$.text().trim();
      const parts = fullText.split("–");
      if (parts.length < 2) {
        return null;
      }

      const rawRewards = parts[1].trim();
      let rewardsText = rawRewards;
      let notes: string[] = [];

      const notesMatch = rawRewards.match(/\[(.+)]\s*$/);
      if (notesMatch) {
        notes = notesMatch[1].split(", ").map((n) => n.trim());
        rewardsText = rawRewards.replace(/\s*\[(.+)]\s*$/, "").trim();
      }

      const rewards = rewardsText
        .split(", ")
        .map((r) => r.trim())
        .filter((r) => r.length > 0);

      return { code, rewards, notes };
    })
    .filter((item) => item !== null);

  return codes;
};

export const pockettacticsParser = (html: string): Code[] => {
  const $ = cheerio.load(html);

  const entryContent = $("div.entry-content").first();
  if (!entryContent.length) {
    return [];
  }

  const ul = entryContent.find("ul").first();
  if (!ul.length) {
    return [];
  }

  const lis = ul.find("li").toArray();

  const codes = lis
    .map((li) => {
      const li$ = $(li);
      const strong = li$.find("strong").first();

      if (!strong.length) return null;

      const strongText = strong.text().trim();
      if (!strongText || strongText !== strongText.toUpperCase()) {
        return null;
      }

      const code = strongText;

      const fullText = li$.text().trim();
      const parts = fullText.split("-");
      if (parts.length < 2) {
        return null;
      }

      const rewardsText = parts[1].trim().replace(" (new!)", "");

      let rewards = rewardsText
        .split(", ")
        .map((r) => r.trim())
        .filter((r) => r.length > 0);

      if (rewards.length > 0) {
        const last = rewards[rewards.length - 1];
        rewards[rewards.length - 1] = last.replace(/^and\s+/i, "").trim();
      }

      const notes: string[] = [];

      return { code, rewards, notes };
    })
    .filter((item) => item !== null);

  return codes;
};
