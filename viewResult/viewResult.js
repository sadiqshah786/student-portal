    
       
       
       import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getFirestore, collection, query, where, getDocs } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";

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

document.getElementById("viewResultForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const cnic = document.getElementById("cnic").value;
    const resultDiv = document.getElementById("result");

    try {
        const q = query(collection(db, "users"), where("cnic", "==", cnic));
        const querySnapshot = await getDocs(q);

        querySnapshot.forEach((doc) => {
            const data = doc.data();

            const marks = parseInt(data.marks);
    const totalMarks = parseInt(data.totalMarks);


    console.log(marks);
    console.log(totalMarks);

    resultDiv.innerHTML = ` <div style="display:flex; align-items: center; justify-content: space-around;">
       
     <p>Name: ${data.firstName} ${data.lastName}</p>
                <p>Email: ${data.email}</p>
                <p>Marks: ${data.marks}</p>
                <p>Grade: ${data.grade}</p>
                <p>totalMarks: ${data.totalMarks}</p>
          </div>
    `;
});

        if (querySnapshot.empty) {
            resultDiv.innerHTML = "<p>No result found for this CNIC.</p>";
        }
    } catch (err) {
        alert("Error fetching result: " + err.message);
    }
});
