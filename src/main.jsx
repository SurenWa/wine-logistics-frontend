import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// third party
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

//project imports
import { BASE_PATH } from './config';
import { store, persister } from './store';
import { ConfigProvider } from './contexts/ConfigContext';

// style + assets
import './assets/scss/style.scss';

// ReactDOM.createRoot(document.getElementById('root')).render(
//     <Provider store={store}>
//         <PersistGate loading={null} persistor={persister}>
//             <ConfigProvider>
//                 <BrowserRouter basename={BASE_PATH}>
//                     <App />
//                 </BrowserRouter>
//             </ConfigProvider>
//         </PersistGate>
//     </Provider>


// )

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persister}>
            <ConfigProvider>
                <BrowserRouter basename={BASE_PATH}>
                    <App />
                </BrowserRouter>
            </ConfigProvider>
        </PersistGate>
    </Provider>
);
