import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import AddDelivery from "./AddDelivery";
import { User, MappedInterface } from "../../types";

import { connect } from "react-redux";

interface Props {
  user: User;
}

const DashboardRibbon: React.FC<Props> = ({ user }) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleShowModal = () => {
    setShowModal(!showModal);
  };
  return (
    <div className="flex flex-col gap-4 p-4">
      {user && (
        <p className="flex sm:justify-end justify-center">
          Welcome {user.user_metadata?.first_name}{" "}
          {user.user_metadata?.last_name}
        </p>
      )}
      <div className="flex sm:justify-end justify-center sm:mb-6 mb-16">
        <button
          onClick={handleShowModal}
          className="text-white w-1/2 sm:w-auto py-3 px-6 bg-blue-500 rounded-md hover:bg-blue-400"
        >
          New Delivery
        </button>
        {/* <NavLink
          to="/profile"
          className="text-white py-3 px-6 bg-red-500 rounded-md hover:bg-red-400 ml-4"
        >
          Profile
        </NavLink> */}
        <AddDelivery showModal={showModal} setShowModal={setShowModal} />
      </div>
    </div>
  );
};

const mapStateToProps = (state: MappedInterface) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(DashboardRibbon);
