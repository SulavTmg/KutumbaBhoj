import { ReactNode } from "react";

interface Role {
  pageName: string;
  roles: {
    view: boolean;
    edit: boolean;
    delete: boolean;
  };
}

type ModalProps = {
  onClose: () => void;
  onSave?: (roles: Role[]) => void;
  children: ReactNode;
  open: boolean;
  roles?: Role[];
};

const Modal = ({ onClose, children, open }: ModalProps) => {
  return (
    <div
      onClick={onClose}
      className={`fixed inset-0 z-30 flex justify-center items-center transition-colors ${
        open ? "visible bg-[rgba(0,0,0,.5)]" : "invisible"
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-white rounded-xl shadow p-6 transition-all ${
          open ? "scale-100 opacity-100 " : "scale-125 opacity-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
