export function StructuredData() {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "BookToAudio",
    "url": "https://booktoaudio.cloud",
    "logo": "https://booktoaudio.cloud/logo.svg",
    "description": "Production-grade AI audiobook conversion service for authors and publishers",
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "karthik@talentmicro.com",
      "contactType": "Customer Service",
      "availableLanguage": ["English"]
    },
    "sameAs": [
      "https://twitter.com/booktoaudio",
      "https://linkedin.com/company/booktoaudio"
    ]
  };

  const serviceData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Audiobook Production",
    "name": "AI Audiobook Conversion Service",
    "description": "Transform your book into a production-grade audiobook with state-of-the-art AI voices. Professional narration at $100 per 10,000 words with 3 free revisions.",
    "provider": {
      "@type": "Organization",
      "name": "BookToAudio"
    },
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Audiobook Conversion Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Production-Grade Audiobook Conversion",
            "description": "Complete audiobook conversion with AI narration"
          },
          "price": "100",
          "priceCurrency": "USD",
          "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "price": "100",
            "priceCurrency": "USD",
            "referenceQuantity": {
              "@type": "QuantitativeValue",
              "value": "10000",
              "unitText": "words"
            }
          }
        }
      ]
    }
  };

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://booktoaudio.cloud"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Pricing",
        "item": "https://booktoaudio.cloud/pricing"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "FAQ",
        "item": "https://booktoaudio.cloud/faq"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Contact",
        "item": "https://booktoaudio.cloud/contact"
      }
    ]
  };

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What formats do you accept for manuscripts?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We accept all major formats including PDF, Microsoft Word (.doc, .docx), plain text (.txt), and ePub files."
        }
      },
      {
        "@type": "Question",
        "name": "How long does the conversion process take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most audiobooks are completed within 5-7 business days from the time you approve the voice selection."
        }
      },
      {
        "@type": "Question",
        "name": "Are there any additional fees?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No hidden fees! Our transparent pricing is $100 per 10,000 words, which includes 3 revision rounds, professional mastering, and files formatted for all major publishing platforms."
        }
      },
      {
        "@type": "Question",
        "name": "Can I publish the audiobook on Audible and other platforms?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! We provide your audiobook in formats compatible with all major platforms including Audible, Apple Books, Google Play Books, and more."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
      />
    </>
  );
}
