function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var treeModel = _interopDefault(require('tree-model'));
var performantArrayToTree = require('performant-array-to-tree');
var flattree = require('flattree');

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var toTree = function toTree(items, config) {
  if (config === void 0) {
    config = {};
  }

  return performantArrayToTree.arrayToTree(items, _extends({
    parentId: 'parent_id',
    dataField: null
  }, config));
};

var toFlatTree = function toFlatTree(tree, options) {
  if (options === void 0) {
    options = {};
  }

  return flattree.flatten(tree, _extends({
    openAllNodes: true
  }, options));
};

exports.TreeModel = treeModel;
exports.toFlatTree = toFlatTree;
exports.toTree = toTree;
//# sourceMappingURL=index.js.map
