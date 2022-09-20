import './App.css';
import OnboardingForm from './onboarding/OnboardingForm';
import Dashboard from './dashboard/Dashboard';
import Route from './components/Router/Route';
import Campaign from './dashboard/Campaigns';
import Link from './components/Router/Link';

function App() {
  return (
    <>
    Samplead App
    <br></br>
    <Link href="dashboard">dashboard</Link>
    <br></br>
    <Link href="onboarding">onboarding</Link>
    <br></br>
      <Route path="/dashboard">
        <Dashboard />
      </Route>
      <Route path="/campaign">
        <Campaign />
      </Route>
      <Route path="/onboarding">
        <OnboardingForm />
      </Route>
    </>
  );
}

export default App;
