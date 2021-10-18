const getVariableName = (prefix: string, key: string) => {
    return ['-', prefix, key].filter(Boolean).join('-');
};

export const buildCssVariables = (constants: object, prefix = '') => {
    return Object.entries(constants)
        .map(([key, value]) => {
            const variable = getVariableName(prefix, key);
            return `${variable}: ${value};`;
        })
        .join('\n');
};
