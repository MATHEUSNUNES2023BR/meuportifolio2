import Header from '../organisms/Header';
import Footer from '../organisms/Footer';
import WhatsAppButton from '../atoms/WhatsAppButton';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
        <main>{children}</main>
        <WhatsAppButton phoneNumber="5562991166071" />
      <Footer />
    </>
  );
};

export default MainLayout;
