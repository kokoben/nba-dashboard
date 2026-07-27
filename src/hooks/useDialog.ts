import { useRef, useEffect } from 'react';

function useDialog(isOpen: boolean) {
  // state
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  // effects
  useEffect(() => {
    const dialog = dialogRef.current;

    if (!dialog) {
      return;
    }

    if (isOpen && !dialog.open) {
      dialog.showModal();
    } else if (!isOpen && dialog.open) {
      dialog.close();
    }
  }, [isOpen]);

  // functions
  function requestClose(): void {
    dialogRef.current?.close();
  }

  return {
    dialogRef,
    requestClose,
  };
};

export default useDialog;
