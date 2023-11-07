import React from "react";
import axios from "axios";
import "./mygym.css";
import { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { AppContext } from "../../../App";
const MyGym = () => {
  const [myGym, setMyGym] = useState([]);
  const navigate = useNavigate();
  const [updateGymName, setUpdateGymName] = useState();
  const [updateGymLocation, setUpdateGymLocation] = useState();
  const [updateGymTrainer, setUpdateGymTrainer] = useState();
  const [newTrainer, setNewTrainer] = useState("");
  const [buttonClass, setButtonClass] = useState("disable");

  const [updateGymMemberPrice, setUpdateGymMemberPrice] = useState({
    oneMonth: "",
    threeMonth: "",
    oneYear: "",
  });
  const [updateGymMember, setUpdateGymMember] = useState();

  const { token, userId } = useContext(AppContext);
  const [length, setLength] = useState(0);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/gym/posts/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {

        setMyGym(response?.data?.gym);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [length]);

  const handelShowMyGym = (myGym) => {
    const gymCard = myGym.map((oneGym, i) => {
      return (
        <div key={oneGym._id} className="mygym-container">
          <div className="updateGymInfo">
            <p>Current Name : {oneGym.name}</p>{" "}
            <input
              placeholder="update Your Gym Name"
              onChange={(e) => {
                setUpdateGymName(e.target.value);
              }}
            ></input>{" "}
          </div>
          <div className="updateGymInfo">
            <p>Current Location : {oneGym.location}</p>{" "}
            <input
              placeholder="update Your Gym Location"
              onChange={(e) => {
                setUpdateGymLocation(e.target.value);
              }}
            ></input>{" "}
          </div>
          <div className="updateGymInfo">
            <p>Current coach :</p> {createTrainerFiled(oneGym?.nameOfTriner, oneGym?._id)}{" "}
            <div className="addTrainer">
              <input
                placeholder="add  Coach"
                onChange={(e) => {
e?.target?.value?.trim()==""?setButtonClass("disable"):setButtonClass("enable")
                  setNewTrainer(e?.target?.value);
                }}
              ></input>{" "}
              <button 
                disabled={!newTrainer.trim()}
                id={buttonClass}
                onClick={() => {
                  
                    HandelAddNewTrainer(oneGym?._id, newTrainer.trim());
                }}
              >
                Add
              </button>{" "}
            </div>
          </div>
          <div className="updateGymInfo">
            <p>update MemberShip Price</p>
            {createPriceFiled(oneGym?.mempershipPrice)}{" "}
          </div>
          <div className="updateGymInfo">
            <p>Current number of Member : {oneGym?.numberOfMember}</p>{" "}
            <input
              placeholder="update Your Gym Facility"
              onChange={(e) => {
                setUpdateGymMember(e.target.value);
              }}
            ></input>{" "}
          </div>
          <div className="x">
            <button
              className="update-button"
              onClick={async () => {
                setUpdateGymMemberPrice(
                  updateGymMemberPrice.oneMonth == ""
                    ? (updateGymMemberPrice.oneMonth =
                      oneGym?.mempershipPrice?.oneMonth)
                    : null,
                  updateGymMemberPrice.threeMonth == ""
                    ? (updateGymMemberPrice.threeMonth =
                      oneGym?.mempershipPrice?.threeMonth)
                    : null,
                  updateGymMemberPrice.oneYear == ""
                    ? (updateGymMemberPrice.oneYear =
                      oneGym?.mempershipPrice?.oneYear)
                    : null
                );
                await axios.put(
                  `http://localhost:5000/gym/update/${oneGym._id}`,
                  {
                    name: updateGymName,
                    location: updateGymLocation,
                    nameOfTriner: updateGymTrainer,
                    mempershipPrice: updateGymMemberPrice,
                    numberOfMember: updateGymMember,
                  },
                  {
                    headers: {
                      Authorization: `Bearer ${token}`,
                    },
                  }
                );
                navigate("/gympost");
              }}
            >
              submit
            </button>{" "}
            <button
              onClick={async () => {
                await axios
                  .delete(`http://localhost:5000/gym/delete/${oneGym._id}`, {
                    headers: {
                      Authorization: `Bearer ${token}`,
                    },
                  })
                  .then(() => {
                    setLength(myGym.length);
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              }}
            >
              Delete This Gym{" "}
            </button>{" "}
          </div>
        </div>
      );
    });
    return gymCard;
  };

  const HandelDeleteTrainer = async (id, coach) => {

    const deletedTrainers = await myGym.map((obj) => {
      if (obj._id == id) {
        obj.nameOfTriner = obj.nameOfTriner.filter(c => c !== coach)
      }
      return obj
    })

    const currentGym = deletedTrainers.filter((gym) => {

      return gym?._id === id

    })


    setUpdateGymTrainer(currentGym[0]?.nameOfTriner)
    setMyGym(deletedTrainers)
  };
  const HandelAddNewTrainer = async (id, newTrainer) => {
    const addTrainers = await myGym.map((obj) => {
      if (obj._id == id) {
        const add = obj.nameOfTriner
        add.push(newTrainer)
        setUpdateGymTrainer(add)
      }
      return obj
    })
    setMyGym(addTrainers)
  };
  const createPriceFiled = (object) => {
    return Object.keys(object)?.map((price, i) => {
      return (
        <input
          key={i}
          type="number"
          name={`${price}`}
          placeholder={`Update price for one ${price}`}
          onChange={(e) => {
            setUpdateGymMemberPrice({
              ...updateGymMemberPrice,
              [price]: e.target.value,
            });
          }}
        />
      );
    });
  };

  const createTrainerFiled = (arr, objId) => {

    const filed = arr?.map((coach, i) => {
      return (
        <div key={i} className="update_coach">
          <p>{coach}</p>
          <button
            onClick={() => {

              HandelDeleteTrainer(objId, coach);
            }}
          >
            Delete
          </button>{""}
        </div>
      );
    });

    return filed;
  };

  return (
    <>
      <p className="b">
        Welcome {myGym[0]?.gymOwner.firstName} This is Your Gym Profile{" "}
      </p>

      {myGym?.length !== 0 ? (
        handelShowMyGym(myGym)
      ) : (
        <h1>
          You don't have gym profile yet Go to the{" "}
          <Link to="/addGym">Add My Gym</Link>
        </h1>
      )}
    </>
  );
};

export default MyGym;
