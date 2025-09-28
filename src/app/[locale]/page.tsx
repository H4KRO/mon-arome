import Calculator from '../../components/calculator';
import Header from '../../components/header';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Calculator />
      </main>
    </div>
  );
}
