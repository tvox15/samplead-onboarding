import './App.css';
import OnboardingForm from './onboarding/OnboardingForm';
import Route from './components/Router/Route';
import DashboardPage from './dashboard/DashboardPage';
import CampaignPage from './dashboard/CampaignsPage';
import SettingsPage from './dashboard/SettingsPage';
import Link from './components/Router/Link';
import DashboardTemplate from './dashboard/DashboardTemplate';

function App() {
  return (
    <>
      {/*  Samplead App
    <br></br>
    <Link href="dashboard">dashboard</Link>
    <br></br>
    <Link href="onboarding">onboarding</Link>
    <br></br> */}
      <Route path="/dashboard">
        <DashboardTemplate>
          <DashboardPage />
        </DashboardTemplate>
      </Route>
      <Route path="/settings">
        <DashboardTemplate>
          <SettingsPage />
        </DashboardTemplate>
      </Route>
      <Route path="/campaign">
        <DashboardTemplate>
          <CampaignPage />
        </DashboardTemplate>
      </Route>
      <Route path="/onboarding">
        <OnboardingForm />
      </Route>
    </>
  );
}

export default App;
