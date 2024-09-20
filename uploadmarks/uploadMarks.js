import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";

const firebaseConfig = { 
    apiKey: "AIzaSyDT0FqSM_CaqpwMup6GeavHAx6n_JW_oXs",
    authDomain: "administrator-1e39c.firebaseapp.com",
    projectId: "administrator-1e39c",
    storageBucket: "administrator-1e39c.appspot.com",
    messagingSenderId: "592048194608",
    appId: "1:592048194608:web:e29d6d41973ad303d299f5",
    measurementId: "G-MNY6SBX5B9"  };
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

document.getElementById("uploadMarksForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const course = document.getElementById("course").value;
    const studentId = document.getElementById("studentId").value;
    const marks = document.getElementById("marks").value;
    const totalMarks = document.getElementById("totalMarks").value;
    const grade = document.getElementById("grade").value;

    try {
        await setDoc(doc(db, "marks", studentId), {
            course,
            marks,
            totalMarks,
            grade,
        });

        alert("Marks uploaded successfully!");
    } catch (err) {
        alert("Error uploading marks: " + err.message);
    }
});
