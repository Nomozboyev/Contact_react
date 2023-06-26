import { createContext, useEffect, useState } from "react";

export const ContactContext = createContext();
export const ContactProvider = ({ children }) => {
  const LocalContact = JSON.parse(localStorage.getItem("allContact"));

  const [Contact, setContact] = useState({});
  const [AllContact, setAllContact] = useState(
    LocalContact ? LocalContact : []
  );
  useEffect(() => {
    localStorage.setItem("allContact", JSON.stringify(AllContact));
  }, [AllContact]);
  return (
    <ContactContext.Provider
      value={[
        { Contact, setContact },
        { AllContact, setAllContact },
      ]}
    >
      {children}
    </ContactContext.Provider>
  );
};
