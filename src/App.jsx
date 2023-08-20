import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import './styles.css';
import Footer from './components/Footer';

function App() {
    return (
      <>
        <div className='flex flex-col min-h-screen bg-black'>
            <Navbar />
            <main className='flex-1'>
                <Outlet />
            </main>
            <Footer />
        </div>
      </>
    );
}

export default App;