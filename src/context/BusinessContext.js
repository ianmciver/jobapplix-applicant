import React, { useState, createContext } from "react";

export const BusinessContext = createContext({
  business: {},
  positions: []
});

const BusinessContextComponent = props => {
  const [business, setBusiness] = useState({
    id: 0,
    name: "",
    email: "",
    address: "",
    url: "",
    phone: "",
    website: "",
    description: "",
    active: false,
    canceled: false,
    parent: null,
    stripe_customer_id: null,
    stripe_sub_id: null,
    sub_type: null,
    image_url: null,
    referrer_id: null,
    loaded: false
  });
  const [positions, setPositions] = useState([]);

  const loadBusiness = (newBusiness, newPositions) => {
    setBusiness({ ...newBusiness, loaded: true });
    setPositions(newPositions);
  };

  return (
    <BusinessContext.Provider
      value={{
        business,
        positions,
        loadBusiness
      }}
    >
      {props.children}
    </BusinessContext.Provider>
  );
};

export default BusinessContextComponent;
