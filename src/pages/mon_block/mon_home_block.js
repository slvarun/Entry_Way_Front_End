import "./mon_home_block.css";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/authcontext.js";
import Reserve from "../reserve/reserve";

const Mon_Block = ({ item }) => {
  const { user } = useContext(AuthContext);
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();
  const handleClick = () => {
    if (!user) {
      navigate("/auth/login");
    } else {
      navigate(`/monuments/${item._id}`);
    }
  };

  return (
    <div className="cover">
      <div className="mon_container">
        <div className="mon_cards">
          <div className="card">
            <div className="mon_image">
              <img className="mon_img" src={item.photos} alt="" />
              <div>
                <div className="monrating">{`☆ ${item.rating}`}</div>
              </div>
              <div className="mon_min_details">
                <div className="name">{`${item.name}`}</div>
                <div className="place">{`${item.city}`}</div>
              </div>
            </div>
          </div>
          <button className="siCheckbutton" onClick={handleClick}>
            Search availability
          </button>
        </div>
      </div>
      {openModal && <Reserve setOpen={setOpenModal} />}
    </div>
  );
};

export default Mon_Block;
