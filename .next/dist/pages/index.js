'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _header = require('../components/header');

var _header2 = _interopRequireDefault(_header);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
    return _react2.default.createElement('div', null, _react2.default.createElement(_header2.default, null), _react2.default.createElement('p', null, 'Welcome to next.js!'), _react2.default.createElement(_link2.default, { href: '/login' }, _react2.default.createElement('a', null, 'login')));
};