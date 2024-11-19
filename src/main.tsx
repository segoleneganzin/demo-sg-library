import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Router from './Router.tsx';
import PageLayout from './layouts/PageLayout.tsx';

import './stylesheet/style.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <PageLayout>
      <Router />
    </PageLayout>
  </BrowserRouter>
);
