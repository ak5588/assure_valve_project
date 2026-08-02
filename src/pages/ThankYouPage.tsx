import { PageShell } from "../components/site/PageShell";
import { PageHero } from "../components/site/PageHero";
import { SeoHead } from "../components/seo/SeoHead";
import { thankYouCopy, whatsappMessages } from "../lib/seoContent";
import { Link } from "react-router-dom";

export default function ThankYouPage() {
  return (
    <PageShell>
      <SeoHead
        title="Thank You | Assure Valve"
        description="Thank you for contacting Assure Valve. We will get back to you shortly."
        canonical="https://assurevalve.in/thank-you"
      />
      <PageHero crumb="Thank You" eyebrow="Enquiry Received" title={thankYouCopy.title} description={thankYouCopy.body} />
      <section className="py-16 lg:py-24 bg-background">
        <div className="container-industrial space-y-6">
          <p className="text-lg leading-relaxed text-muted-foreground">
            If your request is urgent, please contact us directly on WhatsApp or phone so we can assist quickly.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="https://wa.me/919898129694" className="bg-[#25D366] px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white">WhatsApp Us</a>
            <Link to="/contact" className="bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground">View Contact Details</Link>
          </div>
          <p className="text-sm text-muted-foreground">Suggested message: {whatsappMessages.quote}</p>
        </div>
      </section>
    </PageShell>
  );
}
