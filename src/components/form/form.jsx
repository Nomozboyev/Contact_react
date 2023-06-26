import { UploadOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Input, Upload, Form } from "antd";
import { v4 as ID } from "uuid";
import "./form.scss";
import { useContext, useState } from "react";
import { ContactContext } from "../../context/contactContext";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../uploate";

export const UserForm = () => {
  let [{ Contact, setContact }, { setAllContact }] = useContext(ContactContext);
  let [img, setImg] = useState(null);
  let [oneurl, setOneurl] = useState("");

  let fileUpload = (evnt) => {
    console.log(evnt);
    setImg(evnt.file.originFileObj);

    if (img === null) {
      return;
    }
    let uploadRef = ref(storage, `contactImg/${img.name + ID()}`);
    uploadBytes(uploadRef, img).then((snapshot) =>
      getDownloadURL(snapshot.ref).then((url) => {
        alert("uddalading");
        console.log(url);
        setOneurl(url);
      })
    );
  };

  const createContact = (value) => {
    // const uploadRef = ref(storage, "contactImg/");

    setContact({
      id: ID(),
      name: value.username,
      phone: value.number,
      picture: oneurl,
    });
    setAllContact((prev) => [...prev, Contact]);
  };
  return (
    <>
      <Form className="userForm" onFinish={createContact}>
        <Form.Item
          name="picture"
          rules={[
            {
              required: false,
              message: "Please input your picture!",
            },
          ]}
        >
          <Upload size="large" onChange={fileUpload}>
            <Button size="large" icon={<UploadOutlined />}>
              Upload a picture
            </Button>
          </Upload>
        </Form.Item>

        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input type="text" size="large" placeholder="User name" />
        </Form.Item>
        <Form.Item
          name="number"
          rules={[
            {
              required: true,
              message: "Please input your number!",
            },
          ]}
        >
          <Input
            type="text"
            size="large"
            placeholder="Number"
            value={Contact.number}
          />
        </Form.Item>
        <Button
          type="primary"
          shape="circle"
          icon={<PlusOutlined />}
          htmlType="submit"
        ></Button>
      </Form>
    </>
  );
};
