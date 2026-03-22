import Link from "fumadocs-core/link";
import {
  ArrowRight,
  BookOpenText,
  CalendarCheck2,
  Command,
  Search,
  Server,
  ShieldCheck,
} from "lucide-react";
import Image from "next/image";

const routines = [
  {
    icon: CalendarCheck2,
    title: "Stop remembering the tasks the bot can do for you",
    description:
      "Daily sign-ins, quick account checks, and routine lookups stay available inside the server instead of turning into another checklist.",
  },
  {
    icon: Command,
    title: "Use one slash command and move on",
    description:
      "Profile, roster, exploration, redemption, and utility commands are short, direct, and readable enough to share with the rest of your group.",
  },
  {
    icon: ShieldCheck,
    title: "Keep the useful context in the thread",
    description:
      "When you need to compare progress or answer a question, the output is already in Discord where the conversation is happening.",
  },
];

const depthPoints = [
  {
    icon: Search,
    title: "Browse owned operators without leaving chat",
    description:
      "Filter the roster, open character details, and check progression without bouncing to a separate site.",
  },
  {
    icon: Server,
    title: "Pull live account progress when you need the real state",
    description:
      "Profiles, regional development, operator lists, and exploration snapshots are available as current account-facing views.",
  },
  {
    icon: BookOpenText,
    title: "Keep docs close when you want more than the hosted bot",
    description:
      "Invite the public bot for uptime now, then use the docs and repository if you want to self-host the same toolchain later.",
  },
];

