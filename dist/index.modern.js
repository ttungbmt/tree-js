export { default as TreeModel } from 'tree-model';
import { arrayToTree } from 'performant-array-to-tree';
import { flatten } from 'flattree';
import { nanoid } from 'nanoid';
import { isPlainObject, isNil, isArray } from 'lodash';

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

  return arrayToTree(items, _extends({
    parentId: 'parent_id',
    dataField: null
  }, config));
};

var toFlatTree = function toFlatTree(tree, options) {
  if (options === void 0) {
    options = {};
  }

  return flatten(tree, _extends({
    openAllNodes: true
  }, options));
};

function setIdsForTree(tree, _ref) {
  var _ref$key = _ref.key,
      key = _ref$key === void 0 ? 'id' : _ref$key;

  if (isPlainObject(tree)) {
    tree[key] = isNil(tree[key]) ? nanoid() : tree[key];
    if (tree.children) return _extends({}, tree, {
      children: tree.children.map(function (c) {
        return setIdsForTree(c);
      })
    });
  } else if (isArray(tree)) {
    return tree.map(function (i) {
      return setIdsForTree(i);
    });
  }

  return tree;
}

export { setIdsForTree, toFlatTree, toTree };
//# sourceMappingURL=index.modern.js.map
