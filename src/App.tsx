import LandingHomepage from './pages/LandingHomepage/LandingHomepage';
import LandingHomepagePage2 from './pages/LandingHomepagePage2';

function App() {
  const usePage2 = false; // set true to show NovaPay (LandingHomepagePage2)
  return usePage2 ? <LandingHomepagePage2 /> : <LandingHomepage />;
}

export default App;
