(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('tree-model'), require('performant-array-to-tree'), require('flattree')) :
  typeof define === 'function' && define.amd ? define(['exports', 'tree-model', 'performant-array-to-tree', 'flattree'], factory) :
  (global = global || self, factory(global.TreeJS = {}, global.treeModel, global.performantArrayToTree, global.flattree));
}(this, (function (exports, treeModel, performantArrayToTree, flattree) {
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

  exports.TreeModel = treeModel;
  exports.toFlatTree = toFlatTree;
  exports.toTree = toTree;

})));
//# sourceMappingURL=index.umd.js.map
