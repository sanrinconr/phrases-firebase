const functions = require("firebase-functions");
const admin = require("firebase-admin")
admin.initializeApp()


const express = require("express");
const cors = require("cors");
const { QuerySnapshot } = require("@google-cloud/firestore");

const app = express();

// Automatically allow cross-origin requests
app.use(cors({origin: true}));

// Add middleware to authenticate requests
app.use(express.json()); // Used to parse JSON bodies

// build multiple CRUD interfaces:
app.post("/add", (req, res) => {
    admin.firestore().collection("words")
    .add({
        name:req.body.name
    })
    .then(()=>{
        return res.send("Added!")
    })
    .catch((err)=>{
        return res.send("Error ocurred: "+err.message)
    })
})
app.get("/getAll", (req, res) => {
    admin.firestore().collection("words").get()
    .then(querySnapshot=>{
        let a = querySnapshot.docs.map(doc=>{
            return ({ name:doc.data().name })
        })
        return res.send(a)
    })
    .catch(err=>{
        return res.send(err.message)
    })
})


exports.words = functions.https.onRequest(app)
