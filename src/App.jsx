import React, { useState } from 'react'
import HomePage from './page/Home/Home';
import Header from './components/shared/Header';
import Glow from './components/shared/Glow';
import Footer from './components/shared/Footer';
import DownloadPage from './page/download/Download';
import { pages } from './db/pages';

const App = () => {
  const [path, setPath] = useState(pages[0].url);

  const renderPage = (path) => {
    switch (path) {
      case pages[0].url:
        return <HomePage />;
      case pages[1].url:
        return <DownloadPage />;
      default:
        return <HomePage />;
    }
  }

  return (
    <div className='container mx-auto px-4 py-8 max-w-6xl'>
      <Header path={path} setPath={setPath} />
      <Glow />
      <main className='min-h-[calc(100vh-200px)]'>
        {renderPage(path)}
      </main>
      <Footer />
    </div>
  )
}

export default App;