import { Helmet } from 'react-helmet-async'
import favicon from './assets/images/favicon.ico'
interface SEOProps {
  title: string;
  description: string;
  name?: string;
  type?: string;
  url?: string;
  image?: string;
  canonicalUrl?: string;
  keywords?: string;
}
const defaultImage = 'https://www.matheusbarrosti.com/logo.png'
export const SEO = ({
  title,
  description,
  name = 'Matheus Barros',
  type = 'website',
  url = window.location.href,
  image = defaultImage,
  canonicalUrl = window.location.href,
  keywords = 'palavra-chave1, palavra-chave2',
}: SEOProps) => {
  return (
    <Helmet>
      <link rel="icon" href={favicon} type="image/x-icon" />
      {/* Tags básicas */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Links canônicos */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={name} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  )
}