import './App.css';
import Logo from './logo.jsx';
import TopMenu from './top-menu.jsx';
import SideMenu from './side-menu.jsx';
import MainSVGCanvas from './main-svgcanvas.jsx';
import Button from './button.jsx';
import bt from './button-funcs.js';

function App() {
  return (
    <div>
    <div className = 'inline-group mpz'>
      <Logo></Logo>
      <TopMenu>
        <div class = 'inline-group'>
        <Button
          id={'import-button'} name={'Open'}
          func={() => {bt.import_button()}}>
        </Button>

        <Button
          id={'export-button'} name={'Save'}
          func={() => {bt.export_button()}}>
        </Button>
        
        <Button
          id={'layers-button'} name={'Layers'}
          func={() => {bt.layers_button()}}>
        </Button>
        </div>
      </TopMenu>
    </div>
    <div className = 'inline-group mpz'>
      <SideMenu></SideMenu>
      <MainSVGCanvas></MainSVGCanvas>
    </div>
  </div>
  );
}

export default App;
