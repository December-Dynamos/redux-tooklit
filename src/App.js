import CounterApp from './Components/CounterApp';
import SongList from './Components/SongList';
import SongDetails from './Components/SongDetails';


const App = () => {
  return(
    <div>
      
      <CounterApp />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <SongList />
        <SongDetails />
      </div>
     

    </div>
  )
}

export default App;