// ? Portals
// Portals let you render a component outside its normal DOM hierarchy.

// For this you need to create separate div element inside index.html:
<div id="modal"></div>;

import { createPortal } from "react-dom";
export default function Modal() {
  return createPortal(
    <div className="modal">
      <h1>Modal Title</h1>
      <p>Some content</p>
    </div>,
    document.getElementById("modal")
  );
}
