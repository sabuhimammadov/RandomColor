import { ColorList } from "./components/ColorList";

const colorArr = ['#FAEBD7',
  '#00FFFF',
  "red",
  '#7FFFD4',
  '#F0FFFF',
  '#F5F5DC',
  '#FFE4C4',
  '#000000',
  '#FFEBCD',
  '#0000FF',
  '#8A2BE2',
  '#A52A2A',
  '#DEB887',
  '#5F9EA0',
  '#7FFF00',
  '#D2691E',
  '#FF7F50',
  '#6495ED',
  '#FFF8DC',
  '#DC143C',
  '#00FFFF',
  '#00008B',
  '#008B8B',
  '#B8860B',
  '#A9A9A9',
  '#006400',
  '#E9967A',
  '#2F4F4F',
  '#2F4F4F',
  '#00CED1',
  '#9400D3',
  '#FF1493',
  '#00BFFF',
  '#696969',
  '#696969',
  '#1E90FF',
  '#B22222',
  '#FFFAF0',
  '#228B22',
  '#DCDCDC',
  '#F8F8FF',
  '#FFD700',
  '#DAA520',
  '#808080',
  '#008000',
  '#ADFF2F',
  '#808080',
  '#F0FFF0',
  '#FF69B4',
  '#D3D3D3',
  '#90EE90',
  '#D3D3D3',
  '#FFB6C1',
  '#FFA07A',
  '#20B2AA',
  '#87CEFA',
  '#778899',
  '#778899',
  '#B0C4DE',
  '#FFFFE0',
  '#00FF00',
  '#00FA9A',
  '#FFC0CB',
  '#DDA0DD',]
function App() {
  return (
    <div className="App">
      <ColorList colorArr={colorArr} />
    </div>
  );
}

export default App;
