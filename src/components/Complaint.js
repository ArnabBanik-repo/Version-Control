import { Box, flexbox, styled } from "@mui/system";
import React from "react";

const ComplaintBox = styled(Box)({
  display: "grid",
  gridTemplateColumns: "1fr 4fr 1fr",
  alignItems: "center",
  backgroundColor: "#fff",
  color: "#000",
});

const UserIcon = styled(Box)({
  borderRadius: "100%",
  border: "1px solid #FF742D",
  color: "#FF742D",
});

const Complaint = ({ complaint }) => {
  return (
    <ComplaintBox>
      <UserIcon>{complaint.userInit}</UserIcon>
      <ComplaintTitle>{complaint.title}</ComplaintTitle>
      {/* <Votes></Votes> */}
    </ComplaintBox>
  );
};

export default Complaint;
