import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/system";
import React, { useEffect, useState } from "react";
import reposData from "../data/reposData";

const Lines = styled(Typography)({
  display: "block",
});

const FileViewer = (props) => {
  const x = props.location.pathname.lastIndexOf("/");
  // console.log(
  //   "file ID: " +
  //     props.location.pathname.substring(x + 1, props.location.pathname.length) +
  //     " repo ID: " +
  //     props.location.pathname.substring(
  //       props.location.pathname.lastIndexOf("/", x),
  //       x - 1
  //     )
  // );
  const [alldata, setalldata] = useState(
    JSON.parse(localStorage.getItem("alldata")) || reposData
  );
  const [file, setFile] = useState();
  const [fileContents, setFileContents] = useState();
  const [filename, setFilename] = useState();
  useEffect(() => {
    for (let i = 0; i < alldata.length; i++) {
      if (
        alldata[i].id ===
        props.location.pathname.substring(
          props.location.pathname.lastIndexOf("/", x - 1) + 1,
          x
        )
      ) {
        for (let j of alldata[i].files) {
          // console.log(j);
          if (
            j.id ===
            props.location.pathname.substring(
              x + 1,
              props.location.pathname.length
            )
          ) {
            setFile(j);
            setFilename(j.name);
            setFileContents(j.content[j.content.length - 1].split("\n"));

            break;
          }
        }
      }
    }
    if (localStorage.getItem("alldata") != JSON.stringify(alldata))
      localStorage.setItem("alldata", JSON.stringify(alldata));
  }, [alldata]);

  const [isEditing, setEditing] = useState(false);
  const editContent = () => {
    setEditing(true);
  };
  const handleChange = (e) => {
    setFileContents(e.target.value.split("\n"));
  };
  const endEditing = () => {
    setEditing(false);
    let temp = [];
    for (let i = 0; i < alldata.length; i++) {
      if (
        alldata[i].id ===
        props.location.pathname.substring(
          props.location.pathname.lastIndexOf("/", x - 1) + 1,
          x
        )
      ) {
        let t = [];
        for (let j of alldata[i].files) {
          if (
            j.id ===
            props.location.pathname.substring(
              x + 1,
              props.location.pathname.length
            )
          ) {
            t.push({ ...j, content: [...j.content, fileContents.join("\n")] });
          } else {
            t.push(j);
          }
        }
        temp.push({ ...alldata[i], files: t });
      } else {
        temp.push(alldata[i]);
      }
    }
    setalldata(Array.from(new Set(temp)));
  };
  const showVersion = (version) => {
    setFileContents(file.content[version].split("\n"));
  };
  return (
    <Box sx={{ padding: "10rem" }}>
      {filename && (
        <Typography sx={{ marginBottom: "1rem" }} variant="h3">
          {filename}
        </Typography>
      )}
      {fileContents && isEditing ? (
        <textarea
          rows={30}
          cols={100}
          style={{ fontSize: "1rem" }}
          onChange={handleChange}
          value={fileContents.join("\n")}
        ></textarea>
      ) : (
        fileContents &&
        fileContents.map((line, idx) => (
          <Lines style={{ fontSize: "1rem" }} key={idx}>
            {line}
          </Lines>
        ))
      )}
      {fileContents && isEditing ? (
        <Button onClick={endEditing}>Done</Button>
      ) : (
        <Button onClick={editContent}>Edit</Button>
      )}
      {file &&
        file.content.map((version, idx) => {
          return (
            <Button
              key={idx}
              onClick={() => {
                showVersion(idx);
              }}
            >
              See Version {idx}
            </Button>
          );
        })}
    </Box>
  );
};

export default FileViewer;
