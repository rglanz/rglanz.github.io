import { h } from "preact";

export default (entries, currentUrl) => {
  // Remove blog posts
  const filteredEntries = entries.filter((entry) => {
    if (entry.data?.tags && entry.data.tags.includes("post")) {
      return false;
    }
    return true;
  });

  const res = [];
  filteredEntries.map((entry) => {
    const isParent = !entry.data.permalink;
    const isChild = entry.data.eleventyNavigation.hasOwnProperty("parent");
    const isActive = entry.data.permalink === currentUrl;
    const isHidden = entry.data.eleventyNavigation?.isHidden;

    if (isChild | isHidden) {
      return;
    } else if (!isParent && !isChild) {
      res.push({
        type: "root",
        name: entry.data.title,
        url: entry.data.permalink,
        order: entry.data.eleventyNavigation.order,
        isActive,
      });
    } else if (isParent) {
      // Find children
      let children = [];
      let hasActiveChild = false;
      filteredEntries.map((child) => {
        if (entry.data.title === child.data.eleventyNavigation.parent) {
          if (child.data.permalink === currentUrl) {
            hasActiveChild = true;
          }

          children.push({
            type: "child",
            name: child.data.title,
            url: child.data.permalink,
            order: child.data.eleventyNavigation.order,
            isActive: child.data.permalink === currentUrl,
          });
        }

        // Sort Children
        children.sort((a, b) => parseInt(a.order) - parseInt(b.order));
      });

      res.push({
        type: "parent",
        name: entry.data.title,
        order: entry.data.eleventyNavigation.order,
        children,
        hasActiveChild,
      });
    }
  });

  // Sort by order tag
  res.sort((a, b) => parseInt(a.order) - parseInt(b.order));

  return res;
};
