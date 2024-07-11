import '@/styles/index.scss';
import '&/fonts/index.scss';
import {Header, Footer} from '@/components';



export const metadata = {
  title: 'ПН-техно',
  description: 'Официальный сайт ПН-техно. Корпусы для майнинга.',
}


export default ({ children }) => {
  return (
    <html lang="ru" translate="no">
      <head>
        <link rel="icon" type="image/svg+xml" href="icons/logo.svg" />
        <meta name="google" content="notranslate"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow"/>
        <meta name="keywords" content="ПН-техно, корпусы для майнинга" />
        {/* <meta name="description" content="Официальный сайт ПН-техно. Корпусы для майнинга." /> */}
      </head>
      <body className={"notranslate"}>
        <Header/>
        <main className='main'>
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  )
}