export default function HomePage() {
  return (
    <main className="bg-fd-background text-fd-foreground">
      <section className="relative flex h-[calc(100dvh-3.5rem)] overflow-hidden">
        <div className="home-hero-surface absolute inset-0" />
        <div className="mx-auto grid min-h-0 w-full max-w-[1400px] flex-1 -translate-y-7 items-center gap-8 px-6 py-6 md:grid-cols-[minmax(0,540px)_1fr] md:gap-10 md:px-8 md:py-10">
          <div className="relative z-10 max-w-xl">
            <p className="home-fade-up text-sm font-medium tracking-[0.24em] text-fd-muted-foreground uppercase">
              Discord companion for Arknights: Endfield
            </p>
            <h1 className="home-fade-up mt-5 max-w-lg text-4xl font-semibold tracking-tight text-balance [animation-delay:120ms]">
              Endfield routine, right in Discord.
            </h1>
            <p className="home-fade-up mt-6 max-w-lg text-base leading-7 text-fd-muted-foreground [animation-delay:220ms] md:text-lg">
              Daily attendance, live profiles, and roster lookups - all in the platform you already
              use.
            </p>

            <div className="home-fade-up mt-8 flex flex-col gap-3 [animation-delay:320ms] md:flex-row">
              <Link
                href="/invite"
                className="inline-flex items-center justify-center rounded-full bg-fd-primary px-6 py-3 text-sm font-medium text-fd-primary-foreground shadow-sm transition-colors duration-300 hover:bg-fd-accent hover:text-fd-accent-foreground"
              >
                <span className="px-2">Invite Endvoyant</span>
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/docs"
                className="inline-flex items-center justify-center rounded-full border border-fd-border bg-fd-background/70 px-6 py-3 text-sm font-medium text-fd-foreground shadow-sm transition-colors duration-300 hover:bg-fd-accent"
              >
                Read the docs
              </Link>
            </div>
          </div>

          <div className="relative z-10 flex items-center justify-center md:justify-end">
            <div className="relative w-full max-w-[640px]">
              <div className="home-orbit absolute -inset-x-8 -top-12 bottom-8" />
              <div className="home-fade-up relative [animation-delay:200ms]">
                <div className="home-float">
                  <div className="home-screen mx-auto w-[72%] md:mr-8 md:w-[66%]">
                    <Image
                      src="/home/profile.png"
                      alt="Endvoyant profile view inside Discord"
                      width={672}
                      height={1326}
                      priority
                      sizes="(max-width: 768px) 60vw, 30vw"
                      className="h-auto w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative">
        <div className="mx-auto grid max-w-[1400px] gap-14 px-6 py-20 md:grid-cols-[minmax(0,420px)_1fr] md:px-8 md:py-24">
          <div className="md:sticky md:top-24 md:self-start">
            <p className="text-sm font-medium tracking-[0.24em] text-fd-muted-foreground uppercase">
              Less routine
            </p>
            <h2 className="mt-4 max-w-md text-3xl font-semibold tracking-tight text-balance md:text-4xl">
              The bot is there for the parts of the game that should not need your attention.
            </h2>
            <p className="mt-5 max-w-md text-base leading-7 text-fd-muted-foreground">
              Instead of juggling tabs, reminders, and screenshots, you can let Discord answer the
              obvious questions and handle the repeatable actions.
            </p>

            <div className="home-screen mt-10 max-w-md overflow-hidden">
              <Image
                src="/home/signin.png"
                alt="Endvoyant sign-in summary inside Discord"
                width={758}
                height={476}
                sizes="(max-width: 768px) 100vw, 28vw"
                className="h-auto w-full"
              />
            </div>
          </div>

          <div className="divide-y divide-fd-border/40">
            {routines.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group grid gap-5 py-8 transition-transform duration-300 hover:translate-x-1 md:grid-cols-[72px_minmax(0,1fr)] md:gap-8 md:py-10"
                >
                  <div className="flex items-center gap-4 md:block">
                    <span className="text-sm font-medium text-fd-muted-foreground">
                      0{index + 1}
                    </span>
                    <div className="flex size-12 items-center justify-center rounded-full border border-fd-border bg-fd-card text-fd-foreground transition-colors duration-300 group-hover:bg-fd-accent">
                      <Icon className="size-5" />
                    </div>
                  </div>
                  <div>
                    <h3 className="max-w-xl text-2xl font-semibold tracking-tight text-balance">
                      {item.title}
                    </h3>
                    <p className="mt-3 max-w-2xl text-base leading-7 text-fd-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative">
        <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-8 md:py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-medium tracking-[0.24em] text-fd-muted-foreground uppercase">
              Depth on demand
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance md:text-4xl">
              Quick enough for a check-in, detailed enough for a real account pass.
            </h2>
            <p className="mt-5 text-base leading-7 text-fd-muted-foreground">
              Endvoyant does not stop at reminders. When you need the live state of your account,
              operator roster, or exploration progress, the same chat command can surface it.
            </p>
          </div>

          <div className="mt-14 grid gap-12 md:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
            <div className="grid gap-8 md:grid-cols-2">
              <figure className="space-y-4">
                <div className="home-screen overflow-hidden">
                  <Image
                    src="/home/characters.png"
                    alt="Endvoyant character roster inside Discord"
                    width={1044}
                    height={1278}
                    sizes="(max-width: 768px) 100vw, 42vw"
                    className="h-auto w-full"
                  />
                </div>
                <figcaption className="max-w-sm text-sm leading-6 text-fd-muted-foreground">
                  Filter the roster, scan progression, and open character details from the same
                  conversation.
                </figcaption>
              </figure>

              <figure className="space-y-4 md:pt-16">
                <div className="home-screen overflow-hidden">
                  <Image
                    src="/home/exploration.png"
                    alt="Endvoyant exploration progress inside Discord"
                    width={1022}
                    height={1112}
                    sizes="(max-width: 768px) 100vw, 42vw"
                    className="h-auto w-full"
                  />
                </div>
                <figcaption className="max-w-sm text-sm leading-6 text-fd-muted-foreground">
                  Pull exploration progress and regional development summaries when you need the
                  current account state.
                </figcaption>
              </figure>
            </div>

            <div className="divide-y divide-fd-border/40">
              {depthPoints.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.title} className="py-7 first:pt-0 last:pb-0">
                    <div className="flex items-start gap-4">
                      <div className="flex size-11 shrink-0 items-center justify-center rounded-full border border-fd-border bg-fd-card">
                        <Icon className="size-5" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold tracking-tight text-balance">
                          {item.title}
                        </h3>
                        <p className="mt-3 max-w-xl text-base leading-7 text-fd-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="home-cta-wash absolute inset-0" />
        <div className="mx-auto flex max-w-[1400px] items-center px-6 py-16 md:px-8 md:py-20">
          <div className="home-cta-shell relative">
            <div className="max-w-sm">
              <h2 className="text-xl font-semibold tracking-tight md:text-2xl">Add Endvoyant.</h2>
              <p className="mt-2 text-sm text-fd-muted-foreground">Invite now or read the guide.</p>
            </div>

            <div className="mt-6 flex flex-col gap-3 md:flex-row">
              <Link
                href="/invite"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-fd-primary px-6 py-3 text-sm font-medium text-fd-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
              >
                Invite Bot
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/docs/inviting-the-bot"
                className="inline-flex items-center justify-center rounded-full border border-fd-border bg-fd-background/70 px-6 py-3 text-sm font-medium text-fd-foreground transition-colors duration-300 hover:bg-fd-accent"
              >
                Setup Guide
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
