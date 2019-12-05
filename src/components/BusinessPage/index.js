import React, { useEffect, useCallback } from "react";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { fetch } from "whatwg-fetch";

import ErrorPage from "../FourOhFour";
import { loadBusiness } from "../../reduxSlices/BusinessSlice";
import { API_URL } from "../../constants/urls";
import { checkStatus } from "../../helpers";

import App from "../App";
import Header from "../BusinessPage/Header";
import PositionsList, {
  PositionsListContainer
} from "../BusinessPage/PositionsList";
import Footer from "../Footer";

const BusinessPage = props => {
  const { business, history, match, loadBusiness, error } = props;
  const { loaded } = business;

  const getInitalBusinessData = useCallback(async () => {
    if (!loaded) {
      try {
        const res = await fetch(
          `${API_URL}/businesses?url=${match.params.business}`
        );
        console.log(res);
        await checkStatus(res);
        const data = await res.json();
        console.log(data);
        loadBusiness({
          business: data.business,
          positions: data.positions
        });
      } catch (err) {
        console.log("ERROR:", err);
        history.replace("/404");
      }
    } else {
      return;
    }
  }, [loaded, history, loadBusiness, match]);

  useEffect(() => {
    getInitalBusinessData();
  }, [getInitalBusinessData]);

  if (error) {
    return <ErrorPage />;
  } else {
    return (
      <App>
        <Helmet>
          <title>{business.name}</title>
        </Helmet>

        <Header business={business} />
        {business.active ? (
          <PositionsList
            positions={business.positions}
            businessName={match.params.business}
          />
        ) : (
          <PositionsListContainer />
        )}
        <Footer />
      </App>
    );
  }
};

export default connect(
  state => {
    return { business: state.business };
  },
  { loadBusiness }
)(BusinessPage);
