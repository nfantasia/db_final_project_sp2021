import ArtistList from "./artists/artist-list";
import ArtistFormEditor from "./artists/artist-form-editor";
const {HashRouter, Route} = window.ReactRouterDOM; 
const App = () => {
    return (
        <div className="container-fluid">
            <HashRouter>
                <Route path={["/artists", "/"]} exact={true}>
                    <ArtistList/>
                </Route>
                <Route path="/artists/:id" exact={true}>
                    <ArtistFormEditor/>
                </Route>
            </HashRouter>
        </div>
    );
}

export default App;
