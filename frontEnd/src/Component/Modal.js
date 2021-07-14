import { memo, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import HomeScreen from "./../Redux/Action/selectedImage";

const Modal = () => {
  const [allImage, setAllimage] = useState([]);
  const [err, setErr] = useState("");
  const dispatch = useDispatch();
  const selecteImage = useSelector(({ SelectedImage }) => SelectedImage);
  useEffect(() => {
    fetch("https://frptbackend.herokuapp.com/allpublicimage")
      .then((d) => d.json())
      .then((d) => {
        if (Object.keys(d.err).length > 0) {
          setErr(d.err);
        } else {
          setErr("");
          setAllimage(d.data);
          if (Object.keys(selecteImage).length === 0)
            dispatch(HomeScreen.selectedImage(d.data[0]));
        }
      })
      .catch((e) => {
        setErr("some error occur");
      });
  }, [dispatch, selecteImage]);
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          background: "white",
          width: "100%"
        }}
      >
        {allImage.map((i, key) => {
          return (
            <div
              onClick={() => dispatch(HomeScreen.selectedImage(i))}
              key={key}
            >
              <img src={i.imageUrl} width="80px" height="60px" alt="images" />
            </div>
          );
        })}
      </div>
      {err.length > 0 ? <div>{err}</div> : null}
    </>
  );
};
export default memo(Modal);
