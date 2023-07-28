import { combineRedusers } from "redux";
import { testReduser } from "../feauchers/test/testSlise";

export default combineRedusers({
    test: testReduser,
})