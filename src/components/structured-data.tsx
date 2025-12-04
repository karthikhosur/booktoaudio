export function StructuredData() {
  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "BookToAudio",
    "url": "https://booktoaudio.cloud",
    "description": "Production-grade AI audiobook conversion service for authors and publishers",
    "publisher": {
      "@type": "Organization",
      "name": "BookToAudio"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://booktoaudio.cloud/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "BookToAudio",
    "alternateName": "Book To Audio",
    "url": "https://booktoaudio.cloud",
    "logo": {
      "@type": "ImageObject",
      "url": "https://booktoaudio.cloud/logo.svg",
      "width": "180",
      "height": "24"
    },
    "image": "https://booktoaudio.cloud/og-image.jpg",
    "description": "Production-grade AI audiobook conversion service for authors and publishers. Transform your manuscript into a professional audiobook with state-of-the-art AI voices at $100 per 10,000 words.",
    "foundingDate": "2024",
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "karthik@talentmicro.com",
      "contactType": "Customer Service",
      "availableLanguage": ["English"],
      "areaServed": "Worldwide"
    },
    "sameAs": [
      "https://twitter.com/booktoaudio",
      "https://linkedin.com/company/booktoaudio"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    }
  };

  const serviceData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Audiobook Production",
    "name": "AI Audiobook Conversion Service",
    "description": "Transform your book into a production-grade audiobook with state-of-the-art AI voices. Professional narration at $100 per 10,000 words with 3 free revisions.",
    "brand": {
      "@type": "Brand",
      "name": "BookToAudio"
    },
    "provider": {
      "@type": "Organization",
      "name": "BookToAudio",
      "url": "https://booktoaudio.cloud"
    },
    "areaServed": {
      "@type": "Place",
      "name": "Worldwide"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    },
    "offers": {
      "@type": "Offer",
      "url": "https://booktoaudio.cloud/pricing",
      "priceCurrency": "USD",
      "price": "100",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": "100",
        "priceCurrency": "USD",
        "referenceQuantity": {
          "@type": "QuantitativeValue",
          "value": "10000",
          "unitText": "words"
        }
      },
      "availability": "https://schema.org/InStock",
      "validFrom": "2024-01-01"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Audiobook Conversion Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Production-Grade Audiobook Conversion",
            "description": "Complete audiobook conversion with AI narration, 3 revisions, and publishing-ready format"
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
          "text": "We accept all major formats including PDF, Microsoft Word (.doc, .docx), plain text (.txt), and ePub files. Our AI can process any standard text format to create your audiobook."
        }
      },
      {
        "@type": "Question",
        "name": "How long does the conversion process take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most audiobooks are completed within 5-7 business days from the time you approve the voice selection. Rush delivery is available for urgent projects."
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
          "text": "Yes! We provide your audiobook in formats compatible with all major platforms including Audible, Apple Books, Google Play Books, Spotify, and more. Files are publishing-ready and meet platform requirements."
        }
      },
      {
        "@type": "Question",
        "name": "How much does it cost to convert a book to audiobook?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our pricing is simple and transparent: $100 per 10,000 words. This includes state-of-the-art AI narration, 3 revision rounds, professional mastering, and publishing-ready files for all platforms."
        }
      },
      {
        "@type": "Question",
        "name": "What AI voices are available?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer a wide selection of professional-quality AI voices with various accents, genders, and tones. You can preview and select the perfect voice for your book during the ordering process."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
      />
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
