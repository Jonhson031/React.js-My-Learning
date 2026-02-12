// ? Forwarding Props To Wrapped Elements
// is passing props you receive down to another element/component inside.

function Card(props) {
  return (
    <div className="card" {...props}>
      <h2>Some title</h2>
    </div>
  );
}

export default function App() {
  return (
    <>
      <Card id="main-card" className="highlighted" />
      <Card id="second-card" className="hidden" />
    </>
  );
}

