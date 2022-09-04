import { Helmet, HelmetProvider } from 'react-helmet-async';

interface MetasProps {
  title: string;
  description: string;
}

export function Meta({ title, description }: MetasProps) {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Projeto - {title} </title>
        <meta name="author" content="CodeUi (Patrick Lucas M)" />
        <meta name="copyright" content="© CodeUi - Todos os direitos reservados" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" />
        <meta name="googlebot" content="notranslate" />
        <meta name="theme-color" content="#1D2025" />

        <meta name="description" content={description} />

        <meta property="og:url" content='https://github.com/closeluca1' />
      </Helmet>
    </HelmetProvider>
  )
}