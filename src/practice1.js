const parseData = (input) => {
    const {data, column} = input;
    return data.map(value => {
        const Info = {};
        column.map(value => value.name)
            .forEach((prop, index) => {
                Info[prop] = value[index];
            });
        return Info;
    });
}
export {parseData};