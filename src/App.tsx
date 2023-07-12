import './App.css'
import Sidebar from "./Sidebar/Sidebar.tsx";
import sidebarItems from "./Sidebar/sidebar-items.ts";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Test from "./Test.tsx";
import { createContext, lazy, Suspense, useCallback, useState } from "react";
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
export const GlobalDynamicContext = createContext<any>(null);

function App() {
    const [globalDynamicData, setGlobalDynamicData] = useState(initialData);

    const setDefaultDynamicData = useCallback(() => {
        setGlobalDynamicData({ ...initialData, firstName: "Jane", age: 30, gender: GenderEnum.female });
    }, []);

    return (
      <GlobalContext.Provider value={initialData}>
          <GlobalDynamicContext.Provider value={globalDynamicData}>
              <BrowserRouter>
                <Sidebar items={sidebarItems} setDefault={setDefaultDynamicData} />
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
          </GlobalDynamicContext.Provider>
      </GlobalContext.Provider>
    )
}

export default App
