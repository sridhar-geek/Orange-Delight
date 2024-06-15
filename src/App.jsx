import Header from './Components/Header'
import Footer from './Components/Footer'
import Main from './Components/MainComponent'
import Cart from './Components/ShoppingCart'


const App = () => {
  return (
    <div>
      <Header />
      <main className='mx-4 flex flex-col gap-8 md:grid md:gap-4 md:grid-cols-3 lg:mx-8 mb-4'>
        <section className="col-span-2">
          <Main />
        </section>
        <section className='col-span-1'>
          <Cart />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App