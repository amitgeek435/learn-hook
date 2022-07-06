import { DatePicker, message, Alert } from "antd";
import { CopyOutlined, TwitterOutlined, StarTwoTone } from "@ant-design/icons";
import { useState } from "react";

const LearnAntd = () => {
  const [date, setDate] = useState(null);
  const handleChange = (value) => {
    console.log(value);
    message.info(
      `Selected Date: ${value ? value.format("YYYY-MM-DD") : "None"}`
    );
    setDate(value);
  };
  return (
    <>
      <div className="container text-center">
        <h1 className=" m-0">LearnAntd</h1>
        <DatePicker onChange={handleChange} />
        <div style={{ marginTop: 16 }}>
          <Alert
            message="Selected Date"
            description={date ? date.format("YYYY-MM-DD") : "None"}
          />
          <CopyOutlined
            style={{ fontSize: "36px", color: "#07c", margin: "5px 20px" }}
          />
          <TwitterOutlined
            style={{ fontSize: "36px", color: "#08c", margin: "5px 20px" }}
          />
          <StarTwoTone
            style={{ fontSize: "36px", color: "#000", margin: "5px 20px" }}
          />
        </div>
      </div>
    </>
  );
};

export default LearnAntd;
