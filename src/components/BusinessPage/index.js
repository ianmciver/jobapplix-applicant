import React, { useEffect, useContext } from "react";
import { Helmet } from "react-helmet";
import { fetch } from "whatwg-fetch";
import ErrorPage from "../FourOhFour";

import { API_URL } from "../../constants/urls";
import { checkStatus } from "../../helpers";

import { BusinessContext } from "../../context/BusinessContext";

import App from "../App";
import Header from "../BusinessPage/Header";
import PositionsList, {
  PositionsListContainer
} from "../BusinessPage/PositionsList";
import Footer from "../Footer";

const BusinessPage = props => {
  const businessContext = useContext(BusinessContext);

  const getInitalBusinessData = async () => {
    if (!businessContext.business.loaded) {
      try {
        const res = await fetch(
          `${API_URL}/businesses?url=${props.match.params.business}`
        );
        await checkStatus(res);
        const data = await res.json();
        businessContext.loadBusiness(data.business, data.positions);
      } catch (err) {
        props.history.replace("/404");
      }
    } else {
      return;
    }
  };

  useEffect(() => {
    getInitalBusinessData();
  }, []);

  if (props.error) {
    return <ErrorPage />;
  } else {
    return (
      <App>
        <Helmet>
          <title>{businessContext.business.name}</title>
        </Helmet>

        <Header business={businessContext.business} />
        {businessContext.business.active ? (
          <PositionsList
            positions={businessContext.positions}
            businessName={props.match.params.business}
          />
        ) : (
          <PositionsListContainer />
        )}
        <Footer />
      </App>
    );
  }
};

export default BusinessPage;
