import { debounce } from "lodash";
import React, { Fragment } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Input from "../Inputs/Input";
import * as Icon from "react-bootstrap-icons";
import { staticLabels } from "../../StaticLabels/StaticLabels";
import { Tooltip } from "@mui/material";
function Header() {
  const dispatch = useDispatch();

  //FUNCTIONS

  const handleOnChange = debounce((e) => {
    dispatch({ type: "SET_SELECTED_SEARCH", payload: e.target.value });
  }, 500);

  return (
    <Fragment>
      <div className="row Header d-flex justify-content-between">
        <div className="col-md-6 col-sm-10 col-8">
          <Icon.Search className="search_Icon" />
          <Input
            type="search"
            placeHolder={staticLabels.search}
            onChange={handleOnChange}
          />
        </div>
        <div className=" pt-3 pr-2  homeIcon  col-md-6 col-sm-2 col-4 ">
          <Tooltip title="Home">
            <Link to="/">
              <Icon.HouseDoorFill color="black" size={25} />
            </Link>
          </Tooltip>
        </div>
      </div>
    </Fragment>
  );
}

export default Header;
