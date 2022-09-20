import './App.css';
import OnboardingForm from './onboarding/OnboardingForm';
import Dashboard from './dashboard/Dashboard';
import Route from './components/Router/Route';
import Header from './components/Header';

function App() {
  return (
    <>

      <Route path="/dashboard">
        <Header />
        <Dashboard />
      </Route>
      <Route path="/onboarding">
        <OnboardingForm />
      </Route>
    </>
  );
}

export default App;
