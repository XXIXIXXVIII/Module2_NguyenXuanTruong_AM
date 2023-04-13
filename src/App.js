import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from '~/page/Home';
import GenderMen from '~/page/GenderMen';
import GenderWomen from '~/page/GenderWomen';
import ProductList from '~/page/ProductList';
import NotFound from './page/NotFound/NotFound';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                  <Route path="/" element={<Home />}></Route>
                  <Route path="/product-list" element={<ProductList />}>
                      <Route path="gendermen" element={<GenderMen />}></Route>
                      <Route path="genderwomen" element={<GenderWomen />}></Route>
                  </Route>
                  <Route path="*" element={<NotFound />}></Route>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
