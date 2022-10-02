import { Nav as Navbar } from "./components/navbar";
import Home from "./pages/home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./pages/create";
import BlogDetails from "./pages/blogDetails";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="max-w-xl my-10 mx-auto p-5">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blog/:id">
              <BlogDetails />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
