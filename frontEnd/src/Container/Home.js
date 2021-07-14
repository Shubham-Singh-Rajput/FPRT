import Modal from "../Component/Modal";
import {  useState } from "react";
import { useSelector } from "react-redux";
const up =
  "https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-up-01-512.png";
const down =
  "https://www.freeiconspng.com/thumbs/white-arrow-png/white-down-arrow-png-2.png";

const Home = () => {
  const [model, setModel] = useState(true);
  const [image, setimage] = useState(down);
  const [data, setData] = useState("Hide the Image");
  const selecteImage=useSelector(({SelectedImage})=>SelectedImage)
  const [imageheight,setImageHeight]=useState('460px')
  const [styles,setstyle]=useState({ height: "90px",
  position: "fixed",
  top: "82vh",
  width: "100vw",})
  const showModal = () => {
    if (model === true) {
      setModel(false);
      setimage(up);
      setData("Show the Image");
      setstyle({       height: "90px",
      position: "fixed",
      top: "92vh",
      width: "100vw",})
      setImageHeight('536px')
    } else {
      setModel(true);
      setimage(down);
      setData("Hide the Image");
      setstyle({
        height: "90px",
        position: "fixed",
        top: "82vh",
        width: "100vw",
      });
      setImageHeight('460px')
    }
  };
  return (
    <>
    <div style={{height:imageheight, width:"100%",background:'white',overflow:'hidden',display:'flex',justifyContent:'center',alignItems:'center'}} ><img  src={selecteImage?.imageUrl} className="img-fluid"alt='imagess'></img></div>
      <div style={styles}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            background: "black",
            color: "white",
          }}
        >
          <div><div> {selecteImage?.description},{selecteImage?.title}</div> <div>Photo by : {selecteImage?.name}</div></div>
          <div onClick={showModal}>
            {data}
            <img
              style={{ padding: "2px" }}
              src={image}
              height="15px"
              alt="up"
            ></img>
          </div>
        </div>
        {model === true ? <Modal  /> : null}
      </div>
    </>
  );
};
export default Home;
