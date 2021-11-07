const admin = require('firebase-admin');
const serviceAccount = require('./artsociety-8b2b9-88e9f2433cbf.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

db.collection("Users").add({
        Nombre: "Pedro",
        Photo: "www.photo123.com",
        DNI: 8872755
    })
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });


db.collection("Obra").add({
        Images: "www.images.com",
        video: "www.video.com",
        title: "Obra",
        description: "La vida despues de la muerte no es mas que una vida sin poder verte verte",
        Precio: 25000,
        quantity: 26
    })
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });

db.collection("Interface").add({
        comentary: "Esta es la idea a mostrar",
        likes: 25
    })
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });