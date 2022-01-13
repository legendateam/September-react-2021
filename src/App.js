import './App.css';
import Users from "./components/Users/Users";
import Posts from "./components/Posts/Posts";
import Comments from "./components/Comments/Comments";

function App() {
    let flex = 'd-flex';
        return (
                <div className="App">
                    <div className={flex}>
                        <Users/>
                        <Posts/>
                    </div>
                    <Comments/>
                </div>
        );
}

export default App;

