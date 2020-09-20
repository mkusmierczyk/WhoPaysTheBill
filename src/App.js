import React from 'react';
import Table from "./table";
import * as firebase from 'firebase/app';
import 'firebase/auth';

function App() {
    const app = firebase.initializeApp( {
        apiKey: "AIzaSyBFskPezbFasOXAl6CVnOdyVBB XGseCMRE",
        authDomain: "whopaysthebill-42935.firebaseapp.com",
        databaseURL: "https://whopaysthebill-42935.firebaseio.com",
        projectId: "whopaysthebill-42935",
        storageBucket: "whopaysthebill-42935.appspot.com",
        messagingSenderId: "243527851684",
        appId: "1:243527851684:web:dd7c4d91c3643ba81f9031",
        measurementId: "G-ECLHGS21B5"
    });
    return (
        <div className="App">
            <Table/>


        </div>
    );
}

export default App;
