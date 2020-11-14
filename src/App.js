// import logo from './logo.svg';
import './App.css';
import Comments from './components/comments/Comments';
import Posts from './components/posts/Posts';
import Users from './components/Users/Users';
import { ApiService } from './data/services/ApiService'

function App() {

  // let apiService = new ApiService();

  return (
    <div className="d-flex align-items-start">
           <div className="p-2"><Users/></div>
           <div className="p-2"><Posts/></div>
           <div className="p-2"><Comments/></div>
       </div>

    // <div>
    //   <Users/>
    //   <Posts/>
    //   <Comments/>
    // </div>
    );
  }
  
  // <button type="button" class="btn btn-primary">Primary</button>
export default App;
