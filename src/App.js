import './App.css';
import OnboardingForm from './routes/Onboarding/OnboardingForm';
/* import DashboardPage from './routes/DashboardNew/DashboardPage';
import CampaignPage from './routes/CampaignsPage';

import Route from './components/Router/Route';
import Link from './components/Router/Link'; */
import LoggedInTemplate from './Templates/LoggedInTemplate';
import SettingsPage from './routes/Settings/SettingsPage';

function App() {
  return (

     <OnboardingForm />
   /*  <LoggedInTemplate>
      <SettingsPage />
    </LoggedInTemplate> */

  );
}

export default App;

/* <Route path="/dashboard">
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
   
      </Route>
      <Route path="/index">
        Samplead App
        <br></br>
        <Link href="/dashboard">dashboard</Link>
        <br></br>
        <Link href="/onboarding">onboarding</Link>
        <br></br>
        <Link href="/settings">settings</Link>
        <br></br>
      </Route> */