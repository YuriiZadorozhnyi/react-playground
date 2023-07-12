import './App.css'
import Sidebar from "./Sidebar/Sidebar.tsx";
import sidebarItems from "./Sidebar/sidebar-items.ts";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Test from "./Test.tsx";
import { createContext, lazy, Suspense } from "react";
import Search from "./Search/Search.tsx";
import Nested from "./components/Nested.tsx";
import ReactHookForm, { GenderEnum, IFormInput } from "./components/ReactHookForm.tsx";

const Products = lazy(() => import("./Products"));

const initialData: IFormInput = {
    firstName: "John",
    lastName: "Doe",
    age: 24,
    gender: GenderEnum.male
};

export const GlobalContext = createContext(initialData);

function App() {

  return (
      <GlobalContext.Provider value={initialData}>
          <BrowserRouter>
            <Sidebar items={sidebarItems} />
              <Suspense fallback={<div>Loading...</div>}>
                  <Routes>
                    <Route path="/" element={<Test text={'home'}/>} />
                    <Route path="/about" element={<Test text={'about'}/>} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="/simple-form" element={<ReactHookForm />} />
                    <Route path="/nested-element" element={<Nested><span>Some nested text</span></Nested>} />
                  </Routes>
              </Suspense>
          </BrowserRouter>
      </GlobalContext.Provider>
  )
}

export default App
