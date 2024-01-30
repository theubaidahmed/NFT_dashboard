import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './utils/axios';

//pages
import Header from './components/Header';
import Cilents from './pages/Clients';
import AuthorizeRouter from './router/AuthorizeRouter';
import Assessments from './pages/Assessments';
import Session from './pages/Session';
import ClientGoals from './pages/ClientGoals';
import SessionReport from './pages/SessionReport';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import ProgressReport from './pages/ProgressReport';

const App = () => {
    return (
        <Header>
            <Routes>
                <Route path='/' element={<AuthorizeRouter />}>
                    <Route index element={<Dashboard />} />
                    <Route path='clients' element={<Cilents />} />
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
