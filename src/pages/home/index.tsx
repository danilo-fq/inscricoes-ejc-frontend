import EventCard from '../../components/EventCard';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import ShowAllArrow from '../../components/ShowAllArrow';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section>
          <img className="h-96 w-full object-cover" src="/Banner-EJC-.jpg" alt="" />
        </section>
        <section className="my-8">
          <ShowAllArrow
            name="Eventos"
            link="/eventos"
            textLink="Ver todos os eventos"
          />
          <div className="m-8 flex basis-1/3 justify-center items-center">
            <EventCard />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
