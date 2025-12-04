import Link from "next/link";

export const Logos = () => {
  return (
    <section className="pb-28 lg:pb-32 overflow-hidden">
      <div className="container space-y-10 lg:space-y-16">
        <div className="text-center space-y-4">
          <h2 className="mb-4 text-xl text-balance md:text-2xl lg:text-3xl">
            Publish your audiobook everywhere.
            <br className="max-md:hidden" />
            <span className="text-muted-foreground">
              Compatible with all major audiobook platforms including Audible, Apple Books, and Google Play.
            </span>
          </h2>
          <p className="text-muted-foreground">
            Learn more about our{" "}
            <Link href="/pricing" className="underline underline-offset-4 hover:text-foreground transition-colors font-medium">
              transparent pricing
            </Link>{" "}
            and{" "}
            <Link href="/faq" className="underline underline-offset-4 hover:text-foreground transition-colors font-medium">
              conversion process
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
};
