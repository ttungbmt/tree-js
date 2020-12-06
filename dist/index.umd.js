(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('tree-model'), require('performant-array-to-tree'), require('flattree'), require('nanoid'), require('lodash')) :
  typeof define === 'function' && define.amd ? define(['exports', 'tree-model', 'performant-array-to-tree', 'flattree', 'nanoid', 'lodash'], factory) :
  (global = global || self, factory(global.TreeJS = {}, global.treeModel, global.performantArrayToTree, global.flattree, global.nanoid, global.lodash));
}(this, (function (exports, treeModel, performantArrayToTree, flattree, nanoid, lodash) {
  treeModel = treeModel && Object.prototype.hasOwnProperty.call(treeModel, 'default') ? treeModel['default'] : treeModel;

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

})));
//# sourceMappingURL=index.umd.js.map
