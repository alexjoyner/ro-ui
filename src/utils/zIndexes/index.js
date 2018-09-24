export const zIndexes = (type) => {
  switch (type) {
    case 'SideBar': return 1;
    case 'TopBar': return 2;
    case 'PageOverlay': return 3;
    case 'Notification': return 4;
    default: return 1;
  }
};
