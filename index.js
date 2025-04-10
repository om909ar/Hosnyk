import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';  // تأكد من أن App.js موجود في نفس المجلد

// تحديد العنصر الذي سيتم تحميل التطبيق فيه
const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
