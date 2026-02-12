// ? Working with Multiple JSX Slots

// with one slot, you only have one clidren props
function CardOneSlot({ children }) {
  return <div className="card">{children}</div>;
}

// ? With multiple slots, you create several named places where JSX can go.
function Card({ header, content, footer }) {
  return (
    <div className="card">
      <div className="card-header">{header}</div>
      <div className="card-body">{content}</div>
      <div className="card-footer">{footer}</div>
    </div>
  );
}

// ? Modal with multiple slots (super common)
function Modal({ title, actions, children }) {
  return (
    <div className="modal">
      <h2>{title}</h2>

      <div className="modal-content">{children}</div>

      <div className="modal-actions">{actions}</div>
    </div>
  );
}
// and we can use it like that:
function App() {
  return (
    <>
      <Card
        header={<h2>Profile</h2>}
        content={<p>Welcome back!</p>}
        footer={<button>Edit</button>}
      />
      <Modal
        title="Delete item?"
        actions={
          <>
            <button>Cancel</button>
            <button>Delete</button>
          </>
        }
      >
        <p>Are you sure you want to delete this?</p>
      </Modal>
    </>
  );
}
