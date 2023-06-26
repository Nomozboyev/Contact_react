import { Avatar, Button, List } from "antd";
import "./userList.scss";
import { ContactContext } from "../../context/contactContext";
import { useContext } from "react";
import { DeletBtn } from "./btn/deletBtn/deletBtn";

export const UserList = () => {
  let [, { AllContact }] = useContext(ContactContext);

  return (
    <>
      <List className="userList" key='dfhbkjsdl;o.b.bfj,kjl'>
        {AllContact.length > 0
          ? AllContact.map((contact) => {
            // let URL=contact.picture.one
            console.log( contact.picture);
              if (contact.name) {
                return (
                  <>
                    {" "}
                    <List.Item className="listItem" key={"contact.id"}>
                      <List.Item.Meta
                        className="userAvatar"
                        avatar={
                          <Avatar
                            style={{ width: "70px", height: "70px " }}
                            className="userAvatar"
                            src={
                              contact.picture
                                ? contact.picture
                                : "https://firebasestorage.googleapis.com/v0/b/img-upload-3c7ec.appspot.com/o/contactImg%2Fphoto_2023-02-01_05-22-38.jpgdcae49b8-c254-40ed-8e5d-bf5dda8a7afa?alt=media&token=c13d3734-edff-446f-8853-972786a9bc87"
                            }
                          />
                        }
                        title={contact.name}
                        description={contact.phone}
                      />
                      <DeletBtn contact={contact} />
                    </List.Item>
                  </>
                );
              } else null;
            })
          : null}
      </List>
    </>
  );
};
