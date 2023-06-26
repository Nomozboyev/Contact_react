import { useContext, useRef, useState } from "react";
import {   UserForm } from "../form";
import { Switch, Input, Button } from "antd";
import { ContactContext } from "../../context/contactContext";
import { SearchOutlined } from "@ant-design/icons";
 
export const Navigate = () => {
    const { Search } = Input;
    const searchInput=useRef()
    let [,{AllContact}]=useContext(ContactContext)

    let [formChecked,setFormChecked]=useState(false);
    let [valueinput,setValueinput]=useState('')
    let sarchContact = (e) => {
        setValueinput(e.target.value)
    };
    let sarchContactSubmit=()=>{
       let searchFiltred = AllContact.filter(
        (contact) => valueinput == contact.name
      );
      console.log(searchFiltred);
    }
  return (
    <>
      <div className="navBar">
        <div>
          {" "}
          <Switch
            style={{
              marginBottom: "20px",
            }}
            checked={formChecked}
            checkedChildren="User form of"
            unCheckedChildren="User form On"
            onChange={() => {
              setFormChecked(!formChecked);
            }}
          />
        </div>
        {formChecked ? <UserForm /> : null}
        <Search
          placeholder="Search contact"
          size="large"
          ref={searchInput}
          onChange={sarchContact}
          enterButton={
            <Button type="primary " onClick={sarchContactSubmit}>
              <SearchOutlined />
            </Button>
          }
          style={{
            width: "680px",
            marginBottom: "30px",
          }}
        />
      </div>
    </>
  );
};
