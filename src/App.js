import './App.css';
import OnboardingForm from './routes/Onboarding/OnboardingForm';
import Route from './components/Router/Route';
import DashboardPage from './routes/DashboardNew/DashboardPage';
import CampaignPage from './routes/CampaignsPage';
import SettingsPage from './routes/Settings/SettingsPage';
import Link from './components/Router/Link';
import LoggedInTemplate from './Templates/LoggedInTemplate';

function App() {
  return (
    <>


      <Route path="/dashboard">
        <LoggedInTemplate>
          <DashboardPage />
        </LoggedInTemplate>
      </Route>
      <Route path="/settings">
        <LoggedInTemplate>
          <SettingsPage />
        </LoggedInTemplate>
      </Route>
      <Route path="/campaign">
        <LoggedInTemplate>
          <CampaignPage />
        </LoggedInTemplate>
      </Route>
      <Route path="/onboarding">
        <OnboardingForm />
      </Route>
      <Route path="/">
        Samplead App
        <br></br>
        <Link href="dashboard">dashboard</Link>
        <br></br>
        <Link href="onboarding">onboarding</Link>
        <br></br>
      </Route>
    </>
  );
}

export default App;
