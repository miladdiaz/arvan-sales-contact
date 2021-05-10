export const $ = query => {
    const nodes = document.querySelectorAll(query);
    if (nodes.length === 1) {
        return nodes[0];
    } else if (!nodes.length) {
        return null;
    }

    return nodes;
}