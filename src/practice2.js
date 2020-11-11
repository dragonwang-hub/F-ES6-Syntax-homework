const inject = (items, sections) => {
    const revSections = sections.reverse();
    console.log(revSections);
    revSections.forEach(
        section => {
            items.splice(section.index, 0, section.content);
        }
    )
    return items;
}
export {inject};
