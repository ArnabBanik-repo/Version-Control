import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import File from "./File";
import reposData from "../data/reposData";
import useDidMountEffect from "../hook";
const Repo = (props) => {
  const [alldata, setalldata] = useState(
    JSON.parse(localStorage.getItem("alldata")) || reposData
  );
  const [files, setFiles] = useState([]);
  useEffect(() => {
    for (let i = 0; i < alldata.length; i++) {
      if (
        alldata[i].id ===
        props.routerProps.location.pathname.substring(
          props.routerProps.location.pathname.lastIndexOf("/") + 1,
          props.routerProps.location.pathname.length
        )
      ) {
        setFiles(alldata[i].files);
        break;
      }
    }
    if (localStorage.getItem("alldata") !== JSON.stringify(alldata)) {
      localStorage.setItem("alldata", JSON.stringify(alldata));
      console.log("Saved!");
    }
  }, [alldata]);

  // useEffect(() => {}, [files]);

  useDidMountEffect(() => {
    // console.log(files);
    let temp = [];
    for (let i of alldata) {
      if (
        i.id ===
        props.routerProps.location.pathname.substring(
          props.routerProps.location.pathname.lastIndexOf("/") + 1,
          props.routerProps.location.pathname.length
        )
      ) {
        temp.push({ ...i, files });
      } else {
        temp.push(i);
      }
    }
    // setalldata(temp);
    // console.log(files);
    // console.log(temp);
    localStorage.setItem("alldata", JSON.stringify(temp));
  }, [files]);

  const handleFileUpload = (e) => {
    const x = `f${parseInt(Math.random() * 100 + 1)}`;
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsText(file);
    let flag = false;
    reader.onload = () => {
      const t = reader.result;
      if (files) {
        for (let i = 0; i < files.length; i++) {
          if (files[i].name === file.name) {
            files[i].content.push(t);
            flag = true;
            console.log("Not Uploaded");
            break;
          }
        }
      }
      if (!flag) {
        const auth = prompt("Author?");
        if (files.length > 0)
          setFiles([
            ...files,
            {
              id: x,
              name: file.name,
              author: auth,
              uploaded: "1.1.1",
              content: [t],
            },
          ]);
        else
          setFiles([
            {
              id: x,
              name: file.name,
              author: "Arnab",
              uploaded: "1.1.1",
              content: [t],
            },
          ]);
        console.log("Uploaded");
      }
    };
  };

  return (
    <Box sx={{ background: "black", height: "100vh", padding: "9rem 10rem" }}>
      <Typography
        color={"white"}
        variant="h2"
        sx={{ textAlign: "center", fontWeight: "normal" }}
      >
        Repository Files
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          padding: "3rem",
          placeItems: "center",
          gridGap: "1.5rem",
        }}
      >
        {files &&
          files.map((file, idx) => {
            return (
              <File
                key={idx}
                {...file}
                repoId={props.routerProps.location.pathname.substring(
                  props.routerProps.location.pathname.lastIndexOf("/") + 1,
                  props.routerProps.location.pathname.length
                )}
              />
            );
          })}
      </Box>
      <input type="file" onChange={handleFileUpload} />
    </Box>
  );
};

export default Repo;
