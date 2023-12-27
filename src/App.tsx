import Error1 from './components/Error1';
import Error2 from './components/Error2';
import Error3 from './components/Error3';
import Error4 from './components/Error4';
import Error5 from './components/Error5';
import Flags from './components/Flags';
import Header from './components/Header';
import Layer1 from './components/Layer1';

function App() {
  const randomError = Math.floor(Math.random() * (5 - 1 + 1) + 1);
  return (
    <main
      className="flex flex-col items-center justify-center w-screen h-screen
      bg-gradient-to-r from-UbPink to-UbOrange"
    >
      <div
        className="bg-UbDarkPurple rounded-t-lg shadow-xl w-11/12 h-5/6
        flex flex-col items-center justify-start overflow-hidden"
      >
        <Header />
        <div
          className="text-zinc-50 w-full py-1 px-2 h-full overflow-y-auto"
        >
          <Layer1 />
          { randomError === 1 ? <Error1 /> : null }
          { randomError === 2 ? <Error2 /> : null }
          { randomError === 3 ? <Error3 /> : null }
          { randomError === 4 ? <Error4 /> : null }
          { randomError === 5 ? <Error5 /> : null }
          <Flags />
        </div>
      </div>
    </main>
  );
}

export default App;
