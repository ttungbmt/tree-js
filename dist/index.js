function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var treeModel = _interopDefault(require('tree-model'));
var performantArrayToTree = require('performant-array-to-tree');
var flattree = require('flattree');
var nanoid = require('nanoid');
var lodash = require('lodash');

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

function setIdsForTree(tree, _ref) {
  var _ref$key = _ref.key,
      key = _ref$key === void 0 ? 'id' : _ref$key;

  if (lodash.isPlainObject(tree)) {
    tree[key] = lodash.isNil(tree[key]) ? nanoid.nanoid() : tree[key];
    if (tree.children) return _extends({}, tree, {
      children: tree.children.map(function (c) {
        return setIdsForTree(c);
      })
    });
  } else if (lodash.isArray(tree)) {
    return tree.map(function (i) {
      return setIdsForTree(i);
    });
  }

  return tree;
}

exports.TreeModel = treeModel;
exports.setIdsForTree = setIdsForTree;
exports.toFlatTree = toFlatTree;
exports.toTree = toTree;
//# sourceMappingURL=index.js.map
