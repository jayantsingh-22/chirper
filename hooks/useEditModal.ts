import {create} from 'zustand';

interface EditModalStore {
  isOpen: boolean;
  onClose:() => void;
  onOpen:() => void;
}

const useEditModal = create<EditModalStore>((set) => ({
  isOpen:false,
  onOpen:() => set({isOpen:true}),
  onClose:() => set({isOpen:false})
}));

export default useEditModal;