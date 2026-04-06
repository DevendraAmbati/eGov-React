import { lazy } from "react";

const Hero = lazy(() => import("./Hero"));
const ProductList = lazy(() => import("./ProductList"));    
const Blog = lazy(() => import("./Blog"));
const Reimagining = lazy(() => import("./Reimagining"));
const About = lazy(() => import("./About"));
const LatestAtEGov = lazy(() => import("./LatestAtEGov"));
const Supporters = lazy(() => import("./Supporters"));

export default function App() {


  return (
    <div className="font-sans">
        <Hero />
        <ProductList />
        <Blog />
        <Reimagining />
        <About />
        <LatestAtEGov />
        <Supporters />
    </div>
  );
}
