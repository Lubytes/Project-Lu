import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from 'components/routes/home/home';
import PageNotFound from 'components/routes/404/404';

const App = () =>  
(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
)

export default App