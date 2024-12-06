// ~/composables/useModal.js
export const useModal = () => {
  const isVisible = useState("modalVisibility", () => false); // State global

  const openModal = () => {
    isVisible.value = true;
  };

  const closeModal = () => {
    isVisible.value = false;
  };

  return { isVisible, openModal, closeModal };
};
