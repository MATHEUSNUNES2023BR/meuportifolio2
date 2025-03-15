// 3. Crie um componente SEO reutilizável (SEO.tsx)
import { Helmet } from 'react-helmet-async'
import logo from './assets/images/logo.png'
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

export const SEO = ({
  title,
  description,
  name = 'Matheus Barros',
  type = 'website',
  url = window.location.href,
  image = logo,
  canonicalUrl = window.location.href,
  keywords = 'palavra-chave1, palavra-chave2',
}: SEOProps) => {
  return (
    <Helmet>
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