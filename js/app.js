const cheatsheets = [
  {
    title: "Incursion Temple",
    image: "temple.png"
  },
  {
    title: "Heist Rougues",
    image: "heist_rogues.png"
  },
  {
    title: "Blight Towers",
    image: "towers.png"
  },
  {
    title: "Essense upgrades",
    image: "essences.png"
  },
  {
    title: "Leveling",
    image: "leveling.jpeg"
  },
  {
    title: "Trader currency rates",
    image: "currency.png"
  },
]


function CheatSheet(props) {
  const url = 'images/' + props.image

  return (
    <div key={props.image} className="pure-u-1-3">
      <div style={{padding: '10px'}}>
        <h3>{props.title}</h3>
        <a href={url} target="_blank">
          <img src={url} style={{width: '100%'}} />
        </a>
      </div>
    </div>
  )
}

function App() {
  const sheets = cheatsheets.map(CheatSheet)
  return (
    <div>
      <center><h1>Path Of Exile Cheat Sheets</h1></center>
      <center>
        Images belong to their respective authors, I just collected them here.
        If you have ideas to contribute:{' '}
        <a href="https://github.com/maximvl/poe-cheatstheets" target="_blank">
          <img src="images/github.png" style={{width: '30px', verticalAlign: 'middle'}} />
        </a>
      </center>
      <div className="pure-g">
        {sheets.slice(0,3)}
      </div>
      <div className="pure-g">
        {sheets.slice(3,6)}
      </div>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
