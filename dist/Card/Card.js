import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["component", "colorClass", "classes", "id", "children"];
import React from 'react';
var Card = function Card(_ref) {
  var component = _ref.component,
    colorClass = _ref.colorClass,
    classes = _ref.classes,
    id = _ref.id,
    children = _ref.children,
    rest = _objectWithoutProperties(_ref, _excluded);
  var Component = component || 'div';
  return /*#__PURE__*/React.createElement("div", {
    className: "result-item grid-item ".concat(colorClass, " ").concat(classes),
    id: id
  }, /*#__PURE__*/React.createElement(Component, _extends({
    className: "card"
  }, rest), children));
};
export default Card;
//# sourceMappingURL=Card.js.map