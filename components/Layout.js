import { Sora } from 'next/font/google';

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});

export default function Layout({ children }) {
  return (
    <div className={sora.variable}>
      {children}
    </div>
  );
}
