import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './utils/axios';

//pages
import Header from './components/Header';
import Clients from './pages/Clients';
import NewClient from './pages/Clients/pages/NewClient';
import AuthorizeRouter from './router/AuthorizeRouter';
import Assessments from './pages/Assessments';
import Session from './pages/Session';
import ClientGoals from './pages/ClientGoals';
import SessionReport from './pages/SessionReport';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import ProgressReport from './pages/ProgressReport';
import Profile from './pages/Clients/pages/Profile';
import NewSession from './pages/Session/pages/NewSession';

const App = () => {
    return (
        <Header>
            <Routes>
                <Route path='/' element={<AuthorizeRouter />}>
                    <Route index element={<Dashboard />} />
                    <Route path='clients'>
                        <Route index element={<Clients />} />
                        <Route path=':cliendId' element={<Profile />} />
                        <Route path='new' element={<NewClient />} />
                    </Route>
                    <Route path='assessments' element={<Assessments />} />
                    <Route path='session'>
                        <Route index element={<Session />} />
                        <Route path='new' element={<NewSession />} />
                    </Route>
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
