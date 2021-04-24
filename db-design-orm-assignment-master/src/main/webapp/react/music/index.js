import AlbumList from "./albums/album-list";
import TrackList from "./tracks/track-list";
import AlbumEditorForm from "./albums/album-editor-form";
import TrackEditorForm from "./tracks/track-editor-form";

const {HashRouter, Link, Route} = window.ReactRouterDOM;
 
const App = () => {
    console.log(window.ReactRouterDOM)
    return (
        <div className="container-fluid">
            <HashRouter>
                <Route path={["/albums", "/"]} exact={true}>
                    <AlbumList/>
                </Route>
                <Route path="/albums/:id" exact={true}>
                    <AlbumEditorForm/>
                </Route>
                <Route path="/albums/:albumId/tracks" exact={true}>
                    <TrackList/>
                </Route>
                <Route path="/tracks/:trackId" exact={true}>
                    <TrackEditorForm/>
                </Route>
            </HashRouter>
        </div>
    );
}

export default App;
