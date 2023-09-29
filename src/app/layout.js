import './globals.css';
import NavbStyle from './components/layout/NavbStyle';
import TopNav from './components/layout/TopNav';
import FooterStyle from './components/layout/FooterStyle';

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className=''>
        <TopNav />
        <NavbStyle />
        {children}
        <FooterStyle />
      </body>
    </html>
  );
}
