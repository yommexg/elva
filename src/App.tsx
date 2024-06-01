import { About, Career, Contact, Home, Navbar, Services } from "./components";

function App() {
  return (
    <div className="bg-[#FEF6E4]">
      <Navbar />
      <Home />
      <About />
      <Services />
      <Career />
      <Contact />
    </div>
  );
}

export default App;
