
var teamname;
var bidval;
var database;

(function setup(){

    var firebaseConfig = {
            apiKey: "AIzaSyC4PM2Q-vPEggOk6PqVLnjvlhNHXe10sOk",
            authDomain: "db1hello.firebaseapp.com",
            databaseURL: "https://db1hello.firebaseio.com",
            projectId: "db1hello",
            storageBucket: "db1hello.appspot.com",
            messagingSenderId: "1041030219672",
            appId: "1:1041030219672:web:0134dbee15ad7ceb19cded",
            measurementId: "G-3DJ8408XEM"
      };
    
      firebase.initializeApp(firebaseConfig);
      console.log(firebase);

    }())

function Login(){
      database=firebase.database();
      var ref=database.ref('Bid');
      var data ={
          Name:document.getElementById("team").value,
          Bid:document.getElementById("bid").value
      }

     ref.push(data); 
     alert("A bid of "+ document.getElementById("bid").value +" has been submitted for Team "+document.getElementById("team").value);
}               
