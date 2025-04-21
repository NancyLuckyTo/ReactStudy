// 项目的根组件
// App -> index.js -> public/index.html(root)

const style = {
  color: "yellow",
  fontSize: "50px",
};

function App() {
  return (
    <div className="App">
      <span style={{ color: "red", fontSize: "50px" }}>this is span</span>
      <span style={style}>this is span</span>
    </div>
  );
}

export default App;
