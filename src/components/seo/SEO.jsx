import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SiteConfig } from '../../config/site-config';

const SEO = ({ title, description, keywords, image, url }) => {
    const siteTitle = SiteConfig.metadata.title;
    const metaTitle = title ? `${title} | ${siteTitle}` : siteTitle;
    const metaDescription = description || SiteConfig.metadata.description;
    const metaKeywords = keywords || "software engineer, developer, portfolio, computer science";
    const metaImage = image ? `${SiteConfig.metadata.siteUrl}${image}` : `${SiteConfig.metadata.siteUrl}/og-image.png`;
    const metaUrl = url ? `${SiteConfig.metadata.siteUrl}${url}` : SiteConfig.metadata.siteUrl;

    return (
        <Helmet>
            <title>{metaTitle}</title>
            <meta name="description" content={metaDescription} />
            <meta name="keywords" content={metaKeywords} />
            <meta name="author" content={SiteConfig.metadata.author} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={metaUrl} />
            <meta property="og:title" content={metaTitle} />
            <meta property="og:description" content={metaDescription} />
            <meta property="og:image" content={metaImage} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={metaUrl} />
            <meta property="twitter:title" content={metaTitle} />
            <meta property="twitter:description" content={metaDescription} />
            <meta property="twitter:image" content={metaImage} />

            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Person",
                    "name": SiteConfig.metadata.author,
                    "url": SiteConfig.metadata.siteUrl,
                    "sameAs": [
                        SiteConfig.social.github,
                        SiteConfig.social.linkedin
                    ],
                    "jobTitle": "Computer Science Engineer & Developer",
                    "knowsAbout": [
                        ...SiteConfig.skills.expert,
                        ...SiteConfig.skills.proficient,
                        ...SiteConfig.skills.familiar
                    ]
                })}
            </script>
        </Helmet>
    );
};

export default SEO;
