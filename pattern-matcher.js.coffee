# from collections import OrderedDict
#
# UNTRAVERSED = 0
# STARTNODE = 1
# MATCH = 2
# NOMATCH = 3
#
# class Node:
#
#     def __init__(self, x, y):
#         self.x = x
#         self.y = y
#
#     def __eq__(self, other_node):
#         return self.x == other_node.x and self.y == other_node.y
#
#     def __hash__(self):
#         return hash("%s" % self)
#
#     def __str__(self):
#         return "%d:%d" % (self.x, self.y)
#
# class Pattern:
#
#     def __init__(self, nodes):
#         self.nodes = nodes
#
# class Grid:
#
#     def __init__(self, w, h, fillvalue):
#         self.nodes = OrderedDict()
#         for i in xrange(0, w):
#             for j in xrange(0, h):
#                 self.nodes[Node(i, j)] = fillvalue
#
#
#     def __getitem__(self, node):
#         if not isinstance(node, Node):
#             node = Node(node[0], node[1])
#         for n, value in self.nodes.items():
#             if n == node:
#                 return (n, value)
#         raise KeyError("Node %s not found" % node)
#
#     def __setitem__(self, node, value):
#         if not isinstance(node, Node):
#             node = Node(node[0], node[1])
#         for n in self.nodes.keys():
#             if n == node:
#                 self.nodes[n] = value
#                 return
#         raise KeyError("Node %s not found" % node)
#
#     def match(self, pattern):
#         for grid_node in self.nodes.keys():
#             grid_value = self.nodes[grid_node]
#             i = 0
#             for pattern_node, pattern_value in pattern.nodes.items():
#                 if i > 0:
#                     new_x = grid_node.x + pattern_node.x
#                     new_y = grid_node.y + pattern_node.y
#                     try:
#                         new_grid_node, grid_value = self[(new_x, new_y)]
#                     except KeyError:
#                         break
#                 if pattern_value == grid_value or pattern_value is None:
#                     # ok we got match
#                     i += 1
#                 else:
#                     # no match, end
#                     break
#             else:
#                 # pattern match
#                 print("Found pattern at %d, %d!" % (grid_node.x, grid_node.y))
#                 return True
#         return False
#
#
#
# def main():
#     # fill 10x10 grid with 4's
#     grid = Grid(10, 10, 4)
#
#     # make one valid pattern of 5's somewhere
#     grid[(5,5)] = 5
#     grid[(5,6)] = 5
#     grid[(5,7)] = 5
#     grid[(6,6)] = 5
#
#     # create pattern of 5's
#     pattern = Pattern({Node(0,0): 5, Node(0,1): 5, Node(0,2): 5, Node(1,0): None, Node(1,1): 5, Node(1,2): None})
#
#     # see if pattern can be found on grid
#     print("Match: %s" % grid.match(pattern))
#
# if __name__ == "__main__":
#     main()
