import { Button } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { useContext } from "react";
import { ContactContext } from "../../../../context/contactContext";

export const DeletBtn=({contact})=>{
    const [, { AllContact, setAllContact }] = useContext(ContactContext);
    const id=contact.id
    const deleteContact=()=>{
        const deletFiltred = AllContact.filter(
          (delContact) =>  delContact.id !== id 
        );
        setAllContact(deletFiltred);

    }
    return (
      <>
        <Button
          onClick={deleteContact}
          danger={true}
          shape="circle"
          size="large"
          icon={<DeleteOutlined />}
        ></Button>
      </>
    );
}