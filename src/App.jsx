import Banner from "./components/Banner"
import Header from "./components/Header"
import OurRecipes from "./components/OurRecipes"
import Recipes from "./components/Recipes"
import Sidebar from "./components/Sidebar"


function App() {

  return (
    <>
      {/* Header and Navbar */}
      <Header />
      {/* Banner */}
      <Banner />
      {/* our recipes */}
      <main>
      <OurRecipes />
      {/* Recipes */}
        <section className="container mx-auto flex">
        <Recipes />
        <Sidebar />
        </section>
      </main>
  
    </>
  )
}

export default App
