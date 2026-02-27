import { useRef, forwardRef, useImperativeHandle } from "react";
import { createPortal } from "react-dom";

// ?  For older versions we need to use forwardRef
const ResultModal = forwardRef(function ResultModal({ targetTime, remainingTime, onReset }, ref) {
  const dialog = useRef();

  const userLost = remainingTime <= 0;
  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

  // useImperativeHandle() accepts two arguments (ref Object, function)
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog ref={dialog} className="result-modal" onClose={onReset}>
      {userLost && <h2>You lost</h2>}
      {!userLost && <h2>Your score: {score}</h2>}
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped a timer <strong>{(remainingTime / 1000).toFixed(2)} seconds left.</strong>
      </p>
      <form method="dialog" action="" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById('modal')
  );
});
export default ResultModal;

// ? Passing ref direcly as props. This only works in React 19+ versions
// export default function ResultModal({ref, result, targetTime }) {
//   return (
//     <dialog ref={ref} className="result-modal">
//       <h2>You {result}</h2>
//       <p>The target time was <strong>{targetTime} seconds.</strong></p>
//       <p>You stopped a timer <strong>X seconds left.</strong></p>
//       <form method="dialog" action="">
//         <button>Close</button>
//       </form>
//     </dialog>
//   );
// }
