import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";

const firebaseConfig = { 
    apiKey: "AIzaSyDT0FqSM_CaqpwMup6GeavHAx6n_JW_oXs",
    authDomain: "administrator-1e39c.firebaseapp.com",
    projectId: "administrator-1e39c",
    storageBucket: "administrator-1e39c.appspot.com",
    messagingSenderId: "592048194608",
    appId: "1:592048194608:web:e29d6d41973ad303d299f5",
    measurementId: "G-MNY6SBX5B9" };
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

document.getElementById("addStudentForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const cnic = document.getElementById("cnic").value;

    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const uid = res.user.uid;

        await setDoc(doc(db, "users", uid), {
            firstName,
            lastName,
            email,
            cnic,
            userType: "Student",
            createdAt: new Date()
        });

        alert("Student added successfully!");
    } catch (err) {
        alert("Error adding student: " + err.message);
    }
});
