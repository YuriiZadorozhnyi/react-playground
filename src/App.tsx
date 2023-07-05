import './App.css'
import Sidebar from "./Sidebar/Sidebar.tsx";
import sidebarItems from "./Sidebar/sidebar-items.ts";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Test from "./Test.tsx";
import {lazy, Suspense} from "react";
import Search from "./Search/Search.tsx";
import Nested from "./components/Nested.tsx";
import FormWithState from "./components/FormWithState.tsx";

const Products = lazy(() => import("./Products"));

function App() {

  return (
      <BrowserRouter>
        <Sidebar items={sidebarItems} />
          <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path="/" element={<Test text={'home'}/>} />
                <Route path="/about" element={<Test text={'about'}/>} />
                <Route path="/products" element={<Products />} />
                <Route path="/search" element={<Search />} />
                <Route path="/simple-form" element={<FormWithState />} />
                <Route path="/nested-element" element={<Nested><span>Some nested text</span></Nested>} />
              </Routes>
          </Suspense>
      </BrowserRouter>
  )
}

export default App
