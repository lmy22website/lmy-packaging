import React from "react";
import PropTypes from "prop-types";

const MaintenancePagePreview = (data) => {
  const { entry } = data;

  return <div />;
};

MaintenancePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default MaintenancePagePreview;
