import { nanoid } from 'nanoid'
import {isPlainObject, isNil, isArray} from 'lodash'

function setIdsForTree(tree, {key = 'id'}) {
	if(isPlainObject(tree)){
		tree[key] = isNil(tree[key]) ? nanoid() : tree[key]

		if(tree.children) return {
			...tree,
			children: tree.children.map(c => setIdsForTree(c))
		}
	} else if(isArray(tree)) {
		return tree.map(i => setIdsForTree(i))
	}
	return tree
}

export default setIdsForTree