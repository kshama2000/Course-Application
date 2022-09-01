import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';



const rootElem=document.getElementById('root');

const root = ReactDOM.createRoot(rootElem);

root.render(
  // <BrowserRouter>
  // <Routes>
  //   <Route path="/" element={<App />}>
  //     <Route index element={<Home />} />
  //     <Route path="/courses" element={<AllCourse />} />
  //     <Route path='/addCourse' element={<AddCourse />} />
  //   </Route>
  // </Routes>
  // </BrowserRouter>
  <React.StrictMode>
     <App />
  </React.StrictMode>
);
