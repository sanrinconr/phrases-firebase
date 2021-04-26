import Home from "./pages/Home";
import "./App.scss"
import { FooterView} from "./pages/Home/components/Footer/FooterView";
import { preloadDatabase, preloadFirestore, preloadRemoteConfig, preloadStorage, useFirebaseApp } from "reactfire";

export default function App() {
  const firebaseApp = useFirebaseApp();
  console.log(process.env.REACT_APP_DBLOCAL)
  if(process.env.REACT_APP_DBLOCAL === true){
    const preloadSDKs = firebaseApp => {
      return Promise.all([
        preloadFirestore({
          firebaseApp,
          setup: firestore => {
          return firestore().settings({host: 'localhost:8080', ssl: false});
        }
        }),
      ]);
    };
    preloadSDKs(firebaseApp).then(() => Promise.resolve());
  }
  return <div>
      <Home/>
      <FooterView/>
  </div>
}

