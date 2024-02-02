import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './utils/axios';

//pages
import Header from './components/Header';
import Clients from './pages/Clients';
import Client from './pages/Clients/pages/client';
import NewClient from './pages/Clients/pages/NewClient';
import AuthorizeRouter from './router/AuthorizeRouter';
import Assessments from './pages/Assessment';
import Session from './pages/Session';
import ClientGoals from './pages/ClientGoals';
import SessionReport from './pages/SessionReport';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import ProgressReport from './pages/ProgressReport';
import NewSession from './pages/Clients/pages/NewSession';
import NewAssessment from './pages/Clients/pages/NewAssessment';
import NewGoal from './pages/Clients/pages/NewGoal';
import Overview from './pages/Clients/pages/client/Overview';
import Assessment from './pages/Clients/pages/client/Assessment';
import Sessions from './pages/Clients/pages/client/Sessions';
import Goals from './pages/Clients/pages/client/Goals';
import Reports from './pages/Clients/pages/client/Reports';

const App = () => {
    return (
        <Header>
            <Routes>
                <Route path='/' element={<AuthorizeRouter />}>
                    <Route index element={<Dashboard />} />

                    {/* Clients and Client Paths */}
                    <Route path='clients'>
                        <Route index element={<Clients />} />
                        <Route path='new' element={<NewClient />} />
                        <Route path=':clientId' element={<Client />}>
                            <Route index element={<Overview />} />
                            <Route path='sessions' element={<Sessions />} />
                            <Route path='assessment' element={<Assessment />} />
                            <Route path='goals' element={<Goals />} />
                            <Route path='reports' element={<Reports />} />
                        </Route>
                        <Route path=':clientId/sessions/new' element={<NewSession />} />
                        <Route path=':clientId/assessment/new' element={<NewAssessment />} />
                        <Route path=':clientId/goals/new' element={<NewGoal />} />
                    </Route>

                    <Route path='assessments' element={<Assessments />} />
                    <Route path='session' element={<Session />} />
                    <Route path='client-goals' element={<ClientGoals />} />
                    <Route path='session-report' element={<SessionReport />} />
                    <Route path='progress-report' element={<ProgressReport />} />
                </Route>
                <Route path='/login' element={<Login />} />
            </Routes>
        </Header>
    );
};

export default App;
