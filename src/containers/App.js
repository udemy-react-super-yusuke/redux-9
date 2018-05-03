import App from "../components/App";
import { connect } from "react-redux";

import { minus, plus } from "../actions";

// 渡す state を増やす
const mapStateToProps = state => {
  return {
    number: state.number,
    day: state.day,
    title: state.title
  };
};

const mapDispatchToProps = dispatch => {
  return {
    plus: num => {
      dispatch(plus(num));
    },
    minus: num => {
      dispatch(minus(num));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
