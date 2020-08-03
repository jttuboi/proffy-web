import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
/* yarn add react-router-dom */
/* react-router-dom, is not writed with typescript, so it needs install yarn add @types/react-router-dom */

import Landing from './pages/Landing';
import TeacherList from './pages/TeacherList';
import TeacherForm from './pages/TeacherForm';

function Routes() {
    return (
        /* http://localhost:3000/ */
        /* http://localhost:3000/study */
        /* http://localhost:3000/give-classes */
        <BrowserRouter>
            <Route path="/" exact component={Landing} />
            <Route path="/study" component={TeacherList} />
            <Route path="/give-classes" component={TeacherForm} />
        </BrowserRouter>
    );
}

export default Routes;