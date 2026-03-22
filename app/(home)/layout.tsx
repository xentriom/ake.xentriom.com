import Link from "fumadocs-core/link";
import { HomeLayout } from "fumadocs-ui/layouts/home";
import {
  NavbarMenu,
  NavbarMenuContent,
  NavbarMenuLink,
  NavbarMenuTrigger,
} from "fumadocs-ui/layouts/home/navbar";
import { Book } from "lucide-react";
import { linkItems, iconLinks, baseOptions } from "@/components/layout/shared";

export default function Layout({ children }: LayoutProps<"/">) {
  const options = baseOptions();

  return (
    <HomeLayout
      {...options}
      nav={{ ...options.nav, transparentMode: "top" }}
      links={[
        {
          type: "menu",
          on: "menu",
          text: "Documentation",
          items: [{ text: "Getting Started", url: "/docs", icon: <Book /> }],
        },
        {
          type: "custom",
          on: "nav",
          children: (
            <NavbarMenu>
              <NavbarMenuTrigger>
                <Link href="/docs">Documentation</Link>
              </NavbarMenuTrigger>
              <NavbarMenuContent>
                <NavbarMenuLink href="/docs" className="md:row-span-2">
                  Getting Started
                </NavbarMenuLink>

                <NavbarMenuLink href="/docs/what-is-endvoyant" className="lg:col-start-2">
                  <p className="font-medium">What is Endvoyant?</p>
                  <p className="text-sm text-fd-muted-foreground">
                    Learn about Endvoyant and its features
                  </p>
                </NavbarMenuLink>
                <NavbarMenuLink href="/docs/available-commands" className="lg:col-start-2">
                  <p className="font-medium">Available Commands</p>
                  <p className="text-sm text-fd-muted-foreground">See all available commands</p>
                </NavbarMenuLink>
                <NavbarMenuLink
                  href="/docs/inviting-the-bot"
                  className="lg:col-start-3 lg:row-start-1"
                >
                  <p className="font-medium">Inviting the Bot</p>
                  <p className="text-sm text-fd-muted-foreground">
                    Add Endvoyant to your Discord server
                  </p>
                </NavbarMenuLink>
                <NavbarMenuLink href="/docs/faq" className="lg:col-start-3 lg:row-start-2">
                  <p className="font-medium">FAQ & Troubleshooting</p>
                  <p className="text-sm text-fd-muted-foreground">Common questions and fixes</p>
                </NavbarMenuLink>
              </NavbarMenuContent>
            </NavbarMenu>
          ),
        },
        ...linkItems,
        ...iconLinks,
      ]}
    >
      {children}
    </HomeLayout>
  );
}
