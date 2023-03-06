import { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { setGlobalName } from "../redux/reducers/nameSlice";

const Home = () => {
  const [name, setName] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setGlobalName(name));
    navigate("/game");
  };

  return (
    <div className="home">
      <h1>Create a new player</h1>
      <form onSubmit={handleSubmit}>
        <input
          name={name}
          type="text"
          placeholder="Name *"
          onChange={handleChange}
        />
        <button disabled={name.length <= 0}>Join</button>
      </form>
    </div>
  );
};

export default Home;
